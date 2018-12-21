import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

const AddUserForm = ({ addUser }) => {
  const intialFormState = {
    id: null,
    name: "",
    username: ""
  };
  const [user, setUser] = useState(intialFormState);
  function handleSubmit(e) {
    e.preventDefault();
    if (!user.name || !user.username) return;
    addUser(user);
    setUser(intialFormState);
  }
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          placeholder="enter name"
          onChange={handleInputChange}
          value={user.name}
        />
        <Label>User Name:</Label>
        <Input
          type="text"
          name="username"
          placeholder="enter user name"
          onChange={handleInputChange}
          value={user.username}
        />
      </FormGroup>
      <Button color="primary" block type="submit">
        Add new user
      </Button>
    </form>
  );
};

export default AddUserForm;
