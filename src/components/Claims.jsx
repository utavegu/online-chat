import React from 'react';
import PropTypes from 'prop-types';
import s from './Claims.module.css';
import Claim from './Claim';

function Claims(props) {
  return (
    <section className={s.claims}>
      {new Array(4).fill(``).map(claims => <Claim />)}
    </section>
  )
}

Claims.propTypes = {

}

export default Claims

