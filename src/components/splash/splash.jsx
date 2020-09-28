import React from 'react';
import './splash.scss'
import cafe from "../../images/cafe.gif";
import openFree from '../../images/openfree.gif';
import ramenShop from '../../images/ramenShop.gif'
import backStreets from '../../images/backstreets.gif'
// import fish from '../../images/fish.gif';
import profilePic from '../../images/profile1.jpeg'
import cherry from '../../images/cherry3.gif';
import Footer from './footer';
// import side from '../../images/sideshot.jpg'
import Type from './type';
import resume from"./resume.pdf"
class Splash extends React.Component{
    constructor(props){
        super(props);

        this.state={
            backgroundNumber: 0,
            backgroundPics: [backStreets,cafe,openFree,ramenShop],
            time: 0,
            blinkerRemoved: false,
            about: false,
            interval: null,
            welcome:true
        }
        this.removeBlinker=this.removeBlinker.bind(this);
        this.timer=this.timer.bind(this);
        this.aboutMe=this.aboutMe.bind(this);
    }
    componentDidMount(){
        const rand  = Math.floor(Math.random() * this.state.backgroundPics.length);
        // this.timer();
        this.setState({backgroundNumber: rand});
    }
    timer(){
        setInterval(this.removeBlinker,2735)
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
    toSite(site){
        return(e)=>{
            if(site==='Git'){
                window.open("https://github.com/dylanpwong",'blank');
            }else{
                window.open("https://www.linkedin.com/in/dylan-wong-857139127/",'blank');
            }

        }
    }
    aboutMe(){
        clearInterval(1);
        this.setState({about:true,welcome:false})
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
                <i onClick={this.toSite('Linkedin')}className="devicon-linkedin-plain colored iButtons"></i>
                <i onClick={this.toSite('Git')} className="devicon-github-plain-wordmark colored iButtons"></i>
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
                  <Type about={this.state.about} welcome={this.state.welcome}/>
                  <div className='buttonsContainer'>{/*/ buttons*/}
                    <div onClick={this.aboutMe}className='buttons'>About me</div>
                    <a className ='Resume buttons'href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    <div className='buttons'>Projects</div>
                  </div>
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