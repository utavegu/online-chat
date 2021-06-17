import React from 'react'
import PropTypes from 'prop-types'
import s from './HeaderClaims.module.css';

function HeaderClaims(props) {
  return (
    <>
      <div className={s.options}>
        <button>o</button>
      </div>
      <div className={s.user}>
        <img src="" alt="" width="56" height="56"></img>
        <p>Здравствуйте, <br /> <b>Юзернэйм</b></p>
      </div>
    </>
  )
}

HeaderClaims.propTypes = {

}

export default HeaderClaims

