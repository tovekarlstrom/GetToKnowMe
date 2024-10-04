import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuizCard = () => {
  return (
    <>
      <Card to={"/quiz"}>
        <div style={{ position: "relative", padding: "10px 40px" }}>
          <p
            style={{
              fontSize: "1.4em",
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          >
            Who am I?
          </p>
          <h2 className="square" style={{ fontSize: "5em", zIndex: 1 }}>
            Quiz
          </h2>
        </div>
      </Card>
    </>
  );
};

const Card = styled(Link)`
  background-image: url("./rutor2.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  width: 100%;
  position: relative;

  text-align: center;
  margin-top: 100px;
  color: #f4ecd5;
`;
