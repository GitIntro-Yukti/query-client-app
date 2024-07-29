import QueryList from "./queryList";
import { useState } from "react";
import useFetch from "../useFetch";

const Home = () => {
  const [refresh, setRefresh] = useState(false);
  const {data:queries , isLoading, error} = useFetch('http://localhost:8080/QueryApp/query', refresh);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>loading...</div>}
      {!isLoading && (
        <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      )}
      {queries && <QueryList queries={queries} title="All Queries:" />}
    </div>
  );
};

export default Home;
