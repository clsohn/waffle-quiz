const data = {
 questions: [ {
    id: 1,
    body: "Where would you rather live?"
  },
  {
    id: 2,
    body: "How would you like to spend an afternoon?"
  },
  {
    id: 3,
    body: "Who would you rather cuddle?"
  },
  {
    id: 4,
    body: "What's the best color for a car?"
  },
  {
    id: 5,
    body: "What's more fun on the weekend?"
  }
],
answers: [
   {
     id: 1,
     body: "Country",
     question_id: 1,
     correct: true
   },
   {
     id: 2,
     body: "City",
     question_id: 1,
     correct: false
   },
  {
    id: 3,
    body: "Beach",
    question_id: 2,
    correct: true
  },
  {
    id: 4,
    body: "Shopping",
    question_id: 2,
    correct: false
  },
  {
    id: 5,
    body: "Duck",
    question_id: 3,
    correct: true
  },
  {
    id: 6,
    body: "Hedgehog",
    question_id: 3,
    correct: false
  },
  {
    id: 7,
    body: "Blue",
    question_id: 4,
    correct: true
  },
  {
    id: 8,
    body: "White",
    question_id: 4,
    correct: false
  },
  {
    id: 9,
    body: "Bed",
    question_id: 5,
    correct: true
  },
  {
    id: 10,
    body: "Party",
    question_id: 5,
    correct: false
  }
 ]
};

export default data;
