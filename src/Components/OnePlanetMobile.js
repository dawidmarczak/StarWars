import React from 'react';
import '../Styles/App.css';
import {Table} from 'semantic-ui-react'

const OnePlanetMobile = (props) => {
  return (
   <>

   
      <Table.Body className='back'>
        <Table.Row textAlign='center'>
            
            <Table.Cell>Planet name</Table.Cell>
            <Table.Cell>{props.planet.name != null ? props.planet.name : 'unknown'}</Table.Cell>

        </Table.Row>

        <Table.Row textAlign='center'>
            
             <Table.Cell>Rotation period</Table.Cell>
             <Table.Cell>{props.planet.rotationPeriod != null ? props.planet.rotationPeriod : 'unknown'}</Table.Cell>
            
        </Table.Row>

        <Table.Row textAlign='center'>

             <Table.Cell>Orbital period</Table.Cell>
             <Table.Cell>{props.planet.orbitalPeriod != null ? props.planet.orbitalPeriod : 'unknown'}</Table.Cell>
            
        </Table.Row>

        <Table.Row textAlign='center'>
            
              <Table.Cell>Diameter</Table.Cell>
              <Table.Cell>{props.planet.diameter != null ? props.planet.diameter : 'unknown'}</Table.Cell>
            
        </Table.Row>

        <Table.Row textAlign='center'>
            
            <Table.Cell>Climate</Table.Cell>
            <Table.Cell>{props.planet.climates.length > 0 ? (props.planet.climates.map(climate => {return climate+"  "})) : 'unknown'} </Table.Cell>
            
        </Table.Row>

        <Table.Row textAlign='center'>
            
            <Table.Cell>Surface water</Table.Cell>
            <Table.Cell>{props.planet.surfaceWater !=null ? props.planet.surfaceWater : 'unknown'}</Table.Cell>
            
        </Table.Row>

        <Table.Row textAlign='center'>
            
             <Table.Cell>Population</Table.Cell>
             <Table.Cell>{props.planet.population != null ? props.planet.population : 'unknown'}</Table.Cell>
            
        </Table.Row>
        
      </Table.Body>  <br/>
    
  </>
  );
}

export default OnePlanetMobile;
