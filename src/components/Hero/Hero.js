import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Albert's Personal Portfolio
      </SectionTitle>
      <SectionText>
      Albert is a Front-End Developer with plently of experience with React, Redux, HTML, CSS, Javascript and Wordpress. He has experience collaborating with cross functional teams, UI/UX designers, QA and BAs using Agile/SCRUM. Albert is a polished professional with excellent communication and team skills, attention to detail, and a passion to build high quality websites
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;