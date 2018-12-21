import React from "react";
import { Table, Button } from "reactstrap";

const UserTable = ({ users, editUser, deleteUser }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <Button
                  className="btn"
                  outline
                  color="secondary"
                  onClick={() => editUser(user)}
                >
                  Edit
                </Button>
                <Button
                  outline
                  color="danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
