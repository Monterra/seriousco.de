+++
date = "2016-11-01T11:18:48+01:00"
draft = false
title = "Driving License Trainer"
description = "Nodejs application which helps you learning for your driving license test."
image = "driving_license_trainer.png"
tags = ["javascript","nodejs","express","jquery"]
background = "#EDE8D3"
color = "black"
+++

<a class="image-link" href="/images/driving_license_trainer_1.png" title="Driving License Trainer">
    {{< img src="/images/driving_license_trainer_1.png" class="left round-rectangle" width="300" >}}
</a>
It was back in 2013, when I did my military service at the austrian armed forces and started learning for my driving license test. I was in a small office with a friend of mine and we had much spare time which we could spend as we like.

Most of the time I spent with my baby [Rising Farms Online](../risingfarms-online), but I also wanted to achieve my driving license while I was at the army because I knew I wouldn't have as much free time later on when I will be working full time as a software developer.

Okay, I had to learn and I wanted to arrange it as comfortable as possible - that was the moment when it came to my mind: why not code my own driving license trainer? So I could improve my coding skillz and learn for the test at the same time and hey - what's more motivating than learning with your own piece of software? :smiley:

## What is it about?  {#about}
---

<a class="image-link" href="/images/driving_license_trainer.png" title="Scorepoint System">
    {{< img src="/images/driving_license_trainer.png" class="right round-rectangle" width="300" >}}
</a>
Driving License Trainer is a nodejs application which helps you learning for the theory part (Austria specific) of your driving license test. It is written in javascript, makes use of the express framework and renders html with jade templates.


The look and feel of the application is very similiar to the official test software because I wanted to get used to it while learning.

For me, the most important feature is the scorepoint system. For each question you have a scorepoint saved in a separate file. Fill out the right answers for a question and a scorepoint will be added to it. If you choose the wrong answers, the scorepoint of the question will be reset to zero. My goal was to bring all categories/questions to at least scorepoint 4 so i could be sure to know as many questions as possible when I do the real test.

## What was the challenge? {#challenge}
---

> With some luck I can fetch the questions from their server.

One of the toughest problems was to get the official questions for the driving license test. After some googling I stumbled upon the [ÖAMTC online test](http://www.oeamtc.at/portal/fuehrerscheintest) and saw that they are working with the right set of questions. It was an online test written in JavaScript - "with some luck I can fetch the questions from their server" I thought. After some time examining the source code I found where they serve the content files - each question as a single json file named by the question number - beginning by one.

I didn't know how many questions they provided exactly, so i wrote a nodejs script which tries to fetch the json files from 1.json to xxx.json. You can find this script in the [<i class="fa fa-github"></i> GitHub repository](https://github.com/dsumer/driving-license-trainer) of this project. I ended up with around 2000 questions - very nice!

There was also some other information which could be fetched like the images of every question and the type of the test. After fetching all the data needed, I started implementing the main logic.

{{< note title="Github" >}}
Check out the project on [<i class="fa fa-github"></i> Github](https://github.com/dsumer/driving-license-trainer).
{{< /note >}}

## Conclusion
---

The Driving License Trainer was a small project which helped me learning and improving my coding skills. With the project I gathered experience with the express framework and it gave me a better know-how of nodejs overall.

Feel free to use the driving license trainer on your own! Unfortunately I can't assure that the questions are correct. Many questions have changed since 2013 and I don't know if ÖAMTC has kept their questions up-to-date. Anyways, you can try to run the refresh.js script to fetch the newest questions from the ÖAMTC server.

```bash
$ cd ~/driving-license-trainer/public/data
$ node refresh.js
```