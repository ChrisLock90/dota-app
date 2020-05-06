import React from 'react';
import './App.css';
import HeroList from './Components/HeroList';
import 'bootstrap/dist/css/bootstrap.min.css';

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
