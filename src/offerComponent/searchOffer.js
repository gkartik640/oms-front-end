import React ,{Component} from 'react';

class SeachOffer extends Component {
    state = { Query: ''};

    offerQuery = event => {
        this.setState ({Query: event.target.value})
    }

    handleKey = event =>{
        if(event.key == 'Enter')
        this.searchOffer();
    }

    searchOffer = () =>{
        var sendObject = {
            method: 'POST',
            body: JSON.stringify(this.state.Query),
        }
       
        console.log(sendObject.body[0]);
        var request  = new Request("URL" , sendObject );
        var response = fetch(request);
    }

    render() {
        return (
            <div>
                <input 
                onChange = {this.offerQuery}
                onKeyPress = {this.handleKey}
                placeholder='Search for an offer by id' 
                />
                <button onClick = {this.searchOffer}>Search</button>
            </div> 
        )
    }
}

export default SeachOffer;