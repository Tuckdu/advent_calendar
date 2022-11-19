import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Calendar from './pages/Calendar';
import NotFound from './pages/NotFound';

import datas from './data/riddles.json';

const App = () => {

  function checkActivatedDay(){
    // Add property to deactivate day after today
    if(!datas[0].hasOwnProperty('isActivated')){
      const date = new Date();
      // check if we are in december (11)
      if(date.getMonth() === 11){
        datas.forEach(function(part, index){
          this[index]["isActivated"] = this[index]["day"] <= date.getDate()
        }, datas)
      }
    }
    return datas
  }

  return (
    <>
    <BrowserRouter basename='/advent_calendar'>
        <Routes>
          <Route path={"/"} element={<Calendar datas={checkActivatedDay()}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;