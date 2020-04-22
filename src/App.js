import React from 'react';
import Techies from './Techies.jpg';
import './App.css';
import DotaApi from './Services/DotaApi';

class App extends React.Component {    
  
  render() {
    return (
      <div className="Dota App">
        <div>
        <img src={Techies} className="Techies" alt="Techies" />
          <p>
            Dota 2 app to view Techies stats
          </p>                             
          <div><DotaApi /></div>          
        </div>           
      </div>        
    );
  }
}

export default App;
