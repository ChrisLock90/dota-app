import React, {} from 'react';
import App from '../App';

class DotaComponent extends React.Component {
constructor(props){
    super(props);
    this.state = {
        heroes: []
    };
}

get() {
    fetch("https://api.opendota.com/api/heroes?api_key=B05481EB573059BDB0136454432E27F6", {
        "method": "GET"
        }
    )
    .then(response => response.json())
    .then(response => {
        this.setState({ heroes: response[0] })
    })
    .catch(err => {console.log(err);
    });    
}

componentDidMount(){
    this.get();
}

render() {
    return (
        <div>
            <h1>Service Component View</h1>            
            { this.state.heroes.name } 
        </div>
    );
}
}

export default DotaComponent;

