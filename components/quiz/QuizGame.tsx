import QuizCard from "./QuizCard";
import { Card } from "../ui/card";
import { useAppSelector } from "hooks";

import { QuizGameProps } from "@/types/quiz";

const QuizGame = ({ onSetQuizCancel }: QuizGameProps) => {
  const quizSelected = useAppSelector((state) => state.quiz.quizSelected);
  const quizId = useAppSelector((state) => state.quiz.quizId);
  const videoId = useAppSelector((state) => state.quiz.videoId);
  console.log(quizId);

  const questions = quizSelected;
  const totalQuestions = questions.length;

  return (
    <div className="m-auto flex w-full flex-col items-center">
      <Card className="p-8">
        <QuizCard
          questions={questions}
          totalQuestions={totalQuestions}
          quizId={quizId}
          videoId={videoId}
          onSetQuizCancel={onSetQuizCancel}
        />
      </Card>
    </div>
  );
};

export default QuizGame;