import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

import './wabiz/fonts/NotoSansKR/NotoSansKR.css'
import './wabiz/css/layout.css'
import './wabiz/css/common.css'
import './wabiz/css/plugin.css'

function App() {
  return (
    <div className="wrap">
      <Header />
      <Content />
    </div>
  );
}

export default App;
