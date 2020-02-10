import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }
    fetchData();
  });

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
