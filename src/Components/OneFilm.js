import React from 'react';
import '../Styles/App.css';
import {Icon, Accordion, Table, Message, Button, Tab} from 'semantic-ui-react'
import data from '../Assets/data.json'
import OnePlanet from './OnePlanet'
import {isMobile} from 'react-device-detect';
import OnePlanetMobile from './OnePlanetMobile'

class OneFilm extends React.Component{

state = {planets: [], sortDesc: false}

componentDidMount = () => {
    let planets = data.data.planets;

    this.setState({
        planets: planets
    })
}

//Change index when selecting another movie
handleClick = () => {
    this.props.setNewIndex(this.props.film.id)
}

//Sort function depending on the selected column. By default, the array is sorted in descending order.
sort = (property) => {
  
    let planets = this.state.planets;

    if(this.state.sortDesc === false) {

    if(property ==='name') {
        planets.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }) }

    
    if(property ==='rotationPeriod') {
        planets.sort(function(a, b){
            if(a.rotationPeriod < b.rotationPeriod) { return -1; }
            if(a.rotationPeriod > b.rotationPeriod) { return 1; }
            return 0;
        }) }
    
    if(property ==='orbitalPeriod') {
        planets.sort(function(a, b){
            if(a.orbitalPeriod < b.orbitalPeriod) { return -1; }
            if(a.orbitalPeriod > b.orbitalPeriod) { return 1; }
            return 0;
        }) }
    
    if(property ==='diameter') {
        planets.sort(function(a, b){
            if(a.diameter < b.diameter) { return -1; }
            if(a.diameter > b.diameter) { return 1; }
            return 0;
        }) }

    if(property ==='climates') {
        planets.sort(function(a, b){
            if(a.climates < b.climates) { return -1; }
            if(a.climates > b.cliemates) { return 1; }
            return 0;
        }) }

    if(property ==='surfaceWater') {
        planets.sort(function(a, b){
            if(a.surfaceWater < b.surfaceWater) { return -1; }
            if(a.surfaceWater > b.surfaceWater) { return 1; }
            return 0;
        }) }
    
    if(property ==='population') {
        planets.sort(function(a, b){
            if(a.population < b.population) { return -1; }
            if(a.population > b.population) { return 1; }
            return 0;
        }) }

    this.setState({
        sortDesc: true
    })

    } else {

        if(property ==='name') {
            planets.sort(function(a, b){
                if(a.name < b.name) { return 1; }
                if(a.name > b.name) { return -1; }
                return 0;
            }) }
    
        
        if(property ==='rotationPeriod') {
            planets.sort(function(a, b){
                if(a.rotationPeriod < b.rotationPeriod) { return 1; }
                if(a.rotationPeriod > b.rotationPeriod) { return -1; }
                return 0;
            }) }
        
        if(property ==='orbitalPeriod') {
            planets.sort(function(a, b){
                if(a.orbitalPeriod < b.orbitalPeriod) { return 1; }
                if(a.orbitalPeriod > b.orbitalPeriod) { return -1; }
                return 0;
            }) }
        
        if(property ==='diameter') {
            planets.sort(function(a, b){
                if(a.diameter < b.diameter) { return 1; }
                if(a.diameter > b.diameter) { return -1; }
                return 0;
            }) }
    
        if(property ==='climates') {
            planets.sort(function(a, b){
                if(a.climates < b.climates) { return 1; }
                if(a.climates > b.cliemates) { return -1; }
                return 0;
            }) }
    
        if(property ==='surfaceWater') {
            planets.sort(function(a, b){
                if(a.surfaceWater < b.surfaceWater) { return 1; }
                if(a.surfaceWater > b.surfaceWater) { return -1; }
                return 0;
            }) }
        
        if(property ==='population') {
            planets.sort(function(a, b){
                if(a.population < b.population) { return 1; }
                if(a.population > b.population) { return -1; }
                return 0;
            }) }
    
        this.setState({
            sortDesc: false
        })
    }
        
    this.setState({
        planets: planets
        
    })
}

render() {

  return (
   <>    
    <Message className='width-90p purpleBack'>
    <Accordion.Title active={this.props.activeIndex === this.props.film.id} index={this.props.film.id} onClick={this.handleClick} className='size-12' > 
        <Icon name='dropdown' />
            {this.props.film.title}
    </Accordion.Title>

  <Accordion.Content active={this.props.activeIndex === this.props.film.id}>
   
{/*  Depending on whether mobile or computer. Using the react-device-detect library */}

    {isMobile === false ? (

   <Table basic='very' padded className='mt-2'>

       <Table.Header>
           <Table.Row textAlign='center'>
               <Table.HeaderCell>Planet name <Button onClick={()=> this.sort("name")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Rotation period <Button onClick={()=> this.sort("rotationPeriod")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Orbital period <Button onClick={()=> this.sort("orbitalPeriod")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Diameter <Button onClick={()=> this.sort("diameter")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Climate <Button onClick={()=> this.sort("climates")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Sufrace water <Button onClick={()=> this.sort("surfaceWater")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
               <Table.HeaderCell>Population <Button onClick={()=> this.sort("population")} icon className='noBackground'><Icon name='sort' /> </Button></Table.HeaderCell>
           </Table.Row>
       </Table.Header>

        <Table.Body>      
            {this.state.planets.map(planet => {
               if(planet.filmConnection.films.some(film => film.id === this.props.film.id)) {
                   return <OnePlanet planet={planet} />
               }
            })}
        </Table.Body>  
     </Table>   
    
    ) : (

        <Table basic='very' padded>
            
            {this.state.planets.map(planet => {
               if(planet.filmConnection.films.some(film => film.id === this.props.film.id)) {
                   return <OnePlanetMobile planet={planet} />
               }
            })}

        </Table>

    )}
    
  </Accordion.Content>
  </Message>
  </>
  )};
}

export default OneFilm;
