import styled from "styled-components";

export const QuizCard = () => {
  return (
    <>
      <Card>
        <SVGWrapper>
          <svg
            width="329"
            height="227"
            viewBox="0 0 329 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="square" width="47" height="45.4" fill="#F4ECD5" />
            <rect
              className="square"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              y="136.2"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              y="181.6"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="47"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="47"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="47"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="47"
              y="136.2"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="47"
              y="181.6"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="94"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="94"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="94"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="94"
              y="136.2"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="94"
              y="181.6"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="141"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="141"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="141"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="141"
              y="136.2"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="141"
              y="181.6"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="188"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="188"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="188"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="188"
              y="136.2"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="188"
              y="181.6"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="235"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="235"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="235"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="235"
              y="136.2"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="235"
              y="181.6"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="282"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="282"
              y="45.4004"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="282"
              y="90.7998"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
            <rect
              className="square"
              x="282"
              y="136.2"
              width="47"
              height="45.4"
              fill="#FFC25C"
            />
            <rect
              className="square"
              x="282"
              y="181.6"
              width="47"
              height="45.4"
              fill="#F4ECD5"
            />
          </svg>
        </SVGWrapper>
        <p style={{ position: "absolute", top: "70px", right: "70px" }}>
          Who am I?
        </p>
        <h2 className="square" style={{ fontSize: "1.9em", zIndex: 1 }}>
          Quiz
        </h2>
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 20rem;
  height: 14rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 1rem;
  color: black;
`;

const SVGWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto; /* Ensure pointer events are not blocked */

  .square {
    transition: transform 0.1s ease-in-out;
  }

  .square:hover,
  .square:hover ~ .square,
  .square:hover + .square {
    animation: vibrate 0.3s infinite;
    transform-origin: center center;
  }
  @keyframes vibrate {
    0% {
      transform: translate(0px, 0px);
    }
    20% {
      transform: translate(-1px, -1px);
    }
    40% {
      transform: translate(1px, 1px);
    }
  }
`;
