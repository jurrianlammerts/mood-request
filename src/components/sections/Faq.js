import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is MoodRequest?',
    content: () => (
      <>
        MoodRequest (MoRe for short), is a social platform where you can store
        and share your music memories.
      </>
    ),
  },
  {
    title: 'How can I use it?',
    content: () => (
      <>
        By doing what you’ve always done: enjoy music you like, together with
        friends, family and strangers, but now in a place dedicated to this.
      </>
    ),
  },
  {
    title: 'When is it live?',
    content: () => (
      <>
        So we’ve already made you that curious? Why don’t you drop your email
        below and you’ll be notified on all relevant updates including the
        launch date.
      </>
    ),
  },
  {
    title: 'How can I get in contact?',
    content: () => (
      <>
        For any pressing question, please contact us at{` `}
        <a href="mailto:info@moodrequest.com">info@moodrequest.com</a>.
      </>
    ),
  },
  {
    title: 'Can I join the team?',
    content: () => (
      <>
        Well, we are always looking for ambitious talent and a cup of coffee has
        never done any harm (right?). Please send an email to{' '}
        <a target="_blank" rel="noopener noreferrer" href="mailto:info@moodrequest.com">info@moodrequest.com</a> and
        we’ll be in touch with you.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
