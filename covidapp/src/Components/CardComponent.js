import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';

class CardComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            totalcases : 0,
            totaldeaths : 0,
            totalrecovers: 0,
            newcases: 0,
            newdeaths: 0,
            newrecovers: 0
        }
    }
    
    componentDidMount()
    {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(res => {
                this.setState({
                    totalcases : res.data.cases,
                    totaldeaths: res.data.deaths,
                    totalrecovers: res.data.recovered,
                    newcases : res.data.todayCases,
                    newdeaths: res.data.todayDeaths,
                    newrecovers: res.data.todayRecovered
                });
            })
            .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    render() {
        return (
            <div>
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
                                        <h2>{this.state.newcases}</h2>
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
                                        <h2>{this.state.newdeaths}</h2>
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
                                        <h2>{this.state.newrecovers}</h2>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                </Container>               
            </div>
        )
    }
}

export default CardComponent
