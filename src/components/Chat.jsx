import React from 'react';
import PropTypes from 'prop-types';
import s from './Chat.module.css';
import Claim from './Claim';
import claimsData from '../data/claims.json';
import Message from './Message';

function Chat(props) {
  return (
    <section className={s.chat}>
      {/* {claimsData.map(claim => <Claim claim={claim} key={claim.id} />)} */}
      {new Array(6).fill(``).map(claims => <Message />)}
    </section>
  )
}

Chat.propTypes = {

}

export default Chat

