import React from 'react';
import './splash.scss'
import cafe from "../../images/cafe.gif";
import openFree from '../../images/openfree.gif';
import ramenShop from '../../images/ramenShop.gif'
import backStreets from '../../images/backstreets.gif'
import cyberPunk from '../../images/cyberpunk.gif';
import goodfish from '../../images/goodfish.gif';
import outsideFlag from '../../images/outsideFlag.gif';
// import fish from '../../images/fish.gif';
// import profilePic from '../../images/profile1.jpeg'
import cherry from '../../images/cherry3.gif';
import Footer from './footer';
import side from '../../images/sideshot.jpg'
import Type from './type';
import resume from"./resume.pdf";
import steam from'../../projectImages/steamss.png';
import royal from '../../projectImages/resizedRC.png';
import konosuba from '../../projectImages/gameplay.png';
import deception from '../../projectImages/deceptionGamePage.png';
class Splash extends React.Component{
    constructor(props){
        super(props);

        this.state={
            backgroundNumber: 0,
            backgroundPics: [backStreets,cafe,openFree,ramenShop,cyberPunk,goodfish,outsideFlag],
            time: 0,
            blinkerRemoved: false,
            about: false,
            interval: null,
            welcome:true,
            switch: false,
            project:false,
            cherry: true,
            role: ["A Fullstack Developer   ", "A Frontend Developer   ", "A Web Designer  ","A Software Engineer   ",
                    "A Team Player   ","A Fullstack Engineer   ","A Critical Thinker   ","A Backend Engineer   "],
            currRole:0,
            roleIt: 0,
            forward: true
        }
        this.removeBlinker=this.removeBlinker.bind(this);
        this.timer=this.timer.bind(this);
        this.aboutMe=this.aboutMe.bind(this);
        this.toProjects=this.toProjects.bind(this);
        this.homeContentSetter=this.homeContentSetter.bind(this);
        this.cherry=this.cherry.bind(this);
        this.buttons=this.buttons.bind(this);
        this.typeWritter=this.typeWritter.bind(this)
    }
    componentDidMount(){
        const rand  = Math.floor(Math.random() * this.state.backgroundPics.length);
        // this.timer();
        document.mySelf = setInterval(this.typeWritter,100)
        this.setState({backgroundNumber: rand});
    }
    componentWillUnmount(){
        clearInterval(document.mySelf);
        clearInterval(document.myInterval);
    }
    typeWritter(){
        let ele =document.getElementById("iam");
        let word = this.state.role[this.state.currRole].split("");
        // debugger;
        if(this.state.forward){
            ele.append(word[this.state.roleIt]);
        }else{
            ele.innerHTML=(word.join("").slice(0,this.state.roleIt))
        }
        if(this.state.forward && this.state.roleIt + 1  < word.length){
            this.setState({roleIt: this.state.roleIt + 1})
        }else if(!this.state.forward &&this.state.roleIt>0){
            this.setState({roleIt: this.state.roleIt - 1})
        }
            else{
                if(!this.state.forward){
                    this.setState({
                      forward: !this.state.forward,
                      currRole:
                        this.state.currRole + 1 >= this.state.role.length
                          ? 0
                          : this.state.currRole + 1,
                          
                    });
                }else{
                    this.setState({forward: !this.state.forward})
                }
        }

        // this.setState({ currRole: this.state.currRole >= this.state.role.length? 0: this.state.currRole + 1 });
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
        // clearInterval(document.mySelf);
        // for(let inter=2;inter<document.interval;inter++){
        //     clearInterval(inter);
        // }
        clearInterval(document.myInterval);
        // debugger;
        if(this.state.welcome){
            document.getElementById("contentId").innerHTML="";
        }else{
            document.getElementById("contentId").innerHTML="";
        }
        // debugger;
        this.setState({about:!this.state.about,welcome:!this.state.welcome,switch:true})
    }
    toProjects(){
        clearInterval(document.myInterval);
        let element = document.getElementById("cherry");
        element.classList.remove("cherry");
        void element.offsetWidth; // trigger a DOM reflow
        element.classList.add("cherry");
        // document.getElementById('cherry').classList.remove('cherry');
        // document.getElementById("cherry").classList.add('cherry');
        this.setState({project: !this.state.project,cherry:true})
    }
    cherry(){
        if(this.state.cherry){
            return (
              <div>
                <img id="cherry"className="cherry" src={cherry} alt="" />
              </div>
            );
        }else{

        }
    }
    toDemo(type){
        return()=>{
            switch(type){
            case 'steam':
                window.open("https://steamclone.herokuapp.com/#/");
                break;
            case 'royal':
                window.open("https://royalcrossing.herokuapp.com/#/");
                break;
            case 'deception':
                window.open("https://deception.herokuapp.com/#/");
                break;
            case 'konosuba':
                window.open("https://dylanpwong.github.io/javascriptProject/");
                break;
                default:
            }
        }
        // window.open("https://google.com");
    }

