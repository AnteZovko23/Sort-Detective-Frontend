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

import Parser from 'html-react-parser/dist/html-react-parser'

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import DataService from "../variables/DataService"
import lodash from "lodash"
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";

var parse = require('html-react-parser')

class Dashboard extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props);
  
   
    this.state = {

      allLabels:[],
      movementsData:[],
      movementsLabels:[],
      comparisonsData:[],
      comparisonsLabels:[],
      timeData:[],
      timeLabels:[],
      bigChartData: "worstTime",
      updateCounter: 0,
      avgCaseGraphData: [],
      avgCaseLabel: '',
      bestCaseGraphData:[],
      bestCaseLabel:"",
      worstCaseGraphData:"",
      worstCaseLabel:"",
      buttonAlgorithm:"",
      currLabel:" ",
      algorithmInfo:" "
    };
    this.getData = this.getData.bind(this)
    this.clearData = this.clearData.bind(this)
    this.cancelRequests = this.cancelRequests.bind(this)

  }

  

  setBgChartData = name => {
    

    this.setState({
      bigChartData: name

    });

    

  };

  cancelRequests(){
    DataService.cancelRequests()
  }
  

  clearData(listSize, buttonAlgorithm){
   
    this.getData(listSize, buttonAlgorithm)
   
   
    
   
  }

    

  getData(listSize, buttonAlgorithm) {
     
  
    this.setState(prevState => ({
      buttonAlgorithm: buttonAlgorithm
    }))

   

    DataService.getInOrder(listSize, buttonAlgorithm).then((response) => {
      
      this.setState(prevState => ({
        allLabels: [...prevState.movementsLabels, response[1][0]]
      }))

            this.setState(prevState => ({
            movementsLabels: [...prevState.movementsLabels, response[1][0]]
          }))
          this.setState(prevState => ({
            movementsData: [...prevState.movementsData, response[0][0]],
            updateCounter: prevState.updateCounter + 1
            }))


          this.setState(prevState => ({
            comparisonsLabels: [...prevState.comparisonsLabels, response[1][0]]
          }))
          this.setState(prevState => ({
            comparisonsData: [...prevState.comparisonsData, response[0][1]],
            updateCounter: prevState.updateCounter + 1
        }))


        this.setState(prevState => ({
          timeLabels: [...prevState.timeLabels, response[1][0]]
        }))
      this.setState(prevState => ({
        timeData: [...prevState.timeData, response[0][2]],
        updateCounter: prevState.updateCounter + 1
      }))

        this.setState(prevState => ({
          avgCaseGraphData: [...prevState.avgCaseGraphData, response[3]],
          bestCaseGraphData: [...prevState.bestCaseGraphData, response[7]],
          worstCaseGraphData: [...prevState.worstCaseGraphData, response[5]],
          avgCaseLabel:response[2],
          worstCaseLabel:response[4],
          bestCaseLabel:response[6],
          currLabel: this.state.avgCaseLabel,
          bigChartData:"worstTime"
  
        }))
     

      
    
      })
      DataService.getAlmostInOrder(listSize, buttonAlgorithm).then((response) => {
        
        this.setState(prevState => ({
          allLabels: [...prevState.movementsLabels, response[1][0]]
        }))
  
              this.setState(prevState => ({
              movementsLabels: [...prevState.movementsLabels, response[1][0]]
            }))
          this.setState(prevState => ({
            movementsData: [...prevState.movementsData, response[0][0]],
            updateCounter: prevState.updateCounter + 1
        }))

        this.setState(prevState => ({
          comparisonsLabels: [...prevState.comparisonsLabels, response[1][0]]
        }))
        this.setState(prevState => ({
          comparisonsData: [...prevState.comparisonsData, response[0][1]],
          updateCounter: prevState.updateCounter + 1
      }))


      this.setState(prevState => ({
        timeLabels: [...prevState.timeLabels, response[1][0]]
      }))
    this.setState(prevState => ({
      timeData: [...prevState.timeData, response[0][2]],
      updateCounter: prevState.updateCounter + 1
    }))
    this.setState(prevState => ({
      avgCaseGraphData: [...prevState.avgCaseGraphData, response[3]],
      bestCaseGraphData: [...prevState.bestCaseGraphData, response[7]],
      worstCaseGraphData: [...prevState.worstCaseGraphData, response[5]],
      avgCaseLabel:response[2],
      worstCaseLabel:response[4],
      bestCaseLabel:response[6],
      currLabel: this.state.avgCaseLabel,
      bigChartData:"worstTime"

    }))
  
        })
        DataService.getReverseOrder(listSize, buttonAlgorithm).then((response) => {
          

          this.setState(prevState => ({
            allLabels: [...prevState.movementsLabels, response[1][0]]
          }))
    

                this.setState(prevState => ({
                movementsLabels: [...prevState.movementsLabels, response[1][0]]
              }))
            this.setState(prevState => ({
              movementsData: [...prevState.movementsData, response[0][0]],
              updateCounter: prevState.updateCounter + 1
          }))

          this.setState(prevState => ({
            comparisonsLabels: [...prevState.comparisonsLabels, response[1][0]]
          }))
          this.setState(prevState => ({
            comparisonsData: [...prevState.comparisonsData, response[0][1]],
            updateCounter: prevState.updateCounter + 1
        }))


        this.setState(prevState => ({
          timeLabels: [...prevState.timeLabels, response[1][0]]
        }))
      this.setState(prevState => ({
        timeData: [...prevState.timeData, response[0][2]],
        updateCounter: prevState.updateCounter + 1
      }))
          
      this.setState(prevState => ({
        avgCaseGraphData: [...prevState.avgCaseGraphData, response[3]],
        bestCaseGraphData: [...prevState.bestCaseGraphData, response[7]],
        worstCaseGraphData: [...prevState.worstCaseGraphData, response[5]],
        avgCaseLabel:response[2],
        worstCaseLabel:response[4],
        bestCaseLabel:response[6],
        currLabel: this.state.avgCaseLabel,
        bigChartData:"worstTime"
  
      }))
    
          })
          DataService.getRandomOrder(listSize, buttonAlgorithm).then((response) => {

            
            this.setState(prevState => ({
              allLabels: [...prevState.movementsLabels, response[1][0]]
            }))
        

                  this.setState(prevState => ({
                  movementsLabels: [...prevState.movementsLabels, response[1][0]]
                }))
              this.setState(prevState => ({
                movementsData: [...prevState.movementsData, response[0][0]],
                updateCounter: prevState.updateCounter + 1
            }))

            this.setState(prevState => ({
              comparisonsLabels: [...prevState.comparisonsLabels, response[1][0]]
            }))
            this.setState(prevState => ({
              comparisonsData: [...prevState.comparisonsData, response[0][1]],
              updateCounter: prevState.updateCounter + 1
          }))
  
  
          this.setState(prevState => ({
            timeLabels: [...prevState.timeLabels, response[1][0]]
          }))
        this.setState(prevState => ({
          timeData: [...prevState.timeData, response[0][2]],
          updateCounter: prevState.updateCounter + 1
        }))

        this.setState(prevState => ({
          avgCaseGraphData: [...prevState.avgCaseGraphData, response[3]],
          bestCaseGraphData: [...prevState.bestCaseGraphData, response[7]],
          worstCaseGraphData: [...prevState.worstCaseGraphData, response[5]],
          avgCaseLabel:response[2],
          worstCaseLabel:response[4],
          bestCaseLabel:response[6],
          currLabel: this.state.avgCaseLabel,
          bigChartData:"worstTime"
    
        }))
       
            })

            this.setState({
              allLabels:[],
              movementsData:[],
              movementsLabels:[],
              comparisonsData:[],
              comparisonsLabels:[],
              timeData:[],
              timeLabels:[],
              avgCaseGraphData:[],
              bestCaseGraphData:[],
              worstCaseGraphData:[],
              avgCaseLabel:"",
              bestCaseLabel:"",
              worstCaseLabel:"",
              currLabel:" ",
              algorithmInfo:" "
            })
          this.forceUpdate()    
        

  }
  // shouldComponentUpdate() {
  //   // return this.state.shouldUpdate;
  // }

  // componentDidMount() {

  componentWillUnmount() {

    this._isMounted = false

  }

    componentDidMount(){

      this._isMounted = true

    }
  //   // this.getData()
  //   // this.setState({allLabels:lodash.zip(this.state.comparisonsLabels,this.state.movementsLabels,this.state.timeLabels)})
      
  // }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                     
                      <h1 className="card-category">Time Complexity</h1>
                      <CardTitle tag="h2">Algorithm: {this.state.buttonAlgorithm.replace("Sort", " Sort")}</CardTitle>
                     {this.state.currLabel !== undefined && <CardTitle tag="h2">{this.state.currLabel.replace("f(n) = ", "")}</CardTitle>}

                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "worstTime"
                          })}
                          onClick={() =>{
                            this.setBgChartData("worstTime"); 
                            this.setState({currLabel: this.state.worstCaseLabel})
                          }}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Worst Case Time Complexity - O
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "avgTime"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() =>{
                            this.setBgChartData("avgTime"); 
                            this.setState({currLabel: this.state.avgCaseLabel})
                          }}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Average Time Complexity - Θ
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "bestTime"
                          })}
                          onClick={() =>{
                            this.setBgChartData("bestTime"); 
                            this.setState({currLabel: this.state.bestCaseLabel})
                          }}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Best Case Time Complexity - Ω
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.bigChartData === "avgTime" && <Line
                      // data={chartExample1[this.state.bigChartData]}
                      data = {canvas => {
                        let ctx = canvas.getContext("2d");
                    
                        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                    
                        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
                    
                        return {
                          labels:[1, 2, 3, 4, 5, 6, 7, 8, 9,10],
                          datasets: [
                            {
                              label: "f(x)",
                              fill: true,
                              backgroundColor: gradientStroke,
                              borderColor: "#1f8ef1",
                              borderWidth: 2,
                              borderDash: [],
                              borderDashOffset: 0.0,
                              pointBackgroundColor: "#1f8ef1",
                              pointBorderColor: "rgba(255,255,255,0)",
                              pointHoverBackgroundColor: "#1f8ef1",
                              pointBorderWidth: 20,
                              pointHoverRadius: 4,
                              pointHoverBorderWidth: 15,
                              pointRadius: 4,
                              data: this.state.avgCaseGraphData[0]
                            }
                          ]
                        };
                      }
                      }
                      options={chartExample1.options}
                    />
                    
                    }
                    {this.state.bigChartData === "worstTime" && <Line
                      // data={chartExample1[this.state.bigChartData]}
                      data = {canvas => {
                        let ctx = canvas.getContext("2d");
                    
                        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                    
                        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
                    
                        return {
                          labels:[1, 2, 3, 4, 5, 6, 7, 8, 9,10],
                          datasets: [
                            {
                              label: "f(x)",
                              fill: true,
                              backgroundColor: gradientStroke,
                              borderColor: "#1f8ef1",
                              borderWidth: 2,
                              borderDash: [],
                              borderDashOffset: 0.0,
                              pointBackgroundColor: "#1f8ef1",
                              pointBorderColor: "rgba(255,255,255,0)",
                              pointHoverBackgroundColor: "#1f8ef1",
                              pointBorderWidth: 20,
                              pointHoverRadius: 4,
                              pointHoverBorderWidth: 15,
                              pointRadius: 4,
                              data: this.state.worstCaseGraphData[0]
                            }
                          ]
                        };
                      }
                      }
                      options={chartExample1.options}
                    />
                    
                    }
                        {this.state.bigChartData === "bestTime" && <Line
                      // data={chartExample1[this.state.bigChartData]}
                      data = {canvas => {
                        let ctx = canvas.getContext("2d");
                    
                        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                    
                        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
                    
                        return {
                          labels:[1, 2, 3, 4, 5, 6, 7, 8, 9,10],

                          datasets: [
                            {
                              label: "f(x)",
                              fill: true,
                              backgroundColor: gradientStroke,
                              borderColor: "#1f8ef1",
                              borderWidth: 2,
                              borderDash: [],
                              borderDashOffset: 0.0,
                              pointBackgroundColor: "#1f8ef1",
                              pointBorderColor: "rgba(255,255,255,0)",
                              pointHoverBackgroundColor: "#1f8ef1",
                              pointBorderWidth: 20,
                              pointHoverRadius: 4,
                              pointHoverBorderWidth: 15,
                              pointRadius: 4,
                              data: this.state.bestCaseGraphData[0]
                            }
                          ]
                        };
                      }
                      }
                      options={chartExample1.options}
                    />
                    
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Metrics</h5>
                  <CardTitle tag="h3">
                    Movements
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Bar
                      data={
                        canvas => {
                       
                          let ctx = canvas.getContext("2d");
                      
                          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                      
                          gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
                          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.3)");
                          gradientStroke.addColorStop(0, "rgba(119,52,169,0.2)"); //purple colors
                      
                          return {
                            labels: this.state.movementsLabels,
                            datasets: [
                              {
                                fill: true,
                                backgroundColor: gradientStroke,
                                hoverBackgroundColor: gradientStroke,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                data: this.state.movementsData,
                              }
                            ]
                          };
                        }
                        }
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Metrics</h5>
                  <CardTitle tag="h3">
                    Comparisons
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={
                        canvas => {
                       
                          let ctx = canvas.getContext("2d");
                      
                          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                      
                          gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
                          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.3)");
                          gradientStroke.addColorStop(0, "rgba(119,52,169,0.2)"); //purple colors
                      
                          return {
                            labels: this.state.comparisonsLabels,
                            datasets: [
                              {
                                fill: true,
                                backgroundColor: gradientStroke,
                                hoverBackgroundColor: gradientStroke,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                data: this.state.comparisonsData,
                              }
                            ]
                          };
                        }
                        }
                       
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Metrics</h5>
                  <CardTitle tag="h3">
                       Time
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Bar
                      data={
                        canvas => {
                       
                          let ctx = canvas.getContext("2d");
                      
                          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                      
                          gradientStroke.addColorStop(1, "rgba(72,72,176,0.5)");
                          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.3)");
                          gradientStroke.addColorStop(0, "rgba(119,52,169,0.2)"); //purple colors
                      
                          return {
                            labels: this.state.timeLabels,
                            datasets: [
                              {
                                fill: true,
                                backgroundColor: gradientStroke,
                                hoverBackgroundColor: gradientStroke,
                                borderColor: "#1f8ef1",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                data: this.state.timeData,
                              }
                            ]
                          };
                        }
                        }
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6" md="12">
              <Card>
               <CardHeader>
                  {/* <CardTitle tag="h3">Algorithm Explanation</CardTitle> */}
                  
                  
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                    
                    </thead>
                    <tbody>{parse(this.state.algorithmInfo)}</tbody>
                    </Table>
                    </CardBody>
              </Card>
            </Col>
            {/* <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                <CardTitle tag="h3">
                       Algorithm Information
                  </CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Algorithm Explanation
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Facts about the Algorithm
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Update the Documentation</p>
                            <p className="text-muted">
                              Dwuamish Head, Seattle, WA 8:47 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">GDPR Compliance</p>
                            <p className="text-muted">
                              The GDPR is a regulation that requires businesses
                              to protect the personal data and privacy of Europe
                              citizens for transactions that occur within EU
                              member states.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip457194718"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip457194718"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Solve the issues</p>
                            <p className="text-muted">
                              Fifty percent of all respondents said they would
                              be more likely to shop at a company
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip362404923"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip362404923"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Release v2.0.0</p>
                            <p className="text-muted">
                              Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip818217463"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip818217463"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Export the processed files</p>
                            <p className="text-muted">
                              The report also shows that consumers will not
                              easily forgive a company once a breach exposing
                              their personal data occurs.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip831835125"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip831835125"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Arival at export process</p>
                            <p className="text-muted">
                              Capitol Hill, Seattle, WA 12:34 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip217595172"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip217595172"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            <Col lg="6" md="12">
              <Card>
               <CardHeader>
                  <CardTitle tag="h3">Sort Data</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>List Type</th>
                        <th>Movements</th>
                        <th>Comparisons</th>
                        <th>Time</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                   
                      {
                        
                        lodash.zip(this.state.allLabels,this.state.comparisonsData,this.state.movementsData, this.state.timeData)
                              .map(
                                  data => 
                                  <tr>
                                  <td>{data[0]}</td>
                                  <td>{DataService.getDataFormatted(data[1])}</td>
                                    <td>{DataService.getDataFormatted(data[2])}</td>
                                    <td>{DataService.getDataFormatted(data[3] + " ms")}</td>
                                    
                                  </tr>
        
                                )
                        
                              

                     

                      }
                    
                    </tbody>
                    </Table>
                    </CardBody>
                {/* <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Movements</th>
                        <th>Comparisons</th>
                        <th>Time</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>{this.state.movementsData}</td>
                        <td>{this.state.comparisonsData}</td>
                        <td>{this.state.timeData}</td>
                        
                      </tr>
                    </tbody> */}
                    {/* <CardHeader>
                  <CardTitle tag="h4"> Table</CardTitle>
                </CardHeader>
                    <thead className="text-primary">
                      <tr>
                        <th>Movements</th>
                        <th>Comparisons</th>
                        <th>Time</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>{this.state.movementsData}</td>
                        <td>{this.state.comparisonsData}</td>
                        <td>{this.state.timeData}</td>
                        
                      </tr>
                    </tbody> */}

                  {/* </Table>
                </CardBody> */}
              </Card>
            </Col>
          </Row>
          <FixedPlugin
          getdata = {this.getData}
          clearData = {this.clearData}
          cancelRequests = {this.cancelRequests}
          updateCounter = {this.state.updateCounter}
          >

          </FixedPlugin>
        </div>
      </>

    );
  }
}
export default Dashboard;
