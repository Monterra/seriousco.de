import React from 'react';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { IconMail, IconLaugh } from '../../components/icons';

import './contact.less';

const ContactPage = () => (
  <Layout>
    <Header link="">Contact</Header>
    <p>
      Do you have a question or something to say? Don’t hesitate! <IconMail/>
    </p>
    <p>
      Just fill out the form below, I would like to hear from you. <IconLaugh/>
      <br/>
      (Of course you can also send me messages in german)
    </p>
    <form method="POST" name="contact" data-netlify="true" netlify-honeypot="bot-field" className="contact_form">
      <input type="hidden" name="form-name" value="contact" />

      <p style={{display: 'none'}}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <p>
        <label htmlFor="contact_name">Your name:</label>
        <input type="text" name="name" id="contact_name" required="" />
      </p>

      <p>
        <label htmlFor="contact_email">Your email address:</label>
        <input type="email" name="_replyto" id="contact_email" required="" />
      </p>

      <p>
        <label htmlFor="contact_email">Your message:</label>
        <textarea name="message" required="" />
      </p>

      <button type="submit">Send</button>
    </form>
  </Layout>
);

export default ContactPage;