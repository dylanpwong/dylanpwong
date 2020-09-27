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
import side from '../../images/sideshot.jpg'
class Splash extends React.Component{
    constructor(props){
        super(props);

        this.state={
            backgroundNumber: 0,
            backgroundPics: [backStreets,cafe,openFree,ramenShop,fish],
            time: 0,
            blinkerRemoved: false
        }
        this.removeBlinker=this.removeBlinker.bind(this);
        this.timer=this.timer.bind(this);
    }
    componentDidMount(){
        const rand  = Math.floor(Math.random() * this.state.backgroundPics.length);
        this.timer();
        this.setState({backgroundNumber: rand});
    }
    timer(){
        setInterval(this.removeBlinker,2375000)
    }

    removeBlinker(){
        // if(this.state.tim)
        // this.setState({time: this.state.time + 1})
        if(!this.state.blinkerRemoved){
            const ele = document.getElementById("firstSent");
            ele.classList.remove("blinker");
            this.setState({blinkerRemoved: true});
        }
    }

    render(){
        // let m = magicCss
        return (
          <div className="mainContentContainer">
            <div className="navContainer">
              <div className="NavBar"></div>
              {/* <img className ='imgSize'src={side} alt=""/> */}
              <div className="navName">
                Dylan Wong 
                <i className="devicon-linkedin-plain colored"></i>
                <i className="devicon-github-plain-wordmark colored"></i>
              </div>
            </div>
            <div>
              <img className="cherry" src={cherry} alt="" />
            </div>
            <div className="profilePictureContainer">
              <img className="profilePic" src={profilePic} alt="" />
              <div className="typeWritterContainer">
                {" "}
                {/* type writter container */}
                <div className="typewritter">
                  <h1 id="firstSent"className='blinker'>Welcome, and Hello!</h1>
                </div>
              </div>
            </div>
            <Footer />
            {/* background image */}
            <div className="backgroundImgContainer">
              {" "}
              {/*pos abs ignores flex*/}
              <img
                className="backgroundImg"
                src={this.state.backgroundPics[this.state.backgroundNumber]}
                alt="cafe gif!"
              />
            </div>
          </div>
        );
    }
}

export default Splash;