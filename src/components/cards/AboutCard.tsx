import styled from "styled-components";

export const AboutCard = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "700px",
        position: "relative",
      }}
    >
      <Container>
        <h2>About</h2>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-image: url("./lines.svg");
  background-size: cover;
  background-color: transparent;
  width: 100%;
  position: absolute;
  top: -50px;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  > h2 {
    color: #ffc25c;
    font-size: 4em;
  }
`;
