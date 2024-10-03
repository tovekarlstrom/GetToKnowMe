import styled from "styled-components";
import { quizQuestions } from "../utils/quizQuestions";
import { useEffect, useState } from "react";

export const QuizPage = () => {
  const [rightAnswer, setRightAnswer] = useState<number | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionHeading, setQuestionHeading] = useState(
    quizQuestions[questionIndex] ? quizQuestions[questionIndex].question : ""
  );

  useEffect(() => {
    if (quizQuestions[questionIndex])
      setQuestionHeading(quizQuestions[questionIndex].question);
  }, [questionIndex]);

  const handleOptionClick = (correct: boolean, index: number) => {
    if (quizQuestions[questionIndex].correctAnswerIndex === index) {
      setQuestionHeading("Correct Answer");
      setRightAnswer(index);
      setWrongAnswer(null);
    } else {
      setRightAnswer(quizQuestions[questionIndex].correctAnswerIndex);
      setWrongAnswer(index);
      setQuestionHeading("Wrong Answer");
    }
  };
  const handleNxtQuestion = () => {
    if (quizQuestions.length >= questionIndex + 1) {
      setQuestionIndex((prev) => prev + 1);
      setRightAnswer(null);
      setWrongAnswer(null);
    }
  };

  const renderOption = (question: any, questionIndex: number) => {
    return (
      <QuestionsContainer key={questionIndex}>
        <h2 style={{ fontSize: "30px" }}>
          {questionHeading && questionHeading}
        </h2>
        {question.answers.map((answer: any, answerIndex: any) => (
          <Option
            key={answerIndex}
            onClick={() => handleOptionClick(answer.correct, answerIndex)}
            $isSelected={rightAnswer === answerIndex}
            $wrongAnswer={wrongAnswer === answerIndex}
          >
            <p style={{ fontSize: "22px" }}>{answer.option}</p>
          </Option>
        ))}
      </QuestionsContainer>
    );
  };

  return (
    <Container>
      <InnerContainer>
        <div
          style={{
            backgroundColor: "#f4ecd5",
            margin: "10%",
            width: "100%",
            height: "100%",
            maxHeight: "25rem",
            maxWidth: "30rem",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              position: "absolute",
              top: "40%",
              right: "25%",
              color: "black",
            }}
          >
            Who am I?
          </p>
          <h2
            className="square"
            style={{ fontSize: "3em", zIndex: 1, color: "#008A45" }}
          >
            Quiz
          </h2>
        </div>
      </InnerContainer>

      {quizQuestions[questionIndex] &&
        renderOption(quizQuestions[questionIndex], questionIndex)}
      <NextButton onClick={handleNxtQuestion}>Next Question</NextButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  font-family: "Knewave";
  background-color: #f4ecd5;
  min-height: 100vh;
  color: black;
`;
const InnerContainer = styled.div`
  background-image: url("./gray-white.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
`;

const QuestionsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-family: "Just_Another_Hand";
`;

const Option = styled.div<{ $isSelected: boolean; $wrongAnswer: boolean }>`
  width: 335px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#008a45" : "transparent"};
  border: 3px
    ${({ $isSelected, $wrongAnswer }) =>
      $wrongAnswer ? "#FD85A4" : $isSelected ? "#f4ecd5" : "#008a45"};
  border-style: ${({ $isSelected }) => ($isSelected ? "dashed" : "solid")};
  border-radius: 10px;
`;

const NextButton = styled.button`
  width: 12rem;
  height: 4rem;
  background-color: #008a45;
  border-radius: 1rem;
  border: none;
  color: white;
  font-size: 1.2em;
  font-family: "Knewave";
  margin-bottom: 2rem;
`;
