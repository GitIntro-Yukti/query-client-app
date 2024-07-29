const CreateQuery = () => {
    return (  <div className="createQuery">
        <h2>Add a New Query</h2>
        <form>
            <label>Query Group</label>
            <select>
                <option value="Finance">Finance</option>
                <option value="Curriculum">Curriculum</option>
                <option value="Generic">Generic</option>
            </select>

            <label>Query Description</label>
            <textarea required></textarea>

            <label>UserId</label>
            <input type="text" required />
            <button>Add Query</button>
        </form>
    </div>);
}
 
export default CreateQuery;