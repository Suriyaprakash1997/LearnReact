import React from "react";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    jobTitle: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    jobTitle: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    jobTitle: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "16px" }}
      />
      <div>
        <h3 style={{ margin: "0 0 5px" }}>{user.name}</h3>
        <p style={{ margin: "0", fontSize: "14px" }}>{user.jobTitle}</p>
        <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>{user.email}</p>
      </div>
    </div>
  );
}

function UserList() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h5>User Directory</h5>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
