+++
date = "2017-04-04T22:00:00+01:00"
draft = false
title = "Writing tests with jest and enzyme"
image = "blog4.png"
shareimage = "blog4_share.png"
description = "The bigger your codebase grows, the more test-coverage you want to reach in order to build a stable application. This is where jest comes into the game and that’s what this blogpost is about: writing (unit-)tests with jest (and enzyme)!"
author = "dominiksumer"
+++

The last weeks I spent a lot time getting warm with [React](https://facebook.github.io/react/) - Facebook’s JavaScript library  for building user interfaces. With React you can build rich applications using so-called “React Components”. You can either build an web application - or with React Native - build mobile apps and the components can also be pre-rendered on the server-side using Node for achieving a smooth user experience.

But the bigger your codebase grows, the more test-coverage you want to reach in order to build a stable application. This is where jest comes into the game and that’s what this blogpost is about: writing (unit-)tests with jest (and enzyme)!

## What is jest?
---
[Jest](https://facebook.github.io/jest/) is a tool for easy and painless JavaScript testing. It is not React specific, so you can use it to test your whole js codebase. It comes with everything you need out of the box, just run jest and all your wishes come true! :wink:

### Example
---
Consider you have a simple ‘add’ method:
```javascript
function add(a, b) {
  return a + b;
}

module.exports = add;
```

You want to test if it works as expected? No problem with jest:
```javascript
const add = require('./add');
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

So as you can see, it’s pretty simple and self-explaining. If you want to try it you can do this right here in your browser: https://repl.it/languages/jest
<br/><br/>
### Expecting functions to be called
---
Jest comes with a lot of helpful tools to write your tests. You can expect variables to be a specific value, fake timers, spy on functions - I don’t want to go into detail. But I want to show you one simple example: test if a specific function / callback gets called during your test case.

This is the function you want to test:
```javascript
function calculate(giveFeedback, callback) {
  if (giveFeedback) {
    callback();
  }
}

module.exports = calculate;
```

Now you can test two things: if the giveFeedback parameter is true, callback should be called, if it is false nothing should happen. Here’s how you would test it with jest and make use of the jest.fn() mock function:

```javascript
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
```

---

<a class="image-link" href="/images/ij_2017.1.png" title="IntelliJ 2017.1">
    {{< img src="/images/ij_2017.1.png" class="center round-rectangle" width="600" >}}
</a>

As you might know, I am a pretty decent IntelliJ fanboy. It’s (in my opinion) the best IDE regarding web-development and just works smoothly without installing a bunch of plugins. Since version 2017.1 this also applies to developing, debugging and executing jest tests. Here you can see what’s new: https://www.youtube.com/watch?v=gfXTak1qexI

## Ok you also talked about - what was it - “enzyme”?
---
<a class="image-link" href="/images/airbnb-logo.png" title="AirBnB">
    {{< img src="/images/airbnb-logo.png" class="center round-rectangle" >}}
</a>
As jest is also powered by Facebook and they are using it to test their React-Components, it’s widely spread in the React Community. But jest doesn’t come with specific React helpers and this is what enzyme is for: providing you testing utilities for React.

### Rendering Modes
---
[Enzyme](https://github.com/airbnb/enzyme) comes with three rendering modes to test your components:

* **shallow**
  * renders the component onto a virtual dom and lets you test all basic features of your react component
* **mount**
  * mounts the component onto a real dom node and lets you fully test your component including interactions with the DOM API or lifecycle hooks like componentDidMount
* **render**
  * renders the component as static HTML which can be analyzed (you cannot interact with the component afterwards)

### Wrapper functionality
---
Each of those rendering functions returns a wrapper which lets you interact with your component / the html output and analyze it. For example you can expect the HTML to equal a specific text:
```javascript
function MyComponent(props) {
  return <div>test<span class=”icon-star”></span></div>;
}

const wrapper = shallow(<MyComponent />);
expect(wrapper.text()).to.equal(‘test’);
```

You can expect or set the value of a specific prop:
```javascript
const wrapper = mount(<MyComponent bar=”baz” />);
expect(wrapper.props().bar).to.equal('baz');
wrapper.setProps({ bar: 'foo' });
expect(wrapper.props().bar).to.equal('foo');
```

Navigate to your component’s DOM with css selectors:
```javascript
const wrapper = mount(<MyComponent bar=”baz” />);
expect(wrapper.find(‘.icon-star’).type()).to.equal(‘span’);
```

Simulate Events
Simulating (DOM) events? No problem with enzyme! Here’s an example how you can simulate a simple button click:
```javascript
function MyComponent(props) {
  return <div><button onClick={props.onButtonClick}>ClickMe</button></div>;
}

const mockOnClick = jest.fn();
const wrapper = mount(<MyComponent onButtonClick={mockOnClick} />);
wrapper.find(‘button’).simulate(‘click’);
expect(mockOnClick).toHaveBeenCalled();
```

---

This was a basic overview about jest and the react test utility library enzyme.
Do you have any questions? Don’t hesitate to [contact me](/contact)! :smile:
