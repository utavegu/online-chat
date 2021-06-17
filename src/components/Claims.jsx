import React, { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';
import s from './Claims.module.css';
import Claim from './Claim';
import claimsData from '../data/claims.json';

function Claims(props) {
  const {isConversation, setIsConversation} = useContext(Context);
  setIsConversation(false)

  return (
    <ul className={s.claims_list}>
      {claimsData.map(claim => <Claim claim={claim} key={claim.id} />)}
    </ul>
  )
}

Claims.propTypes = {

}

export default Claims

