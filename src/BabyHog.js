import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state={
      weight: 0
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  changeEye=()=>{

    if (this.props.color === 'blue'){
      return BlueBaby
    }
    else if(this.props.color ==='sun'){
      return SunBaby
    }
    else if (this.props.color ==='glowing'){
      return GlowingBaby
    }
    return normalBaby
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight:{this.state.weight}</h3>
        <h3>Hobby:{this.props.hobby}</h3>
    <h4>Eye Color:{this.props.color}</h4>
          
        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight}name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.changeEye()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
