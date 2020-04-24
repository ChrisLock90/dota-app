import React, {} from 'react';
import DotaApi from './DotaApi';

class HeroList extends React.Component
{
constructor(props){
    super(props);
    this.state = {
        heroes: [],
        id: -1
    };    
}
  
getHeroData() {
    fetch("https://api.opendota.com/api/heroes?api_key=B05481EB573059BDB0136454432E27F6", {
        "method": "GET"
        }
    )
    .then(response => response.json())    
    .then(response => {        
        SortList(response);
        this.setState({             
            heroes: response
        })
    })
    .catch(err => {console.log(err);
    });    
}

componentDidMount(){
    this.getHeroData();    
}

GetId(id){
    this.setState({
        id: id
    })
     
}

render() {    

    const heroNames = this.state.heroes.map((item, key) => <button onClick={ this.GetId.bind(this, item.id) } key={item.id}>{item.localized_name}</button>);
    
    return (       
        <div>
        <ul>{ heroNames }</ul>       
        { HeroId(this.state.heroes, this.state.id) }
        </div>
    );
}

}

export default HeroList;
//pass clicked id to DotaApi.js
//function for when we have selected a hero id
function HeroId(selectedHero, id){
    if(id !== -1)
        return <div><DotaApi hero = { selectedHero[id] } /></div> 
}

function SortList(heroNameArray){
    heroNameArray.sort(function(a, b) {
        var textA = a.localized_name.toUpperCase();
        var textB = b.localized_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
}


