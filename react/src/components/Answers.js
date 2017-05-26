import React from 'react';
import Answer from './Answer';

class Answers extends React.Component {
  constructor(props){
    super(props);

      this.state = {
        message: null,
        selectedId: null
      }

  this.handleAnswerClick = this.handleAnswerClick.bind(this)
}

  handleAnswerClick(correctStatus, id) {
    this.setState ( {selectedId: id})
    if  (correctStatus === true) {
      this.setState ({message: "You deserve a waffle!"});
    }
    else {
     this.setState ({message: "Have a bran muffin..."});
  }
 }

 render(){
   let className;
   let answersList = this.props.answers.map((answer) => {

     let onAnswerClick = () => {
       this.handleAnswerClick(answer.correct, answer.id)
     }

   if (answer.id === this.state.selectedId) {
     className = "selected"
   }
  else {
    className = ""
   }

  return(
     <Answer
      key={answer.id}
      id={answer.id}
      body={answer.body}
      question_id={answer.question_id}
      correct={answer.correct}
      onAnswerClick={onAnswerClick}
      className={className}
      />
    )
  });

  return (
    <div>
      <ul>{answersList}</ul>
      <h3>{this.state.message}</h3>
    </div>
  )
 }
}

export default Answers
