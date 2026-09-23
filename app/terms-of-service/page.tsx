import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal/LegalPage';
import { Caps, Ext, H3, Section } from '@/components/legal/prose';
import { LEGAL as L } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The agreement between TripzoCRM and the travel agencies that use it, covering the web CRM, the mobile app, public agency pages and connected WhatsApp and Instagram accounts.',
  alternates: { canonical: '/terms-of-service' },
};

const TOC = [
  { id: 'acceptance', label: 'Acceptance' },
  { id: 'platform', label: 'What TripzoCRM does' },
  { id: 'accounts', label: 'Accounts and your team' },
  { id: 'meta', label: 'WhatsApp and Instagram' },
  { id: 'messages', label: 'Messaging your customers' },
  { id: 'fees', label: 'Fees and billing' },
  { id: 'fair-use', label: 'Fair use' },
  { id: 'third-parties', label: 'Third-party suppliers' },
  { id: 'data', label: 'Your data' },
  { id: 'public-page', label: 'Your public page' },
  { id: 'mobile', label: 'Mobile app and updates' },
  { id: 'availability', label: 'Availability and support' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'ending', label: 'Ending your subscription' },
  { id: 'law', label: 'Governing law' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lede="The agreement between TripzoCRM and each travel agency that uses it. It covers the web CRM, the mobile app, the agency’s public page, and the WhatsApp and Instagram accounts connected to them."
      sibling={{ label: 'Privacy Policy', href: '/privacy-policy' }}
      toc={TOC}>
      <Section id="acceptance" n={1} title="Acceptance">
        <p>
          These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) form a binding agreement between TripzoCRM
          (&ldquo;TripzoCRM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the travel agency that subscribes to it
          (&ldquo;you&rdquo;, &ldquo;your agency&rdquo;).
        </p>
        <p>
          By creating an account or using TripzoCRM, you accept these Terms and our{' '}
          <a href="/privacy-policy">Privacy Policy</a>. If you sign up on behalf of an agency, you confirm that you are
          authorised to bind that agency to these Terms.
        </p>
      </Section>

      <Section id="platform" n={2} title="What TripzoCRM does">
        <p>TripzoCRM is software that helps travel agencies:</p>
        <ul>
          <li>capture enquiries from WhatsApp, Instagram and forms as leads;</li>
          <li>reply to customers from one shared inbox, with automated replies for routine questions;</li>
          <li>track leads, follow-ups and tasks;</li>
          <li>build packages and itineraries;</li>
          <li>create invoices and track trip finances;</li>
          <li>see daily reports on all of this.</li>
        </ul>
        <p>
          We continually improve TripzoCRM, and features may be added, changed or retired over time. We will notify you
          before removing anything material from your plan.
        </p>
      </Section>

      <Section id="accounts" n={3} title="Accounts and your team">
        <ul>
          <li>Every team member must use their own account and keep their credentials confidential.</li>
          <li>Your administrators control who joins your agency and the role each person is assigned.</li>
          <li>Remove a team member&rsquo;s access promptly once they leave your agency.</li>
          <li>
            If you suspect unauthorised access to an account, notify us immediately at{' '}
            <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>.
          </li>
        </ul>
      </Section>

      <Section id="meta" n={4} title="WhatsApp and Instagram: Meta's Business Messaging Platform">
        <p>
          TripzoCRM integrates with the <strong>WhatsApp Business Platform</strong> and the{' '}
          <strong>Instagram Messaging API</strong>, both operated by Meta Platforms, Inc. (&ldquo;Meta&rdquo;), so your
          agency can connect its own WhatsApp Business number and Instagram professional account and manage both from a
          single shared inbox. TripzoCRM is a technology partner that integrates with these APIs; we do not operate
          WhatsApp or Instagram, and we are not Meta&rsquo;s agent or representative.
        </p>

        <H3>What we use these APIs for</H3>
        <p>Through a Connected Channel, TripzoCRM:</p>
        <ul>
          <li>receives incoming WhatsApp and Instagram messages into a shared inbox in real time, so no enquiry is missed;</li>
          <li>lets your team reply with text, images, documents, and packages or itineraries built in TripzoCRM;</li>
          <li>sends automated replies to routine questions, which any team member can pause and take over at any time;</li>
          <li>tracks each message&rsquo;s delivery and read status;</li>
          <li>sends WhatsApp template messages that Meta has approved, so you can reach a customer outside the free-messaging window; and</li>
          <li>enforces the 24-hour messaging window WhatsApp and Instagram require: once it closes, only an approved template may be sent, not a free-form reply.</li>
        </ul>

        <H3>Data shared with Meta</H3>
        <p>
          To operate a Connected Channel, we share with Meta what the WhatsApp Business Platform and the Instagram
          Messaging API require to function: your agency&rsquo;s business or display name and category, the connected
          phone number or Instagram account, and the messages you send and receive through it. Meta processes this data
          under its own terms, linked below.
        </p>

        <H3>What you should know before connecting a channel</H3>
        <ul>
          <li><strong>Meta approves templates, not us.</strong> Meta reviews, approves or rejects every WhatsApp message template at its own discretion and at any time.</li>
          <li><strong>Meta sets your sending limits and quality rating.</strong> Your number&rsquo;s messaging limit and quality rating are set by Meta from customer feedback and Meta&rsquo;s own policies, and can change without notice.</li>
          <li><strong>Meta can restrict or suspend a number or account</strong> that breaks its rules, draws excessive negative feedback, or otherwise concerns it, entirely at Meta&rsquo;s discretion. We cannot reverse or expedite a decision Meta makes.</li>
          <li><strong>Blocks are invisible to us.</strong> Neither WhatsApp nor Instagram tells a business when a customer has blocked it, or provides a list of who has.</li>
          <li><strong>Meta&rsquo;s policies can change at any time.</strong> Continuing to use a Connected Channel after such a change means you accept the updated policy.</li>
          <li><strong>We disclaim liability for Meta&rsquo;s decisions and systems.</strong> We are not liable for any loss arising from Meta restricting, suspending or disabling a Connected Channel, from an outage in Meta&rsquo;s systems, or from a change in Meta&rsquo;s policies or pricing. Any additional charges Meta applies to your number or account are yours to bear.</li>
        </ul>

        <p>By connecting a channel, you agree to follow, at all times:</p>
        <ul>
          <li><Ext href="https://www.whatsapp.com/legal/business-policy">WhatsApp Business Policy</Ext></li>
          <li><Ext href="https://www.whatsapp.com/legal/business-solution-terms">WhatsApp Business Solution Terms</Ext></li>
          <li><Ext href="https://www.whatsapp.com/business/api/">WhatsApp Business Platform</Ext></li>
          <li><Ext href="https://www.whatsapp.com/legal/commerce-policy/">WhatsApp Commerce Policy</Ext></li>
          <li><Ext href="https://developers.facebook.com/docs/whatsapp/api/rate-limits">WhatsApp API rate limits</Ext></li>
          <li><Ext href="https://developers.facebook.com/terms/">Meta Platform Terms</Ext></li>
          <li><Ext href="https://developers.facebook.com/devpolicy/">Meta Developer Policies</Ext></li>
          <li><Ext href="https://developers.facebook.com/docs/messenger-platform/instagram">Instagram Messaging API documentation</Ext></li>
          <li><Ext href="https://help.instagram.com/477434105621119">Instagram Community Guidelines</Ext></li>
        </ul>
      </Section>

      <Section id="messages" n={5} title="Messaging your customers">
        <p>Your agency is responsible for every message your team sends. You confirm that:</p>
        <ul>
          <li>you message customers only with their consent, and stop immediately if they opt out;</li>
          <li>outside the 24-hour messaging window, you contact customers only using Meta-approved WhatsApp templates;</li>
          <li>you do not send spam, scams, or unlawful, deceptive or offensive content.</li>
        </ul>
      </Section>

      <Section id="fees" n={6} title="Fees and billing">
        <ul>
          <li>You pay the fee for your chosen plan, shown at the time of subscription, plus GST where applicable.</li>
          <li>Your plan renews automatically at the end of each billing period unless you cancel before the renewal date. We will notify you in advance of any price change.</li>
          <li>If a payment falls overdue, we will remind you first; if it remains unpaid, we may suspend your account until it is settled.</li>
          <li>
            <strong>WhatsApp message charges are separate</strong> from your TripzoCRM subscription. Meta charges for
            certain WhatsApp template messages and bills them directly to your WhatsApp Business Account. See{' '}
            <Ext href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing">Meta&rsquo;s pricing page</Ext>{' '}
            for current rates.
          </li>
        </ul>
      </Section>

      <Section id="fair-use" n={7} title="Fair use">
        <p>You and your team must not:</p>
        <ul>
          <li>attempt to access another agency&rsquo;s data or circumvent TripzoCRM&rsquo;s security controls;</li>
          <li>copy, resell or reverse-engineer TripzoCRM;</li>
          <li>upload malware, or content you do not have the right to use;</li>
          <li>use TripzoCRM for any unlawful purpose.</li>
        </ul>
      </Section>

      <Section id="third-parties" n={8} title="Third-party suppliers and services">
        <p>
          Running your agency means dealing with parties outside TripzoCRM &mdash; hotels, airlines, tour operators,
          payment gateways, and other suppliers you book or transact with. TripzoCRM is not a party to any agreement
          between you and such a third party, and we do not vet, endorse, supervise or control their conduct, pricing
          or service quality.
        </p>
        <p>
          <strong>You are solely responsible for your own dealings with these third parties</strong>, including
          complying with their terms and policies. If your agency breaches a supplier&rsquo;s terms, misuses a
          service, or otherwise runs into trouble with a third party through its own acts or omissions, that is a
          matter between you and that third party alone. We are not responsible for, and bear no liability for, any
          loss, penalty, dispute or claim arising from it.
        </p>
      </Section>

      <Section id="data" n={9} title="Your data">
        <p>
          <strong>Your data belongs to you.</strong> We store and process it solely to operate TripzoCRM on your behalf,
          as explained in our <a href="/privacy-policy">Privacy Policy</a>. We never sell it or show it to another
          agency.
        </p>
        <p>
          You are responsible for obtaining your customers&rsquo; permission to store their details, and we recommend
          periodically exporting a copy of anything important.
        </p>
        <p>TripzoCRM&rsquo;s software, design, trademarks and name remain our exclusive property.</p>
      </Section>

      <Section id="public-page" n={10} title="Your public agency page">
        <p>
          You may publish a public page for your agency. Everything you place on it &mdash; including prices,
          descriptions and photos &mdash; is your content and your responsibility. We may remove unlawful content from
          it, and will notify you beforehand wherever practicable.
        </p>
      </Section>

      <Section id="mobile" n={11} title="Mobile app and updates">
        <ul>
          <li>The mobile app is available on Google Play and the Apple App Store, and their terms also apply to it.</li>
          <li>The app updates itself with fixes and improvements. Some updates may be required for it to keep working.</li>
          <li>These Terms are between you and TripzoCRM, not Apple or Google, and they are not responsible for the app or its support.</li>
        </ul>
      </Section>

      <Section id="availability" n={12} title="Availability and support">
        <p>
          We work to keep TripzoCRM available at all times and announce planned maintenance in advance where we can.
          TripzoCRM also depends on services we do not control, such as Meta&rsquo;s messaging systems and your
          internet connection, so we cannot promise it will never be interrupted.
        </p>
        <p>
          For help, email <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>. For WhatsApp or Instagram issues,
          contact us first and we will escalate to Meta anything only Meta can resolve.
        </p>
      </Section>

      <Section id="liability" n={13} title="Limitation of liability">
        <Caps>
          <p>
            To the extent the law allows, neither party is liable for indirect or consequential losses, such as lost
            profit or business.
          </p>
          <p>
            Our total liability under or in connection with this agreement is limited to the subscription fees you paid
            us in the billable months before the event that gave rise to the claim.
          </p>
        </Caps>
      </Section>

      <Section id="ending" n={14} title="Ending your subscription">
        <ul>
          <li>You can cancel at any time before your next renewal date by writing to <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>.</li>
          <li>We may suspend or close an account that seriously breaks these Terms. Except in an emergency, we will tell you first and give you a chance to fix it.</li>
          <li>What happens to your data after your subscription ends is set out in our <a href="/privacy-policy#retention">Privacy Policy</a>.</li>
        </ul>
      </Section>

      <Section id="law" n={15} title="Governing law">
        <p>
          These Terms are governed by and construed in accordance with the laws of India, and you irrevocably submit to
          the exclusive jurisdiction of the competent courts of India for any dispute arising out of or relating to
          these Terms.
        </p>
      </Section>

      <Section id="changes" n={16} title="Changes to these Terms">
        <p>
          We may update these Terms from time to time. For important changes, we will let agency administrators know in
          the app or by email before they take effect. Continuing to use TripzoCRM after that means you accept the
          updated Terms.
        </p>
      </Section>

      <Section id="contact" n={17} title="Contact">
        <p>
          For questions about these Terms, contact us at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
