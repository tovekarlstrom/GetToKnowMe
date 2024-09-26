import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText: string;
  message: string;
}
export const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#22303f",
        color: "white",
        fontSize: "1.9rem",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Error:{"  "}
        <i style={{ color: "#f78888" }}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
