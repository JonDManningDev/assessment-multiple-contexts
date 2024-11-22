import { useLocation } from "react-router-dom";

function NoMatch() {
  const { pathname } = useLocation();
  return (
    <main className="container">
      <h2>
        No route found for <pre>{pathname}</pre>
      </h2>
    </main>
  );
}

export default NoMatch;
