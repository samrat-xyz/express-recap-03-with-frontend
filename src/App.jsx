import React, { Suspense } from "react";
import Users from "./Users";
import Modal from "./Modal";

// Create the promise here
const usersPromise = fetch("http://localhost:3000/users")
  .then(res => res.json());

function App() {
  return (
    <>
      <div className="flex items-center justify-between container mx-auto px-8">
        <h1 className="text-3xl font-bold text-center my-9">Users</h1>
      <Modal></Modal>
      </div>
      <Suspense fallback={<p>Loading users...</p>}>
        <Users usersPromise={usersPromise} />
      </Suspense>
    </>
  );
}

export default App;
