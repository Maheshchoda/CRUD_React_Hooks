import React, { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { Navbar, Row, Col } from "reactstrap";

const App = () => {
  //User Data
  const userData = [
    { id: 1, name: `Mahesh`, username: "Mahesh CHODA" },
    { id: 2, name: `Rajesh`, username: "Rajesh Kopa" },
    { id: 3, name: `Suresh`, username: "Suresh Mahankali" }
  ];

  const [users, setUsers] = useState(userData);

  //add User
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //editing the user
  const [editing, setEditing] = useState(false);
  const intialEditFormState = {
    id: null,
    name: "",
    username: ""
  };
  const [currentUser, setCurrentUser] = useState(intialEditFormState);

  const editUser = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  //update the user
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  //delte the user
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <>
      <Navbar className="text-white" color="dark">
        <h1 className="center">CRUD App with React Hooks</h1>
      </Navbar>
      <div className="container">
        <Row className="top">
          <Col className="vertical_line">
            {editing ? (
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                setEditing={setEditing}
              />
            ) : (
              <div>
                <h1>Add User</h1>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </Col>
          <Col>
            <h1>View User</h1>
            <UserTable
              users={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
