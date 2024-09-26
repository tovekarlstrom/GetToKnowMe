import { QuizCard } from "../components/cards/QuizCard";
import { CvCard } from "../components/cards/CvCard";
import styled from "styled-components";
export const Homepage = () => {
  return (
    <Container>
      <h1>Whill this help?</h1>
      <p>Not sure, but lets test it out</p>
      <QuizCard />
      <div style={{ width: "100%", position: "relative" }}>
        <Divider />
      </div>
      <CvContainer>
        <div>
          <p>Technical skills on a paper?</p>
          <p>Sure i ’ll hock you up..</p>
        </div>
        <CvCard />
      </CvContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  font-family: "Knewave";
  color: #f4ecd5;
  margin-top: 10rem;
`;

const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 60px;
  background-color: rgba(235, 74, 47, 0.4);
`;
const CvContainer = styled.div`
  width: 100%;
  background-color: #f4ecd5;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0;
`;
