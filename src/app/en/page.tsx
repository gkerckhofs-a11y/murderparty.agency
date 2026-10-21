import Link from "next/link";
import { Arrow, ScenarioCard, EndCta } from "@/components/ui";
import { scenarios } from "@/content/en";
import { pageMetadata, organizationData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { PartnerCta } from "@/components/partner-cta";
export const metadata = pageMetadata("Murder mystery parties in Wallonia and Brussels", "Hosted murder mystery parties and Spy Party for company events and private groups in Wallonia and Brussels. Bespoke events, partner venues and quotes.", "/en/");
export default function Home() {
  return <>
    <StructuredData data={organizationData} />
    <link rel="preload" as="image" href="/images/salon-noir.webp" fetchPriority="high" />
    <section className="hero"><div className="hero-image" /><div className="wrap hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-line" />HOSTED MURDER MYSTERY EVENTS</p>
        <h1>Murder mystery.<br />Tonight,<br /><em>you play a part.</em></h1>
        <p className="hero-desc">A mystery, characters, secrets.<br />Our teams host your immersive evening,<br className="desktop-break" /> for a company event or private celebration.</p>
        <div className="hero-actions"><Link className="button primary" href="/en/scenarios/">Explore the scenarios <Arrow /></Link><Link className="text-link" href="/en/quote/">Let’s talk about your event <Arrow diagonal /></Link></div>
      </div>
      <div className="hero-caption"><span>01 — THE INVITATION</span><span>Illustrative atmosphere image</span></div>
    </div><div className="hero-bottom wrap"><span>HOSTED BY OUR TEAMS</span><span>YOUR VENUE OR ONE OF OUR PARTNERS</span><span>BESPOKE QUOTES</span></div></section>
    <section className="intro-section wrap"><span className="eyebrow">THE EXPERIENCE</span><div>
      <h2>A murder mystery to live.<br /><em>A truth to uncover.</em></h2>
      <p>Step into a story, exchange information with other participants and discover what lies behind appearances. Our teams host your murder mystery party: an evening in which guests play characters, compare clues and move the story forward together.</p>
      <Link href="/en/quote/" className="text-link">Imagine your event <Arrow /></Link>
    </div></section>
    <section className="catalogue-preview wrap"><div className="section-heading"><div><span className="eyebrow">THE WORLDS</span><h2>Choose your <em>mystery.</em></h2></div><Link className="text-link" href="/en/scenarios/">Browse the catalogue <Arrow /></Link></div>
      <p className="editorial-note">Seven character-based murder mysteries and the Spy Party espionage activity for 30 to 120 participants.</p>
      <div className="cards">{scenarios.map((s, i) => <ScenarioCard key={s.slug} scenario={s} index={i} locale="en" />)}</div>
    </section>
    <section className="services-section wrap"><div className="section-heading"><div><span className="eyebrow">YOUR EVENT, TAILORED TO YOU</span><h2>The story, the venue,<br /><em>and the pleasure of hosting.</em></h2></div><p>We build your quote around your wishes: the activity, the venue and the meal.</p></div>
      <div className="process-grid"><div><span>01</span><h3>We come to you.</h3><p>Our teams travel to host your murder mystery party at the venue you have in mind.</p></div><div><span>02</span><h3>Looking for a venue?</h3><p>We can suggest partner venues to host your event.</p></div><div><span>03</span><h3>And the meal, too.</h3><p>We can also arrange the meal. Your chosen services are brought together in a bespoke quote.</p></div></div>
      <Link href="/en/quote/" className="text-link">Plan your event <Arrow /></Link>
    </section>
    <PartnerCta locale="en" />
    <section className="process"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">FROM AN IDEA TO A STORY</span><h2>Your event begins<br /><em>with a conversation.</em></h2></div><p>Share your ideas with our team.<br />The details take shape in your quote.</p></div>
      <div className="process-grid">{[
        ["01", "Your plans", "Tell us what you have in mind, whether you have a venue or need a partner venue, and your expected group size."],
        ["02", "Your quote", "Activity, partner venue and meal to suit your needs: we prepare a bespoke quote."],
        ["03", "Your experience", "An immersive event hosted by our teams."],
      ].map(([n,t,p]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></div>)}</div>
    </div></section>
    <section className="wrap detail-copy" aria-labelledby="enquete-title"><span className="eyebrow">PLAN YOUR EVENING</span><div>
      <h2 id="enquete-title">Your murder mystery evening<br /><em>in Wallonia and Brussels.</em></h2>
      <p>Planning a murder mystery party in Liège, elsewhere in Wallonia or in Brussels? Bring your colleagues or private group together around a story. Choose a theme, tell us your group size and let our teams help you organise the event. Let us know your preferred town or area: the venue, travel, activity and any meal arrangements are confirmed in your quote according to the scenario.</p>
      <p>For a murder mystery near Liège, <Link href="/en/scenarios/the-bikers/">The Bikers</Link> offers an electric fatbike investigation starting in Hony, Esneux. For the other scenarios, the venue is agreed with you to suit your event.</p>
      <Link className="text-link" href="/en/murder-mystery-party/">How do you organise a murder mystery party? <Arrow /></Link>
    </div></section><EndCta locale="en" />
  </>;
}
