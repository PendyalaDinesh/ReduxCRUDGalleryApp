import axios from "axios";
import { useEffect, useState } from "react";

export default function CrudAxios() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 READ USERS
  useEffect(() => {
    setLoading(true);
    axios.get(API_URL).then(res => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  // 🔹 CREATE / UPDATE USER
  const saveUser = () => {
    if (!name || !email || !phone) return;

    if (editingId) {
      axios.put(`${API_URL}/${editingId}`, {
        id: editingId,
        name,
        email,
        phone
      }).then(() => {
        setUsers(users.map(u =>
          u.id === editingId ? { ...u, name, email, phone } : u
        ));
        resetForm();
      });
    } else {
      axios.post(API_URL, { name, email, phone })
        .then(res => {
          setUsers([{ ...res.data, id: Date.now() }, ...users]);
          resetForm();
        });
    }
  };

  // 🔹 EDIT USER
  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  };

  // 🔹 DELETE USER
  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setEditingId(null);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Users CRUD (JSONPlaceholder + Bootstrap)
      </h2>

      {/* 🔹 CREATE / EDIT */}
      <div className="card mb-5">
        <div className="card-header">
          {editingId ? "Edit User" : "Create New User"}
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={name}
              placeholder="Enter name"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              value={phone}
              placeholder="Enter phone"
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <button className="btn btn-primary me-2" onClick={saveUser}>
            {editingId ? "Update User" : "Create User"}
          </button>

          {editingId && (
            <button className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* 🔹 USERS LIST*/}
      <h2 className="text-lest mb-4">
        Users list
      </h2>
      
      {loading && <div className="alert alert-info">Loading users...</div>}

      <table className="table table-bordered table-striped">
        
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 6).map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
