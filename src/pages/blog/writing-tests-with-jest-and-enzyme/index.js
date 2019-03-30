import React from 'react';
import EntryLayout from '../../../components/entry-layout';
import Link from '../../../components/link';
import Header from '../../../components/header';
import Code from '../../../components/code';
import TextImage from '../../../components/text-image';
import image1 from '../../../images/ij_2017.1.png';
import image2 from '../../../images/airbnb-logo.png';
import { IconLaugh } from '../../../components/icons';

export const frontmatter = {
  title: 'Writing tests with jest and enzyme',
  path: 'writing-tests-with-jest-and-enzyme',
  date: '2017-04-04',
  description: 'Jest and enzyme - writing javascript tests made easy with a painless framework and a helpful utility library.',
  image: 'blog4.png'
};

const Page = () => (
  <EntryLayout frontmatter={frontmatter}>
    <p>The last weeks I spent a lot time getting warm with <Link to="https://reactjs.org/">React</Link> - Facebook’s JavaScript library for building user interfaces. With React you can build rich applications using so-called “React Components”. You can either build an web application - or with React Native - build mobile apps and the components can also be pre-rendered on the server-side using Node for achieving a smooth user experience.</p>
    <p>But the bigger your codebase grows, the more test-coverage you want to reach in order to build a stable application. This is where jest comes into the game and that’s what this blogpost is about: writing (unit-)tests with jest (and enzyme)!</p>
    <Header size="2">What is jest?</Header>
    <p><Link to="https://jestjs.io/">Jest</Link> is a tool for easy and painless JavaScript testing. It is not React specific, so you can use it to test your whole js codebase. It comes with everything you need out of the box, just run jest and all your wishes come true!</p>
    <Header size="3">Example</Header>
    <p>Consider you have a simple ‘add’ method:</p>
    <Code language="js">
      {`
        function add(a, b) {
          return a + b;
        }
        
        module.exports = add;             
      `}
    </Code>
    <p>You want to test if it works as expected? No problem with jest:</p>
    <Code language="js">
      {`
        const add = require('./add');
        describe('add', () => {
          it('should add two numbers', () => {
            expect(add(1, 2)).toBe(3);
          });
        });             
      `}
    </Code>
    <p>So as you can see, it’s pretty simple and self-explaining. If you want to try it you can do this right here in your browser: <Link to="https://repl.it/languages/jest">https://repl.it/languages/jest</Link></p>
    <Header size="3">Expecting functions to be called</Header>
    <p>Jest comes with a lot of helpful tools to write your tests. You can expect variables to be a specific value, fake timers, spy on functions - I don’t want to go into detail. But I want to show you one simple example: test if a specific function / callback gets called during your test case.</p>
    <p>This is the function you want to test:</p>
    <Code language="js">
      {`
        function calculate(giveFeedback, callback) {
          if (giveFeedback) {
            callback();
          }
        }

        module.exports = calculate;          
      `}
    </Code>
    <p>Now you can test two things: if the giveFeedback parameter is true, callback should be called, if it is false nothing should happen. Here’s how you would test it with jest and make use of the jest.fn() mock function:</p>
    <Code language="js">
      {`
        const calculate = require('./calculate');

        describe('calculate', () => {
          it('should give feedback', () => {
            const callback = jest.fn();
            calculate(true, callback);
            expect(callback).toHaveBeenCalled();
          });
          
          it('should not give feedback', () => {
            const callback = jest.fn();
            calculate(false, callback);
            expect(callback).not.toHaveBeenCalled();
          });
        });          
      `}
    </Code>
    <hr/>
    <p>
      <TextImage src={image1} width="auto" alt="IntelliJ 2017.1" alignment="center"/>
    </p>
    <p>As you might know, I am a pretty decent IntelliJ fanboy. It’s (in my opinion) the best IDE regarding web-development and just works smoothly without installing a bunch of plugins. Since version 2017.1 this also applies to developing, debugging and executing jest tests. Here you can see what’s new: <Link to="https://www.youtube.com/watch?v=gfXTak1qexI">https://www.youtube.com/watch?v=gfXTak1qexI</Link></p>
    <Header size="2">Ok you also talked about - what was it - “enzyme”?</Header>
    <p>
      <TextImage src={image2} width="auto" alt="AirBnB" alignment="center"/>
    </p>
    <p>As jest is also powered by Facebook and they are using it to test their React-Components, it’s widely spread in the React Community. But jest doesn’t come with specific React helpers and this is what enzyme is for: providing you testing utilities for React.</p>
    <Header size="3">Rendering Modes</Header>
    <p><Link to="https://github.com/airbnb/enzyme">Enzyme</Link> comes with three rendering modes to test your components:</p>
    <ul>
      <li>
        <strong>shallow</strong>

        <ul>
          <li>renders the component onto a virtual dom and lets you test all basic features of your react component</li>
        </ul>
      </li>
      <li>
        <strong>mount</strong>

        <ul>
          <li>mounts the component onto a real dom node and lets you fully test your component including interactions with the DOM API or lifecycle hooks like componentDidMount</li>
        </ul>
      </li>
      <li>
        <strong>render</strong>

        <ul>
          <li>renders the component as static HTML which can be analyzed (you cannot interact with the component afterwards)</li>
        </ul>
      </li>
    </ul>
    <Header size="3">Wrapper functionality</Header>
    <p>Each of those rendering functions returns a wrapper which lets you interact with your component / the html output and analyze it. For example you can expect the HTML to equal a specific text:</p>
    <Code language="js">
      {`
        function MyComponent(props) {
          return <div>test<span class=”icon-star”></span></div>;
        }

        const wrapper = shallow(<MyComponent />);
        expect(wrapper.text()).to.equal(‘test’);        
      `}
    </Code>
    <p>You can expect or set the value of a specific prop:</p>
    <Code language="js">
      {`
        const wrapper = mount(<MyComponent bar=”baz” />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');        
      `}
    </Code>
    <p>Navigate to your component’s DOM with css selectors:</p>
    <Code language="js">
      {`
        const wrapper = mount(<MyComponent bar=”baz” />);
        expect(wrapper.find(‘.icon-star’).type()).to.equal(‘span’);       
      `}
    </Code>
    <p>Simulate Events Simulating (DOM) events? No problem with enzyme! Here’s an example how you can simulate a simple button click:</p>
    <Code language="js">
      {`
        function MyComponent(props) {
          return <div><button onClick={props.onButtonClick}>ClickMe</button></div>;
        }

        const mockOnClick = jest.fn();
        const wrapper = mount(<MyComponent onButtonClick={mockOnClick} />);
        wrapper.find(‘button’).simulate(‘click’);
        expect(mockOnClick).toHaveBeenCalled();        
      `}
    </Code>
    <hr/>
    <p>This was a basic overview about jest and the react test utility library enzyme. Do you have any questions? Don’t hesitate to <Link to="/contact">contact me</Link>! <IconLaugh/></p>
  </EntryLayout>
);

export default Page;