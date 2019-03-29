import React, {useEffect} from 'react';
import EntryLayout from '../../../components/entry-layout';

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
      <p>hi</p>
    </EntryLayout>
  );
};

export default Page;