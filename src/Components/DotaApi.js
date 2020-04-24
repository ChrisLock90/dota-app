import React, {} from 'react';

class DotaComponent extends React.Component {
constructor(props){
    super(props);
    this.state = {        
        topPlayers: [],
        heroDetails: props.hero
    };
}

getTopPlayers(){
    fetch("https://api.opendota.com/api/rankings?hero_id=" + this.state.heroDetails.id, {
        "method": "GET"
        }
    )
    .then(response => response.json())
    .then(response => {
        this.setState({             
            topPlayers: response 
        })
    })
    .catch(err => {console.log(err)
    });
}

componentDidMount(){
    this.getTopPlayers();
}


render() {    
    return (
        <div>
            { heroName(this.state.heroDetails) }
            { techiesInformation(this.state.heroDetails) }
            { showTopPlayers(this.state.topPlayers, this.state.heroDetails) }         
        </div>
    );
}
}

export default DotaComponent;

function heroName(props) {
    return <h2>{ props.localized_name } Information</h2>
}
    
function techiesInformation(props) { 
    return(
        <div>
            <label>Primary Attribute: </label>{ props.primary_attr }<p />             
            <label>Attack Type: </label>{ props.attack_type }<p />             
            <label>Roles: </label>{ props.roles }<p />         
            <label>Legs: </label>{ props.legs }<p />
        </div>        
    );
}

function showTopPlayers(players, heroName) {   
    if(players.rankings !== null && players.rankings !== undefined) {
    return(
        <div>
            <h2>Current Top 5 { heroName.localized_name } Players</h2><p /> 
            <label>1. </label>{ players.rankings[0].personaname }<p />
            <label>2. </label>{ players.rankings[1].personaname }<p />
            <label>3. </label>{ players.rankings[2].personaname }<p />
            <label>4. </label>{ players.rankings[3].personaname }<p />
            <label>5. </label>{ players.rankings[4].personaname }<p />
        </div>
    )
}
}
