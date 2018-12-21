import React, { useState, useEffect } from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  useEffect(
    () => {
      setUser(currentUser);
    },
    [currentUser, updateUser, setEditing]
  );
  return (
    <>
      <h1>Edit Form</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateUser(user.id, user);
        }}
      >
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={user.name}
          />
          <Label>UserName:</Label>
          <Input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={user.username}
          />
        </FormGroup>
        <Button
          outline
          className="float-right"
          color="success"
          onClick={() => setEditing(false)}
        >
          Cancel
        </Button>
        <Button outline className="float-right" color="info" type="submit">
          Update User
        </Button>
      </form>
    </>
  );
};

export default EditUserForm;
