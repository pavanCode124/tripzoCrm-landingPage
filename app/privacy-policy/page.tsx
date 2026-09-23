import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal/LegalPage';
import { Ext, H3, Note, Section, Sub, Table } from '@/components/legal/prose';
import { LEGAL as L } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How TripzoCRM collects, uses and stores data for travel agencies, their staff, and the travellers whose enquiries pass through it.',
  alternates: { canonical: '/privacy-policy' },
};

const TOC = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'meta', label: 'WhatsApp and Instagram' },
  { id: 'collect', label: 'What we collect' },
  { id: 'use', label: 'How we use it' },
  { id: 'storage', label: 'Where data is stored' },
  { id: 'security', label: 'Security' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'rights', label: 'Your rights' },
  { id: 'children', label: "Children's Privacy" },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="How TripzoCRM collects, uses and stores information: for the travel agencies that use it, the people who work at them, and the travellers whose enquiries pass through it."
      sibling={{ label: 'Terms of Service', href: '/terms-of-service' }}
      toc={TOC}>
      <Section id="who-we-are" n={1} title="Who we are, and whose data it is">
        <p>
          TripzoCRM is a customer-relationship-management platform for travel agencies (&ldquo;TripzoCRM&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
        </p>
        <p>
          It is available as a web application at <code>tripzocrm.com</code>, a mobile app for Android and iOS
          (<code>com.tripzo.crm</code>) that also runs as an installable web app, and a public page each agency can
          publish for its customers.
        </p>
        <Table
          head={['Data', 'Who it belongs to']}
          rows={[
            [
              <>
                <b>About the agency and its staff</b>
                <Sub>Accounts, sign-in details and subscription details</Sub>
              </>,
              <>
                <b>TripzoCRM.</b> Governed by this policy.
              </>,
            ],
            [
              <>
                <b>About the agency&rsquo;s customers</b>
                <Sub>Leads, conversations, itineraries, bookings, invoices and anything else staff add</Sub>
              </>,
              <>
                <b>The agency.</b> We store and process it only so the agency can run its business.
              </>,
            ],
          ]}
        />
        <p>
          If you are a traveller whose details are held by an agency that uses TripzoCRM, please contact that agency
          first about your data. Section 8 explains what to do if they do not respond.
        </p>
      </Section>

      <Section id="meta" n={2} title="WhatsApp and Instagram">
        <p>
          Your agency may connect its own WhatsApp Business number and Instagram professional account to TripzoCRM, so
          its team can manage both from one shared inbox. These channels are part of Meta&rsquo;s Business Messaging
          Platform, and messages sent or received through them also pass through Meta&rsquo;s own systems.
        </p>
        <Note tone="meta" label="Our promise for WhatsApp and Instagram data">
          <p>We use it only for the agency it belongs to, and keep each agency&rsquo;s data separate.</p>
          <p>We never sell it, and we never use it for advertising or to train AI models.</p>
        </Note>
        <p>
          Our <a href="/terms-of-service#meta">Terms of Service</a> explain in detail how TripzoCRM uses the WhatsApp
          Business Platform and the Instagram Messaging API, what data we share with Meta to operate them, and Meta&rsquo;s
          own role as the platform provider.
        </p>
      </Section>

      <Section id="collect" n={3} title="What we collect">
        <p>We collect only the data TripzoCRM needs to operate.</p>

        <H3>Account details</H3>
        <ul>
          <li>Your name, email address, phone number, role and the agency you belong to. Passwords are stored in hashed form; we never see them in plain text.</li>
          <li>If you ask to join an agency, that agency&rsquo;s administrators see your name, email and phone number so they can approve you.</li>
        </ul>

        <H3>What agency staff add to the CRM</H3>
        <ul>
          <li>Leads and their contact details, trip requirements and follow-ups.</li>
          <li>Packages, itineraries, bookings, invoices, payments and trip finances.</li>
          <li>Tasks, notes and supplier details.</li>
          <li>Files and images staff upload, such as tickets or passports.</li>
        </ul>

        <H3>Conversations</H3>
        <p>
          When an agency connects WhatsApp or Instagram, we store the resulting conversations: message content,
          attachments, the customer&rsquo;s phone number or Instagram ID, and their profile name.
        </p>

        <H3>Device and technical details</H3>
        <ul>
          <li>Your device model, operating-system version and app version, so we can fix problems and send the right app update.</li>
          <li>A notification token, if you turn notifications on.</li>
          <li>Basic logs and error reports. These never include your password or message content.</li>
        </ul>

        <H3>App permissions</H3>
        <p>
          The app asks for access to your photos (only when you pick an image), notifications and the clipboard (only
          when you copy or paste). You can turn these off at any time in your device settings.
        </p>
      </Section>

      <Section id="use" n={4} title="How we use it">
        <ul>
          <li>To sign you in and show you what your role allows.</li>
          <li>To run the CRM: leads, chats, packages, invoices, finances, tasks and reports.</li>
          <li>To send and receive messages on the channels your agency connected.</li>
          <li>To send the notifications you have turned on.</li>
          <li>To fix bugs, deliver app updates and keep the service secure.</li>
          <li>To send important service emails, such as outage or policy notices.</li>
        </ul>
        <p>
          <strong>We do not sell your data, show you ads, or share it with data brokers.</strong>
        </p>
      </Section>

      <Section id="storage" n={5} title="Where data is stored">
        <p>
          All data is stored on <strong>TripzoCRM&rsquo;s own servers</strong>, which we own, run and manage ourselves.
          Messages on WhatsApp and Instagram also travel through Meta&rsquo;s network, and notifications reach your
          phone through Google&rsquo;s and Apple&rsquo;s notification services.
        </p>
      </Section>

      <Section id="security" n={6} title="Security">
        <ul>
          <li>Everything sent between the apps and our servers is encrypted (HTTPS).</li>
          <li>Each agency&rsquo;s data is kept separate. Staff of one agency can never see another agency&rsquo;s data.</li>
          <li>Our servers check your role on every request, so you can only do what your role allows.</li>
          <li>A small number of our own team can open an agency&rsquo;s account to fix problems, and change data only when the agency asks.</li>
        </ul>
        <p>
          The app keeps your sign-in and recent chats on your phone so it opens quickly. They are cleared when you sign
          out. Please sign out of any device you do not own.
        </p>
        <p>If there is ever a security breach that affects you, we will tell you and the authorities as the law requires.</p>
      </Section>

      <Section id="retention" n={7} title="How long we keep it">
        <ul>
          <li><strong>CRM records</strong> are kept for as long as the agency uses TripzoCRM.</li>
          <li><strong>When an agency stops using TripzoCRM</strong>, we retain its data only as long as needed to wind down the account and meet our legal obligations, then delete it.</li>
          <li><strong>Logs</strong> are kept only as long as needed to run the service and meet legal requirements, then deleted.</li>
        </ul>
      </Section>

      <Section id="rights" n={8} title="Your rights">
        <p>You can ask us to show, correct or delete the personal data we hold about you, or give you a copy of it. You can also withdraw any consent you have given, such as for notifications.</p>

        <H3>If you work at an agency</H3>
        <p>
          You can delete your own account in the app under <strong>Settings → Delete account</strong>. This signs you
          out, blocks further sign-in, and removes you from your agency&rsquo;s team list. Leads, bookings and invoices
          you created belong to the agency and stay with it.
        </p>

        <H3>If you are a traveller</H3>
        <p>
          Contact the travel agency you dealt with, as it controls your record. If you cannot reach it, email us and we
          will help your request reach the agency.
        </p>
        <p>We reply to requests within 30 days.</p>
      </Section>

      <Section id="children" n={9} title="Children's Privacy">
        <p>Our Service is a work tool for travel-agency staff and does not address anyone under the age of 18 (&ldquo;Children&rdquo;).</p>
        <p>
          We do not knowingly collect personal data from anyone under the age of 18. If you are a parent or guardian
          and become aware that your child has provided us with personal data, please contact us. If we become aware
          that we have collected personal data from a child without verification of parental consent, we take steps
          to remove that information from our servers.
        </p>
        <p>
          A child&rsquo;s details may still appear in our systems as a passenger on a family booking that agency staff
          create; that information is entered and controlled by the agency, not the child, and is handled like any
          other customer record under Section 1.
        </p>
        <p>
          If you believe that we have collected personal information from someone under the age of 18, please contact
          us at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>.
        </p>
      </Section>

      <Section id="changes" n={10} title="Changes to this policy">
        <p>
          We may update this policy when the product or the law changes. The date at the top shows the current version.
          For important changes, we will let agency administrators know in the app or by email before they take effect.
        </p>
      </Section>

      <Section id="contact" n={11} title="Contact">
        <p>
          For any privacy question or request, email us at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a>.
        </p>
        <p>
          Please also read our <a href="/terms-of-service">Terms of Service</a>. Meta&rsquo;s own handling of WhatsApp
          and Instagram messages is described in the{' '}
          <Ext href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</Ext> and the{' '}
          <Ext href="https://privacycenter.instagram.com/policy">Instagram Privacy Policy</Ext>.
        </p>
      </Section>
    </LegalPage>
  );
}
