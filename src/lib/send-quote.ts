export const quoteRecipient = "guillaume@leludificateur.be";

type QuoteMessage = {
  name: string;
  email: string;
  scenario: string;
  message: string;
  honeypot: string;
};

export async function sendQuote(
  data: QuoteMessage,
  request: typeof fetch = fetch,
  timeoutMs = 25000,
) {
  if (data.honeypot || !data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    throw new Error("Vérifiez votre nom et votre adresse e-mail avant l’envoi.");
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await request(`https://formsubmit.co/ajax/${quoteRecipient}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      credentials: "omit",
      signal: controller.signal,
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message,
        _subject: `Demande de devis — ${data.scenario}`,
        _url: "https://murderparty.agency/devis/",
        _template: "table",
        _honey: data.honeypot,
      }),
    });
    if (!response.ok) throw new Error("Le service d’envoi n’est pas disponible. Vos informations sont conservées dans cette page.");
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("success" in result)) {
      throw new Error("Impossible de confirmer l’envoi. Vos informations sont conservées dans cette page.");
    }
    const message = "message" in result && typeof result.message === "string" ? result.message : "";
    if (/activat|confirm.{0,30}e-?mail|verify.{0,30}e-?mail/i.test(message)) {
      throw new Error("L’envoi direct est en cours d’activation. Vous pouvez nous écrire avec le récapitulatif ci-dessous.");
    }
    if (result.success !== true && result.success !== "true") {
      throw new Error("Le service n’a pas accepté votre demande. Vous pouvez réessayer ou utiliser l’envoi par e-mail ci-dessous.");
    }
  } catch (error) {
    if (error instanceof Error && !["AbortError", "TypeError", "SyntaxError"].includes(error.name)) throw error;
    throw new Error("Impossible de confirmer l’envoi. Vérifiez votre connexion. Vos informations restent disponibles ci-dessous ; aucun nouvel envoi ne sera lancé automatiquement.");
  } finally {
    clearTimeout(timeout);
  }
}
