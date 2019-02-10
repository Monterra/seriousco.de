import React from 'react';
import Header from '../components/header';
import { Link } from 'gatsby';

import './projects.less';

const ProjectCard = ({title, comingsoon, tags, shortname, link, children}) => {
  return (
    <Link to={link} title={title} className={`card ${shortname}`}>
      <div className="title">
        <div className="image"/>
        {title}
        {comingsoon && <div className="comingsoon">
          <div>Coming Soon</div>
        </div>}
      </div>
      <div className="content">
        <div className="tags">
          {tags.map((tag) => '#' + tag).join(' ')}
        </div>
        {children}
      </div>
    </Link>
  );
};

const ProjectsPage = () => (
  <>
    <Header link="">Projects</Header>
    <blockquote>
      Here you can get an overview of the projects I have created or where I was decisively involved.
    </blockquote>
    <div className="card-wrapper">
      <ProjectCard
        title="Rising Farms Online"
        shortname="rfo"
        tags={['typescript', 'nodejs', 'pixijs', 'angular2']}
        link="/projects/risingfarms-online"
      >
        A multiplayer farmsimulation <br/> written in typescript - my baby.
      </ProjectCard>
      <ProjectCard
        title="Pespila"
        comingsoon={true}
        shortname="pespila"
        link="/projects/#"
        tags={['coffeescript', 'nodejs', 'react', 'express']}
      >
        Prototype for a <br/> “social media network”.
      </ProjectCard>
      <ProjectCard
        title="Driving License Trainer"
        shortname="drivinglicense"
        link="/projects/driving-license-trainer"
        tags={['javascript', 'nodejs', 'jquery', 'express']}
      >
        Nodejs application which helps you learning for your driving license test.
      </ProjectCard>
    </div>
  </>
);

export default ProjectsPage;