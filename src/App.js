import React from 'react';
import './App.css';
import HeroList from './Components/HeroList';

class App extends React.Component {    
  
  render() {
    return (
      <div className="Dota 2 Hero App">
        <div>                                                               
          <div><HeroList /></div>          
        </div>           
      </div>        
    );
  }
}

export default App;
