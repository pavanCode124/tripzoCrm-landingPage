import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal/LegalPage';
import { H3, Note, Section, Sub, Table } from '@/components/legal/prose';
import { LEGAL as L } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Data Deletion',
  description:
    'How to delete your TripzoCRM account or your agency’s data: who can ask, how we verify the request, what is erased, what we must keep, and how long each step takes.',
  alternates: { canonical: '/data-deletion' },
};

const TOC = [
  { id: 'summary', label: 'In short' },
  { id: 'who', label: 'Who can ask' },
  { id: 'in-app', label: 'Delete your own account' },
  { id: 'request', label: 'Request agency deletion' },
  { id: 'verification', label: 'How we verify you' },
  { id: 'scope', label: 'What is deleted' },
  { id: 'retained', label: 'What we must keep' },
  { id: 'meta', label: 'WhatsApp and Instagram' },
  { id: 'timeline', label: 'How long it takes' },
  { id: 'travellers', label: 'If you are a traveller' },
  { id: 'contact', label: 'Contact' },
];

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="Data Deletion"
      lede="You control your information in TripzoCRM. This page explains how to remove your account, or your agency’s entire record, from our systems: who may ask, how we check that the request is genuine, what we erase, and the little we are required by law to keep."
      sibling={{ label: 'Privacy Policy', href: '/privacy-policy' }}
      toc={TOC}>
      <Section id="summary" n={1} title="In short">
        <p>
          At TripzoCRM we value your privacy and give you full control over your data. You can ask us to remove your
          account, and all of the data belonging to your travel agency, at any time and at no cost.
        </p>
        <Note label="The three steps">
          <p>
            <strong>1. Contact support.</strong> Email <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a> from
            your registered business email address.
          </p>
          <p>
            <strong>2. Verification.</strong> We confirm your identity and your authority over the account. This
            usually takes 24&ndash;48 hours.
          </p>
          <p>
            <strong>3. Permanent removal.</strong> Once verified, we purge your records &mdash; including customer
            itineraries and account logs &mdash; from our active databases.
          </p>
        </Note>
        <p>
          A deletion is permanent and cannot be undone. If you only want a copy of your data, or want a single record
          corrected rather than erased, write to the same address and say so; we will export or amend it instead.
        </p>
      </Section>

      <Section id="who" n={2} title="Who can ask for what">
        <p>
          TripzoCRM holds two different kinds of data, and who may delete each one follows from who it belongs to. Our{' '}
          <a href="/privacy-policy#who-we-are">Privacy Policy</a> sets this out in full.
        </p>
        <Table
          head={['You are', 'What you can delete']}
          rows={[
            [
              <>
                <b>A staff member</b>
                <Sub>Any user of an agency&rsquo;s TripzoCRM account</Sub>
              </>,
              <>
                Your own user account, from inside the app. The agency keeps the leads, bookings and invoices you
                created, because they belong to the business. See section 3.
              </>,
            ],
            [
              <>
                <b>An agency owner or administrator</b>
                <Sub>Authorised to act for the subscribing business</Sub>
              </>,
              <>
                The entire agency account and every record in it, for every user. See section 4.
              </>,
            ],
            [
              <>
                <b>A traveller or customer</b>
                <Sub>Someone an agency holds a record about</Sub>
              </>,
              <>
                Your record, by asking the agency you dealt with. It is their record, not ours, so we act on their
                instruction. See section 10.
              </>,
            ],
          ]}
        />
      </Section>

      <Section id="in-app" n={3} title="Deleting your own account in the app">
        <p>
          Any staff member can delete their own TripzoCRM user account without writing to us. In the mobile app or the
          web CRM, open <strong>Settings → Delete account</strong> and confirm.
        </p>
        <ul>
          <li>You are signed out of every device and can no longer sign in.</li>
          <li>Your name is removed from your agency&rsquo;s team list and from future assignment.</li>
          <li>Your notification token and device details are deleted.</li>
          <li>
            Leads, itineraries, bookings and invoices you created stay with the agency, because they are the
            agency&rsquo;s business records rather than your personal data.
          </li>
        </ul>
        <p>
          To have the agency&rsquo;s records removed as well, an owner or administrator must make the request described
          in section 4.
        </p>
      </Section>

      <Section id="request" n={4} title="Requesting deletion of an agency account">
        <H3>Step 1 — Contact support</H3>
        <p>
          Send an email to <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a> from your registered business
          email address, with the subject line <strong>Data deletion request</strong>. Please include:
        </p>
        <ul>
          <li>Your agency&rsquo;s name as it appears in TripzoCRM.</li>
          <li>The registered email address and phone number on the account.</li>
          <li>Your name and your role at the agency.</li>
          <li>Whether you want the whole account deleted, or only a named part of it.</li>
          <li>Whether you would like an export of your data before it is erased.</li>
        </ul>
        <p>
          A request sent from an address we do not recognise will be answered, but we will ask you to confirm from the
          registered business email before anything is deleted.
        </p>

        <H3>Step 2 — Verification</H3>
        <p>
          Our team verifies your identity and your authority over the account before we touch any data. This protects
          your company&rsquo;s records from being erased by someone who is not entitled to ask. It usually takes
          24&ndash;48 hours. See section 5.
        </p>

        <H3>Step 3 — Permanent removal</H3>
        <p>
          Once verified, we purge all of your records &mdash; including customer itineraries and account logs &mdash;
          from our databases. We email you to confirm when the deletion is complete.
        </p>
      </Section>

      <Section id="verification" n={5} title="How we verify you">
        <p>
          Deletion is irreversible, so we confirm two things before acting: that you are who you say you are, and that
          you are entitled to speak for the agency.
        </p>
        <ul>
          <li>The request must come from, or be confirmed by, the email address registered on the account.</li>
          <li>
            We may call the registered phone number, or ask for confirmation from an account owner, if the requesting
            address is not an owner or administrator.
          </li>
          <li>
            We may ask one or two questions only an account holder could answer, such as the subscription plan or the
            date the account was created.
          </li>
        </ul>
        <Note tone="warn" label="Before you confirm">
          <p>
            Deletion is permanent. Once the purge runs, we cannot restore your leads, conversations, itineraries,
            bookings or invoices.
          </p>
          <p>Ask for your export in the same email if you may need those records later.</p>
        </Note>
      </Section>

      <Section id="scope" n={6} title="What gets deleted">
        <p>When an agency account is deleted, we remove everything that account held:</p>
        <ul>
          <li>
            <strong>Traveller and customer data</strong> &mdash; leads, contact details, trip requirements, traveller
            profiles, day-wise itineraries, bookings and passenger details.
          </li>
          <li>
            <strong>Conversations</strong> &mdash; WhatsApp and Instagram threads stored in TripzoCRM, their
            attachments, and the customer identifiers attached to them.
          </li>
          <li>
            <strong>Operational records</strong> &mdash; packages, departures, suppliers, tasks, notes, expenses and
            trip finances.
          </li>
          <li>
            <strong>Files</strong> &mdash; every document and image your staff uploaded, such as tickets, vouchers and
            identity documents.
          </li>
          <li>
            <strong>Accounts and settings</strong> &mdash; user accounts, hashed sign-in credentials, roles,
            permissions, notification tokens and your agency&rsquo;s configuration.
          </li>
          <li>
            <strong>Channel connections</strong> &mdash; the access tokens linking your WhatsApp Business number and
            Instagram professional account to TripzoCRM.
          </li>
          <li>
            <strong>Your public agency page</strong> &mdash; taken offline and its content removed.
          </li>
          <li>
            <strong>Account logs</strong> &mdash; the activity and audit logs tied to your account.
          </li>
        </ul>
      </Section>

      <Section id="retained" n={7} title="What we must keep, and for how long">
        <p>
          A small amount of data survives a deletion, because the law requires it. It is kept apart from the live
          service, is never used to run the product, and is never used for marketing, profiling or AI training.
        </p>
        <Table
          head={['What', 'Why', 'How long']}
          rows={[
            [
              <>
                <b>Financial records</b>
                <Sub>Invoices, payments and tax documents for your TripzoCRM subscription</Sub>
              </>,
              <>Accounting and tax law</>,
              <>The retention period the applicable tax law sets</>,
            ],
            [
              <>
                <b>Record of the deletion</b>
                <Sub>That a request was made, verified and carried out</Sub>
              </>,
              <>Proof that we honoured your request</>,
              <>Kept as evidence of compliance</>,
            ],
            [
              <>
                <b>Security and system logs</b>
                <Sub>Operational logs that may reference an account identifier</Sub>
              </>,
              <>Security, fraud prevention and service integrity</>,
              <>Deleted on their normal rotation</>,
            ],
          ]}
        />
      </Section>

      <Section id="meta" n={8} title="WhatsApp and Instagram data">
        <p>
          If your agency connected a WhatsApp Business number or an Instagram professional account, deleting your
          TripzoCRM account removes the stored threads and attachments from our systems and revokes our access to those
          channels.
        </p>
        <Note tone="meta" label="What we cannot delete for you">
          <p>
            Messages also exist on Meta&rsquo;s own platforms and on the phones of the people you spoke to. Deleting
            your TripzoCRM data does not erase them there.
          </p>
          <p>
            To remove that copy, use the privacy and data controls in your WhatsApp Business and Instagram accounts, or
            ask Meta directly.
          </p>
        </Note>
      </Section>

      <Section id="timeline" n={9} title="How long it takes">
        <ul>
          <li>
            <strong>Acknowledgement</strong> &mdash; we reply to confirm we received your request, normally within one
            working day.
          </li>
          <li>
            <strong>Verification</strong> &mdash; usually 24&ndash;48 hours.
          </li>
          <li>
            <strong>Deletion</strong> &mdash; within 30 days of verification, and usually much sooner.
          </li>
        </ul>
        <p>
          If a request will take longer than 30 days, we will tell you why and when to expect it, as data-protection
          law requires.
        </p>
      </Section>

      <Section id="travellers" n={10} title="If you are a traveller or customer">
        <p>
          If a travel agency holds your details in TripzoCRM, that record belongs to the agency. It decides what is
          kept and what is removed, and we process it only on the agency&rsquo;s instruction.
        </p>
        <p>
          Please contact the agency you dealt with first. If you cannot reach it, or it does not respond, email us at{' '}
          <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a> with the agency&rsquo;s name and the details you
          want removed, and we will pass your request on and follow it up. We reply to requests within 30 days.
        </p>
      </Section>

      <Section id="contact" n={11} title="Still have questions?">
        <p>
          Write to our data officer at <a href={`mailto:${L.supportEmail}`}>{L.supportEmail}</a> and we will walk you
          through what a deletion would remove before you commit to it.
        </p>
        <p>
          How we handle your data while your account is open is set out in our{' '}
          <a href="/privacy-policy">Privacy Policy</a>, and what happens when a subscription ends in our{' '}
          <a href="/terms-of-service#ending">Terms of Service</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
