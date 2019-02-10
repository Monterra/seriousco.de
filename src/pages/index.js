import React from 'react';
import {IconWink, IconSmile, IconLaugh, IconMail} from '../components/icons';
import Link from '../components/link';
import Header from '../components/header';
import Highlight from '../components/highlight';

const AboutPage = () => {
  return (
    <>
      <Header link="">About</Header>
      <p className="text-center">
        <img src="https://seriousco.de/images/profile.png" className="round" alt="Dominik" />
      </p>
      <p className="text-center">
        Hello! My name is Dominik, I am 25 years old and a passionated software engineer. I live in Vienna, Austria and enjoy being out in the nature, hanging out with my friends or just debugging the projects I am currently working on. <IconWink/>
      </p>
      <Highlight title="Serious Code">
        Do you care about your code? Does it run as expected? Be serious about it.
      </Highlight>
      <p>
        When I was a child, I always loved playing around with computers, trying to understand how this all works. I saw it as an endless playground, a paradise where you can try things out and create amazing stuff. Nowadays it is pretty easy to gather the information needed by googling. Via the internet you can connect with other developers and have access to so many free resources which help you improve your skills as a software developer.
      </p>
      <p>
        Coding a piece of software and seeing the outcome is just amazing. It is really comparable to other jobs where you build things. You build a castle, your very own, where you can grow and learn so many things to build even better castles. (Sometimes you also have to <Link to="https://toggl.com/programming-princess">rescue princesses</Link>)
      </p>
      <Header size="2" link="purpose">What’s the purpose of this Website?</Header>
      <p>
        Here on <Link to="#">seriousco.de</Link> you can check out my <Link to="/timeline">CV</Link> or the <Link to="/projects">projects</Link> I am involved in. You can also find a <Link to="/blog">blog</Link> on this website where I share stories about things that I experienced in my daily life as a developer. It also should be a little coding database containing snippets, quickstart guides, tipps and other stuff.
      </p>
      <Highlight type="warning" title="Any Questions?">
        Don’t hesitate to contact me <Link to="/contact">here</Link>.
      </Highlight>
      <Header size="2">So it’s all about the software?</Header>
      <p>
        The growth of developers in these days is enormously high. This is very impressive and also very good, because behind almost everything in our infrastructure is a software which simplifies our daily life. So the need for software engineers is rather high and because the speed of technology development is just unstoppable, this won’t change in the near future.
      </p>
      <p>
        For example, I really like the development of the web in the past years. It’s a place for human beings or organizations to express themselves. Websites (or web applications) aren’t bound to any operating system or - with responsive design - a specific device. You can create things and be sure that almost everybody out there has the possibility to easily consume your content without installing tons of stuff on their computer. Whether frontend- or backend-development, you have a wide range of frameworks to choose from, depending on your plans and preferences, which help you building your webapp. They provide basic tools & implementations so that you don’t have to reinvent the wheel over and over again and mostly have a prototype of your application running in some hours / days.
      </p>
      <Header size="2">Don’t you take it too serious?</Header>
      <p>
        Although this website’s name is seriouscode and I really think that you should be serious about your code - you shouldn’t take everything too serious in your life. This life and our planet is just too nice - you shouldn’t be stressed out all the day. If you are in trouble or just feeling bad about something, take your time, step back and look at it in an objective way. Sometimes a problem just lives in your head, free your mind.
      </p>
      <p>
        With this words I want to end my little story. If you have any questions just contact me <Link to="/contact">here</Link>.
      </p>
      <p>
        Enjoy your life and have a nice day! <IconSmile/>
      </p>
    </>
  );
};

export default AboutPage;