function UserList() {
    const users = [
        {id: 1, name: "alice", age: 25},
        {id: 2, name: "ce", age: 45},
        {id: 3, name: "al", age: 35}
    ];
    return (<div>
        {users.map(
            ({id, name, age}) => (
                <ul key = {id}>
                <li>ID: {id} {name} {age}</li>
                </ul>
        )
        )}
    </div>);
}
export default UserList;