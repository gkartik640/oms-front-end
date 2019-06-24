import React ,{Component} from 'react';
import './page.css';


class OmsHome extends Component {
    render() {
        return (
           <div>
               <div class="split left">
                   <img src="C:\Users\Kartik\Pictures\Camera Roll\28392.jpg" alt="Pathshala Wall" />
                </div>

                <div class="split right">
                    <h2>What do you want to create?</h2>
                    <input type = 'button' value = 'Campaign' onClick = "location.href = 'www.facebook.com'" />
                    <br /><br />
                    <input type = 'button' value = 'Offer' />
                </div>
           </div>
        )
    }
}

export default OmsHome;