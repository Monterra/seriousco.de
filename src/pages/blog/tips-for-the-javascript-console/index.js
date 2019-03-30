import React, {useEffect} from 'react';
import EntryLayout from '../../../components/entry-layout';
import Link from '../../../components/link';
import Header from '../../../components/header';
import Code from '../../../components/code';
import TextImage from '../../../components/text-image';
import image1 from '../../../images/console_table.png';
import { IconLaugh, IconWink } from '../../../components/icons';

export const frontmatter = {
  title: 'Tips for the JavaScript Console',
  path: 'tips-for-the-javascript-console',
  date: '2017-01-11',
  description: 'Some tips regarding the JavaScript Console of modern browsers. Maybe there are some new things you didn’t know!',
  image: 'blog2.png'
};

function consoleStuff() {
  console.clear();

  // Simple Logging
  console.log('Simple Log');
  console.info('Info.');
  console.warn('Warning!');
  console.error('Shit. (with Stacktrace!)');
  console.log('Welcome on %s!', 'seriousco.de');
  console.log('%c Styled Text.', 'font-size:18px;color:blue;background:red');

  // Printing a table of data
  let data = [
    { name: 'Jon',  age: 24, country: 'Austria' },
    { name: 'Miguel',  age: 19, country: 'Portugal' },
    { name: 'Steve',  age: 31, country: 'USA' }
  ];
  console.table(data);

  // Print the JSON data of a HTML element
  console.dir(document.body);

  // Asserting
  let myCake = false;
  console.assert(myCake, 'The cake is a lie!');

  //Counting
  console.count('Me'); // 1
  console.count('Me'); // 2
  console.count('Me'); // 3
  console.count('You'); // 1
  console.count('You'); // 2
  console.count('Me'); // 4

  // Timing functions
  console.time('fetching data');
  setTimeout(function () {
    console.timeEnd('fetching data');
  }, 1000);

  // Grouping
  console.group('Group 1');
  console.log('Hey, I am a member of Group 1!');
  console.groupEnd('Group 1');
  console.groupCollapsed('Group 2'); //collapsed by default
  console.log('Hey, I am a member of Group 2!');
  console.groupEnd('Group 2');
  console.log('It is me, excludie :(');
}

const Page = () => {
  useEffect(() => {
    consoleStuff();
  }, []);

  return (
    <EntryLayout frontmatter={frontmatter}>
      <p>Before Christmas I did some lessons of the <Link to="https://javascript30.com/">30 Day Javascript Challenge</Link> from <Link to="http://twitter.com/wesbos">@wesbos</Link>. On Day 9 I’ve learned some cool stuff regarding the JavaScript console of modern browsers, which I want to share with you!</p>
      <Header size="2">Simple Logging</Header>
      <Code language="js">
        {`
          console.log('Simple Log');
          console.info('Info.');
          console.warn('Warning!');
          console.error('Shit. (with Stacktrace!)');      
        `}
      </Code>
      <p>
      Most of you probably know these ones. They are nice to log some data to the console and with <b>info</b>, <b>warn</b> & <b>error</b> you get special highlighting or even the stacktrace being printed with.
      </p>
      <p>Regardless if you want to print objects or just simple strings, this is pretty helpful. You can also format strings like this:</p>
      <Code language="js">
        {`
          console.log('Welcome on %s!', 'seriousco.de'); 
        `}
      </Code>
      <p>Or you can style text like this:</p>
      <Code language="js">
        {`
          console.log('%c Styled Text.', 'font-size:18px;color:blue;background:red');     
        `}
      </Code>
      <Header size="2">Printing a table of data</Header>
      <p>Want to print an array of objects? This function will be your new best friend! <b>console.table(yourData)</b> will list your data like this:</p>
      <p>
        <TextImage src={image1} alignment="center" width="auto" alt="console.table"/>
      </p>
      <p>So you have much more overview about your data.</p>
      <Header size="2">Print the JSON data of a HTML element</Header>
      <p>When you console.log a DOM element you get the element printed in a HTML tree. Sometimes you need some deeper information of an element’s data. Just type <b>console.dir(element)</b> and it will print the JSON data.</p>
      <Header size="2">Asserting</Header>
      <p>Want to assert something via the console? Just do it like this:</p>
      <Code language="js">
        {`
          var myCake = false;
          console.assert(myCake, 'The cake is a lie!');       
        `}
      </Code>
      <Header size="2">Counting</Header>
      <p>With console.count you can easily count by a specific string / object:</p>
      <Code language="js">
        {`
          console.count('Me'); // 1
          console.count('Me'); // 2
          console.count('Me'); // 3
          console.count('You'); // 1
          console.count('You'); // 2
          console.count('Me'); // 4                   
        `}
      </Code>
      <Header size="2">Timing functions</Header>
      <p>With console.time and .timeEnd you can easily measure how much time an action takes. Example:</p>
      <Code language="js">
        {`
          console.time('fetching data');
          setTimeout(function () {
            console.timeEnd('fetching data');
          }, 1000);                     
        `}
      </Code>
      <Header size="2">Grouping</Header>
      <p>If you have many logs it can be quite overwhelming. Sometimes it is helpful to group them like this:</p>
      <Code language="js">
        {`
          console.group('Group 1');
          console.log('Hey, I am a member of Group 1!');
          console.groupEnd('Group 1');
          console.groupCollapsed('Group 2'); //collapsed by default
          console.log('Hey, I am a member of Group 2!');
          console.groupEnd('Group 2');
          console.log('It is me, excludie :(');                                   
        `}
      </Code>
      <p>Want to see all the commands in action? Just open your dev tools on this site! <IconWink/> Hopefully you enjoyed it and learned some new things - see you next time <IconLaugh/></p>
    </EntryLayout>
  );
};

export default Page;