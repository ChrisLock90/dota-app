import React, {} from 'react';


class DotaComponent extends React.Component {  
    constructor(props){
    super(props);   
    this.state = {        
        topPlayers: props.topPlayers,
        heroDetails: props.hero,
        LaneRoles: []
    };
}

componentWillReceiveProps(props){
    this.setState({ heroDetails: props.hero })
    this.setState({ topPlayers: props.topPlayers })    
}

render() {    
    return (
        <div className="grid-container">
            <div className="grid-item-hero"> { heroName(this.state.heroDetails) } { heroInformation(this.state.heroDetails) } </div>
            <div className="grid-item-player"> { showTopPlayers(this.state.topPlayers, this.state.heroDetails) } </div>                                                                                                                                    
        </div>
    );
}
}

export default DotaComponent;

function heroName(name) {
    return <label>{ name.localized_name } Information</label>
}
    
function heroInformation(heroInfo) { 
    return(
        <div className="hero-text">
            <label>Primary Attribute: </label>{ heroInfo.primary_attr }<p />             
            <label>Attack Type: </label>{ heroInfo.attack_type }<p />             
            <label>Roles: </label>{ heroInfo.roles }<p />         
            <label>Legs: </label>{ heroInfo.legs }<p />
        </div>        
    );
}

function showTopPlayers(players, heroName) {   
    if(players && players.rankings && players.rankings.length > 0) {
    return(
        <div className="player-text">
            <label>Current Top 5 { heroName.localized_name } Players</label><p /> 
            <label>1. { players.rankings[0].personaname }</label>
            <label>2. { players.rankings[1].personaname }</label>
            <label>3. { players.rankings[2].personaname }</label>
            <label>4. { players.rankings[3].personaname }</label>
            <label>5. { players.rankings[4].personaname }</label>
        </div>
    )
}
}



