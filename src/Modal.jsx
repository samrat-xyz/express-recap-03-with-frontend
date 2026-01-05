import React, { useRef } from "react";
import Swal from "sweetalert2";

function Modal({refetchUsers}) {
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newUserData = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
      age: Number(form.age.value),
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then(() => {
    
        form.reset();

        
        modalRef.current.close();
        refetchUsers()

        // optional success alert
        Swal.fire("Success!", "User added successfully", "success");
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  return (
    <div className="p-6">
      <button
        onClick={() => modalRef.current.showModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      <dialog ref={modalRef} className="modal">
        <form onSubmit={handleSubmit} className="modal-box space-y-4">
          <input name="name" placeholder="Name" required className="border p-2 w-full" />
          <input name="email" type="email" placeholder="Email" required className="border p-2 w-full" />
          <input name="role" placeholder="Role" required className="border p-2 w-full" />
          <input name="age" type="number" placeholder="Age" required className="border p-2 w-full" />

          <div className="modal-action">
            <button type="submit" className="btn bg-blue-500 text-white">
              Submit
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => modalRef.current.close()}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
