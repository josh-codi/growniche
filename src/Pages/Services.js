import React, { Component } from 'react'
import LandingBanner from '../components/LandingBanner/LandingBanner';
import AllItems from '../components/AllItems/AllItems';
import Backdrop from '../components/Backdrop/Backdrop';


export default class Services extends Component {
    // state = {
    //   name: 'this.props.name'
    // }
    constructor(props){
        super(props);
        this.state={
          name: '',
          img: '',
          price: '',
          popUp: false
        }

        
    }
    
  render() {
    return (
      <div>
          
          <LandingBanner height={'400px'} header={'All Books'}/><br/><br/>
          <AllItems showName={(popName,popImage,popPrice, popPopUp)=>{
                                    this.setState({name: popName})
                                    this.setState({img: popImage})
                                    this.setState({price: popPrice})
                                    this.setState({popUp: popPopUp})
                                    }}/>
          
          {this.state.popUp && (
            <div>
            {/* <h1>Home{this.state.name}</h1>
            <h3>{this.state.price}</h3>
            <img src={this.state.img}/> */}
            <Backdrop onClick={()=>alert('yeay')}/>
            </div>
          )}
      </div>
    )
  }
}
