import Link from "next/link";
import { Arrow, EndCta } from "@/components/ui";
import { Breadcrumbs } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Murder mystery party in Liège – hosted events",
  "Plan a hosted murder mystery party in Liège, Belgium: company events and private groups, characters, clues and bespoke venue arrangements. Request a quote.",
  "/en/murder-party-liege/",
);

export default function MurderPartyLiegeEnglish() {
  return <>
    <Breadcrumbs locale="en" items={[{ name: "Murder mystery party in Liège", path: "/en/murder-party-liege/" }]} />
    <section className="page-intro wrap">
      <p className="eyebrow">LIÈGE · LIÈGE PROVINCE · BELGIUM</p>
      <h1>Murder mystery party in Liège.<br /><em>An investigation to remember.</em></h1>
      <div className="intro-columns">
        <p>Looking for a murder mystery party in Liège for a team-building event, a company evening, a birthday or a private celebration? Every guest becomes part of a story: play a character, keep secrets, share clues and try to uncover the truth.</p>
        <p className="editorial-note">Murder Party Agency creates and hosts mystery events for companies and private groups. Tell us where in Liège or its province you would like to host the evening. Venue, travel, scenario and optional meal arrangements are agreed through a bespoke quote.</p>
      </div>
      <Link href="/en/quote/" className="text-link">Ask about an event in Liège <Arrow /></Link>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">AN EXPERIENCE TO SHARE</span>
      <div>
        <h2>An evening of mystery,<br /><em>not a show to sit through.</em></h2>
        <p>Guests receive characters and become part of the same fictional intrigue. They ask questions, compare accounts, build alliances and follow the clues while our hosting team guides the experience.</p>
        <p>For Liège-based companies, the activity offers an unusual way to bring colleagues together. For private groups, it creates an evening in which everyone has a part to play. The final format and venue are tailored to your enquiry.</p>
        <Link href="/en/murder-mystery-party/" className="text-link">How does a murder mystery work? <Arrow /></Link>
      </div>
    </section>
    <section className="process"><div className="wrap">
      <div className="section-heading"><div><p className="eyebrow">CHOOSE A STORY</p><h2>Three ways to<br /><em>enter the mystery.</em></h2></div></div>
      <div className="process-grid">
        <div><span>01</span><h3>Secrets at the castle.</h3><p><Link href="/en/scenarios/meurtre-au-chateau/">Murder at the Castle</Link> is a medieval mystery with costumes provided. It requires a castle setting and was developed for the historic Avouerie d’Anthisnes in Liège province.</p></div>
        <div><span>02</span><h3>Hollywood, mafia or disco.</h3><p><Link href="/en/scenarios/showbiz/">SHOWBIZ</Link>, <Link href="/en/scenarios/black-velvet/">Black Velvet</Link> and <Link href="/en/scenarios/disco-killer/">Disco Killer</Link> offer different character-driven stories. We agree the venue and practical arrangements with you.</p></div>
        <div><span>03</span><h3>A cycling mystery near Liège.</h3><p><Link href="/en/scenarios/the-bikers/">The Bikers</Link> combines an investigation with electric fatbike riding. This four-hour experience starts in Hony, Esneux, near Liège, with bike hire included.</p></div>
      </div>
      <Link href="/en/scenarios/" className="text-link">Explore the catalogue <Arrow /></Link>
    </div></section>
    <section className="wrap detail-copy">
      <span className="eyebrow">REAL EXPERIENCES IN THE REGION</span>
      <div>
        <h2>Stories rooted<br /><em>in Liège province.</em></h2>
        <p><Link href="/en/scenarios/meurtre-au-chateau/">Murder at the Castle</Link> was created at the Avouerie d’Anthisnes, where the setting becomes part of the investigation. Explore <a href="https://leludificateur.be/meurtre-au-chateau/" target="_blank" rel="noopener noreferrer">the project and published client feedback</a> on Le Ludificateur’s website.</p>
        <p><Link href="/en/scenarios/the-bikers/">The Bikers</Link> takes another approach, using the Ourthe valley as the backdrop to an adventure that starts in Esneux. For other projects in Liège city or elsewhere in the province, tell us your preferred town and venue so that we can confirm what is possible.</p>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">PRACTICAL QUESTIONS</span>
      <div>
        <h2>Planning your<br /><em>mystery evening.</em></h2>
        <details><summary>Can you host a murder mystery at our company venue in Liège? <span>+</span></summary><p>Tell us your venue, group size and preferred date. Our team travels, and we confirm whether the setting and chosen scenario are suitable as part of your quote.</p></details>
        <details><summary>Is a murder party the same as a mystery evening? <span>+</span></summary><p>On our site, both terms describe a hosted, character-based investigation in which guests exchange clues and attempt to solve a fictional case.</p></details>
        <details><summary>How many people can join? <span>+</span></summary><p>Each scenario has an indicative group size, shown in our <Link href="/en/scenarios/">catalogue</Link>. Tell us about your group and we will discuss possible adaptations.</p></details>
        <details><summary>How much does a murder mystery evening cost in Liège? <span>+</span></summary><p>Every event is quoted individually according to the scenario, group, location, travel and any meal arrangements you request.</p></details>
        <details><summary>Can you suggest a venue or organise a meal? <span>+</span></summary><p>These options can be discussed on request, subject to your event and availability. Murder at the Castle needs a castle venue, while The Bikers always starts in Hony.</p></details>
        <Link href="/en/quote/" className="text-link">Plan your event in Liège <Arrow /></Link>
      </div>
    </section>
    <EndCta locale="en" />
  </>;
}
