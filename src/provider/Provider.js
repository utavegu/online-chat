import React, { useState } from 'react';
import Context from '../context/Context';

export default function Provider(props) {

  const [isConversation, setIsConversation] = useState(false)
  
  const allData = {
    isConversation, setIsConversation,
  };

  return (
    <Context.Provider value={allData}>
      {props.children}
    </Context.Provider>
  )
}