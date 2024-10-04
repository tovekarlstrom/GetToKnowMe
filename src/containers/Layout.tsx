import { Link } from "react-router-dom";

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 100,
        }}
      >
        <img src="./logo.svg" alt="" />
        <Link
          to="/"
          style={{
            position: "absolute",
            left: "60px",
            fontFamily: "Knewave",
            color: "black",
          }}
        >
          Home
        </Link>
      </nav>
      {children}
    </div>
  );
};
