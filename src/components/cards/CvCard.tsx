import styled from "styled-components";
import { Link } from "react-router-dom";

export const CvCard = () => {
  return (
    <Container to={"/cv"}>
      <h2 style={{ color: "#FFC25C", fontSize: "2em" }}>CV</h2>
    </Container>
  );
};

const Container = styled(Link)`
  background-image: url("./cv-lines.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 250px;
  height: 200px;
  margin-top: 20px;
`;
