import React from 'react';
import '../Styles/App.css';
import {Container, Header, Segment, Accordion} from 'semantic-ui-react'
import OneFilm from './OneFilm'
import data from '../Assets/data.json'

class Main extends React.Component {

 state = {activeIndex: -1}
 
 films = data.data.films;

 setNewIndex = (index) => {
    
    const activeIndex = this.state.activeIndex;
    let newIndex = index;

    if(newIndex === activeIndex) {
       newIndex=-1;
    }

    this.setState({
        activeIndex: newIndex
    })
 }

 render() {

  return (
    <Container className='width50'>
      
         <Header textAlign='center' size='huge' className='up mt-2 mb-05 size-4'>Star Wars</Header>
            <Header textAlign='center' size='big' className='up mt-0 size-2 planetColor'>Discover the encyclopedia of planets</Header>

              <Segment className='purpleBack width90p'>

                <Accordion>

                {this.films.map(film => {
                  
                   return <OneFilm film={film} activeIndex={this.state.activeIndex} setNewIndex={this.setNewIndex} />
                })}
                
                </Accordion>
              </Segment>

    </Container>
  )};
}

export default Main;
