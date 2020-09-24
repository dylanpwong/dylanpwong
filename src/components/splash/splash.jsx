import React from 'react';
import './splash.scss'
// import cafe from "../../images/cafe.gif";
import backStreets from '../../images/backstreets.gif'
import profilePic from '../../images/profile1.jpeg'
class Splash extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        // let m = magicCss
        return (
          <div className="mainContentContainer">
              <div className ='NavBar'> 
                  Dylan Wong
              </div>
              <div className='profilePictureContainer'>
                <img className='profilePic' src={profilePic} alt=""/>
              </div>
              <div className='typeWritterContainer'> {/* type writter container */}
                <div className='typewritter'>
                    <h1>
                        Welcome
                    </h1>
                </div>
              </div>
            <div className='backgroundImgContainer'> {/*pos abs ignores flex*/}
              <img className='backgroundImg' src={backStreets} alt="cafe gif!" />
            </div>
          </div>
        );
    }
}

export default Splash;