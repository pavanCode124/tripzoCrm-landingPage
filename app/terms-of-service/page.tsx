import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal/LegalPage';
import { Caps, ContactGrid, Ext, Fill, H3, Note, Section, Src, Sub, Table } from '@/components/legal/prose';
import { LEGAL as L } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The agreement between TripzoCRM and the travel agencies that subscribe to it, including the Meta terms passed through to every agency that connects WhatsApp or Instagram.',
  alternates: { canonical: '/terms-of-service' },
};

const TOC = [
  { id: 'acceptance', label: 'Acceptance' },
  { id: 'definitions', label: 'Definitions' },
  { id: 'platform', label: 'What the Platform does' },
  { id: 'accounts', label: 'Accounts and roles' },
  { id: 'meta', label: 'WhatsApp and Instagram' },
  { id: 'messages', label: 'Messages and consent' },
  { id: 'fees', label: 'Fees and billing' },
  { id: 'meta-charges', label: 'WhatsApp message charges' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'data', label: 'Your data and our access' },
  { id: 'ip', label: 'Intellectual property' },
  { id: 'public-page', label: 'Your public page' },
  { id: 'mobile', label: 'Mobile app and updates' },
  { id: 'availability', label: 'Availability and support' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'warranties', label: 'Warranties' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'indemnity', label: 'Indemnity' },
  { id: 'termination', label: 'Term and termination' },
  { id: 'force-majeure', label: 'Events beyond control' },
  { id: 'law', label: 'Governing law' },
  { id: 'general', label: 'General' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lede="The agreement between TripzoCRM and each travel agency that subscribes to it. It covers the web CRM, the mobile app, the agency’s public page, and the WhatsApp and Instagram accounts connected to them."
      sibling={{ label: 'Privacy Policy', href: '/privacy-policy' }}
      toc={TOC}>
      <Section id="acceptance" n={1} title="Acceptance">
        <p>
          These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) are a binding agreement between{' '}
          <Fill>{L.entityName}</Fill>, a company incorporated in India (CIN <Fill>{L.cin}</Fill>) with its registered
          office at <Fill>{L.registeredAddress}</Fill> (&ldquo;<strong>TripzoCRM</strong>&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;), and the organization that subscribes to the platform (&ldquo;<strong>Customer</strong>&rdquo;,
          &ldquo;you&rdquo;).
        </p>
        <p>
          You accept these Terms when you first create an account, accept them on screen, or use any part of the
          platform, whichever happens first. No signature is needed: these Terms are an electronic record under the
          Information Technology Act, 2000.
        </p>
        <p>
          You confirm that you are at least 18 years old, that you are authorised to accept these Terms for the
          organization you name, and that the information you give us is true. If you accept on behalf of an employer,
          &ldquo;you&rdquo; means that employer.
        </p>
        <p>
          These Terms include the <a href="/privacy-policy">TripzoCRM Privacy Policy</a>. If you sign a{' '}
          <strong>Data Processing Agreement</strong> with us, it governs how we handle personal data and takes priority
          over these Terms where the two differ.
        </p>
      </Section>

      <Section id="definitions" n={2} title="Definitions">
        <Table
          head={['Term', 'Meaning']}
          rows={[
            [<b key="p">Platform</b>, 'The TripzoCRM web application, the Android and iOS apps, the agency public page, our servers, and everything we provide through them.'],
            [<b key="o">Organization</b>, 'Your agency’s account on the Platform. Every record belongs to one Organization and is kept separate from all others.'],
            [<b key="u">Authorised User</b>, 'Anyone you allow to sign in to your Organization, such as an agent or administrator.'],
            [<b key="d">Customer Data</b>, 'Everything you and your Authorised Users put into or create on the Platform: leads, conversations, itineraries, packages, bookings, invoices, finance records, suppliers, contacts and uploaded files.'],
            [<b key="c">Connected Channel</b>, 'A WhatsApp Business Platform number or an Instagram professional account that you connect to your Organization.'],
            [<b key="m">Meta Terms</b>, 'Every Meta term and policy that applies to you as a business messaging on WhatsApp or Instagram, as Meta updates them. These include the WhatsApp Business Terms, WhatsApp Business Solution Terms, WhatsApp Business Messaging Policy, WhatsApp Commerce Policy, Meta Platform Terms, Meta Developer Policies, the Messenger Platform and Instagram Messaging API policy, and Instagram’s Community Guidelines.'],
            [<b key="s">Subscription Term</b>, 'The period your plan covers, and each renewal of it.'],
          ]}
        />
      </Section>

      <Section id="platform" n={3} title="What the Platform does">
        <p>TripzoCRM is online software for travel agencies. With it you can:</p>
        <ul>
          <li>capture enquiries from WhatsApp, Instagram and your own forms as leads;</li>
          <li>move leads through a sales pipeline;</li>
          <li>reply to customers from a shared inbox;</li>
          <li>send automated replies to routine questions;</li>
          <li>build packages and itineraries;</li>
          <li>raise bills and invoices, and track each trip&rsquo;s finances;</li>
          <li>manage suppliers and hotel rates;</li>
          <li>see reports on all of this.</li>
        </ul>
        <p>
          For the Subscription Term, we give you a limited right to use the Platform for your own business, through your
          Authorised Users, within the limits of your plan. This right is non-exclusive, and you cannot transfer or
          sublicense it. We can withdraw it as these Terms allow.
        </p>
        <p>
          We may add, change or remove features. We will not significantly reduce a core feature of your plan during a
          paid Subscription Term without telling you first. If such a change seriously disadvantages you, you may cancel
          and we will refund the unused part of the term.
        </p>
        <p>
          Features marked <em>beta</em> or <em>preview</em> are provided as they are, and may change or be withdrawn
          without notice.
        </p>
      </Section>

      <Section id="accounts" n={4} title="Accounts, users and roles">
        <ul>
          <li>
            You are responsible for everything done in your Organization, including by your Authorised Users, and for
            keeping sign-in details secret. If you suspect someone else has access, tell us at{' '}
            <Fill>{L.securityEmail}</Fill> immediately.
          </li>
          <li>Each Authorised User must have <strong>their own account</strong>. Shared logins make it impossible to tell who did what.</li>
          <li>Your administrators decide each user&rsquo;s role, and the role decides what that user can see and do. We enforce the roles, but <strong>you choose who gets which one</strong>.</li>
          <li>Remove people from your team as soon as they leave.</li>
          <li>Your plan may limit the number of users, Connected Channels, contacts or broadcast recipients.</li>
        </ul>
      </Section>

      <Section id="meta" n={5} title="WhatsApp and Instagram: terms you accept with Meta">
        <p>
          TripzoCRM is a <strong>Tech Provider on Meta&rsquo;s business messaging platform</strong>. That is what lets
          you connect your own WhatsApp number and Instagram account. Our agreement with Meta requires us to pass some of
          its terms on to you, and this section does so.
        </p>
        <Note tone="meta" label="Before you connect a channel">
          <p>
            You must accept the <strong>WhatsApp Business Platform terms directly with Meta</strong> before you use
            WhatsApp through TripzoCRM, and the Business Agents terms if you use them. Connecting a channel confirms that
            you have accepted them and will keep to them. We must keep an up-to-date list of our customers and give it to
            Meta if Meta asks.
          </p>
          <Src>Source: Meta Business Messaging Tech Provider Terms §2.</Src>
        </Note>
        <p>You also agree to the following.</p>
        <ul>
          <li>
            <strong>Meta operates the channels, not us.</strong> We connect WhatsApp and Instagram to the Platform. We
            are not Meta&rsquo;s agent, representative or employee, and we make no promises on Meta&rsquo;s behalf.
            <Src>Tech Provider Terms §4.</Src>
          </li>
          <li>
            <strong>We do not resell access to Meta&rsquo;s platform.</strong> Your subscription fee pays for the
            TripzoCRM software, not for access to WhatsApp or Instagram. You may not resell, sublicense or let anyone
            else use a Connected Channel through your Organization.
            <Src>Tech Provider Terms §5.</Src>
          </li>
          <li>
            <strong>Meta can act on your number or account.</strong> Meta can limit, slow, suspend or close a
            business&rsquo;s account, and lowers a business&rsquo;s sending limits if its quality rating stays low. We
            cannot control or reverse these decisions, and they are not a fault in the Platform.
            <Src>WhatsApp Business Terms §6; WhatsApp Business Messaging Policy §7.</Src>
          </li>
          <li>
            <strong>Data from the channels is handled only for you.</strong> We process data received through a
            Connected Channel only on your behalf and on your instructions. We keep it separate from other
            customers&rsquo; data and share it only with you or on your behalf.
            <Src>Tech Provider Terms §2; Meta Platform Terms §5(b).</Src>
          </li>
          <li>
            <strong>Meta may require us to cut off your access.</strong> If Meta tells us you have broken its terms, or
            that your use harms its platform or its users, we must stop your use of the Connected Channel promptly.
            <Src>Meta Platform Terms §5(b).</Src>
          </li>
          <li>
            <strong>Meta&rsquo;s terms change.</strong> If you keep using a Connected Channel after Meta changes its
            terms, you accept the changed terms. If Meta requires us to pass a new obligation on to you, it applies from
            the date Meta sets.
          </li>
          <li>
            <strong>Our arrangement with Meta may end.</strong> If it does, or if Meta directs us to stop serving you, we
            must switch off the integration. We will give you as much notice as we are allowed to, and section 19
            explains what happens to your data.
            <Src>Tech Provider Terms §6.</Src>
          </li>
        </ul>
        <p>
          For Instagram, you must connect an Instagram professional account and follow the Meta Platform Terms, the Meta
          Developer Policies and Instagram&rsquo;s Community Guidelines.
        </p>
      </Section>

      <Section id="messages" n={6} title="Your messages and your customers’ consent">
        <p>You are responsible for everything sent from your Connected Channels, and for making sure you are allowed to send it. You promise that:</p>
        <ul>
          <li>You message someone on WhatsApp only after they have given you their number and <strong>opted in</strong> to hear from you. On Instagram, you message someone only with the consent the law requires. You can show us proof of that consent if we ask.</li>
          <li>You stop messaging anyone who opts out.</li>
          <li>You follow the Meta Terms. In particular, you do not sell or promote anything WhatsApp prohibits, and you meet its extra conditions for regulated goods.</li>
          <li>On WhatsApp, you use only Meta-approved templates to contact someone who has not written to you in the last 24 hours. On Instagram, you reply within the 24-hour window, or use only the message tags Meta allows after it.</li>
          <li>Where the law requires it, you tell customers when they are talking to automated replies rather than a person.</li>
          <li>You do not use a Connected Channel to offer a general-purpose AI assistant. WhatsApp does not allow this. TripzoCRM&rsquo;s automated replies are limited to your own business.</li>
          <li>You follow applicable telecom and consumer rules, including TRAI&rsquo;s Do Not Disturb and National Customer Preference Register requirements.</li>
          <li>You do not send spam, scams, phishing, malware, or anything unlawful, defamatory, obscene, discriminatory or infringing.</li>
          <li>You keep to the Platform&rsquo;s broadcast speed and recipient limits. They protect your number&rsquo;s quality rating.</li>
        </ul>
        <Src>
          Sources: WhatsApp Business Terms §4; WhatsApp Business Messaging Policy §1, §4, §5; WhatsApp Business Solution
          Terms (AI providers); Meta Developer Policies §5.2(a), §5.6.1; Messenger Platform and Instagram Messaging API
          policy.
        </Src>
        <Note tone="warn" label="Sent messages cannot be taken back">
          <p>Neither WhatsApp nor Instagram lets a business edit or delete a message after it has been delivered. Neither you nor we can change what a customer has received.</p>
          <p>
            The Platform keeps its own copy of each conversation. Hiding a message in that copy, or correcting its stored
            text, changes <strong>the Platform&rsquo;s copy only</strong>. The customer&rsquo;s device keeps the
            original, and the customer may already have read, saved or forwarded it.
          </p>
          <p>At present only our own support and engineering staff can make such changes. They do so only at your written request, or to remove test messages our staff created while supporting you.</p>
          <p>You must not use a hidden or corrected record to misrepresent what was said to or by a customer, including in a dispute, a complaint or legal proceedings.</p>
        </Note>
        <p>
          We do not monitor your messages and are not required to. We may still act on a complaint, or on a direction
          from Meta or a public authority, including by suspending a channel under section 19.
        </p>
      </Section>

      <Section id="fees" n={7} title="Fees, billing and renewal">
        <ul>
          <li>You pay the fees for your chosen plan, billed <Fill>{L.billing.frequency}</Fill>.</li>
          <li>Each invoice is <strong>due within <Fill>{L.billing.dueDays}</Fill> days</strong> of its date. You must pay for the whole Subscription Term, whether or not you use the Platform.</li>
          <li>Fees <strong>do not include taxes</strong>. You pay GST and any other applicable tax, shown on the invoice where the law requires. If you must withhold tax, you pay enough extra that we receive the full invoiced amount.</li>
          <li><strong>Your subscription renews automatically</strong> at the end of each term, at our current price for your plan, unless you cancel before the renewal date. We tell you about any price increase at least <strong>30 days</strong> before your renewal.</li>
          <li>An <strong>upgrade</strong> starts immediately. You pay the new price for the rest of the current period, less what you have already paid for it. A <strong>downgrade</strong> starts at your next renewal.</li>
          <li><strong>Fees are non-refundable</strong> unless these Terms say otherwise. We do not refund part of a month or year when you cancel.</li>
          <li>If an invoice is more than <Fill>{L.billing.suspendAfterDays}</Fill> days overdue, we may suspend your Organization under section 19 after giving you written notice. You still owe the unpaid fees.</li>
        </ul>
        <p>
          To cancel, email <Fill>{L.billingEmail}</Fill> from an administrator&rsquo;s registered address before your
          renewal date, or use the cancel option in the Platform if your plan has one.
        </p>
      </Section>

      <Section id="meta-charges" n={8} title="WhatsApp message charges">
        <p>
          <strong>Meta sets WhatsApp&rsquo;s charges, not us.</strong> They are separate from your TripzoCRM
          subscription, and Meta can change them at any time. Since 1 July 2025, Meta has charged per template message
          delivered. The price depends on the template category (marketing, utility or authentication) and on the
          recipient&rsquo;s country. Replies within 24 hours of a customer&rsquo;s last message are free, as are utility
          templates sent in that window. Meta&rsquo;s pricing page has the current rates.
        </p>
        <Table
          head={['Charge', 'Set by', 'Billed by']}
          rows={[
            [<><b>TripzoCRM subscription</b><Sub>The software</Sub></>, 'TripzoCRM', 'TripzoCRM, each billing period'],
            [<b key="w">WhatsApp template messages</b>, 'Meta', 'Meta, to the payment method on your WhatsApp Business Account'],
          ]}
        />
        <p>
          Check Meta&rsquo;s pricing before you subscribe. A change in Meta&rsquo;s prices does not entitle you to a
          refund of TripzoCRM fees, and we are not responsible for Meta&rsquo;s charges for the messages you send.
        </p>
        <Src>
          Source:{' '}
          <Ext href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing">Pricing on the WhatsApp Business Platform</Ext>.
        </Src>
      </Section>

      <Section id="acceptable-use" n={9} title="Acceptable use">
        <p>You and your Authorised Users must not:</p>
        <ul>
          <li>use the Platform except through the apps and tools we provide, or try to reach another Organization&rsquo;s data;</li>
          <li>probe, scan, overload or interfere with the Platform, or get around its security, sign-in or usage limits;</li>
          <li>copy, modify, decompile or reverse-engineer the Platform, or use it to build a competing product;</li>
          <li>scrape data from the Platform by automated means, or resell, rent or sublicense the Platform to anyone;</li>
          <li>upload malware, or content you have no right to upload;</li>
          <li>use the Platform for anything unlawful, or store data there that you are not legally allowed to hold;</li>
          <li>publish our non-public pricing or materials, or use our name or logo in publicity, without our written permission;</li>
          <li>pretend to be someone else, or claim authority to act for an Organization that you do not have.</li>
        </ul>
        <p>
          If you save supplier <strong>portal logins</strong> in the Platform, you confirm you are allowed to share them
          with your team. They are stored so your team can read them, which means our systems can read them too. Do not
          save a password there that protects anything other than that supplier account.
        </p>
      </Section>

      <Section id="data" n={10} title="Your data, and our access to it">
        <p>
          <strong>Customer Data belongs to you.</strong> You permit us to store, copy, transmit, display and process it
          only as far as we need to run, secure and support the Platform. This permission is worldwide and free of
          charge.
        </p>
        <p>For personal data in your Customer Data, you are the <em>Data Fiduciary</em> (controller) and we are your <em>Data Processor</em>. That means:</p>
        <ul>
          <li>You must have a lawful basis to collect it, tell your customers what the law requires, and answer their requests about their data.</li>
          <li>We process it only on your instructions. The Privacy Policy and any Data Processing Agreement give the details.</li>
        </ul>
        <p>
          You confirm that you have the right to upload everything you put on the Platform, including identity documents
          such as passports. You will not store payment card details there, or health or other sensitive data beyond
          what a travel booking needs.
        </p>
        <Note label="How our staff access your account">
          <p>A small number of named TripzoCRM engineering, QA and platform-administration staff can open your Organization to fix problems and keep the service running. They change your Customer Data only on your instructions.</p>
          <p>Your Customer Data is not used in our product analytics or to train AI models, and it is never shown to another customer.</p>
        </Note>
        <p>
          We may use <strong>anonymous usage statistics</strong> to run and improve the Platform, such as counts, speeds
          and error rates. They never identify you, your users or your customers, and never include message content.
        </p>
        <p>Keep your own copy of anything you need to keep. Our backups keep the service running and are not a substitute for your own exports.</p>
      </Section>

      <Section id="ip" n={11} title="Intellectual property and feedback">
        <p>
          We and our licensors own the Platform, its software, design and documentation, and the TripzoCRM name and
          logo. Indian and international intellectual-property law protects them. You get only the right of use in
          section 3. We keep all other rights.
        </p>
        <p>You keep all rights in your own content and branding, and in what you publish on your public page.</p>
        <p>
          If you send us <strong>feedback</strong> such as suggestions, bug reports or feature ideas, we may use it
          freely, forever, without paying you or crediting you. Do not send confidential information as feedback.
        </p>
        <p>Meta, WhatsApp, Instagram and our payment providers own their own trademarks. We mention them only to identify their services.</p>
      </Section>

      <Section id="public-page" n={12} title="Your public agency page">
        <p>
          The Platform can publish a public page for your agency at an address you choose, showing your experiences,
          team, photos and legal pages. Everything on it is your content, published at your direction and on your
          responsibility. You are responsible for:
        </p>
        <ul>
          <li>its accuracy, including the descriptions and prices you advertise;</li>
          <li>having the rights to every image you upload;</li>
          <li>the privacy policy and terms you publish on it.</li>
        </ul>
        <p>
          Your page&rsquo;s privacy policy and terms govern your relationship with your customers. These Terms and the
          TripzoCRM Privacy Policy govern your relationship with us.
        </p>
        <p>
          We may remove content from a public page if it is unlawful, infringes someone&rsquo;s rights or exposes us to
          legal liability. We will tell you first where we can.
        </p>
      </Section>

      <Section id="mobile" n={13} title="Mobile app, app stores and updates">
        <ul>
          <li>You download the mobile app from Google Play or the Apple App Store, and those stores&rsquo; terms also apply to it.</li>
          <li>We send fixes and improvements to the app as <strong>updates it downloads by itself</strong>. By using the app, you agree to receive them. Some updates may be needed for the app to keep working.</li>
          <li>You can turn off notification and photo-library permissions in your device settings. Features that need them will stop working.</li>
          <li>You pay for your own device, network and mobile data.</li>
        </ul>
        <H3>If you use the iOS app</H3>
        <p>These Terms are between you and TripzoCRM, not Apple. Apple:</p>
        <ul>
          <li>is not responsible for the app or its content;</li>
          <li>has no obligation to maintain or support the app;</li>
          <li>is not responsible for any product claim, legal-compliance claim or intellectual-property claim relating to the app.</li>
        </ul>
        <p>
          If the app fails to meet a warranty that the law implies, you may tell Apple, and Apple will refund the
          app&rsquo;s purchase price, if any. Apple has no other warranty obligation. Apple and its subsidiaries are
          third-party beneficiaries of these Terms and may enforce them against you. You confirm that you are not in a
          country under a U.S. government embargo and are not on a U.S. government list of prohibited or restricted
          parties.
        </p>
      </Section>

      <Section id="availability" n={14} title="Availability and support">
        <p>
          We try to keep the Platform available at all times and take reasonable steps to do so. We do not guarantee a
          specific uptime unless your plan or a signed service-level agreement states one. We announce planned
          maintenance in advance where we can.
        </p>
        <p>
          The Platform relies on services we do not run: Meta&rsquo;s messaging systems, push-notification services,
          cloud hosting and your own internet connection. An outage in one of those is not a breach of these Terms.
        </p>
        <p>
          We provide support by email at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a> during our business
          hours. We are your first point of contact for problems with Connected Channels and pass to Meta anything only
          Meta can fix.
        </p>
        <Src>Tech Provider Terms §2.</Src>
      </Section>

      <Section id="confidentiality" n={15} title="Confidentiality">
        <p>
          Each party may receive the other&rsquo;s confidential information. Yours includes your Customer Data and
          business plans. Ours includes our non-public pricing, plans, security documents and technology. Each party
          will:
        </p>
        <ul>
          <li>take at least reasonable care to protect the other&rsquo;s confidential information;</li>
          <li>use it only for this agreement;</li>
          <li>share it only with staff and contractors bound by equivalent confidentiality obligations.</li>
        </ul>
        <p>
          This does not cover information that is or becomes public through no breach, was already known to the
          receiving party, was developed independently, or was received lawfully from someone else. If the law requires
          disclosure, a party may disclose, and will tell the other party first where the law allows.
        </p>
      </Section>

      <Section id="warranties" n={16} title="Warranties and disclaimers">
        <p>We promise to provide the Platform with reasonable skill and care and in line with applicable law.</p>
        <Caps>
          <p>
            Except as these Terms expressly state, the Platform is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;. To the extent the law allows, we give no other warranties, whether express, implied or
            statutory, including warranties of merchantability, fitness for a particular purpose, title and
            non-infringement. We do not promise that the Platform will be uninterrupted or error-free, or that it will
            meet your requirements.
          </p>
        </Caps>
        <p>In particular, we do not promise that:</p>
        <ul>
          <li>Meta&rsquo;s platforms will be available, or that Meta&rsquo;s prices, policies or decisions will stay as they are;</li>
          <li>a message will be delivered, a template approved, or a number left unrestricted;</li>
          <li>automated replies will always be accurate. They follow rules and content you set, and do not replace your own judgement.</li>
        </ul>
        <p>Reports, finance records and dashboards are calculated from the data you enter. They are not accounting, tax or legal advice.</p>
      </Section>

      <Section id="liability" n={17} title="Limitation of liability">
        <Caps>
          <p>
            To the extent the law allows, neither party is liable for indirect, incidental, special, consequential or
            exemplary damages, or for lost profit, revenue, goodwill, business opportunity, savings or data, even if told
            such loss was possible.
          </p>
          <p>
            Our total liability under or in connection with this agreement is limited to the subscription fees you paid
            us in the <Fill>{L.billing.liabilityCapMonths}</Fill> months before the event that gave rise to the claim.
          </p>
        </Caps>
        <p>These limits do not apply to:</p>
        <ul>
          <li>your obligation to pay fees;</li>
          <li>either party&rsquo;s indemnities;</li>
          <li>a breach of confidentiality;</li>
          <li>any liability the law does not allow to be limited, including for fraud, wilful misconduct, or death or personal injury caused by negligence.</li>
        </ul>
        <p>We are not liable for losses caused by:</p>
        <ul>
          <li>Meta, or Meta restricting or disabling a Connected Channel;</li>
          <li>the content or volume of messages you send;</li>
          <li>data you did not export before your subscription ended;</li>
          <li>anything your Authorised Users do.</li>
        </ul>
      </Section>

      <Section id="indemnity" n={18} title="Indemnity">
        <p>
          <strong>You will defend and compensate us</strong>, our affiliates and our staff for any claim, penalty, loss
          or cost (including reasonable legal fees) that arises from:
        </p>
        <ul>
          <li>the messages you send;</li>
          <li>your breach of the Meta Terms, or of any telecom, consumer-protection or data-protection law;</li>
          <li>your Customer Data or your public page, including any claim that it infringes someone&rsquo;s rights;</li>
          <li>your breach of section 9;</li>
          <li>a dispute between you and a customer, supplier or Authorised User.</li>
        </ul>
        <p>
          <strong>We will defend and compensate you</strong> if someone claims that your permitted use of the Platform
          infringes their intellectual property. We will pay any damages a court finally awards, or that we agree in a
          settlement.
        </p>
        <p>
          This does not apply where the claim arises from your Customer Data, from combining the Platform with something
          we did not supply, or from use that breaks these Terms. If such a claim arises, we may change the Platform,
          obtain a licence, or end the affected part and refund fees you have prepaid for it.
        </p>
        <p>
          A party that wants to be defended must tell the other promptly, let it run the defence, and help reasonably.
          Neither party may settle by admitting the other&rsquo;s liability without its consent.
        </p>
      </Section>

      <Section id="termination" n={19} title="Term, suspension and ending the agreement">
        <H3>How long it lasts</H3>
        <p>This agreement starts when you first accept it and lasts as long as you have an active Subscription Term.</p>
        <H3>Suspension</H3>
        <p>We may suspend all or part of your Organization, or a Connected Channel, if:</p>
        <ul>
          <li>an invoice is overdue as section 7 describes;</li>
          <li>your use threatens the Platform&rsquo;s security or availability, or another customer;</li>
          <li>we reasonably believe you have seriously broken section 6 or section 9;</li>
          <li>Meta or a public authority directs us to;</li>
          <li>the law requires it.</li>
        </ul>
        <p>
          Except in an emergency, we tell you first and give you a reasonable chance to put things right. We restore
          access once the problem is resolved.
        </p>
        <H3>Ending the agreement</H3>
        <ul>
          <li><strong>You</strong> may end it by cancelling before a renewal date. Fees already paid are not refunded.</li>
          <li><strong>Either party</strong> may end it if the other seriously breaks it and does not fix the breach within <strong>30 days</strong> of written notice. Either party may also end it immediately if the other becomes insolvent.</li>
          <li><strong>We</strong> may end it immediately if a breach of section 6 or section 9 puts us or Meta at legal or platform risk, or if our Tech Provider arrangement with Meta ends and we can no longer lawfully provide the integration.</li>
        </ul>
        <H3>What happens to your data</H3>
        <p>
          When the agreement ends, your access stops and your Connected Channels are disconnected. For{' '}
          <strong>30 days</strong> afterwards you may export your Customer Data. Ask us and we will provide it in a
          standard, machine-readable format. We then delete it permanently within <strong>60 days</strong> of the end
          date, unless the law requires us to keep it.
        </p>
        <p>
          Sections that by their nature should continue after the agreement ends will continue. These include those on
          unpaid fees, confidentiality, intellectual property, disclaimers, liability limits, indemnities and governing
          law.
        </p>
      </Section>

      <Section id="force-majeure" n={20} title="Events beyond our control">
        <p>
          Neither party is liable for a failure or delay caused by an event beyond its reasonable control. Examples
          include natural disasters, epidemics, war, terrorism, riots, strikes, power or telecom failures, internet or
          cloud outages, government orders, lockdowns, and failures of third-party services including Meta&rsquo;s. Fees
          already owed must still be paid. If such an event lasts more than 60 days, either party may end the agreement
          by notice.
        </p>
      </Section>

      <Section id="law" n={21} title="Governing law and disputes">
        <p>Indian law governs these Terms, without regard to conflict-of-laws rules.</p>
        <p>
          If a dispute arises, senior representatives of both parties will first try in good faith to settle it within{' '}
          <strong>30 days</strong> of written notice. If they cannot, it will go to{' '}
          <strong>arbitration by a single arbitrator</strong> under the Arbitration and Conciliation Act, 1996. The seat
          and venue will be <Fill>{L.jurisdictionCity}</Fill>, India, and the arbitration will be in English. The
          arbitrator&rsquo;s decision is final and binding.
        </p>
        <p>
          Subject to that, only the courts at <Fill>{L.jurisdictionCity}</Fill>, India have jurisdiction, and both
          parties accept it. Either party may ask those courts for urgent relief at any time to protect its intellectual
          property or confidential information.
        </p>
      </Section>

      <Section id="general" n={22} title="General">
        <ul>
          <li><strong>Changes to these Terms.</strong> We may change these Terms. For an important change, we tell your administrators in the Platform and by email <strong>at least 14 days</strong> before it takes effect. Using the Platform after that date means you accept the change. If you do not accept it, cancel before it takes effect and we will refund the unused part of any prepaid term. Changes Meta requires take effect when Meta says.</li>
          <li><strong>Notices.</strong> Send notices to us at <Fill>{L.legalEmail}</Fill>. We send notices to your administrators&rsquo; registered email addresses, and they count as received the next business day.</li>
          <li><strong>Transfer.</strong> You may not transfer this agreement without our written consent. We may transfer it to an affiliate, or to a buyer of all or most of our business.</li>
          <li><strong>Relationship.</strong> This agreement does not make either party the other&rsquo;s employee, agent, partner or joint-venture partner.</li>
          <li><strong>Waiver.</strong> A party gives up a right only in writing signed by an authorised person, and only for the case stated. Not enforcing a right does not give it up.</li>
          <li><strong>Severability.</strong> If a court finds part of these Terms unenforceable, that part is changed as little as possible to make it enforceable, or removed. The rest stays in force.</li>
          <li><strong>Entire agreement.</strong> These Terms, the Privacy Policy, any Data Processing Agreement and your plan&rsquo;s order form are the whole agreement between us on this subject. They replace any earlier understanding. Terms on your purchase orders do not apply.</li>
          <li><strong>Interpretation.</strong> &ldquo;Including&rdquo; means &ldquo;including without limitation&rdquo;. Headings are only for convenience. If documents conflict, a signed order form takes priority over these Terms, and these Terms over anything else.</li>
        </ul>
      </Section>

      <Section id="contact" n={23} title="Contact">
        <ContactGrid
          items={[
            {
              title: 'Legal and billing',
              lines: [<Fill key="l">{L.legalEmail}</Fill>, <Fill key="b">{L.billingEmail}</Fill>],
            },
            {
              title: 'Support and security',
              lines: [
                <a key="s" href={`mailto:${L.supportEmail}`} className="text-brand">{L.supportEmail}</a>,
                <Fill key="sec">{L.securityEmail}</Fill>,
                <Fill key="p">{L.phone}</Fill>,
              ],
            },
            {
              title: 'Registered office',
              lines: [
                <Fill key="n">{L.entityName}</Fill>,
                <Fill key="a">{L.registeredAddress}</Fill>,
                <>CIN <Fill>{L.cin}</Fill> · GSTIN <Fill>{L.gstin}</Fill></>,
              ],
            },
          ]}
        />
        <p>
          Related documents: the <a href="/privacy-policy">TripzoCRM Privacy Policy</a>, Meta&rsquo;s{' '}
          <Ext href="https://www.facebook.com/legal/BM-tech-provider-terms">Business Messaging Tech Provider Terms</Ext>,
          the <Ext href="https://www.whatsapp.com/legal/business-terms">WhatsApp Business Terms</Ext>, the{' '}
          <Ext href="https://whatsappbusiness.com/policy/">WhatsApp Business Messaging Policy</Ext>, the{' '}
          <Ext href="https://developers.facebook.com/terms/">Meta Platform Terms</Ext> and the{' '}
          <Ext href="https://developers.facebook.com/devpolicy/">Meta Developer Policies</Ext>.
        </p>
      </Section>
    </LegalPage>
  );
}
