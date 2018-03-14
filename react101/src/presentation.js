// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Notes,
  Slide,
  Text,
} from 'spectacle';

import ReactLogo from './React-icon.svg';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import CJLogoPng from './cj.png';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#fff',
    tertiary: '#fff',
    quarternary: 'rgba(26,29,35,.5)',
    reactBlue: '#60dbfb',
  },
  {
    // primary: {name: 'Oswald', googleFont: true, styles: ['400', '700i']},
    pp: {name: 'PT Sans', googleFont: true, styles: ['400', '700i']},
    // primary: "Arial Narrow"
    primary: 'Avenir',
  },
);

const StyledLink = styled(Link)`
  color: #60dbfb;
  &:visited,
  &:active,
  &:focus {
    color: #60dbfb;
  }
`;

const Reference = ({href}) => (
  <LI textSize={30}>
    <StyledLink target="_blank" href={href}>
      {href}
    </StyledLink>
  </LI>
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

const CJLogo = styled.img`
  height: 40px;
  margin-right: 5px;
`;
const T = props => <Text textColor="secondary" {...props} />;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const H = ({children, ...props}) => (
  <Heading
    textColor="secondary"
    fit={!props.size}
    caps
    lineHeight={1}
    {...props}>
    {children}
  </Heading>
);

const H1 = props => <H size={1} {...props} />;
// const H2 = props => <H size={2} {...props} />;
const H5 = props => <H size={5} {...props} />;
const H6 = props => <H size={6} {...props} />;

const AppearText = ({children, ...props}) => (
  <Appear>
    <Text textColor="secondary" {...props}>
      {children}
    </Text>
  </Appear>
);

const AppearFitText = props => (
  <Appear>
    <Text textColor="secondary" fit {...props} />
  </Appear>
);

const UL = styled.ul`
  list-style-type: square;
  border: 1px solid #555;
  padding: 10px 5px;
  padding-left: 26px;
`;

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

          <T textAlign="right">March 2018</T>
          <T textAlign="right">WLVJS</T>
          <Notes>
            <ul>
              <li>welcome</li>

              <li>3rd in the series on modern JS libraries</li>
              <li>use a simple stopwatch timer to explore Angular and React</li>
            </ul>
            <ul>
              <li>Recap:</li>
              <li>
                started with history lession + modern tooling + vanilla js timer
              </li>
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
          <H>Franklin Henderson</H>
          <T textAlign="right">@fhwrdh</T>
          <T textAlign="right">
            <Row>
              <CJLogo src={CJLogoPng} />
              <CJSpan>CJ Affiliate</CJSpan>
            </Row>
          </T>
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
          <img src={ReactLogo} height="5%" alt="react" />
          <Notes>
            <ul>
              <li>to get a sense of where people are with React...</li>
              <li>[who has heard of before tonight?]</li>
              <li>(keep hands up)</li>
              <li>[who has tried?]</li>
              <li>[who has used it seriously?]</li>
              <li>[who uses it daily in their work?]</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Disclaimer</H>
          <AppearFitText>We aren't getting to everything tonight</AppearFitText>
          <AppearFitText caps>Choices were made</AppearFitText>
          <Notes>
            <ul>
              <li>So now a disclaimer...</li>
              <li>This topic is huge and 45 minutes isn't enough</li>
              <li>So I had to make some choices</li>
              <li>
                My hope is that, if there is interest, I can give some future
                talks to add to what's here
              </li>
            </ul>
            <ul>
              <li>I thought the most valuable thing I could do</li>
              <li>...get people up and running</li>
              <li>...explain some basic concepts</li>
              <li>
                Everyone here should be able to get started experimenting with
                React after tonight
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H5>create-react-app</H5>
          <H5>JSX</H5>
          <H5>components</H5>
          <H5>lifecycle</H5>
          <H5>props</H5>
          <H5>state</H5>
          <Notes>
            <ul>
              <li>So here is an agenda for tonight...</li>
              <li>CRA: a massive shortcut to get us started. </li>
              <li>JSX: usually the first place people trip up</li>
              <li>
                components / lifecycle / props / state: these are the
                foundational concepts
              </li>
              <li>Once you understand these, </li>
            </ul>

            <ul>
              <li>
                but lets start by talking about some of the things you may have
                heard about React...
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <img src={ReactLogo} height="5%" alt="react" />
          <Notes>
            <ul>
              <li>
                ...but lets start by talking about some of the things you may
                have heard about React...
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>A JavaScript library for</H>
          <H>building user interfaces</H>
          <AppearText>formerly, "The V in MVC"</AppearText>

          <Notes>
            <ul>
              <li>React is often called a 'framework'</li>
              <li>Facebook calls it...</li>
              <li>
                When it was released in March of 2013, they said it was "The V
                in MVC"
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Modern</H>
          <H>Functional</H>
          <H>Declarative</H>
          <H>Component Based</H>

          <Notes>
            <ul>
              <li>MODERN</li>
              <li>early ES6 adoption: arrow funcs, classes, desctructuring</li>
              <li>because of jsx, babel and a build pipeline is assumed</li>
            </ul>

            <ul>
              <li>FUNCTIONAL</li>
              <li>much of the API uses pure functions and immutability</li>
              <li>components can be defined as functions</li>
            </ul>

            <ul>
              <li>DECLARATIVE</li>
              <li>JSX + VDOM</li>
              <li>no direct DOM manipulation</li>
            </ul>

            <ul>
              <li>COMPONENT BASED</li>
              <li>Everything is a reusable box on the screen</li>
              <li>data (state) + behavior</li>
              <li>components generally compose nicely</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Just JavaScript</H>
          <AppearText>...and JSX</AppearText>

          <Notes>
            <ul>
              <li>unlike what we saw with Angular, React has no templates</li>
              <li>
                rather than inventing new syntax for loops and other constructs
              </li>
              <li>
                this allows React to play nicely with 3rd party libs like
                lodash, etc.
              </li>
              <li>...and even libs that don't exist yet</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>create-react-app</H>
          <AppearText caps>react project without config</AppearText>
          <AppearText caps>dev server</AppearText>
          <AppearText caps>testing with Jest</AppearText>
          <AppearText caps>build for production</AppearText>
          <AppearText caps>ejectable</AppearText>
          <AppearText caps>user guide</AppearText>
          <Notes>
            <UL>
              <li>does what it says on the tin!</li>
            </UL>
            <UL>
              <li>NO CONFIG</li>
              <li>without the overwhelming setup</li>
              <li>webpack, babel, polyfills, jest, eslint</li>
            </UL>
            <UL>
              <li>DEV SERVER</li>
              <li>npm run start</li>
              <li>hot reloading</li>

            </UL>
            <UL>
              <li>TESTING</li>
              <li>npm run test</li>
              <li>jest built in</li>
              <li>or you can setup your own</li>
            </UL>
            <UL>
              <li>BUILD</li>
                <li>npm run build</li>
              <li>optimized build of static assets</li>
            </UL>
            <UL>
              <li>EJECTABLE</li>
              <li>npm run eject</li>
              <li>CRA philosophy is to restrict/save you with no config</li>
              <li>if you really need something, eject</li>
            </UL>
            <UL>
              <li>USER GUIDE</li>
              <li>One of the best documented and managed OSS projects I've seen recently</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>CRA TIME</H>
        </Slide>

        <Slide>
          <H1>JSX</H1>
          <AppearText caps>Brings markup into JS</AppearText>
          <AppearText caps>all html elements / attributes* </AppearText>
          <AppearText caps>built-in and custom components</AppearText>
          <AppearText caps>sugar over createElement()</AppearText>
          <AppearText caps>
            <StyledLink
              target="_blank"
              href="https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA">
              Babel Example
            </StyledLink>
          </AppearText>

          <Notes>
            <ul>
              <li>one of the things that turns people off at first</li>
              <li>
                whereas Angular extends markup with programming language
                constructs, React does the opposite and brings the markup right
                into the JS
              </li>
              <li>
                'class' and 'for' are js keywords, so 'className' and 'htmlFor'
              </li>
              <li>the best way to explain is with an example</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Components</H>
          <AppearText caps>functional</AppearText>
          <AppearText caps>class</AppearText>
        </Slide>

        <Slide>
          <H>Lifecycle methods</H>
          <AppearText textColor="reactBlue">render</AppearText>

          <AppearText textColor="reactBlue">constructor</AppearText>
          <AppearText textColor="reactBlue">componentDidMount</AppearText>

          <AppearText>componentWillMount</AppearText>
          <AppearText>componentWillReceiveProps</AppearText>
          <AppearText>shouldComponentUpdate</AppearText>
          <AppearText>componentDidUpdate</AppearText>
          <AppearText>componentWillUnmount</AppearText>

          <Notes>
            <ul>
              <li>RENDER</li>
              <li>the only required one</li>
              <li>the only one you get in a functional comp</li>
            </ul>

            <ul>
              <li>CTOR</li>
              <li>setup initial state</li>
            </ul>

            <ul>
              <li>COMPONENTDIDMOUNT</li>
              <li>usually where to kick off any data fetching</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <H>Timer Time</H>
        </Slide>

        <Slide>
          <H>What Else?</H>
          <H6>Server side rendering</H6>
          <H6>Component Patterns</H6>
          <H6>Render Props vs HOC</H6>
          <H6>Lifecycle methods</H6>
          <H6>Error Boundaries</H6>
          <H6>Form Components</H6>
          <H6>Data Fetching</H6>
          <H6>React Native</H6>
          <H6>Fragments</H6>
          <H6>Routing</H6>
          <H6>Context</H6>
          <H6>Portals</H6>
          <H6>Testing</H6>
          <H6>Events</H6>
          <H6>Redux</H6>
          <H6>Forms</H6>
          <H6>Refs</H6>
          <H6>CSS</H6>
        </Slide>

        <Slide>
          <H>References</H>
          <StyledList>
            <Reference href="https://reactjs.org/tutorial/tutorial.html" />
            <Reference href="https://reactjs.org/docs/thinking-in-react.html" />
            <Reference href="https://reactjs.org/docs/react-without-jsx.html" />
            <Reference href="https://egghead.io/courses/the-beginner-s-guide-to-reactjs" />
            <Reference href="https://reactarmory.com/guides/learn-react-by-itself" />
            <Reference href="https://reacttraining.com/patterns/" />
            <Reference href="https://www.reactiflux.com/" />
            <Reference href="https://github.com/facebook/create-react-app" />
          </StyledList>
        </Slide>

        <Slide>
          <H>Questions?</H>
        </Slide>

        <Slide>
          <H>Thank You</H>
          <StyledList>
            <Reference href="https://github.com/805js/ng-vs-react" />
            <Reference href="https://github.com/805js/react-timer" />
          </StyledList>
        </Slide>

        <Slide>
          <T textAlign="center" textSize={18} style={{ fontVariant: "all-small-caps"}}>
            Built with{' '}
            <StyledLink href="http://formidable.com/open-source/spectacle/">
              Spectacle
            </StyledLink>
          </T>

        </Slide>
      </Deck>
    );
  }
}
