import React from 'react';
import EntryLayout from '../../../components/entry-layout';
import Link from '../../../components/link';
import Header from '../../../components/header';
import Code from '../../../components/code';
import Tooltip from '../../../components/tooltip';
import { IconLaugh, IconWink } from '../../../components/icons';
import TextImage from '../../../components/text-image';
import image1 from '../../../images/first-journey-with-hugo.png';

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
    <p>With the command “hugo server” you can simply run a local development server which watches for changes and automatically refreshes the page.</p>
    <p>The <Link to="http://gohugo.io/overview/introduction/">docs</Link> and community behind hugo are sufficient. You mostly find the things you’re searching for and the documentation is pretty well structured. It also is under (heavy) development - the latest <Link to="https://github.com/spf13/hugo/releases/tag/v0.18.1">release 0.18</Link> is two days old (from the current point of writing this blogpost).</p>
    <p>If you want to know how seriousco.de is built you can take a look at the <Link to="https://github.com/dsumer/seriousco.de">GitHub repository</Link>. I am using the <Link to="http://themes.gohugo.io/theme/material-docs/">hugo material theme</Link> which is quite nice but I wanted to change some things in order to fulfill my purpose. I forked the <Link to="https://github.com/digitalcraftsman/hugo-material-docs">original repository</Link> so you can see the changes in a <Link to="https://github.com/dsumer/hugo-material-docs">separate repository</Link>.</p>
    <p>As you can see by the <Link to="https://github.com/dsumer/seriousco.de/commit/75c2e59a85b4554a638a335faba60bc48089d372">initial commit</Link> I’ve started to work on this website on the first of November 2016. It took me two months from the first day to the official publish day with some pauses in between. A pretty nice performance in my opinion and it demonstrates that you can quickly have a production website up and running with hugo.</p>
    <Header size="2">A static website? That sounds horrible!</Header>
    <p>Hugo doesn’t come with a fancy <Tooltip text="What You See Is What You Get">WYSIWYG</Tooltip> editor or tons of plugins which bloat up your website. You don’t have a rich backend where you configure everything and write your blog posts. There is no database running in the background serving the content of your website. Instead hugo creates prebuilt .html files for you which can be served via HTTP.</p>
    <p>
      <TextImage src={image1} alignment="right"/>
      That may sound quite horrible to some of you and there are some types of websites where such a static website is not sufficient - as a web developer I understand this. But for some applications hugo is enough or even outperforms dynamic content managment systems and that’s the case for the current version of seriousco.de.
    </p>
    <p>If you just want to build a simple website you should really give hugo (or any other static website generator) a shot. If you host your site on <Link to="https://pages.github.com/">GitHub Pages</Link> you basically don’t have to worry about security issues (if you can keep your GitHub account safe). There is no backend where people can change the contents of your website and if some evil scriptkiddy wants to take down your website, they have to attack GitHub - so you can hide behind your big brother. For some special features like a contact formular or a comments area you can use services like formspring or disqus.</p>
    <Header size="2">What’s your purpose?</Header>
    <p>I basically wanted a website where people can see what I am currently working on and what I did in the past. seriousco.de should should give a short overview about my talents. You can see a <Link to="/timeline">timeline</Link> which basically is my CV. There’s a list of <Link to="/projects">projects</Link> I’ve done in the past or I am doing right now. Last but not least there is this blog where I can write about things I experience as a developer on a daily basis.</p>
    <p>All in all this website builds my digital business card with an easy possibility to <Link to="/contact">contact me</Link> - I hope you enjoy it!</p>
    <Header size="2">Hosting & deploying changes</Header>
    <p>First it was pretty clear to me that I would host this website on my private vServer which I also use to serve other projects of mine like <Link to="/projects/risingfarms-online">Rising Farms Online</Link>. But the hugo docs provide a <Link to="https://gohugo.io/tutorials/github-pages-blog/">simple tutorial</Link> for deploying your website with GitHub Pages and because I already planned to publish the code on GitHub that was perfect for me.</p>
    <p>With GitHub Pages you don’t have to worry about anything like complex deployment, traffic or as already stated - security. You just have to commit the changes (the prebuilt .html files) into a separate branch named “gh-pages” and push it to your repository, it’s that simple.</p>
    <p>Here’s the neat deployment script I am using:</p>
    <Code language="bash">
      {`
        #!/bin/bash

        echo -e "Deploying updates to GitHub..."
        
        # Build the project.
        hugo
        
        # Add changes to git.
        git add -A
        
        # Commit changes.
        msg="rebuilding site \`date\`"
        if [ $# -eq 1 ]
          then msg="$1"
        fi
        git commit -m "$msg"
        
        # Push source and build repos.
        git push origin master
        git subtree push --prefix=public git@github.com:dsumer/seriousco.de.git gh-pages
      `}
    </Code>
    <Header size="2">Conclusion</Header>
    <p>I really like it! I cannot compare it with jekyll or other static website generators because hugo is the first and only one I’ve used. I like the easy deployment cycle with GitHub and I don’t even have to worry about hosting and traffic. Local development works out of the box and the docs are sufficient.</p>
    <p>If you don’t have much experience with web development or want to build a rich web application I don’t think hugo’s the right shot for you. But if you like to build your website on your own and keep it simple, I would definitely recommend you to try out hugo! Especially together with GitHub Pages it performs outstandingly good. <IconWink/></p>
  </EntryLayout>
);

export default Page;