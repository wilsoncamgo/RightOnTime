import React, { useState } from "react";
import Services from "../Services";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  NavBtn,
  NavBtnLink
} from "./DashboardElements";

export default function SignIn () {
    const [inicio, setInicio] = useState("");
    const [destino, setDestino] = useState("");

  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">Right on Time</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Ingresa tu destino</FormH1>
              <FormLabel htmlFor="for">Inicio del trayecto</FormLabel>
              <FormInput
                required
                onChange={(ev) => setInicio(ev.target.value)}
              />
              <FormLabel htmlFor="for">Ingresa tu destino</FormLabel>
              <FormInput
                required
                onChange={(ev) => setDestino(ev.target.value)}
              />
              <FormButton type="submit" >
                Genera la ruta
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};