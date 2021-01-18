import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <p>
            On various occasions in life, I have learnt that feedback is super
            important. So it would be super awesome to hear from you!
          </p>
          <p>
            I enjoy listening to people’s opinions/suggestions and respond to
            their queries. Feel free to drop in a email!
          </p>
          <p>
            <a
              href="mailto:saransh@wisdomgeek.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              saransh[at]wisdomgeek.com
            </a>
          </p>
          <p>Looking forward to hear from you.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
