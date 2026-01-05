import React, { Suspense, useState } from "react";
import Users from "./Users";
import Modal from "./Modal";

const fetchUsers = () =>
  fetch("http://localhost:3000/users").then(res => res.json());

function App() {
  const [usersPromise, setUsersPromise] = useState(fetchUsers());

  const refetchUsers = () => {
    setUsersPromise(fetchUsers()); // 🔥 MAGIC LINE
  };

  return (
    <>
      <div className="flex items-center justify-between container mx-auto px-8">
        <h1 className="text-3xl font-bold my-9">Users</h1>
        <Modal refetchUsers={refetchUsers} />
      </div>

      <Suspense fallback={<p>Loading users...</p>}>
        <Users usersPromise={usersPromise} />
      </Suspense>
    </>
  );
}

export default App;
