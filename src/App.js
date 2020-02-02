import React from 'react';
import './styles/common.scss';
import Header from './component/Header/Header';
import SimpleSlider from './component/SimpleSlider/SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
    </div>
  );
}

export default App;
