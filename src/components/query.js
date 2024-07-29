const Query = ({ query }) => {

  const detailsHandler = ()=>{
    console.log("details Handler");
  }

  const closeHandler = ()=>{
    console.log("close Handler");
  }

  const deleteHandler = ()=>{
    console.log("delete Handler");
  }

  return (
    <div className="query-preview">
      <p>
        {query.queryId} &nbsp;
        {query.description}        
        {/* <button onClick={detailsHandler}> Show Details</button>
        <button onClick={closeHandler}> Close Query</button>
        <button onClick={deleteHandler}> Delete Query</button> */}
      </p>
    </div>
  );
};

export default Query;
