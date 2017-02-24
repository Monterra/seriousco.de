+++
date = "2017-02-24T20:30:00+01:00"
draft = false
title = "Google Hashcode 2017"
image = "blog3.png"
shareimage = "blog3_share.png"
description = "I've participated at the Google Hashcode together with three colleagues and it was quite awesome!"
author = "dominiksumer"
+++

Yesterday (23rd February 2017) I've participated at the Google Hashcode together with <span class="tooltip" title="Philipp, Marton & Christoph">three colleagues</span> and it was quite awesome! 

<a class="image-link" href="/images/hashcode1.jpg" title="Google Hashcode">
    {{< img src="/images/hashcode1.jpg" class="center round-rectangle" width="450" >}}
</a>

The <a href="https://hashcode.withgoogle.com/">Google Hashcode</a> is a coding contest organized by (youdontsay) Google. Everyone who lives in Europe, the Middle East or Africa can participate and try to solve the problem statement provided. Only teams of 2 - 4 people can register and try to reach a top score. The top scoring teams will be invited to the final round which takes place at Paris.

In the first round - the online qualification - teams can participate from anywhere with their own computer. To get a bit of a contest feeling some teams come together at a place and form a "hub". There is an overall scoreboard and you can filter it based on your hub, so it adds a bit of a challenge for the local teams to be the best in their hub.

---

As you might imagine, we hosted a hub at our <a href="https://www.catalysts.cc/en">Catalysts</a> office in vienna and around 30 people participated in our hub. At 18:30 CET the contest got introduced by a livestream where they presented some interesting stats. All participants listened to the livestream and waited for the announcement of the problem statement. As soon as the statement was announced all teams rushed to their places and started to work on the challenge.

<a class="image-link" href="/images/hashcode2.jpg" title="Google Hashcode">
    {{< img src="/images/hashcode2.jpg" class="center round-rectangle" width="450" >}}
</a>

The problem statement was about YouTube, respectively about streaming videos. Given was a data center where all videos are stored and the information of all endpoints (which videos they watch and how often). You also got a list of available cache servers which endpoints they are connected to and what's the latency between them. 

> Have you ever wondered what happens behind the scenes when you watch a YouTube video?

The challenge was to save as much latency as possible by distributing the most watched videos on the cache servers near to the endpoints. The point is that cache servers only have a specific amount of capacity, so they can't store all videos at once. You have to decide which video should be placed on the right cache server(s).

We've implemented some different algorithms and scored pretty nice. All in all we've reached the 2nd place in our hub and the 5th place Austria-wide.

<a class="image-link" href="/images/hashcode_scoreboard.png" title="Google Hashcode">
    {{< img src="/images/hashcode_scoreboard.png" class="center round-rectangle" width="450" >}}
</a>

It was a lot of fun and a tricky challenge, I can highly recommend to participate at the Hashcode next year!