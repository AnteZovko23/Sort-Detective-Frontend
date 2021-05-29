/*!

=========================================================
* Sort Detective
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim, Ante Zovko (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim, Ante Zovko

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// reactstrap components
import { Button } from "reactstrap";
import SliderInput from "./SliderInput.jsx"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AlgorithmChoice from "./AlgorithmChoice.jsx"
import Loading from "./Loading.jsx"

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    // this.sortOnClick = this.sortOnClick.bind(this)
    this.sortOnClick = this.sortOnClick.bind(this)
    this.cancelRequests = this.cancelRequests.bind(this)
    this.sliderData = this.sliderData.bind(this)
    this.algorithmChoice = this.algorithmChoice.bind(this)
    this.stopLoading = this.stopLoading.bind(this);
    // this.clearData = this.clearData.bind(this)
    this.state = {
      classes: "dropdown show-dropdown",
      isDisabled: false,
      listSize: 10000,
      buttonAlgorithm: "BubbleSort",
      isLoading: false,
      updateCounter: this.props.updateCounter

    };

  
  }
  handleClick = () => {
    if (this.state.classes === "dropdown show-dropdown") {
      this.setState({ classes: "dropdown show-dropdown show" });
    } else {
      this.setState({ classes: "dropdown show-dropdown" });
    }
  };
  sortOnClick() {
    this.setState({isDisabled:true})
    // this.state.isLoading = true;
    this.setState(prevState => ({
      updateCounter: prevState.updateCounter + 1
    }))
    this.cancelRequests()
    setTimeout(() => this.props.clearData(this.state.listSize, this.state.buttonAlgorithm), 1);
    setTimeout(() => this.setState({ isDisabled: false }), 2000);
    
  }

  clearData() {

    this.props.clearData()

  }

  cancelRequests(){
    this.props.cancelRequests()
  }

  sliderData(value) {
    
    this.state.listSize = value

 }

 algorithmChoice(value){
  this.state.buttonAlgorithm = value

 }

 stopLoading() {

  this.setState({isLoading:false})

 }

 componentDidUpdate(prevProps, prevState){

  if(prevProps.updateCounter !== this.props.updateCounter){

    this.setState({
      updateCounter: this.props.updateCounter
    })

  }

 }


  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
          <MuiThemeProvider>
           <AlgorithmChoice
           algorithmchoice = {this.algorithmChoice}>
             
           </AlgorithmChoice>

            <SliderInput
            sliderdata = {this.sliderData}>
              
            </SliderInput>

            </MuiThemeProvider>
            <li className="button-container">
              <Button
                onClick={this.sortOnClick}
                href=""
                color="primary"
                block
                disabled={this.state.isDisabled}
                className="btn-round"
              >
                SORT
              </Button>
              <Button
                color="default"
                block
                className="btn-round"
                outline
                onClick={() => {
                  this.cancelRequests();
                  this.stopLoading();
                }}>
                CANCEL SORT
              </Button>
              <br></br>
              <div style={{display: 'flex', justifyContent: 'center'}}>
              {this.state.updateCounter  % 12 !== 0 && <Loading
              ></Loading>}
              </div>
             
            </li>
            {/* <li className="header-title">Want more components?</li>
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-pro-react"
                className="btn-round"
                disabled
                block
                color="danger"
              >
                Get pro version
              </Button>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
