import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleAnswer = useCallback(function handleAnswer(seletedAnswer) {
    setUserAnswers((prev) => {
      return [...prev, seletedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswer(null);
  }, [handleAnswer]);

  if (quizCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleAnswer}
      />
    </div>
  );
}
