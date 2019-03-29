import React from 'react';
import EntryLayout from '../../../components/entry-layout';
import Link from '../../../components/link';
import Header from '../../../components/header';
import Code from '../../../components/code';
import Tooltip from '../../../components/tooltip';
import { IconLaugh } from '../../../components/icons';

export const frontmatter = {
  title: 'Creating this website, my first journey with hugo',
  path: 'first-journey-with-hugo',
  date: '2017-01-01',
  description: 'My first blog post is about creating this website. I talk about my journey with hugo, a static website engine written in go.',
  image: 'blog1.jpg'
};

const Page = () => (
  <EntryLayout frontmatter={frontmatter}>
    <p>About two months ago I stumbled upon <Link to="http://gohugo.io/">hugo</Link>, a static website generator written in go. It provides a basic <Tooltip text="Command Line Interface">CLI</Tooltip> which helps creating your website and its content. After taking a first look I asked myself “Why should I want to create a static website?!”. Instead I could use a great dynamic <Tooltip text="Content Managment System">CMS</Tooltip> with all the fancy plugins - Wordpress, Typo3, Drupal. But I kept on reading the docs and some experiences of the community.</p>
    <blockquote>Having your first hugo demo website running can be reached in seconds - even faster than you can say the word “quidditch”.</blockquote>
    <p>At this time I’ve already planned to step up and create this website a year ago (the domain is parked since December 2015). I basically knew what I want it to be and look like, but I hadn’t thought about how I will build it. As I moved on in the <Link to="https://gohugo.io/overview/quickstart/">quickstart guide</Link> of hugo, it came to my mind that this static website generator may be the right choice for the first version of my website - and here we are. <IconLaugh/></p>
    <Header size="2">How is it to build a website with hugo?</Header>
    <p>
      Hugo comes with a standard template engine and a nice set of features. It offers you the basic tools for creating a website / blog. Having your first hugo demo website running can be reached in seconds - even faster than you can say “quidditch”.
    </p>
    <Code language="bash">
      {`
        $ hugo new site bookshelf
        $ cd bookshelf/themes
        $ git clone https://github.com/dim0627/hugo_theme_robust.git
        $ cd ..
        $ hugo server --theme=hugo_theme_robust
      `}
    </Code>
  </EntryLayout>
);

export default Page;