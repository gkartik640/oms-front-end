import React ,{Component} from 'react';
import SeachOffer from './searchOffer.js'


class Offers extends Component {
     


    render() {
        return (
            <div>
                <h2 align = "center"> Offer Manager </h2>
                <SeachOffer />
            </div>
        )
    }
}

export default Offers;