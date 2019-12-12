import React from 'react';
import EntryLayout from '../../../components/entry-layout';
import Link from '../../../components/link';
import Tooltip from '../../../components/tooltip';
import TextImage from '../../../components/text-image';
import image1 from '../../../images/hashcode1.jpg';
import image2 from '../../../images/hashcode2.jpg';
import image3 from '../../../images/hashcode_scoreboard.png';

export const frontmatter = {
  title: 'Google Hashcode 2017',
  path: 'google-hashcode-2017',
  date: '2017-02-24',
  description: 'I\'ve participated at the Google Hashcode together with three colleagues and it was quite awesome!',
  image: 'blog3.png',
  backgroundColor: '#a8c6fa'
};

const Page = () => (
  <EntryLayout frontmatter={frontmatter}>
    <p>Yesterday (23rd February 2017) I’ve participated at the Google Hashcode together with <Tooltip text="Philipp, Marton & Christoph">three colleagues</Tooltip> and it was quite awesome!</p>
    <p>
      <TextImage alignment="center" src={image1} alt="Google Hashcode" width="500"/>
    </p>
    <p>The <Link to="https://hashcode.withgoogle.com/">Google Hashcode</Link> is a coding contest organized by (youdontsay) Google. Everyone who lives in Europe, the Middle East or Africa can participate and try to solve the problem statement provided. Only teams of 2 - 4 people can register and try to reach a top score. The top scoring teams will be invited to the final round which takes place at Paris.</p>
    <p>In the first round - the online qualification - teams can participate from anywhere with their own computer. To get a bit of a contest feeling some teams come together at a place and form a “hub”. There is an overall scoreboard and you can filter it based on your hub, so it adds a bit of a challenge for the local teams to be the best in their hub.</p>
    <hr/>
    <p>As you might imagine, we hosted a hub at our <Link to="https://www.catalysts.cc/en">Catalysts</Link> office in vienna and around 30 people participated in our hub. At 18:30 CET the contest got introduced by a livestream where they presented some interesting stats. All participants listened to the livestream and waited for the announcement of the problem statement. As soon as the statement was announced all teams rushed to their places and started to work on the challenge.</p>
    <p>
      <TextImage alignment="center" src={image2} alt="Google Hashcode" width="500"/>
    </p>
    <p>The problem statement was about YouTube, respectively about streaming videos. Given was a data center where all videos are stored and the information of all endpoints (which videos they watch and how often). You also got a list of available cache servers which endpoints they are connected to and what’s the latency between them.</p>
    <blockquote>Have you ever wondered what happens behind the scenes when you watch a YouTube video?</blockquote>
    <p>The challenge was to save as much latency as possible by distributing the most watched videos on the cache servers near to the endpoints. The point is that cache servers only have a specific amount of capacity, so they can’t store all videos at once. You have to decide which video should be placed on the right cache server(s).</p>
    <p>We’ve implemented some different algorithms and scored pretty nice. All in all we’ve reached the 2nd place in our hub and the 5th place Austria-wide.</p>
    <p>
      <TextImage alignment="center" src={image3} alt="Google Hashcode Scoreboard" width="500"/>
    </p>
    <p>It was a lot of fun and a tricky challenge, I can highly recommend to participate at the Hashcode next year!</p>
  </EntryLayout>
);

export default Page;