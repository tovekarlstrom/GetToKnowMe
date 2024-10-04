import { QuizCard } from "../components/cards/QuizCard";
import { CvCard } from "../components/cards/CvCard";
import styled from "styled-components";
import { AboutCard } from "../components/cards/AboutCard";
export const Homepage = () => {
  return (
    <Container>
      <img
        style={{ width: "100%", maxWidth: "600px" }}
        src="./t-logo.png"
        alt="logo"
      />
      <Text>Frontend Developer</Text>
      <QuizCard />

      <CvContainer>
        <div>
          <p>Technical skills on a paper?</p>
          <p>Sure i ’ll hock you up..</p>
        </div>
        <CvCard />
      </CvContainer>
      <AboutCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  align-items: center;
  font-family: "Knewave";
  background-color: #f4ecd5;
`;

const Text = styled.p`
  font-size: 1.4em;
  color: #ff7bac;
  position: absolute;
  transform: rotate(90deg);
  top: 16%;
  left: -80px;
  @media (min-width: 768px) {
    top: 18%;
    font-size: 2.5em;
    left: -150px;
  }
`;

const CvContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #f9cc82;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0;
  text-decoration: none;
  font-size: 1.2em;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10rem;
  }
`;
