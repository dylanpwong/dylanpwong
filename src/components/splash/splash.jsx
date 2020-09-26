import React from 'react';
import './splash.scss'
import cafe from "../../images/cafe.gif";
import openFree from '../../images/openfree.gif';
import ramenShop from '../../images/ramenShop.gif'
import backStreets from '../../images/backstreets.gif'
import fish from '../../images/fish.gif';
import profilePic from '../../images/profile1.jpeg'
import cherry from '../../images/cherry3.gif';
import Footer from './footer';
class Splash extends React.Component{
    constructor(props){
        super(props);

        this.state={
            backgroundNumber: 0,
            backgroundPics: [backStreets,cafe,openFree,ramenShop,fish]
        }
    }
    componentDidMount(){
        const rand  = Math.floor(Math.random() * this.state.backgroundPics.length);
        this.setState({backgroundNumber: rand});
    }

    render(){
        // let m = magicCss
        return (
          <div className="mainContentContainer">
              <div className ='NavBar'> 
                  Dylan Wong
              </div>
              <div>
                  <img src={cherry} alt=""/>
              </div>
              <div className='profilePictureContainer'>
                <img className='profilePic' src={profilePic} alt=""/>
                <div className='typeWritterContainer'> {/* type writter container */}
                    <div className='typewritter'>
                        <h1>
                            Welcome, and Hello to my Personal Site!
                        
                        </h1>
                    </div>
                </div>
              </div>
                <Footer/>
              {/* background image */}
            <div className='backgroundImgContainer'> {/*pos abs ignores flex*/}
              <img className='backgroundImg' src={this.state.backgroundPics[this.state.backgroundNumber]} alt="cafe gif!" />
            </div>
          </div>
        );
    }
}

export default Splash;