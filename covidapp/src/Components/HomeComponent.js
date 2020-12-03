import React from 'react';
import Navbarcomponent from './NavbarComponent';
import SummariesComponent from './SummariesComponent';
import CountryOverview from './CountryOverview'

function HomeComponent() {
    return (
        <div>
            <Navbarcomponent/>
            <SummariesComponent/>
            <CountryOverview/>
        </div>
    )
}

export default HomeComponent
