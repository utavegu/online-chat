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
      {/* {new Array(6).fill(``).map(claims => <Message />)} */}
      <Message isOperator={true}>Тут, короче, много букв, но статус и время должны быть всегда снизу</Message>
      <Message isOperator={false}>Привет!</Message>
      <Message isOperator={true}>Как дела?</Message>
      <Message isOperator={false}>Как погода?</Message>
      <Message isOperator={true}>АЗАЗА!</Message>
      <Message isOperator={false}>Мне нравятся ноги твои и глаза</Message>
    </section>
  )
}

Chat.propTypes = {

}

export default Chat