    homeContentSetter(){
        if(this.state.project){
            return (
              <>
                <div>
                  <div className="Projectheader">Projects</div>
                  <div className="projectContainer">
                    <div onClick={this.toDemo("steam")} className="strawberry">
                      <h1>Steam Clone</h1>
                      <div>Click For Demo!</div>
                      <img className="projectPic" src={steam} alt="" />
                      <div>A clone of the popular online store Steam</div>
                    </div>

                    <div onClick={this.toDemo("royal")}>
                      <h1>Royal Crossing</h1>
                      <div>Click For Demo!</div>
                      <img className="projectPic" src={royal} alt="" />
                      <div>
                        A clone of the popular story sharing website RoyalRoad
                      </div>
                    </div>
                    <div onClick={this.toDemo("deception")}>
                      <h1>Deception</h1>
                      <div>Click For Demo!</div>
                      <img className="projectPic" src={deception} alt="" />
                      <div>
                        An online version of Deception Murder in HongKong. A
                        Card game where players are pitted agaisnt one another
                        to discover who commited the crime.
                      </div>
                    </div>
                    <div onClick={this.toDemo("konosuba")}>
                      <h1>Konosuba Fan Game</h1>
                      <div>Click For Demo!</div>
                      <img className="projectPic" src={konosuba} alt="" />
                      <div>
                        A top down Beat'em Up based off the popular anime
                        Konosuba!
                      </div>
                    </div>
                  </div>
                </div>
                {this.buttons()}
              </>
            );
        }else{

        
        return (
          <div className="profilePictureContainer">
            <img className="profilePic" src={side} alt="" />
            <div className="typeWritterContainer">
              {" "}
              {/* type writter container */}
              <div className="typewritter">
                <Type
                  aboutMe={this.aboutMe}
                  about={this.state.about}
                  welcome={this.state.welcome}
                  switch={this.state.switch}
                  project={this.state.project}
                />
                {this.buttons()}
              </div>
            </div>
          </div>
        );
        }
    }
    buttons(){
        return (
          <div className="buttonsContainer">
            {/*/ buttons*/}
            <div onClick={this.aboutMe} className={this.state.project?"none":"buttons"}>
              { !this.state.about ? "About me" :"Back"}
            </div>
            <a
              className="Resume buttons"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <div onClick={this.toProjects} className="buttons">
              {this.state.project?"back":"Projects"}
            </div>
          </div>
        );
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
              <div id="iam" className="iam"></div>
            </div>
            {this.cherry()}
           {this.homeContentSetter()}
            <Footer />
            {/* background image */}
            <div className="backgroundImgContainer">
              {" "}
              {/*pos abs ignores flex*/}
              <img
                className="backgroundImg"
                // src={outsideFlag}
                src={this.state.backgroundPics[this.state.backgroundNumber]}
                alt="cafe gif!"
              />
            </div>
          </div>
        );
    }
}

export default Splash;