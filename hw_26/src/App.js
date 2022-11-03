import React, { Component, Fragment } from 'react';
import ToDo from "./components/ToDo/ToDo"

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: `Task 1`
      },
      {
        id: 2,
        title: `Task 2`
      },
      {
        id: 3,
        title: `Task 3`
      },
      {
        id: 4,
        title: `Task 4`
      },
      {
        id: 5,
        title: `Task 5`
      },
      {
        id: 6,
        title: `Task 6`
      },
      {
        id: 7,
        title: `Task 7`
      },
      {
        id: 8,
        title: `Task 8`
      },
      {
        id: 9,
        title: `Task 9`
      },
      {
        id: 10,
        title: `Task 10`
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <ToDo list={this.state.list}/>
      </Fragment>
    );
  }
}

export default App;
