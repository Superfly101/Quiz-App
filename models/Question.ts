// const QuestionReducer = (state, action):
export type Question = {
  number: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
