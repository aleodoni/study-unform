import React from "react";

import { Container, LinkForm } from "./styles";

export default function Toolbar() {
  return (
    <Container>
      <LinkForm to="/formulario1">
        <div>
          <strong>Formulário 1</strong>
        </div>
      </LinkForm>
      <LinkForm to="/formulario2">
        <div>
          <strong>Formulário 2</strong>
        </div>
      </LinkForm>
    </Container>
  );
}
