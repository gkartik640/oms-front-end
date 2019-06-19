import React ,{Component} from 'react';
import SocialMedia from './Social.js';

class Footer extends Component{
    render() {
        return (
            <div>
            <hr />
            <div id = "footer">
              <inline>
                  <a href = "#">Career</a>
                  <a href = "#">Contact us</a>
                  <a href = "#">About us</a>
                  <a href = "#">Development</a>
                  <a href = "#">Contribute</a>
              </inline>
              <SocialMedia />
            </div>
            </div>
        )
    }
}

export default Footer;