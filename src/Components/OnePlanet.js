import React from 'react';
import '../Styles/App.css';
import {Table} from 'semantic-ui-react'

const OnePlanet = (props) => {
  return (
   <>
        <Table.Row textAlign='center'>
            <Table.HeaderCell>{props.planet.name != null ? props.planet.name : 'unknown'}</Table.HeaderCell>
            <Table.HeaderCell>{props.planet.rotationPeriod != null ? props.planet.rotationPeriod : 'unknown'}</Table.HeaderCell>
            <Table.HeaderCell>{props.planet.orbitalPeriod != null ? props.planet.orbitalPeriod : 'unknown'}</Table.HeaderCell>
            <Table.HeaderCell>{props.planet.diameter != null ? props.planet.diameter : 'unknown'}</Table.HeaderCell>
            <Table.HeaderCell>{props.planet.climates.length > 0 ? (props.planet.climates.map(climate => {return climate+"  "})) : 'unknown'} </Table.HeaderCell>
            <Table.HeaderCell>{props.planet.surfaceWater !=null ? props.planet.surfaceWater : 'unknown'}</Table.HeaderCell>
            <Table.HeaderCell>{props.planet.population != null ? props.planet.population : 'unknown'}</Table.HeaderCell>
        </Table.Row> <br/>
  </>
  );
}

export default OnePlanet;
