import React from 'react';
import styled from 'styled-components';

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
        <EmailForm
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" id="email" />
          <SubmitButton type="submit">Sign up</SubmitButton>
        </EmailForm>
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@moodrequest.com"
        >
          info@moodrequest.com
        </a>{' '}
        and we’ll be in touch with you.
        <br />
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

const EmailForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.screen.xs}) {
    flex-direction: row;
  }

  input {
    padding: 0.4rem 1rem;
    border-radius: 4px;
    width: 100%;
    max-width: 350px;
  }
`;

const SubmitButton = styled.button`
  max-width: 100px;
  width: 100%;
  transition: 0.25s;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${props => props.theme.color.primary};
  border: 2px solid ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.xsmall};

  @media (min-width: ${props => props.theme.screen.xs}) {
    margin: 0 1rem;
  }

  :hover {
    box-shadow: 0 0.25em 0.25em -0.2em;
    transform: translateY(-0.15em);
  }
`;
