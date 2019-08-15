import React from "react";

import { Form, Input } from "@rocketseat/unform";

import { Container, Formulario } from "./styles";

const Form1 = () => {
  const handleSubmit = data => {
    console.log(data);
    const { email } = data;
    alert(email);
  };

  return (
    <Container>
      <Formulario>
        <h1>Form1 - Basic</h1>
        <Form onSubmit={handleSubmit}>
          <Input label="e-mail" name="email" />
          <Input label="password" name="password" type="password" />

          <button type="submit">Sign in</button>
        </Form>
      </Formulario>
    </Container>
  );
};

export default Form1;
