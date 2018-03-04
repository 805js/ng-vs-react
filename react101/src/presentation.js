// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
  Typeface,
} from 'spectacle';

import ReactLogo from './React-icon.svg';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: '#fff',
    secondary: '#1F2022',
    tertiary: '#1F2022',
    quarternary: '#f0f0f0',
    reactBlue: '#60dbfb',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
    tertiary: {name: 'Droid Serif', googleFont: true, styles: ['400', '700i']},
  },
);

const ReactSpan = styled.span`
  color: #60dbfb;
`;
const CJSpan = styled.span`
  color: rgb(0, 175, 102);
`;
const StyledList = styled(List)`
 list-style: none;
 margin-top: 0;
`;
const LI = styled(ListItem)`
  line-height: 1.6em;
  padding-left: 10px;
`;

const H = ({children, ...props}) => (
  <Heading fit={!props.size} caps lineHeight={1} {...props}>
    {children}
  </Heading>
);

const H5 = props => <H size={6} {...props} />;

const AppearFitText = props => (
  <Appear>
    <Text fit {...props} />
  </Appear>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={700}
        theme={theme}
        progress="bar">
        <Slide>
          <H>
            Introduction to <ReactSpan>React</ReactSpan>
          </H>

          <Text textAlign="right">March 2018</Text>
          <Text textAlign="right">WLVJS</Text>
          <Notes>
            <ul>
              <li>welcome</li>

              <li>3rd in the series on modern JS libraries</li>
              <li>use a simple stopwatch timer to explore Angular and React</li>

            </ul>
            <ul>
              <li>Recap:</li>
              <li>started with history lession + modern tooling + vanilla js timer</li>
              <li>matt taught us some angular last month</li>
              <li>tonight i'm hoping to get us up and running with React</li>
            </ul>
            <ul>
              <li>thank hub101 for hosting</li>
              <li>thank vmware for sponsoring this month</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Franklin Henderson
          </Heading>
          <Text textAlign="right">@fhwrdh</Text>
          <Text textAlign="right">
            <CJSpan>CJ Affiliate</CJSpan>
          </Text>
          <Notes>
            <ul>
              <li>@fhwrdh</li>
              <li>CJ</li>
              <li>Writing JavaScript professionally since 1996</li>
              <li>Using React since late 2014</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Disclaimer</H>
          <AppearFitText>We aren't getting to everything tonight</AppearFitText>
          <AppearFitText bold>Choices were made</AppearFitText>
          <Notes>
            <ul>
              <li>I should start with a disclaimer...</li>
              <li>This topic is huge and 45 minutes isn't enough</li>
              <li>So I had to make some choices</li>
              <li>My hope is that, if there is interest, I can give some future talks to add to what's here</li>
            </ul>
            <ul>
              <li>I thought the most valuable thing I could do</li>
              <li>...get people up and running</li>
              <li>...explain some basic concepts</li>
              <li>Everyone here should be able to get started experimenting with React after tonight</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <img src={ReactLogo} height="5%" />
          <Notes>
            <ul>
              <li>to get a sense of where people are with React...</li>
              <li>(keep hands up)</li>
              <li>[who has heard of before tonight?]</li>
              <li>[who has tried?]</li>
              <li>[who has used it seriously?]</li>
              <li>[who uses it regularly?]</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Agenda</H>
          <H5>create-react-app</H5>
          <H5>JSX</H5>
          <H5>components</H5>
          <H5>lifecycle</H5>
          <H5>props</H5>
          <H5>state</H5>
          <Notes>
            <ul>
              <li>CRA: a massive shortcut to get us started. </li>
              <li>JSX: usually the first place people trip up</li>
              <li>components / props / state: these are the bread and butter</li>
            </ul>

            <ul>
              <li>but lets start by talking about some of the things you may have heard about React...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <img src={ReactLogo} height="5%" />
          <Notes>
            <ul>
              <li>but lets start by talking about some of the things you may have heard about React...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>library? framework?</H>
          <Notes>
            <ul>
              <li>some call it a library, others call it a framework</li>
              <li>[who knows the diff?]</li>
            </ul>
          </Notes>
        </Slide>
        <Slide>
          <H>A JavaScript library for</H>
          <H>building user interfaces</H>
          <Appear>
            <Text>"The V in MVC"</Text>
          </Appear>
        </Slide>
        <Slide>
          <H>Functional</H>
          <H>Declarative</H>
          <H>Component Based</H>
        </Slide>
        <Slide>
          <H>Just JavaScript</H>
          <Appear><Text>...and JSX</Text></Appear>
        </Slide>

        <Slide>
          <H>create-react-app</H>
        </Slide>

        <Slide>
          <H>create-react-app</H>
        </Slide>

        <Slide>
          <H>JSX</H>
        </Slide>
        <Slide>
          <H>props</H>
        </Slide>
        <Slide>
          <H>state</H>
        </Slide>

        <Slide>
          <H>What Else?</H>
          <H5>Presentational vs Container</H5>
          <H5>More Lifecycle methods</H5>
          <H5>Fetching Data</H5>
          <H5>Testing</H5>
          <H5>Redux</H5>
          <H5>CSS</H5>
          <H5>?</H5>



        </Slide>

        <Slide>
          <H>References</H>
          <StyledList>
            <LI textSize={18}><Link href="">https://egghead.io/courses/the-beginner-s-guide-to-reactjs</Link></LI>
            <LI textSize={18}><Link href="">https://reactjs.org/tutorial/tutorial.html</Link></LI>
          </StyledList>
        </Slide>
        <Slide>
          <H>Questions?</H>
        </Slide>
      </Deck>
    );
  }
}
