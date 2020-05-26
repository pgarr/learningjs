import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    people: [
      {
        id: '3eref',
        name: 'Max',
        age: 28,
      },
      {
        id: 'vsg',
        name: 'Mary',
        age: 21,
      },
      {
        id: 'hshgfb',
        name: 'Carrie',
        age: 33,
      },
    ],
    showPeople: false,
  };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.people[personIndex] };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ people: people });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'iherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   },
    // };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // };
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red');
    }
    if (this.state.people.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>HI, I'm not React App!</h1>
        <p className={classes.join(' ')}>Is this working??</p>
        <button
          className='button'
          alt={this.state.showPeople}
          onClick={this.togglePeopleHandler}
        >
          Toggle People
        </button>
        {people}
      </div>
    );
  }
}

export default App;
