import Head from 'next/head';

import styles from '../styles/Home.module.css'
import User_Join_Form from '../components/user-form-component/user-join-form.js'
import User_Create_Form from '../components/create-game-component/create-form.js'

import TruthLiesCard from '../components/truthLiesCard/truthLiesCard'
import FlexCard from '../components/flexCard/flexCard'
import TruthsAndLiesMain from '../components/truthsAndLiesMain/truthsAndLiesMain';

export default function Test() {

  return (
    <div>
      <TruthsAndLiesMain/>
    </div>
  );
}