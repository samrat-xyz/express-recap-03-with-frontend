import React from "react";

function Modal() {
  const handleSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const age = form.age.value;
    console.log({ name, email, role, age });
  };

  return (
    <div className="p-6">
      {/* Open the modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add User
      </button>

      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={handleSubmite}
          className="modal-box border p-6 flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-gray-800">Add User</h2>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter full name"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              required
              placeholder="Enter role"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              required
              placeholder="Enter age"
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="modal-action flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
            <form method="dialog">
              <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                Close
              </button>
            </form>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
