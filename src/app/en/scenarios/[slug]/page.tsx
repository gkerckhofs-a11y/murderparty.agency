import Link from "next/link";
import { notFound } from "next/navigation";
import { scenarios } from "@/content/en";
import { participantLabel, durationLabel } from "@/content/fr";
import { Poster, Arrow, EndCta } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/structured-data";
export function generateStaticParams() { return scenarios.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = scenarios.find((s) => s.slug === slug);
  if (!s) notFound();
  return pageMetadata(s.seoTitle, s.seoDescription, `/en/scenarios/${slug}/`, s.image);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = scenarios.find((s) => s.slug === slug);
  if (!s) notFound();
  return <>
    <Breadcrumbs locale="en" items={[{ name: "Murder mysteries & activities", path: "/en/scenarios/" }, { name: s.title, path: `/en/scenarios/${s.slug}/` }]} />
    <section className="wrap scenario-hero">
      <div className="scenario-poster"><Poster scenario={s} large locale="en" /><span className="image-credit">Atmosphere illustration</span></div>
      <div className="scenario-info">
        <span className="eyebrow">{s.universe} · {s.era}</span>
        <h1 className={s.slug === "meurtre-au-chateau" ? "long-title" : undefined}>{s.title}</h1>
        {s.subtitle && <p className="scenario-subtitle">{s.subtitle}</p>}
        <p className="scenario-tagline">{s.tagline}</p>
        <span className="status-pill">{s.category === "animation" ? "ESPIONAGE ACTIVITY" : "HOSTED MURDER MYSTERY"} · BESPOKE QUOTE</span>
        <div className="scenario-intro"><span className="eyebrow">{s.eyebrow}</span>{s.intro.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <dl className="facts">
          <div><dt>Hosted</dt><dd>By our team</dd></div><div><dt>Price</dt><dd>Bespoke quote</dd></div>
          {s.format && <div><dt>Format</dt><dd>{s.format}</dd></div>}
          {s.included && <div><dt>Included</dt><dd>{s.included}</dd></div>}
          <div><dt>Typical group size</dt><dd>{participantLabel(s, "en")} participants</dd></div>
          <div><dt>{s.category === "animation" ? "Activity duration" : "Mystery duration"}</dt><dd>{durationLabel(s, "en")}</dd></div>
          <div><dt>{s.departure ? "Starting point" : "Venue"}</dt><dd>{s.departure || s.venue || (s.slug === "meurtre-au-chateau" ? "In a castle" : "Chosen together to suit the scenario")}</dd></div>
          {s.dressCode && <div><dt>Dress code</dt><dd>{s.dressCode}</dd></div>}
          <div><dt>Meal</dt><dd>Can be arranged on request</dd></div>
        </dl>
        <Link href={`/en/quote/?scenario=${s.slug}`} className="button primary">{s.category === "animation" ? "Let’s plan your Spy Party" : "Let’s discuss this scenario"} <Arrow /></Link>
        <p className="small-note">Group sizes are a guide. We tailor the scenarios and character roles to your group’s size, make-up and gender diversity. The format and availability are confirmed in your quote.</p>
        {s.category !== "animation" && <Link href="/en/murder-mystery-party/" className="text-link">Plan your murder mystery party <Arrow /></Link>}
      </div>
    </section>
    <section className="creator-approach" aria-labelledby="scenario-experience-title"><div className="wrap">
      <div className="section-heading"><div><span className="eyebrow">THE {s.title} EXPERIENCE</span><h2 id="scenario-experience-title">{s.experienceTitle}</h2></div><p>{s.experienceIntro}</p></div>
      <div className="process-grid">{s.highlights.map((highlight, index) => <div key={highlight.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{highlight.title}</h3><p>{highlight.text}</p></div>)}</div>
    </div></section>
    <section className="wrap detail-copy"><span className="eyebrow">BEHIND THE SCENES OF YOUR EVENT</span><div>
      <h2>The plot takes shape.<br /><em>So does your event.</em></h2>
      <p>{s.departure ? `${s.title} starts from ${s.departure}.` : "Our team comes to you."} We can also suggest partner venues and arrange a meal. Your bespoke quote brings together the services you choose to suit your scenario and your plans.</p>
      <details><summary>What does the service include? <span>+</span></summary><p>{s.category === "animation" ? "The activity is organised with our team." : "The murder mystery is hosted by our team."} {s.included && `${s.included}. `}You can also ask us to find a partner venue and arrange a meal. Your quote sets out the services and terms in detail.</p></details>
      {s.slug === "the-bikers" && s.included && <details><summary>Do I need to bring a bike? <span>+</span></summary><p>No: electric fatbike hire is included in The Bikers. These bikes, with their motorbike-inspired looks, are part of the experience. Your event price will be set out in your bespoke quote.</p></details>}
      {s.slug === "meurtre-au-chateau" && <details><summary>Do I need to bring a costume? <span>+</span></summary><p>No: medieval costumes are provided and included in Murder at the Castle. They help bring the medieval setting to life. Your event price will be set out in your bespoke quote.</p></details>}
      <details><summary>Where can the event take place? <span>+</span></summary><p>{s.departure ? `${s.title} starts from ${s.departure}. We can suggest a partner venue for additional services, such as a meal.` : s.slug === "meurtre-au-chateau" ? "The mystery takes place in a castle with a medieval atmosphere. The venue and availability will be confirmed in your quote." : "Our team travels to your venue and can also suggest partner venues. We’ll choose a setting together to suit your scenario, your plans and availability."}</p></details>
      <details><summary>How many people can take part? <span>+</span></summary><p>The typical format for {s.title} is {participantLabel(s, "en")} participants. We work with you to tailor the scenario and character roles to your group’s size, make-up and gender diversity. Tell us about your group so we can discuss the right format together.</p></details>
      <details><summary>{s.category === "animation" ? "How do I organise this activity?" : "How do I organise this murder mystery party?"} <span>+</span></summary><p>Complete the form, check your summary, then open your email app to send us your enquiry. Our team will prepare your bespoke quote.</p></details>
    </div></section>
    <EndCta locale="en" />
  </>;
}
