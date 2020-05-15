import React, {} from 'react';
import DotaApi from './DotaApi';

class HeroList extends React.Component
{
    _isMounted = false;
  

    constructor(props){
        super(props);    
        this.state = {
            hasGotTopPlayers: false,
            heroes: [],
            id: -1,
            topPlayers: []
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
        if (this._isMounted) {
            this.setState({             
                heroes: response
            })
        }
    })
    .catch(err => {console.log(err);
    });    
}

getTopPlayers(id) {
    this.state.hasGotTopPlayers = false;
    
    fetch("https://api.opendota.com/api/rankings?hero_id=" + id, {
        "method": "GET"
        }
    )
    .then(response => response.json())
    .then(response => {
        if(this._isMounted) {
            this.setState({             
                topPlayers: response,
                hasGotTopPlayers: true
            })            
        }
    })
    .catch(err => {console.log(err)
    });
}

componentDidMount(){
    this._isMounted = true;
    this.getHeroData();    
    this.getTopPlayers();
}

componentWillUnmount(){
    this._isMounted = false;
}

GetId(id){
    this.setState({
        id: id
    })  
    this.getTopPlayers(id);   
}

render() {    

    const heroNames = this.state.heroes.map((item, key) => <button className="btn-groups" onClick={ this.GetId.bind(this, item.id) } key={item.id}>{item.localized_name}</button>);
       
    return (       
        <div className = "main-display">
            <div>{ CenteredGrid(heroNames) }</div> 
            { this.showTopPlayers() }                      
        </div>
        );
    }  

    showTopPlayers() {
        if(this.state.hasGotTopPlayers) { 
            return <div>{ HeroId(this.state.heroes, this.state.id, this.state.topPlayers) }</div>
        }
        else {
            return <div class="loader"></div>
        }
    }
}


export default HeroList;

function CenteredGrid(heroNames) {
    return (    
        [ heroNames ]                                        
    )
}



function HeroId(selectedHero, id, players){
    if(id !== -1)
    {                
        return <DotaApi hero = { selectedHero.find(x => x.id === id) } topPlayers = { players }  />
    }
}

function SortList(heroNameArray){
    heroNameArray.sort(function(a, b) {
        var textA = a.localized_name.toUpperCase();
        var textB = b.localized_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
}