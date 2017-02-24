+++
date = "2017-01-01T12:00:00+01:00"
draft = false
title = "Creating this website, my first journey with hugo"
image = "blog1.jpg"
shareimage = "blog1.jpg"
description = "My first blog post is about creating this website. I talk about my journey with hugo, a static website engine written in go."
author = "dominiksumer"
+++

About two months ago I stumbled upon [hugo](http://gohugo.io/), a static website generator written in go. It provides a basic <span class="tooltip" title="Command Line Interface">CLI</span> which helps creating your website and its content. After taking a first look I asked myself “Why should I want to create a static website?!”. Instead I could use a great dynamic <span class="tooltip" title="Content Managment System">CMS</span> with all the fancy plugins - Wordpress, Typo3, Drupal. But I kept on reading the docs and some experiences of the community.

> Having your first hugo demo website running can be reached in seconds - even faster than you can say the word “quidditch”.

At this time I've already planned to step up and create this website a year ago (the domain is parked since December 2015). I basically knew what I want it to be and look like, but I hadn't thought about how I will build it. As I moved on in the [quickstart guide](https://gohugo.io/overview/quickstart/) of hugo, it came to my mind that this static website generator may be the right choice for the first version of my website - and here we are. :grinning:

## How is it to build a website with hugo?
---

Hugo comes with a standard template engine and a nice set of features. It offers you the basic tools for creating a website / blog. Having your first hugo demo website running can be reached in seconds - even faster than you can say “quidditch”.

```bash
$ hugo new site bookshelf
$ cd bookshelf/themes
$ git clone https://github.com/dim0627/hugo_theme_robust.git
$ cd ..
$ hugo server --theme=hugo_theme_robust
```
With the command “hugo server” you can simply run a local development server which watches for changes and automatically refreshes the page.

The [docs](http://gohugo.io/overview/introduction/) and community behind hugo are sufficient. You mostly find the things you’re searching for and the documentation is pretty well structured. It also is under (heavy) development - the latest [release 0.18](https://github.com/spf13/hugo/releases/tag/v0.18.1) is two days old (from the current point of writing this blogpost).

If you want to know how seriousco.de is built you can take a look at the [GitHub repository](https://github.com/dsumer/seriousco.de). I am using the [hugo material theme](http://themes.gohugo.io/theme/material-docs/) which is quite nice but I wanted to change some things in order to fulfill my purpose. I forked the [original repository](https://github.com/digitalcraftsman/hugo-material-docs) so you can see the changes in a [separate repository](https://github.com/dsumer/hugo-material-docs).

As you can see by the [initial commit](https://github.com/dsumer/seriousco.de/commit/75c2e59a85b4554a638a335faba60bc48089d372) I’ve started to work on this website on the first of November 2016. It took me two months from the first day to the official publish day with some pauses in between. A pretty nice performance in my opinion and it demonstrates that you can quickly have a production website up and running with hugo.

## A static website? That sounds horrible!
---

Hugo doesn’t come with a fancy <span class="tooltip" title="What You See Is What You Get">WYSIWYG</span> editor or tons of plugins which bloat up your website. You don’t have a rich backend where you configure everything and write your blog posts. There is no database running in the background serving the content of your website. Instead hugo creates prebuilt .html files for you which can be served via HTTP.

<a class="image-link" href="/images/first-journey-with-hugo.png" title="">
    {{< img src="/images/first-journey-with-hugo.png" class="right round-rectangle" width="300" >}}
</a>
That may sound quite horrible to some of you and there are some types of websites where such a static website is not sufficient - as a web developer I understand this. But for some applications hugo is enough or even outperforms dynamic content managment systems and that’s the case for the current version of seriousco.de.

If you just want to build a simple website you should really give hugo (or any other static website generator) a shot. If you host your site on [GitHub Pages](https://pages.github.com/) you basically don’t have to worry about security issues (if you can keep your GitHub account safe). There is no backend where people can change the contents of your website and if some evil scriptkiddy wants to take down your website, they have to attack GitHub - so you can hide behind your big brother. For some special features like a contact formular or a comments area you can use services like formspring or disqus.

## What’s your purpose?
---

I basically wanted a website where people can see what I am currently working on and what I did in the past. seriousco.de should should give a short overview about my talents. You can see a [timeline](/timeline) which basically is my CV. There’s a list of [projects](/projects) I’ve done in the past or I am doing right now. Last but not least there is this blog where I can write about things I experience as a developer on a daily basis.

All in all this website builds my digital business card with an easy possibility to [contact me](/contact) - I hope you enjoy it!

## Hosting & deploying changes
---

First it was pretty clear to me that I would host this website on my private vServer which I also use to serve other projects of mine like [Rising Farms Online](/projects/risingfarms-online). But the hugo docs provide a [simple tutorial](https://gohugo.io/tutorials/github-pages-blog/) for deploying your website with GitHub Pages and because I already planned to publish the code on GitHub that was perfect for me.

With GitHub Pages you don’t have to worry about anything like complex deployment, traffic or as already stated - security. You just have to commit the changes (the prebuilt .html files) into a separate branch named “gh-pages” and push it to your repository, it’s that simple.

Here’s the neat deployment script I am using:
```bash
#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo

# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
git subtree push --prefix=public git@github.com:dsumer/seriousco.de.git gh-pages
```

## Conclusion
---
I really like it! I cannot compare it with jekyll or other static website generators because hugo is the first and only one I’ve used. I like the easy deployment cycle with GitHub and I don’t even have to worry about hosting and traffic. Local development works out of the box and the docs are sufficient.

If you don’t have much experience with web development or want to build a rich web application I don’t think hugo’s the right shot for you. But if you like to build your website on your own and keep it simple, I would definitely recommend you to try out hugo! Especially together with GitHub Pages it performs outstandingly good. :wink: