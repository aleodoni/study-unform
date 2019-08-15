import React from "react";

import { Form, Input, Scope } from "@rocketseat/unform";

import { Container, Formulario } from "./styles";

export default function Form3() {
  const handleSubmit = data => {
    console.log(data);
    const { user } = data;
    alert(user.name);
  };

  const initialData = {
    user: {
      name: "Zacarias Zaquinha",
      age: 22
    },
    address: {
      street: "Rua do Sabonete",
      number: 171,
      complement: "bloco Z"
    }
  };

  return (
    <Container>
      <Formulario>
        <h1>Form3 - Initial Data</h1>
        <Form onSubmit={handleSubmit} initialData={initialData}>
          <Scope path="user">
            <Input label="Name" name="name" />
            <Input label="Age" name="age" />
          </Scope>
          <Scope path="address">
            <Input label="Street" name="street" />
            <Input label="Number" name="number" />
            <Input label="Complement" name="complement" />
          </Scope>

          <button type="submit">Send data</button>
        </Form>
      </Formulario>
    </Container>
  );
}
