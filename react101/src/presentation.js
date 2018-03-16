// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
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
import Fuchs from './fuchs.png';
import Thread from './thread.png';
import Dan from './dan.png';

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
const H2 = props => <H size={2} {...props} />;
const H3 = props => <H size={3} {...props} />;
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
  border-bottom: 2px solid #FFF;
  padding: 10px 5px;
  padding-left: 26px;
  & li {
    margin-bottom: .7em;
    line-height: 1.3em;
  }
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
            <UL>
              <li>welcome</li>

              <li>3rd in the series on modern JS libraries</li>
              <li>use a simple stopwatch timer to explore Angular and React</li>
              <li></li>
              <li>Recap:</li>
              <li>
                started with history lession + modern tooling + vanilla js timer
              </li>
              <li>matt taught us some angular last month</li>
              <li>tonight i'm hoping to get us up and running with React</li>
              <li></li>
              <li>thank hub101 for hosting</li>
              <li>thank vmware for sponsoring this month</li>
            </UL>
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
            <UL>
              <li>@fhwrdh</li>
              <li>CJ</li>
              <li>Writing JavaScript professionally since 1996</li>
              <li>Using React since late 2014</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <img src={ReactLogo} height="5%" alt="react" />
          <Notes>
            <UL>
              <li>So lets try to get a sense of where we all are with React...</li>
              <li>Put your hand up if...</li>
              <li>[you have heard of react before tonight?]</li>
              <li>[who has tried?]</li>
              <li>[who has shipped something to production?]</li>
              <li>[who uses it daily in their work?]</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>Disclaimer</H>
          <AppearFitText>We aren't getting to everything tonight</AppearFitText>
          <AppearFitText caps>Choices were made</AppearFitText>
          <Notes>
            <UL>
              <li>So now a disclaimer...</li>
            </UL>
            <UL>
              <li>This topic is huge and 30 - 45 minutes isn't enough</li>
            </UL>
            <UL>
              <li>So I had to make some choices</li>
              <li>
                My hope is that, if people are interested, we can organize some future
                talks to add to what's here
              </li>
              <li>I thought the most valuable things I could do</li>
              <li>...get people up and running</li>
              <li>...explain some basic concepts</li>
              <li>
                Everyone here should be able to get started experimenting with
                React after tonight
              </li>
            </UL>
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
            <UL>
              <li>So here is our agenda for tonight...</li>
              <li>CRA: a massive shortcut to get us started. </li>
              <li>JSX: usually the first place people trip up</li>
              <li>
                COMPONENTS / LIFECYCLE / PROPS / STATE: these are the
                foundational concepts
              </li>
              <li>With an understanding of these things, you are on your way to being productive with React</li>
            </UL>
            <UL>
              <li>
                but lets start by talking about some of the things you may have
                heard about React...
              </li>
            </UL>
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
            <UL>
              <li>React is often called a 'framework'</li>
              <li>Facebook calls it...</li>

            </UL>
            <UL>
              <li>
                When it was released in March of 2013, they said it was "The V
                in MVC"
              </li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>Modern</H>
          <H>Functional</H>
          <H>Declarative</H>
          <H>Component Based</H>

          <Notes>
            <UL>
              <li>MODERN</li>
              <li>early ES6 adoption: arrow funcs, classes, desctructuring</li>
              <li>because of jsx, babel and a build pipeline is assumed</li>
            </UL>
            <UL>
              <li>FUNCTIONAL</li>
              <li>much of the API uses pure functions and immutability</li>
              <li>components can be defined as functions</li>
            </UL>
            <UL>
              <li>DECLARATIVE</li>
              <li>JSX + VDOM</li>
              <li>no direct DOM manipulation</li>
            </UL>
            <UL>
              <li>COMPONENT BASED</li>
              <li>Everything is a reusable box on the screen</li>
              <li>data (state) + behavior</li>
              <li>components generally compose nicely</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>Just JavaScript</H>
          <AppearText>...and JSX</AppearText>

          <Notes>
            <UL>
              <li>(next)</li>
            </UL>
            <UL>
              <li>unlike what we saw with Angular, React has no templates</li>
              <li>
                rather than inventing new syntax for loops and other constructs
              </li>
              <li>
                this allows React to play nicely with 3rd party libs like
                lodash, etc.
              </li>
              <li>...and even libs that don't exist yet</li>

              <li>more on jsx in a bit</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>create-react-app</H>
          <Notes>
            <li>Lets start with a story...</li>
          </Notes>

        </Slide>

        <Slide>
          <img src={Fuchs} width="80%"/>
          <Notes>
            <li>March of 2016, Thomas Fuchs, posted this tweet</li>
            <li>zepto, script.aculo.us, ruby on rails core</li>
            <li>This captured a growing sentiment in the React ecosystem (and JS in general)</li>
            <li>and touched a nerve</li>
            <li>Let me pull back to the thread that started with this tweet...</li>
          </Notes>
        </Slide>
        <Slide>
          <img src={Thread} width="30%"/>
          <Notes>
            <UL>
            <li>Notice the bottom reply from July</li>
            <li>lets zoom in on that one...</li>
          </UL>
          </Notes>
        </Slide>
        <Slide>
          <img src={Dan} width="80%"/>
          <Notes>
            <UL>
            <li>Dan Abramov and Christopher Chedeau, who work at FB, decided in mid-July to do something about the situation.</li>
            <li>and a week later they released 0.1.0 of create-react-app.</li>
          </UL>
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
          <AppearText caps>sugar over React.createElement()</AppearText>
          <AppearText caps>
            <StyledLink
              target="_blank"
              href="https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA">
              Babel Example
            </StyledLink>
          </AppearText>

          <Notes>
            <UL>
              <li>one of the things that turns people off at first</li>
            </UL>
            <UL>
              <li>
                whereas Angular extends markup with programming language
                constructs...</li>
              <li>...React does the opposite and brings the markup right
                into the JS
              </li>
            </UL>
            <UL>
              <li>jsx supports all html elements and attributes</li>
              <li>
                'class' and 'for' are js keywords, so 'className' and 'htmlFor'
              </li>
            </UL>
            <UL>
              <li>but the power comes from defining your own or someone else's custom components</li>
            </UL>
            <UL>
              <li>a good way to start to demystify jsx is to see what really runs in the browser</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>Components</H>
          <AppearText caps>functional</AppearText>
          <AppearText caps>class</AppearText>
          <Notes>
            <UL>
              <li>two ways to define components, functions and es6 classes</li>
            </UL>
            <UL>
              <li>generally, we use functions for simple, visual, "dumb" components</li>
              <li>you only get a render method</li>
            </UL>
            <UL>
              <li>we use classes when we need lifecycle methods or state mgmt</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H>Lifecycle methods</H>
          <AppearText textColor="reactBlue">constructor</AppearText>
          <AppearText>componentWillMount</AppearText>
          <AppearText textColor="reactBlue">render</AppearText>
          <AppearText textColor="reactBlue">componentDidMount</AppearText>
          <AppearText>componentWillReceiveProps</AppearText>
          <AppearText>shouldComponentUpdate</AppearText>
          <AppearText>componentWillUpdate</AppearText>
          <AppearText>componentDidUpdate</AppearText>
          <AppearText>componentWillUnmount</AppearText>
          <AppearText>componentDidCatch</AppearText>

          <Notes>
            <UL>
              <li>CTOR</li>
              <li>setup initial state</li>
            </UL>
            <UL>
            </UL>
            <UL>
              <li>RENDER</li>
              <li>the only required one</li>
              <li>the only one you get in a functional comp</li>
              <li>props + state => UI</li>
            </UL>
            <UL>
              <li>COMPONENTDIDMOUNT</li>
              <li>gets called when a component is first added to the DOM</li>
              <li>often where to kick off any data fetching</li>
            </UL>
            <UL>
              <li>6</li>
              <li>this is all of them</li>
              <li>new one added in 16 re: errors</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H3>PROPS</H3>

          <Appear>
            <CodePane
              language="javascript"
              theme="external"
              source={`
  import {formatMillis} from './util';

  const Counter = ({time, onClick}) => (
    <div className="counter" onClick={onClick}>
      <div className="elapsed">{formatMillis(time)}</div>
    </div>
  );
              `}
            />
          </Appear>


          <Appear>
            <CodePane
              language="javascript"
              theme="external"
              source={`
  class Timer extends React.Component {

    handleClick() {
      ...
    }

    render() {
      const millis = new Date().getTime();
      return (
        <Counter time={millis} onClick={this.handleClick} />
      );
    }
  }

              `}
            />
          </Appear>

          <Notes>
            <UL>
              <li>PROPS</li>
              <li>props are how you communicate between components</li>
              <li>data, functions, other components occasionally</li>
              <li>if components are functions, props are the arguments</li>
              <li>immutable</li>
              <li>the props form a contract between components</li>
            </UL>
            <UL>
              <li>1</li>
              <li>This Counter component takes some props as args</li>
              <li>we are using ES6 descructuring to extract the props we need</li>

            </UL>
            <UL>
              <li>2</li>
              <li>And here is the Timer component that uses the Counter</li>
              <li>It provides values to the Counter for its props</li>
            </UL>
          </Notes>
        </Slide>

        <Slide>
          <H3>State</H3>

          <Appear>
            <CodePane
              language="javascript"
              theme="external"
              source={`
  class Timer extends React.Component {
    state = {
      millis: 0,
      clicked: false
    };

    ...

    handleClick() {
      this.setState(state => ({
        ...state,
        clicked: true
      }));
    }

    render() {
      const { millis, clicked } = this.state;
      return (
        <Counter time={millis} onClick={this.handleClick} />
        <ClickIndicator clicked={clicked} />
      );
    }
  }

              `}
            />
          </Appear>

          <Notes>
            <UL>
              <li>State is the data that a component owns and manages</li>
              <li>in this case, the milliseconds and the whether or not the counter was clicked</li>
              <li>setState can take an object, or a function</li>
              <li>setState triggers the update lifecycle methods</li>
            </UL>
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
          <Notes>
            <ul>
              <li>thanks again to hub101 for hosting and vmware for sponsoring this month</li>
            </ul>
          </Notes>
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
