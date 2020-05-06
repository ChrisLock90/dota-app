import React, {} from 'react';


class DotaComponent extends React.Component {
    _isMounted = false;

    constructor(props){
    super(props);   
    this.state = {        
        topPlayers: [],
        heroDetails: props.hero,
        LaneRoles: []
    };
}

getTopPlayers(){
    fetch("https://api.opendota.com/api/rankings?hero_id=" + this.state.heroDetails.id, {
        "method": "GET"
        }
    )
    .then(response => response.json())
    .then(response => {
        if(this._isMounted) {
            this.setState({             
                topPlayers: response 
            })
        }
    })
    .catch(err => {console.log(err)
    });
}

componentDidMount(){
    this._isMounted = true;
    this.getTopPlayers();
}

componentWillUnmount(){
    this._isMounted = false;
}

componentWillReceiveProps(props){
    this.setState({ heroDetails: props.hero })
}

render() {    
    return (
        <div className="grid-container">
            <div className="grid-item"> { heroName(this.state.heroDetails) } </div>
            <div className="grid-item"> { heroInformation(this.state.heroDetails) } </div>
            <div className="grid-item"> { showTopPlayers(this.state.topPlayers, this.state.heroDetails) } </div>                                                                                                                                    
        </div>
    );
}
}

export default DotaComponent;

function heroName(name) {
    return <h2>{ name.localized_name } Information</h2>
}
    
function heroInformation(heroInfo) { 
    return(
        <div>
            <label>Primary Attribute: </label>{ heroInfo.primary_attr }<p />             
            <label>Attack Type: </label>{ heroInfo.attack_type }<p />             
            <label>Roles: </label>{ heroInfo.roles }<p />         
            <label>Legs: </label>{ heroInfo.legs }<p />
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



