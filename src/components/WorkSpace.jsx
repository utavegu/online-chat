import React from 'react';
import s from './WorkSpace.module.css';
import Control from './Control';
import Claims from './Claims';

export default function WorkSpace() {
  return (
    <main className={s.work_space}>
      <Control />
      <Claims />
    </main>
  )
}
