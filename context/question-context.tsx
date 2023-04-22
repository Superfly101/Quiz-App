import { Question } from "@/models/Question";
import QuestionsReducer, {
  QuestionActionsType,
  QuestionsInitState,
} from "@/reducers/QuestionsReducer";
import { Dispatch, createContext, useReducer } from "react";

type ProviderProp = {
  children: React.ReactNode;
};

type QuestionContextType = {
  questions: Question[];
  error: string;
  isLoading: boolean;
  dispatch: Dispatch<QuestionActionsType>;
};

export const QuestionContext = createContext<QuestionContextType>(
  {} as QuestionContextType
);

const QuestionProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(QuestionsReducer, QuestionsInitState);

  console.log("Questions state: ", state);

  return (
    <QuestionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
