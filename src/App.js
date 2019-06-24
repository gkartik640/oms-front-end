import React ,{Component} from 'react';
import './App.css';
import OmsHome from './Page1';
import Header from './admin/Header.js';
import OfferCreate from './offerComponent/offerForm.js'



class App extends Component{
  render() {
    return(
      <div>
         <OfferCreate />
      </div>
    )
  }

}


export default App;
