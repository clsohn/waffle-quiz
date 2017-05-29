import React from 'react';

function Result(props) {
  return (
    <div className="result">
    You are a <strong>{props.quizResult}</strong> waffle!
    </div>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
