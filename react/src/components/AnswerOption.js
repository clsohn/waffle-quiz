import React from 'react';

function AnswerOption(props) {
    return (
      <div className="answerOption">
        <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlfor={props.answerType}>
          {props.answerContent}
          </label>
      </div>
    );
  }

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
