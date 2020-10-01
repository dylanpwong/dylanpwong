import React from'react'


class Type extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          about:
            "An emerging new software engineer, hungering to dive into new technologies, and collaborative enviorments. With a degree in computer science and a certifacate in gamification, I am ready to hit the ground running. Experienced in a multitude of languages such as Ruby, Java, C, C++, C#, JavaScript, SQL, HTML, CSS, and ReactJs. Program quality focused with valuable insight into trend awareness into new technologies. Team mindset oriented, in favor of Agile principles.",
          currLetter: 0,
          updated: false,
          aboutUpdated: false,
          interval: null,
          wel:this.props.welcome,
          abo: this.props.about,
          projectUpdated: this.props.project,
          welcome:
            "Welcome, and Hello! Software Engineer with specialization in Fullstack Development",
        };
        this.aboutFiller=this.aboutFiller.bind(this);
        this.welcomeFiller=this.welcomeFiller.bind(this);
    }
    componentDidMount(){
        this.setState({interval:"reload"})//triggers updateFunc
    }

    componentDidUpdate(){
    //    debugger
        if(this.state.wel !== this.props.welcome){
            // debugger
            this.setState({
              currLetter: 0,
              wel: this.props.welcome,
              abo: this.props.about,
              updated: false,
              aboutUpdated: false,
            });
        }else if(this.state.abo !==this.props.about){
            // debugger
            this.setState({
              currLetter: 0,
              wel: this.props.welcome,
              abo: this.props.about,
              aboutUpdated: false,
              updated: false,
            });
        }
        else if(this.props.about && !this.state.aboutUpdated){
            // debugger;
            
           document.myInterval= setInterval(this.aboutFiller,40.5)
        }else if(this.props.welcome &&!this.state.updated){
            // debugger;
            
           document.myInterval = setInterval(this.welcomeFiller, 40.5);
        }
    }
    // componentWillUnmount(){
    //     // this.setState({updated:false,aboutUpdated:false})
    // }

    aboutFiller(){
        // debugger
        const content = this.state.about.split("");
       const ele = document.getElementById("contentId");
       if(this.state.currLetter<content.length){
           ele.append(content[this.state.currLetter])
           this.setState({currLetter: this.state.currLetter + 1,aboutUpdated: true})
       }else{
           clearInterval(1);
       }
    }
    welcomeFiller(){
        if(this.props.welcome){
            const content = this.state.welcome.split("");
          const ele = document.getElementById("contentId");
          if(this.state.currLetter<content.length){
              ele.append(content[this.state.currLetter])
              this.setState({currLetter: this.state.currLetter + 1,updated: true})
          }else{
              clearInterval(1);
          }

        }
    }

    render(){
        // debugger
        if(this.props.welcome){
            return(
                <div id='contentId' className='aboutContent'>

                </div>
            )
        }
        
        else if(this.props.about){
            return(
                <div id='contentId' className='aboutContent'>

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