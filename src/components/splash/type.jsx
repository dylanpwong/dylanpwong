import React from'react'


class Type extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          about:
            "An emerging new software engineer, hungering to dive into new technologies, and collaborative enviorments. With a degree in computer science and a certifacate in gamification, I am ready to hit the ground running. Experienced in a multitude of languages such as Ruby, Java, C, C++, C#,J avaScript, SQL, HTML, CSS, and ReactJs. Program quality focused with valuable insight into trend awareness into new technologies. Team mindset oriented, in favor of Agile principles.",
          currLetter: 0,
          updated: false,
          interval: null,
          welcome:
            "Welcome, and Hello! Software Engineer with specialization in Fullstack Development",
        };
        this.aboutFiller=this.aboutFiller.bind(this);
        this.welcomeFiller=this.welcomeFiller.bind(this);
    }

    componentDidUpdate(){
        if(this.props.about && !this.state.updated){
            setInterval(this.aboutFiller,40.5)
        }else if(this.props.welcome &&!this.state.updated){
            setInterval(this.welcomeFiller, 40.5);
        }
    }

    aboutFiller(){
        const content = this.state.about.split("");
       const ele = document.getElementById("aboutId");
       if(this.state.currLetter<content.length){
           ele.append(content[this.state.currLetter])
           this.setState({currLetter: this.state.currLetter + 1,updated: true})
       }else{
           clearInterval(1);
       }
    }
    welcomeFiller(){
         const content = this.state.welcome.split("");
       const ele = document.getElementById("welcomeId");
       if(this.state.currLetter<content.length){
           ele.append(content[this.state.currLetter])
           this.setState({currLetter: this.state.currLetter + 1,updated: true})
       }else{
           clearInterval(1);
       }
    }

    render(){
        if(this.props.welcome){
            return(
                <div id='welcomeId' className='aboutContent'>

                </div>
            )
        }
        if(this.props.about){
            return(
                <div id='aboutId' className='aboutContent'>

                </div>
            )

        }else{
            return(
                <>
                <h1 id="firstSent"className='blinker'>Welcome, and Hello!</h1>
                      <div id="SecondSent"className='blinker2 secondSent'>Software Engineer with specialization in Fullstack Development</div>
                      
                       </>
            )
        }
    }
}

export default Type;