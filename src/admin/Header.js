import React ,{Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div id = "head">
            <br />
            <br />
            <br />
            <a href = "www.github.com" target = "blank">
              <img src = "C:\Users\Kartik\react-learning\oms-front-end\src\logo-pathshala.png" 
              align = "left" height = "60px" width = "300px" alt = "Logo"></img></a>
            <div align = "right">
              <inline>
                <a href = "#" margin = " 10px">Home</a>
                <a href = "#" margin = " 10px">About us</a>
                <a href = "#" margin = " 10px">Contact Us</a>
              </inline>
            </div> 
          </div>
        )
    }
}

export default Header;