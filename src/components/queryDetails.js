import { useParams } from "react-router";
import useFetch from "../useFetch";

const QueryDetails = () => {
  const { queryId } = useParams();
  const {
    data: query,
    isLoading,
    error,
  } = useFetch(`http://localhost:8080/QueryApp/query/${queryId}`);

  return (
    <div className="queryDetails">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {query && (
        <article>
          <h3>{query.description}</h3>
          <p>
            {query.comment && (
              <table>
                {query.comment.map((comment) => (
                  <tr>
                     <td width="300px">
                      {query.userId === comment.userId && comment.commentId && (
                        <div>
                          <p>{comment.commentId}</p>
                          <textarea className="comment" readOnly="true">
                            {comment.description}
                          </textarea>
                        </div>
                      )}
                    </td>
                    <td width="100px"></td>
                    <td width="300px">
                      {query.userId !== comment.userId && comment.commentId && (
                        <div>
                          <p>{comment.commentId}</p>
                          <textarea className="comment" readOnly="true">
                            {comment.description}
                          </textarea>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </table>
            )}
          </p>
        </article>
      )}
    </div>
  );
};

export default QueryDetails;
