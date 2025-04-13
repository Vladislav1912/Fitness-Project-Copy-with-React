import React from 'react';
import Main from './main/Main'
import NewHere from './NewHere/NewHere';
import InfoMain from './Info/InfoMain';
import ClassItem from './Classes/ClassItem';
import Wizztop from './WhyChoseUs/Wizztop';
import '../assets/css/homepage.css';


export default function Home() {
  return (
    <div>
         <Main/>
         <NewHere />
         <InfoMain />
         <ClassItem />
         <Wizztop />
         
    </div>
  )
}
