import React from 'react';
import {
  FaGithub
} from 'react-icons/fa';
import Link from '../../components/link';
import Header from '../../components/header';
import Highlight from '../../components/highlight';
import { IconLaugh } from '../../components/icons';
import Code from '../../components/code';

import image1 from '../../images/driving_license_trainer_1.png';
import image2 from '../../images/driving_license_trainer_2.png';
import TextImage from '../../components/text-image';

const Page = () => {
  return (
    <>
      <Header link="">Driving License Trainer</Header>
      <p>
        <TextImage src={image1} alt="Driving License Trainer"/>
        It was back in 2013, when I did my military service at the austrian armed forces and started learning for my driving license test. I was in a small office with a friend of mine and we had much spare time which we could spend as we like.
      </p>
      <p>
        Most of the time I spent with my baby <Link to="/projects/risingfarms-online">Rising Farms Online</Link>, but I also wanted to achieve my driving license while I was at the army because I knew I wouldn’t have as much free time later on when I will be working full time as a software developer.
      </p>
      <p>
        Okay, I had to learn and I wanted to arrange it as comfortable as possible - that was the moment when it came to my mind: why not code my own driving license trainer? So I could improve my coding skillz and learn for the test at the same time and hey - what’s more motivating than learning with your own piece of software? <IconLaugh/>
      </p>
      <Header size="2" link="about">What is it about?</Header>
      <p>
        <TextImage src={image2} alignment="right" alt="Scorepoint System"/>
        Driving License Trainer is a nodejs application which helps you learning for the theory part (Austria specific) of your driving license test. It is written in javascript, makes use of the express framework and renders html with jade templates.
      </p>
      <p>
        The look and feel of the application is very similiar to the official test software because I wanted to get used to it while learning.
      </p>
      <p>
        For me, the most important feature is the scorepoint system. For each question you have a scorepoint saved in a separate file. Fill out the right answers for a question and a scorepoint will be added to it. If you choose the wrong answers, the scorepoint of the question will be reset to zero. My goal was to bring all categories/questions to at least scorepoint 4 so i could be sure to know as many questions as possible when I do the real test.
      </p>
      <Header size="2" link="challenge">What was the challenge?</Header>
      <blockquote>With some luck I can fetch the questions from their server.</blockquote>
      <p>
        One of the toughest problems was to get the official questions for the driving license test. After some googling I stumbled upon the <Link to="https://www.oeamtc.at/fuehrerschein/oeamtc/page.html">ÖAMTC online test</Link> and saw that they are working with the right set of questions. It was an online test written in JavaScript - “with some luck I can fetch the questions from their server” I thought. After some time examining the source code I found where they serve the content files - each question as a single json file named by the question number - beginning by one.
      </p>
      <p>
        I didn’t know how many questions they provided exactly, so i wrote a nodejs script which tries to fetch the json files from 1.json to xxx.json. You can find this script in the <Link to="https://github.com/dsumer/driving-license-trainer"><FaGithub/> GitHub repository</Link> of this project. I ended up with around 2000 questions - very nice!
      </p>
      <p>
        There was also some other information which could be fetched like the images of every question and the type of the test. After fetching all the data needed, I started implementing the main logic.
      </p>
      <Highlight title="Github">
        Check out the project on <Link to="https://github.com/dsumer/driving-license-trainer"><FaGithub/> Github</Link>.
      </Highlight>
      <Header size="2">Conclusion</Header>
      <p>
        The Driving License Trainer was a small project which helped me learning and improving my coding skills. With the project I gathered experience with the express framework and it gave me a better know-how of nodejs overall.
      </p>
      <p>
        Feel free to use the driving license trainer on your own! Unfortunately I can’t assure that the questions are correct. Many questions have changed since 2013 and I don’t know if ÖAMTC has kept their questions up-to-date. Anyways, you can try to run the refresh.js script to fetch the newest questions from the ÖAMTC server.
      </p>
      <Code language="bash">
        {`
          $ cd ~/driving-license-trainer/public/data
          $ node refresh.js
        `}
      </Code>
    </>
  );
};

export default Page;