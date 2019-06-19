import React ,{Component} from 'react';
import './page.css';


class OmsHome extends Component {
    render() {
        return (
           <div>
               <div class="split left">
                   <img src="./images/pathshalawall.jpg" alt="Pathshala Wall" />
                </div>

                <div class="split right">
                    <h2>What do you want to create?</h2>
                    <button onClick = "www.facebook.com">Campaign</button>
                    <br /><br />
                    <button onClick = "www.youtube.com">Offer</button>
                </div>
           </div>
        )
    }
}

export default OmsHome;