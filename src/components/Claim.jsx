import React from 'react';
import PropTypes from 'prop-types';
import s from './Claim.module.css';

function Claim({claim}) {
  return (
    <div className={s.claim}>
      <div className={s.content}>
        <h3 className={s.heading}>{claim.heading.length >= 23 ? claim.heading.substring(0, 23) + "..." : claim.heading}</h3>
        <p className={s.location}>{claim.location}</p>
        <time className={s.date}>&#8226;{claim.date}</time>
      </div>
    </div>
  )
}

Claim.propTypes = {

}

export default Claim

