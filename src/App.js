import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './index.css'

import Nav from './Nav';

function App() {

  const [isActive, setIsActive] = useState(true);
  const [screenMode, setScreenMode] = useState('dark'); 

  return (
    <div className='parentContainer'>
      <Nav isActive={isActive} screenMode={screenMode}/>
      <div className='subContainer'>
      </div>
      <div className='subContainer'>
      </div>
      <div className='subContainer'>
      </div>
      <div className='subContainer' id="experience">
      </div>
    </div>
  );
}

export default App;
library.add(fab, fas, far)