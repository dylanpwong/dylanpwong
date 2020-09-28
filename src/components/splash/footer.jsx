import React from'react';
// import { render } from 'react-dom';
import './footer.scss'

const Footer =(props)=>{

        return (
          <div className="footerWrapper">
            <div className="footerContent">
              <div className="contact">
                <div>Contact me!</div>
                <div>Email: dylanpwong@gmail.com</div>
                <div>phone: 845-826-5416</div>
              </div>
              Try Refreshing to see a different background!
            </div>
            <div className="footerContainer">
              {/* <div>
                    Dylan Wong
                </div> */}
            </div>
          </div>
        );
    
}

export default Footer