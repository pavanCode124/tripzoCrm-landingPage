import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal/LegalPage';
import { ContactGrid, Ext, Fill, H3, Note, Section, Src, Sub, Table } from '@/components/legal/prose';
import { LEGAL as L } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How TripzoCRM collects, uses, stores and shares data for travel agencies, their staff, and the travellers whose enquiries pass through it.',
  alternates: { canonical: '/privacy-policy' },
};

const TOC = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'meta', label: 'Meta Tech Provider status' },
  { id: 'collect', label: 'What we collect' },
  { id: 'use', label: 'Why we use it' },
  { id: 'consent', label: 'Consent to message' },
  { id: 'sharing', label: 'Who we share it with' },
  { id: 'storage', label: 'Where data is stored' },
  { id: 'security', label: 'Security' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'rights', label: 'Your rights' },
  { id: 'grievance', label: 'Grievances and contact' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="How TripzoCRM collects, uses, stores and shares information: for the travel agencies that subscribe to it, the people who work at them, and the travellers whose enquiries pass through it."
      sibling={{ label: 'Terms of Service', href: '/terms-of-service' }}
      toc={TOC}>
      <Section id="who-we-are" n={1} title="Who we are, and whose data it is">
        <p>
          TripzoCRM is a customer-relationship-management platform for travel agencies. It is operated by{' '}
          <Fill>{L.entityName}</Fill>, a company incorporated in India (CIN <Fill>{L.cin}</Fill>), with its
          registered office at <Fill>{L.registeredAddress}</Fill> (&ldquo;TripzoCRM&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;).
        </p>
        <p>
          The platform is delivered as a web application at <code>tripzocrm.com</code>, a mobile application for
          Android and iOS (<code>com.tripzo.crm</code>) which also runs as an installable web app, a public page each
          agency may publish under its own address, and a backend service at <code>api.tripzocrm.cloud</code>.
        </p>
        <p>Most privacy questions about a CRM come down to one question: whose data is it? This policy answers it the same way throughout.</p>
        <Table
          head={['Data', 'Who decides how it is used']}
          rows={[
            [
              <>
                <b>About the agency and its staff</b>
                <Sub>Account records, sign-in details, subscription and billing data, and diagnostics about how the product is working</Sub>
              </>,
              <>
                <b>TripzoCRM.</b> This policy governs it.
              </>,
            ],
            [
              <>
                <b>About the agency&rsquo;s customers</b>
                <Sub>Leads, conversations, itineraries, bookings, invoices and everything else staff put into the CRM</Sub>
              </>,
              <>
                <b>The agency.</b> We process it on the agency&rsquo;s behalf and on its instructions. The agency&rsquo;s own privacy notice governs it.
              </>,
            ],
          ]}
        />
        <p>
          Under India&rsquo;s <strong>Digital Personal Data Protection Act, 2023</strong> (&ldquo;DPDP Act&rdquo;), the
          subscribing agency is the <em>Data Fiduciary</em> for its customers&rsquo; personal data and TripzoCRM is its{' '}
          <em>Data Processor</em>. Under the <strong>GDPR</strong> the equivalent terms are controller and processor.
          Where the <strong>CCPA/CPRA</strong> applies, we act as a <em>service provider</em> and we do not sell or
          share personal information.
        </p>
        <p>
          If you are a traveller whose details are held in a TripzoCRM account, contact the agency you enquired with
          about your data. Section 10 explains what to do if they do not respond.
        </p>
      </Section>

      <Section id="meta" n={2} title="Our status as a Meta Tech Provider">
        <p>
          TripzoCRM is a <strong>Tech Provider on Meta&rsquo;s business messaging platform</strong>. That is what lets
          an agency connect its own WhatsApp Business Platform number and Instagram professional account to the CRM
          and answer both from one inbox. It also binds us to Meta&rsquo;s{' '}
          <Ext href="https://www.facebook.com/legal/BM-tech-provider-terms">Business Messaging Tech Provider Terms</Ext>{' '}
          and the <Ext href="https://developers.facebook.com/terms/">Meta Platform Terms</Ext>. For data we receive
          through Meta, those terms are stricter than general privacy law.
        </p>
        <Note tone="meta" label="What that requires of us, for data received through WhatsApp and Instagram">
          <p>
            <strong>We process it only for the agency it belongs to, on that agency&rsquo;s instructions</strong>, and
            disclose it only to that agency or on its behalf. We do not use it for any purpose of our own.
          </p>
          <p>
            <strong>We keep each agency&rsquo;s data separate</strong> from every other agency&rsquo;s.
          </p>
          <p>
            <strong>We do not sell, license or buy it.</strong> We do not use it to build or add to profiles of people
            without their consent. We do not use it to decide anyone&rsquo;s eligibility for housing, employment,
            insurance, education, credit, benefits or immigration status, or for surveillance.
          </p>
          <p>
            <strong>We tell the agency</strong> if Meta contacts us about a person&rsquo;s request concerning their data.
          </p>
          <p>
            <strong>We stop and deactivate on termination.</strong> If Meta ends our Tech Provider arrangement, or
            directs us to stop serving an agency, we must stop processing that data through the integration. Section 9
            covers what then happens to existing records.
          </p>
          <Src>Sources: Meta Business Messaging Tech Provider Terms §2 and §6; Meta Platform Terms §3(a) and §5(b).</Src>
        </Note>
        <p>
          We also commit to two things Meta does not require. Message content and customer contact details are{' '}
          <strong>not used to train machine-learning models</strong>. They are also{' '}
          <strong>not included in our product analytics</strong> (section 3.5).
        </p>

        <H3>Meta&rsquo;s own processing</H3>
        <p>
          Before a WhatsApp or Instagram message reaches TripzoCRM, it travels through Meta&rsquo;s systems. On
          WhatsApp, Meta&rsquo;s terms say the business is the controller and WhatsApp processes customer data on the
          business&rsquo;s behalf (WhatsApp Business Terms §7 and the WhatsApp Business Data Processing Terms). Meta also
          processes data about its own users under its own privacy policies, which travellers accept when they use
          WhatsApp or Instagram. We are not responsible for Meta&rsquo;s processing.
        </p>

        <H3>Sent messages cannot be recalled</H3>
        <p>
          Neither the WhatsApp Business Platform nor the Instagram messaging API lets a business edit or delete a message
          once it has been delivered. Nobody can change what a customer has already received: not the agency, not
          TripzoCRM.
        </p>
        <p>
          TripzoCRM holds its own copy of each conversation. Hiding a message in TripzoCRM, or correcting the stored
          text of a message, changes <strong>TripzoCRM&rsquo;s copy only</strong>. It does not change or remove anything
          on the customer&rsquo;s device. Today only TripzoCRM&rsquo;s own support and engineering staff can make such a
          change, and they make it only:
        </p>
        <ul>
          <li>at the written request of the agency the conversation belongs to, or</li>
          <li>to remove test messages our own staff created while supporting that agency.</li>
        </ul>
        <p>
          If a customer deletes a message on their own device, Meta may notify us that they did.{' '}
          {/* PLACEHOLDER: state what the backend does with WhatsApp "revoke" and Instagram "is_deleted" events. */}
          <Fill>[Confirm what the backend does with WhatsApp &quot;revoke&quot; and Instagram &quot;is_deleted&quot; notifications, then state it here.]</Fill>
        </p>
      </Section>

      <Section id="collect" n={3} title="What we collect">
        <p>We collect only what the product needs in order to work. The categories below describe what the software actually stores.</p>

        <H3>3.1 Account and sign-in data</H3>
        <ul>
          <li>
            Your email address, a hashed password, display name, phone number, role, and the organization you belong to.
            Sign-in is handled by Supabase. Your password is never visible to us.
          </li>
          <li>
            If you ask to join an organization, we store your request and when you made it. That organization&rsquo;s
            administrators see your name, email and phone number so they can check who you are. If you withdraw the
            request or it is declined, it is removed, and nothing about you is shared with an organization you did not
            ask to join.
          </li>
          <li>
            A session token issued when you sign in, kept in storage private to the app so you do not have to sign in
            every time. It is cleared when you sign out.
          </li>
        </ul>

        <H3>3.2 CRM content entered by agency staff</H3>
        <p>This is the agency&rsquo;s data, processed on its instructions. It includes:</p>
        <ul>
          <li>Lead contact details, trip requirements, and each lead&rsquo;s sales stage and stage history.</li>
          <li>Follow-ups, call outcomes and reminders, and tasks.</li>
          <li>Packages, itineraries, dated departures and hotel rate cards.</li>
          <li>Quotations, bills, invoices, payments and per-trip finance records.</li>
          <li>Supplier records, including contacts, bank details and shared portal logins.</li>
          <li>A contact book used for approved-template broadcasts.</li>
          <li>Files and images staff choose to upload. In a travel business these can include identity documents such as passports and visas.</li>
        </ul>

        <H3>3.3 Conversations from connected channels</H3>
        <p>Where an agency has connected a channel, we receive and store the conversation so its staff can work it. That means:</p>
        <ul>
          <li>message text and attachments, with timestamps and delivery status;</li>
          <li>the customer&rsquo;s WhatsApp phone number or Instagram-scoped user ID, and the profile name the platform supplies;</li>
          <li>for Instagram, the post, reel or story a message refers to;</li>
          <li>status markers the product sets on a conversation, such as whether the automated replies are paused and whether it needs a staff member&rsquo;s attention.</li>
        </ul>

        <H3>3.4 Device and technical data</H3>
        <ul>
          <li>Device model, operating-system version and app version. These are sent with requests so we can troubleshoot and deliver the right app update.</li>
          <li>A push-notification token, if you turn notifications on, so we can alert you about new messages, leads, tasks and daily reports.</li>
          <li>Server logs: timestamps, request paths, response codes and error messages. These never contain your password.</li>
        </ul>

        <H3>3.5 Product diagnostics</H3>
        <p>The app records how it is behaving so we can tell when an update has broken something. Each event contains:</p>
        <ul>
          <li>a session identifier and a timestamp;</li>
          <li>the type of device;</li>
          <li>the type of screen visited, for example &ldquo;a lead page&rdquo;, never which lead;</li>
          <li>the feature area in use;</li>
          <li>error details, where a request or screen failed.</li>
        </ul>
        <p>
          Events contain no message content. The mobile app has no third-party analytics or advertising SDK, collects
          no advertising identifier, and does not track you across other apps. Events go to our own servers.{' '}
          {/* PLACEHOLDER: this website has no analytics tag today; confirm the web CRM has none either. */}
          <Fill>[Confirm whether the web CRM uses any analytics or advertising tag. If one does, name it here and in section 6.]</Fill>
        </p>
        <p>
          Sessions of TripzoCRM&rsquo;s own engineering, QA and platform-administration staff do not send these events.
          Our support visits are therefore never counted as an agency&rsquo;s usage.
        </p>

        <H3>3.6 Call-button presses</H3>
        <p>
          When an agent taps a call button on a lead, the app records that the button was pressed, for which lead and
          when, so the agency can see its outreach activity. The phone does not tell the app whether the call connected,
          how long it lasted or what was said, and we record none of it. <strong>Calls are never recorded.</strong>
        </p>

        <H3>3.7 Data stored on your device</H3>
        <p>
          To open quickly on a slow connection, the mobile app keeps recent conversation lists and the latest messages of
          recently opened conversations in storage private to the app.
        </p>
        <Note label="Be aware">
          <p>
            Your phone&rsquo;s operating system keeps this data, and your session token, away from other apps. The app
            does not add its own encryption on top. Both are cleared when you sign out or switch organization. On a
            shared, rooted or jailbroken device, assume they can be read. Sign out of any device you do not control.
          </p>
        </Note>

        <H3>3.8 Device permissions</H3>
        <p>The mobile app asks for these permissions, and uses each one only when you use a feature that needs it:</p>
        <ul>
          <li><strong>Photo library:</strong> only when you choose an image for your agency&rsquo;s branding or its public page.</li>
          <li><strong>Notifications:</strong> to show alerts you have turned on.</li>
          <li><strong>Clipboard:</strong> only when you tap copy or paste.</li>
        </ul>
        <p>You can turn any of these off in your device settings. The app does not currently use your camera.</p>

        <H3>3.9 Subscription and billing data</H3>
        <p>
          Your plan, its term and renewal date, the invoices we issue to your organization, and whether they have been
          paid. Card and UPI details are entered with our payment processor and are never stored by us.
        </p>

        <Note label="What we never collect">
          <ul>
            <li>Device location</li>
            <li>Your phone&rsquo;s contact list</li>
            <li>Microphone audio or call recordings</li>
            <li>Call logs or SMS messages</li>
            <li>Health or biometric data</li>
            <li>Advertising identifiers</li>
          </ul>
        </Note>
      </Section>

      <Section id="use" n={4} title="Why we use it">
        <Table
          head={['Purpose', 'Data used', 'Legal basis']}
          rows={[
            [<><b>Running the CRM</b><Sub>Leads, conversations, catalogue, billing, reports</Sub></>, 'Account data, CRM content, conversations', <>Contract<Sub>For customer data, on the agency&rsquo;s instructions</Sub></>],
            [<><b>Signing you in</b><Sub>And applying your role&rsquo;s permissions</Sub></>, 'Account data, session token', 'Contract'],
            [<><b>Sending and receiving messages</b><Sub>On channels the agency connected</Sub></>, 'Conversations, channel connection details', <>Contract<Sub>Relying on consent the agency obtained from its customer</Sub></>],
            [<><b>Automated replies</b><Sub>Answering routine questions, suggesting packages, handing over to staff</Sub></>, 'Incoming message text, the agency’s package list', 'Contract'],
            [<b key="push">Push notifications</b>, 'Push token, a short preview in the alert', <>Consent<Sub>You can turn them off in device settings</Sub></>],
            [<><b>Keeping the service working</b><Sub>Fixing crashes, delivering updates, preventing abuse</Sub></>, 'Device data, server logs, diagnostics', 'Legitimate interests'],
            [<b key="billing">Billing and tax records</b>, 'Subscription and billing data', 'Contract and legal obligation'],
            [<><b>Service messages</b><Sub>Outages, security notices, policy changes</Sub></>, 'Account email', 'Legitimate interests'],
            [<b key="news">Product news to agencies</b>, 'Account email and name', <>Consent<Sub>Unsubscribe from any such email</Sub></>],
          ]}
        />
        <p>We do not use your data for advertising and we do not sell it. We do not profile travellers for our own purposes.</p>
      </Section>

      <Section id="consent" n={5} title="Consent to message customers is the agency’s responsibility">
        <p>
          Meta&rsquo;s terms place the duty to get permission on the business that owns the number or account, which
          here is the agency. By using TripzoCRM to message customers, an agency confirms that:
        </p>
        <ul>
          <li>it has each person&rsquo;s <strong>opt-in</strong> before messaging them on WhatsApp, and legally sufficient consent before messaging them on Instagram;</li>
          <li>it follows the WhatsApp Business Messaging Policy, including its restricted and prohibited categories, and Meta&rsquo;s Developer Policies for Instagram messaging;</li>
          <li>it stops messaging anyone who opts out;</li>
          <li>on WhatsApp, it uses only <strong>Meta-approved templates</strong> to contact someone who has not written in the last 24 hours. TripzoCRM offers no free-text broadcast, because Meta does not allow one;</li>
          <li>on Instagram, it replies within the 24-hour window, or uses only the message tags Meta permits after it;</li>
          <li>where the law requires it, it tells customers when they are talking to automated replies rather than a person;</li>
          <li>it follows Indian telecom rules, including TRAI&rsquo;s Do Not Disturb and National Customer Preference Register requirements, where they apply.</li>
        </ul>
        <Src>
          Sources: WhatsApp Business Terms §4; WhatsApp Business Messaging Policy §1 and §4–5; Meta Developer Policies
          §5.2(a) and §5.6.1; Messenger Platform and Instagram Messaging API policy.
        </Src>
        <p>
          If an agency breaks these rules, Meta may limit, suspend or disable its number or account (WhatsApp Business
          Terms §6). That is Meta&rsquo;s decision, and TripzoCRM cannot reverse it.
        </p>
      </Section>

      <Section id="sharing" n={6} title="Who we share it with">
        <p>We share personal data only with the services below. Each receives only what it needs, under a written contract that requires confidentiality and security.</p>
        <Table
          head={['Recipient', 'What it handles', 'Role']}
          rows={[
            [<b key="s">Supabase</b>, 'Sign-in, the main database, and storage for agency images', 'Our sub-processor'],
            [<><b>Meta Platforms</b><Sub>WhatsApp, Instagram</Sub></>, 'Carrying messages on the channels the agency connected', 'Under Meta’s own terms with the agency; see section 2'],
            [<><b>Google</b><Sub>Firebase Cloud Messaging</Sub></>, 'Android push notifications, including the short preview', 'Our sub-processor'],
            [<><b>Apple</b><Sub>Push Notification service</Sub></>, 'iPhone push notifications', 'Our sub-processor'],
            [<b key="b">Browser push services</b>, 'Notifications for the installable web app, through the service your browser uses', 'Our sub-processor'],
            [<b key="e">Expo</b>, 'Relaying push notifications to Google and Apple', 'Our sub-processor'],
            [<><b>Hosting</b><Sub><Fill>{L.hostingProvider}</Fill></Sub></>, 'Running our servers and the web application', 'Our sub-processor'],
            [<><b>Payments</b><Sub><Fill>{L.paymentProcessor}</Fill></Sub></>, 'Taking subscription payments', 'Independent provider, bound by card-industry security standards (PCI-DSS)'],
            /* PLACEHOLDER: name the AI service if the automated replies use one, or delete this row. */
            [<><b>AI service</b><Sub><Fill>[Name it if the automated replies use one; delete this row if not]</Fill></Sub></>, 'Generating automated replies from incoming message text', 'Our sub-processor'],
          ]}
        />
        <p>We disclose personal data in only three other situations:</p>
        <ul>
          <li>when <strong>the law requires it</strong>, in answer to a valid request from a court or public authority;</li>
          <li>when it is <strong>needed for a legal claim</strong>, or to prevent fraud, abuse or harm to someone;</li>
          <li>in a <strong>sale or merger</strong> of TripzoCRM. We will tell affected agencies, and the new owner must keep to this policy until it is lawfully replaced.</li>
        </ul>
        <p>An agency can ask us for the current list of sub-processors.</p>
      </Section>

      <Section id="storage" n={7} title="Where data is stored">
        <p>
          Our database and servers are in <Fill>{L.dataRegion}</Fill>. Some processing takes place elsewhere. Meta
          carries messages over its worldwide network, and push notifications reach devices through Google&rsquo;s and
          Apple&rsquo;s worldwide systems. When personal data leaves India, we transfer it only as Section 16 of the DPDP
          Act permits. When it leaves a region covered by the GDPR, we use a safeguard that law recognises, such as
          Standard Contractual Clauses.
        </p>
      </Section>

      <Section id="security" n={8} title="Security">
        <ul>
          <li>Everything sent between the apps and our servers is encrypted in transit (HTTPS/TLS).</li>
          <li>Passwords are stored only in a hashed form that cannot be reversed.</li>
          <li><strong>Every record belongs to one organization</strong>, and our servers check that on every request. Staff of one agency cannot see another agency&rsquo;s data.</li>
          <li><strong>Permissions are checked by our servers.</strong> The app hides buttons that your role cannot use, but the server refuses the action anyway if you are not allowed to do it.</li>
          <li>
            <strong>Our staff can access an agency&rsquo;s workspace for support.</strong> This access is limited to a
            small number of named TripzoCRM engineering, QA and platform-administration staff, and is used to fix
            problems or keep the service running. Any change they make to the agency&rsquo;s data is made only on the
            agency&rsquo;s instructions.
          </li>
        </ul>
        <p>Two limits you should know about:</p>
        <ul>
          <li><strong>Supplier portal logins</strong> saved in the CRM are stored so your whole team can read them, which means our systems can read them too. Store only a login for that supplier&rsquo;s own portal there, and never a password you use anywhere else.</li>
          <li>The <strong>data stored on your device</strong> (section 3.7) is not encrypted by the app itself.</li>
        </ul>
        <H3>If there is a breach</H3>
        <ul>
          <li><strong>For an agency&rsquo;s customer data</strong>, we tell the agency without undue delay and give it the information it needs to meet its own legal duties.</li>
          <li><strong>For data we control</strong>, we tell the Data Protection Board of India and the affected people as the DPDP Rules, 2025 require: a first notice without delay and a detailed report within 72 hours.</li>
          <li>We report cyber incidents to <strong>CERT-In within 6 hours</strong> of becoming aware of them, as its directions of 28 April 2022 require, and to <strong>Meta</strong> as soon as practicable, as the Meta Platform Terms (§6(b)) require.</li>
        </ul>
      </Section>

      <Section id="retention" n={9} title="How long we keep it">
        <Table
          head={['Data', 'How long']}
          rows={[
            [<><b>CRM records</b><Sub>Leads, conversations, bookings, invoices, finance records</Sub></>, 'While the agency’s subscription is active, and after that only as long as the law requires'],
            [<b key="a">After a subscription ends</b>, <>The agency can export its data for <b>30 days</b>. We delete it permanently within <b>60 days</b> of the end date, unless the law requires us to keep it longer</>],
            [<b key="s">Staff accounts</b>, 'Kept in a closed state after the account is deleted, because the agency’s invoices and history refer to it'],
            [<b key="t">Session token and on-device data</b>, 'Cleared when you sign out or switch organization'],
            [<b key="l">Server logs</b>, <>At least <b>1 year</b>, then deleted. The DPDP Rules, 2025 require one year; CERT-In&rsquo;s directions require 180 days, kept in India</>],
            [<b key="d">Product diagnostics</b>, <><Fill>{L.telemetryRetention}</Fill>, then deleted or reduced to totals</>],
            [<b key="b">Billing and tax records</b>, '8 years, as Indian company and tax law requires'],
          ]}
        />
        <p>We also delete data received through Meta when:</p>
        <ul>
          <li>we no longer need it for a legitimate business purpose;</li>
          <li>the agency tells us to delete it;</li>
          <li>the person it is about asks for it to be deleted;</li>
          <li>Meta asks us to;</li>
          <li>the law requires it.</li>
        </ul>
        <p>Deleted data is removed from live systems immediately, and from backups as they expire on their normal schedule.</p>
        <Src>Source: Meta Platform Terms §3(d).</Src>
      </Section>

      <Section id="rights" n={10} title="Your rights">
        <p>Depending on the law that applies to you (India&rsquo;s DPDP Act, the GDPR, the UK GDPR, the CCPA/CPRA or another), you can:</p>
        <ul>
          <li><strong>See</strong> the personal data held about you, and learn how it is used and who it is shared with.</li>
          <li><strong>Correct</strong> data that is wrong, and complete data that is incomplete.</li>
          <li><strong>Delete</strong> data that no longer needs to be kept.</li>
          <li><strong>Take a copy</strong> of your data in a format other software can read.</li>
          <li><strong>Object to or limit</strong> some uses of your data.</li>
          <li><strong>Withdraw consent</strong> you gave, such as for notifications or marketing emails, as easily as you gave it.</li>
          <li><strong>Nominate</strong> someone to act for you if you die or are unable to act, as the DPDP Act allows.</li>
          <li><strong>Complain</strong> to the Data Protection Board of India or your local data protection authority.</li>
        </ul>
        <p>We do not charge for reasonable requests, and we will not treat you differently for making one.</p>

        <H3>If you work at an agency</H3>
        <p>You can delete your own account in the app under <strong>Settings → Delete account</strong>. Deleting it:</p>
        <ul>
          <li>signs you out and blocks you from signing in again;</li>
          <li>removes you from your organization&rsquo;s team list;</li>
          <li>stops notifications to your device;</li>
          <li>stops new leads being assigned to you.</li>
        </ul>
        <p>
          To correct your details instead, edit your profile in Settings or ask your administrator. Leads, bookings and
          invoices you created belong to the agency and are not deleted with your account.
        </p>

        <H3>If you are a traveller</H3>
        <p>
          Contact the travel agency you dealt with. It controls your record and can correct or delete it. If you cannot
          find or reach the agency, or it does not reply in the time the law allows, contact our Grievance Officer
          (section 11). We will identify the agency and make sure your request reaches it. We will not change an
          agency&rsquo;s records without its instruction unless the law requires us to, but we will make sure your
          request is answered.
        </p>
        <p>
          We reply to requests within <strong>30 days</strong>. We may first ask you to confirm who you are, so that
          nobody else can obtain your data.
        </p>
      </Section>

      <Section id="grievance" n={11} title="Grievances and contact">
        <p>
          Under the Information Technology Act, 2000 and the DPDP Act, 2023, complaints about how personal data is
          handled on TripzoCRM go to the Grievance Officer below. We acknowledge a complaint within{' '}
          <strong>24 hours</strong> and resolve it within <strong>15 days</strong>.
        </p>
        <ContactGrid
          items={[
            {
              title: 'Grievance Officer',
              lines: [<Fill key="n">{L.grievanceOfficer.name}</Fill>, <Fill key="e">{L.grievanceOfficer.email}</Fill>, <Fill key="p">{L.grievanceOfficer.phone}</Fill>],
            },
            {
              title: 'Privacy requests',
              lines: [<Fill key="p">{L.privacyEmail}</Fill>, <>Support: <a key="s" href={`mailto:${L.supportEmail}`} className="text-brand">{L.supportEmail}</a></>],
            },
            {
              title: 'Registered office',
              lines: [<Fill key="n">{L.entityName}</Fill>, <Fill key="a">{L.registeredAddress}</Fill>, <>CIN <Fill>{L.cin}</Fill></>],
            },
          ]}
        />
      </Section>

      <Section id="children" n={12} title="Children">
        <p>TripzoCRM is a work tool for adults. It is not meant for anyone under 18, and we do not knowingly create accounts for minors.</p>
        <p>
          A child&rsquo;s details may be entered into the CRM as a passenger on a family booking. They are then part of
          the agency&rsquo;s records and handled like any other customer data. We do not track children, profile them or
          show them advertising. Where the DPDP Act requires a parent&rsquo;s verifiable consent, getting it is the
          agency&rsquo;s responsibility.
        </p>
        <p>
          If you think a minor has an account, contact us at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>{' '}
          and we will close it.
        </p>
      </Section>

      <Section id="changes" n={13} title="Changes to this policy">
        <p>
          We may update this policy when the product or the law changes. The effective date at the top shows the current
          version. For an important change, we tell account administrators in the app and by email{' '}
          <strong>at least 14 days before it takes effect</strong>. An agency that does not accept the change can end its
          subscription under the Terms of Service. Using TripzoCRM after the effective date means you accept the updated
          policy.
        </p>
        <p>
          This policy should be read with the <a href="/terms-of-service">TripzoCRM Terms of Service</a>. If an agency
          has signed a Data Processing Agreement with us, that agreement governs how we handle its customers&rsquo; data
          and takes priority over this policy where the two differ. For data received through Meta, nothing in this
          policy overrides or conflicts with the Meta Platform Terms (§4(d)).
        </p>
      </Section>
    </LegalPage>
  );
}
