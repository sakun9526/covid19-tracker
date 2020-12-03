import React, { Component } from 'react';
import axios from 'axios';
import {ResponsiveContainer} from 'recharts';
import {Container, Row, Col, Image, Jumbotron, Card, ListGroup} from 'react-bootstrap';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import NavbarComponent from './NavbarComponent';

class CountryInformation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flag: null,
             countryname : null,
             continent: null,
             totalcases: 0,
             totaldeaths: 0,
             totalrecovers: 0,
             todaycases: 0,
             todaydeaths: 0,
             todayrecovers: 0,
             casesperonemillion:0,
             deathsperonemillion:0,
             recoversperonemillion: 0,
             criticalperonemillion:0,
             activeperonemillion:0
        }
    }
    
    componentDidMount() {
       axios.get('https://disease.sh/v3/covid-19/countries/'+ this.props.match.params.countryname) 
       .then(res => {
          this.setState({
            flag : res.data.countryInfo.flag,
            countryname : res.data.country,
            continent: res.data.continent,
            totalcases : res.data.cases,
            totaldeaths : res.data.deaths,
            totalrecovers : res.data.recovered,
            todaycases : res.data.todayCases,
            todaydeaths : res.data.todayDeaths,
            todayrecovers : res.data.todayRecovered,
            casesperonemillion: res.data.casesPerOneMillion,
            deathsperonemillion: res.data.deathsPerOneMillion,
            recoversperonemillion: res.data.recoveredPerOneMillion,
            criticalperonemillion: res.data.criticalPerOneMillion,
            activeperonemillion: res.data.activePerOneMillion

          });

       })
       .catch(err =>{
           console.log(err);
       })
    }

    render() {
        const data = [
            {
              name: 'Cases', PerMillion: this.state.casesperonemillion,
            },
            {
              name: 'Active', PerMillion: this.state.activeperonemillion,
            },
            {
              name: 'Critical', PerMillion: this.state.criticalperonemillion, 
            },
            {
              name: 'Deaths', PerMillion: this.state.deathsperonemillion,
            },
            {
              name: 'Recovers', PerMillion: this.state.recoversperonemillion, 
            },
           
          ];

        return (
            <div>
                <NavbarComponent/>
                <div className="country-header">
                  <Jumbotron fluid>
                    <Container>
                        <Row xs={2} md={4} lg={6}>
                            <Col>
                                <Image src={this.state.flag} rounded style={{height:80, width: 150}} />
                            </Col>
                            
                            <Col>
                                <h1>{this.state.countryname}</h1>
                            </Col>
                        </Row>
                    </Container>
                  </Jumbotron>
                </div>

                <div className="country-body">
                    <Container>
                        <Row>
                            <Col sm>
                                <Card style={{ width: '18rem' }} bg="warning" className="text-white">
                                    <Card.Body>
                                        <Card.Title>Total Cases</Card.Title>
                                        <Card.Text>
                                            <h1>{this.state.totalcases}</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>
                                <Card style={{ width: '18rem' }} bg="danger" className="text-white">
                                    <Card.Body>
                                        <Card.Title>Total Deaths</Card.Title>
                                        <Card.Text>
                                            <h1>{this.state.totaldeaths}</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm>
                                <Card style={{ width: '18rem' }} bg="success" className="text-white">
                                    <Card.Body>
                                        <Card.Title>Total Recovered</Card.Title>
                                        <Card.Text>
                                            <h1>{this.state.totalrecovers}</h1>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>                        
                        </Row>               
                    </Container>
                    <br/>
                    <Container>
                        <Row>
                        <Col sm>
                            <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header>Today</Card.Header>
                                <Card.Body>
                                    <Card.Title>New Cases</Card.Title>
                                        <Card.Text>
                                            <h2>{this.state.todaycases}</h2>
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card border="danger" style={{ width: '18rem' }}>
                            <Card.Header>Today</Card.Header>
                                <Card.Body>
                                    <Card.Title>New Deaths</Card.Title>
                                        <Card.Text>
                                            <h2>{this.state.todaydeaths}</h2>
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header>Today</Card.Header>
                                <Card.Body>
                                    <Card.Title>New Recovers</Card.Title>
                                        <Card.Text>
                                            <h2>{this.state.todaydeaths}</h2>
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>                 
                </div>

                <div className="country-chart" style={{marginTop:50, marginLeft:-10}}>
                   <Container>
                       <Row>
                           <Col>
                           <ResponsiveContainer>
                           <BarChart
                                width={700}
                                height={350}
                                data={data}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="PerMillion" fill="#82ca9d" />
                            </BarChart>
                            </ResponsiveContainer>
                           </Col>

                           <Col>
                                <ListGroup>
                                    <ListGroup.Item>Details Per Million</ListGroup.Item>
                                    <ListGroup.Item variant="warning">Cases : {this.state.casesperonemillion}</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Active : {this.state.activeperonemillion} </ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Critical : {this.state.criticalperonemillion}</ListGroup.Item>
                                    <ListGroup.Item variant="danger">Deaths : {this.state.deathsperonemillion}</ListGroup.Item>
                                    <ListGroup.Item variant="success">Recovers : {this.state.recoversperonemillion}</ListGroup.Item>
                                </ListGroup>
                           </Col>
                       </Row>
                   </Container>
                </div>               
            </div>
        )
    }
}

export default CountryInformation
