import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Calendar from './pages/Calendar';
import NotFound from './pages/NotFound';

import {datas} from './data/riddles_2023';

const App = () => {

  return (
    <>
    <BrowserRouter basename='/advent_calendar'>
        <Routes>
          <Route path={"/"} element={<Calendar datas={datas}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;