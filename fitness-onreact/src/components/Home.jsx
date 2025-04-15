import React from 'react';
import Main from './main/Main'
import NewHere from './NewHere/NewHere';
import Info from './Info/Info';
import Wizztop from './WhyChoseUs/Wizztop';
import '../assets/css/homepage.css';
import ClassesList from './Classes/ClassesList';


export default function Home() {
  return (
    <div>
         <Main/>
         <NewHere />
         <Info />
         <ClassesList/>
         <Wizztop />
         
    </div>
  )
}
