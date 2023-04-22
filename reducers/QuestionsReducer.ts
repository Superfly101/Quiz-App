import { Question } from "@/models/Question";

type initialState = {
  questions: Question[];
  error: string;
  isLoading: boolean;
};

export const QuestionsInitState = {
  questions: [],
  error: "",
  isLoading: true,
};

export type QuestionActionsType =
  | { type: "GET_QUESTIONS"; payload: Question[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string };

const QuestionsReducer = (
  state: initialState,
  action: QuestionActionsType
): initialState => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default QuestionsReducer;
