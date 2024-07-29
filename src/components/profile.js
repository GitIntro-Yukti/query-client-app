const Profile = () => {
    return (  <div className="createQuery">
        <h2>User Profile</h2>
        <form>
            <label>Profile</label>
            <select>
                <option value="Finance">Finance</option>
                <option value="Curriculum">Curriculum</option>
                <option value="Generic">Generic</option>
            </select>

            <label>Name</label>
            <textarea required></textarea>

            <label>UserId</label>
            <input type="text" required />
            <button>Add Query</button>
        </form>
    </div>);
}
 
export default Profile;