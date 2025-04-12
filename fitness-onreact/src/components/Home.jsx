import React from 'react';
import Main from './Main';
import NewHere from './NewHere';
import InfoMain from './InfoMain';
import ClassItem from './ClassItem';
import Wizztop from './Wizztop';
import '../assets/css/homepage.css';


export default function Home() {
  return (
    <div>
         <Main />
         <NewHere />
         <InfoMain />
         <ClassItem />
         <Wizztop />
         
    </div>
  )
}
