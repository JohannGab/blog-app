import React from 'react';
import SelectBlog from './components/SelectBlog';
import './components/style.scss'



class App extends React.Component {
render() { 
  return (
  <>
  <div className="selectTitle">
    <h1 className="title">Mon blog</h1>
    <h2>Selectionnez votre blog</h2>
  </div>
  <SelectBlog />
  
  </>
  );
}
}

export default App;
