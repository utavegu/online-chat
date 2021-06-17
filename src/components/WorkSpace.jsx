import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import s from './WorkSpace.module.css';
import Control from './Control';
import Chat from './Chat';
import Input from './Input';
import Modal from './Modal';

export default function WorkSpace() {
  // С архитектурой напарил... ладно, сейчас уже поздно переделывать
  const [modalActive, setModalActive] = useState(false); // "из" забыл
  // Если чат, отображать компонент Input
  const {isConversation, setIsConversation} = useContext(Context);
  console.log(isConversation); 
 
 return (
    <main className={s.work_space}>
      <Control isConversation={isConversation}/>
      <Chat />
      {isConversation && <Input setModalActive={setModalActive}/>}
      {/* Вообще маргины по 24 скорее всего инпуту принадлежат... ладно, пока так */}
      <Modal active={modalActive} setActive={setModalActive}>
        <b>Прикрепить</b>
        <button>Фото и видео</button>
        <button>Заявку</button>
      </Modal>
    </main>
  )
}
