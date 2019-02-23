import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useComponentSize from '@rehooks/component-size';
import Header from '../components/header';
import Link from '../components/link';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaUser
} from 'react-icons/fa';

import './timeline.less';

function daysBetween(date1, date2) {
  //Get 1 day in milliseconds
  const one_day = 1000*60*60*24;

  // Convert both dates to milliseconds
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  const difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

function getHeight(days) {
  return Math.ceil(days / 6);
}
const birthDate = new Date(1993, 3, 6);
const preHeight = 40;

const Note = ({position, style, children}) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);

  let marginLeft = 25;
  if (position === 'left') {
    marginLeft = -(size.width + 25)
  }

  return (
    <div ref={ref} className={`note ${position}`} style={{marginTop: -(size.height / 2), marginLeft, ...style}}>
      {children}
    </div>
  )
};
Note.defaultProps = {
  position: 'right'
};
Note.propTypes = {
  position: PropTypes.string
};

const NoteDate = ({date}) => {
  if (date) {
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    return (
      <>{month}/{date.getFullYear()}</>
    );
  }
  return 'now';
};

const DateText = ({text, fromDate, toDate}) => {
  if (!!text) {
    return text;
  } else {
    return (
      <><NoteDate date={fromDate}/> - <NoteDate date={toDate}/></>
    );
  }
};

const Entry = ({fromDate, toDate, notePosition, color, title, noteStyle, dateText, children}) => {
  const daysSinceBirth = daysBetween(birthDate, fromDate);

  let height = 0;
  if (toDate) {
    const days = daysBetween(fromDate, toDate);
    height = getHeight(days);
  } else {
    const now = new Date();
    height = preHeight;
    if (fromDate > now) {
      height -= getHeight(daysBetween(now, fromDate));
    } else {
      height += getHeight(daysBetween(fromDate, now)) - 1;
    }
  }

  return (
    <div className="entry" style={{height: height, bottom: getHeight(daysSinceBirth), background: color}}>
      <Note position={notePosition} style={noteStyle}>
        <div>{title}</div>
        <div className="note-description">{children}</div>
        <div className="note-date"><FaCalendarAlt/> <DateText text={dateText} fromDate={fromDate} toDate={toDate} /></div>
      </Note>
    </div>
  )
};
Entry.propTypes = {
  notePosition: PropTypes.string
};

const Page = () => {
  const daysSinceBirth = daysBetween(birthDate, new Date());
  const height = getHeight(daysSinceBirth) + preHeight;

  return (
    <>
      <Header link="">Timeline</Header>
      <blockquote>
        This is my timeline - from birth to my current job at Catalysts GmbH.
      </blockquote>
      <div className="timeline" style={{height}}>
        <div className="now" style={{top: preHeight}}/>
        <Entry
          color="#d22827"
          fromDate={new Date(2015, 7, 1)}
          title={<Link to="https://www.catalysts.cc/en/">Catalysts GmbH</Link>}
        >
          <FaCode/> Software Engineer<br/>
          <FaUser/> Teamlead
        </Entry>
        <Entry
          color="#b0ba01"
          notePosition="left"
          fromDate={new Date(2014, 2, 3)}
          toDate={new Date(2015, 6, 28)}
          title={<Link to="https://www.lieberlieber.com/">LieberLieber Software GmbH</Link>}
          noteStyle={{maxWidth: 250, whiteSpace: 'normal'}}
        >
          <FaCode/> Software Developer
        </Entry>
        <Entry
          color="#2ce6cc"
          fromDate={new Date(2013, 8, 1)}
          toDate={new Date(2014, 2, 1)}
          title="Military service"
        >
          <FaMapMarkerAlt/> <Link to="http://www.bundesheer.at/english/">Austrian Armed Forces</Link>
        </Entry>
        <Entry
          color="#cc7114"
          notePosition="left"
          fromDate={new Date(2007, 8, 1)}
          toDate={new Date(2013, 5, 31)}
          title="Technical high school"
        >
          <FaMapMarkerAlt/> <Link to="https://www.htl-ottakring.at/">HTL Ottakring</Link>
        </Entry>
        <Entry
          color="#1455cc"
          fromDate={new Date(2003, 8, 1)}
          toDate={new Date(2007, 5, 31)}
          title="Grammar school"
        >
          <FaMapMarkerAlt/> <Link to="http://www.keimgasse.at/">BRG Keimgasse</Link>
        </Entry>
        <Entry
          color="#9f14cc"
          notePosition="left"
          fromDate={new Date(1999, 8, 1)}
          toDate={new Date(2003, 5, 31)}
          title="Primary school">
          <FaMapMarkerAlt/> <Link to="https://www.vsvoesendorf.ac.at/">Vösendorf</Link>
        </Entry>
        <Entry
          color="#0f7ba9"
          fromDate={new Date(1993, 4, 1)}
          toDate={new Date(1993, 4, 1)}
          dateText="06.04.1993"
          title="Birth">
          <FaMapMarkerAlt/> <Link to="http://www.wienkav.at/kav/wil/">Wilhelminenspital</Link>
        </Entry>
        <div className="future-blur" style={{height: preHeight}}/>
      </div>
    </>
  )
};

export default Page;