import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import MaterialTable from 'material-table';

class CountryOverview extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            countries : []
             
        }
    }

    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/countries')
         .then(res=>{
            //  const countries = res.data;

             this.setState({
                 countries : res.data
             })
         })
         .catch(err =>{
             console.log(err)
         })
    }

    render() {
        return (
            <div>
               <div className="c-overview-header" style={{marginTop:30}}>
                 <Container>
                    <h3>Countries Overview</h3>
                  </Container>
               </div>

               <div className="country-tbl" style={{marginTop:20, height:20}}>
                   <Container  xs={12} md={8}>
                       <Row>
                           <Col>
                           <MaterialTable
                                columns={[
                                    {
                                        title: 'Flag',
                                        field: 'flag',
                                        filtering: false,
                                        sorting: false,
                                        render: rowData => (
                                          <img
                                            style={{ width:"50%", height:"50%"}}
                                            src={rowData.countryInfo.flag}
                                            alt={rowData.country}
                                          />
                                        ),
                                      },
                                    // { title: 'Flag', field: 'flag' },
                                    { title: 'Country Name', field: 'country' },
                                    { title: 'Continent', field: 'continent' },
                                    { title: 'Total Cases', field: 'cases', type: 'numeric' },
                                    { title: 'Total Deaths', field: 'deaths', type:'numeric' }
                                    
                                    
                                ]}


                                data = {this.state.countries}
                                options={{filtering: true, sorting: true, actionsColumnIndex: -1}}
                                title=""

                                actions={[
                                    {
                                      icon: 'info',
                                      tooltip: 'Go to country',
                                      onClick: (event, countries) => window.location.href=`/${countries.country}`
                                    }
                                  ]}
                            />
                           </Col>
                       </Row>
                   </Container>
               </div>               
            </div>
        )
    }
}

export default CountryOverview
