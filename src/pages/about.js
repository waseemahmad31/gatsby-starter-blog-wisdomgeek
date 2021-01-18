import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>About</h1>
        </div>
        <div class="td-page-content tagdiv-type">
          <p>
            Wisdom Geek is a blog focused on sharing knowledge. The posts mainly
            will be technical and there will be some philosophy involved as well
            but the main purpose is to share knowledge learned through life
            experiences and put it out for the world to learn from. We are an
            open-minded community with a passion to share and learn. Thus the
            idea of “Knowledge, open-sourced.”
          </p>
          <h2>About Saransh Kataria</h2>
          <p>
            Born in Delhi, India, Saransh Kataria is the brain behind Wisdom
            Geek. Currently, Saransh is a software developer at a reputed firm
            in Spokane, Washington and he likes playing with new technologies to
            explore different possibilities. He holds an engineering degree in
            Computer Science. He also shares his passion for sharing knowledge
            as the community lead at{' '}
            <a
              href="https://www.facebook.com/groups/DevCDelhiNCR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Developer Circle Delhi, NCR
            </a>{' '}
            which is a developer community in Delhi, India.
          </p>
          <p>
            If you have any suggestions or feedback, you can reach him via email
            at <em>saransh[at]wisdomgeek.com</em>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
