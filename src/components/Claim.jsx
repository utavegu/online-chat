import React from 'react';
import PropTypes from 'prop-types';
import s from './Claim.module.css';
import { Link } from 'react-router-dom';

function Claim({claim, match}) {
  return (
    <Link to={`/conversation/${claim.id}`}>
      <li className={s.claim}>
        <div className={s.content}>
          <h3 className={s.heading}>{claim.heading.length >= 23 ? claim.heading.substring(0, 23) + "..." : claim.heading}</h3>
          <p className={s.location}>{claim.location}</p>
          <time className={s.date}>&#8226;{claim.date}</time>
        </div>
      </li>
    </Link>
  )
}

Claim.propTypes = {

}

export default Claim

