import { pageMetadata } from "@/lib/seo";
import QuoteForm from "@/components/quote-form";
export const metadata = pageMetadata("Get a quote for your murder mystery party or Spy Party", "Plan your quote for a murder mystery party or Spy Party: experience, group, date, venue and meal. Send your enquiry summary from your email app.", "/en/quote/");
export default function QuotePage() {
  return <section className="wrap quote-page"><aside className="quote-aside"><span className="eyebrow">LET’S TALK ABOUT YOUR EVENT</span><h1>Your event,<br /><em>your quote.</em></h1><p>A murder mystery party or Spy Party, an occasion, a group.<br />Tell us how your story begins.</p><div className="quote-promise"><span>01</span><p>An experience<br /><strong>hosted by our teams.</strong></p><span>02</span><p>A service<br /><strong>with a bespoke quote.</strong></p></div><p className="small-note">For your event in Wallonia or Brussels, tell us your preferred town. The venue and travel arrangements are confirmed according to the scenario.<br />A partner venue and meal can also be suggested: tell us what you have in mind.</p></aside><QuoteForm locale="en" /></section>;
}
