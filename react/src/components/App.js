import React from 'react';
import Answers from './Answers';
import Questions from './Questions';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Questions go here</h1>
        <Answers
        answers={this.props.data.answers}/>
      </div>
    )
  }
}

export default App
