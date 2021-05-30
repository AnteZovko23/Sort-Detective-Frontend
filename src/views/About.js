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
import React from "react";
import { unstable_batchedUpdates } from "react-dom";
import {Link} from 'react-router-dom'
// import profilePic from "../assets/img/ante.jpg"
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content" style={{display:'flex', justifyContent:'center'}}>
          
          <Row>
            {/* <Col md="6"> */}
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                      <img
                        alt="ProfilePicture"
                        className="avatar"
                        src={require('../assets/img/ante.jpg').default}
                      />
                      <h5 className="title">Ante Zovko</h5>
                    <p className="description">Backend Software Engineer</p>
                  </div>
                  <div className="card-description">
                  <h4>Education: <a rel="noopener noreferrer" target="_blank" href="https://www.latech.edu/">Louisiana Tech University</a></h4>
                  <h4>Degree: Computer Science</h4>
                  <h4>Concentration: Backend Software Engineering and Computer Engineering</h4>
                  <br></br>
                  <u><h4>About <b>Sort Detective</b></h4></u>
                  <p>This project was originally created by <a rel="noopener noreferrer" target="_blank"  href="http://www.cs.sbu.edu/dlevine/">David Levine, Ph.D.</a>  </p>
                  <p> He was not only my professor, but also a mentor, and great friend. </p>
                  <p>Upon his retirement from teaching, he passed <b>Sort Detective</b> down to me </p>
                  <p>to improve it and update it.</p>
                  <br></br>
                  <p>Sort Detective is designed to help students learn about sorting algorithms</p>
                  <p>in a more visual and intuitive way, instead of just reading numbers from a book.</p>
                  <br></br>
                  <p>Using graphs, bars, and dynamic input I have managed to provide an easy way</p>
                  <p>for anyone to test and compare the most important sorting algorithms.</p>
                  
                  
                   
                  </div>
                </CardBody>
                
              </Card>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
