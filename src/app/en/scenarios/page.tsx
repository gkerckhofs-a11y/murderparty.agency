import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/structured-data";
import Catalogue from "@/components/catalogue";
import { EndCta } from "@/components/ui";
export const metadata = pageMetadata("Murder mystery scenarios and Spy Party", "Disco, gothic mystery, espionage, mafia, cinema or the Middle Ages: seven murder mysteries and Spy Party for large groups. Explore our bespoke experiences.", "/en/scenarios/");
export default function CataloguePage() {
  return <><Breadcrumbs locale="en" items={[{name:"Murder mystery scenarios",path:"/en/scenarios/"}]} />
    <section className="page-intro wrap"><span className="eyebrow">THE CATALOGUE</span><h1>Our murder mysteries,<br /><em>your next adventure.</em></h1>
      <div className="intro-columns"><p>Disco, gothic London, espionage, Hollywood glamour, mafia, a medieval banquet or scenery to explore…<br />Seven murder mysteries and the Spy Party activity for large groups.</p><p className="editorial-note">For your event in Wallonia or Brussels, we agree the venue and travel arrangements according to the scenario. A partner venue and meal can also be included in a bespoke quote.</p></div>
    </section><section className="wrap catalogue-full"><Catalogue locale="en" /></section>
    <section className="wrap practical"><div><span className="eyebrow">FINDING THE RIGHT FORMAT?</span><h2>Let’s talk about <em>your group.</em></h2></div>
      <p>Every group is different, so we work on a bespoke basis. We adapt the scenarios and character assignments to your group’s size, composition and gender diversity. Tell us about your participants, your wishes and the occasion: together, we shape an experience that suits you. The format, venue and chosen services are agreed in your quote.</p>
    </section><EndCta locale="en" /></>;
}
