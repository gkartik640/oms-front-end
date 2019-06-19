import React , {Component} from 'react';

class Offer extends Component {
    render() {
        const {offers} = this.props;


        return(
           <div>
                offers.map(offer => {
                   const { id , type , createdBy , status} = offer;
                   return (
                        <div key={id}>
                           <table>
                               <tr>
                                   <td>{id}</td>
                                   <td>{type}</td>
                                   <td>{createdBy}</td>
                                   <td>{status}</td>
                               </tr>
                           </table>
                       </div>
                   )
               }
               )
           </div>
        )
    }
}

export default Offer;