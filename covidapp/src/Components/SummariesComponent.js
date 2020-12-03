import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import CardComponent from './CardComponent';

function SummariesComponent() {
    return (
        <div>
           <Jumbotron fluid>
                <Container>
                    <h1>COVID-19 Summaries (Worldwide)</h1>

                    <p>Design and developed by <a href="https://sakun9526.github.io/">Sakun Pushpitha</a></p>
                </Container>
            </Jumbotron>
  
            <CardComponent/>            
        </div>
    )
}

export default SummariesComponent
