import assert from "node:assert/strict";
import test from "node:test";
import { sendQuote } from "../src/lib/send-quote.ts";

const request = { name: "Test technique", email: "test@example.com", scenario: "SHOWBIZ", message: "Test uniquement, pas de demande client.", honeypot: "" };

test("adresse destinataire fixe, données transmises et aucune copie automatique", async () => {
  await sendQuote(request, async (url, options) => {
    assert.equal(url, "https://formsubmit.co/ajax/guillaume@leludificateur.be");
    assert.equal(options.method, "POST");
    assert.equal(options.credentials, "omit");
    const payload = JSON.parse(options.body);
    assert.equal(payload.email, request.email);
    assert.equal(payload.message, request.message);
    assert.equal(payload._url, "https://murderparty.agency/devis/");
    assert.equal(payload._cc, undefined);
    assert.equal(payload._captcha, undefined);
    assert.equal(payload._autoresponse, undefined);
    return Response.json({ success: "true", message: "The form was submitted successfully." });
  });
});

for (const [label, response] of [
  ["erreur du serveur", () => new Response("Unavailable", { status: 503 })],
  ["refus du service", () => Response.json({ success: "false" })],
  ["réponse inattendue", () => Response.json({ unexpected: true })],
  ["réponse HTML", () => new Response("<html>Unavailable</html>")],
  ["activation requise même avec success=true", () => Response.json({ success: true, message: "Please activate your form. Check your email." })],
]) {
  test(`aucun succès annoncé : ${label}`, async () => {
    await assert.rejects(sendQuote(request, async () => response()));
  });
}

test("connexion interrompue : erreur explicite sans nouvel envoi automatique", async () => {
  let calls = 0;
  await assert.rejects(sendQuote(request, async () => { calls++; throw new TypeError("Failed to fetch"); }), /Impossible de confirmer/);
  assert.equal(calls, 1);
});

test("expiration : la requête est annulée sans être relancée", async () => {
  await assert.rejects(sendQuote(request, async (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener("abort", () => reject(new DOMException("Timed out", "AbortError")));
  }), 5), /Impossible de confirmer/);
});

test("piège antispam ou coordonnées invalides : aucune transmission", async () => {
  for (const invalid of [{ ...request, honeypot: "bot" }, { ...request, name: " " }, { ...request, email: "invalid" }]) {
    await assert.rejects(sendQuote(invalid, async () => { assert.fail("No network request expected"); }));
  }
});
