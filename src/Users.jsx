import React, { use } from "react";

function Users({ usersPromise }) {
  const users = use(usersPromise);

  return (
    <>
    <p className="text-center text-2xl font-semibold">Total Users : {users.length}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 container mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <div className="w-24 h-24 mb-4">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQHstFutlfl8tgZAtY8nDWucSWEvFM5AETQ&s"
                alt={user.name}
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm mt-2">
                <span className="font-medium">Role:</span> {user.role}
              </p>
              <p className="text-sm">
                <span className="font-medium">Age:</span> {user.age}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
