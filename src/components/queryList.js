import Query from "./query";
import { Link } from "react-router-dom";

const QueryList = ({ queries, title }) => {
  return (
    <div className="queries">
      <h4>{title}</h4>
        <ul>
          {queries.map((query) => (
            <Link to={`/queries/${query.queryId}`} key={query.queryId}>
              <li>
                <Query query={query} key={query.queryId} />
              </li>
            </Link>
          ))}
        </ul>
    </div>
  );
};

export default QueryList;
