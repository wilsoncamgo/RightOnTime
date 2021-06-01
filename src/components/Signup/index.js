import React, { useState } from "react";
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
  NavBtnLink,
} from "./SignupElements";
import { useAuth } from "../contexts/AuthContext";
import {useHistory} from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await signup(email, password);
      history.push("/dashboard");
    } catch {
      setError("Failed to create");
    }
  }

  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">Right on Time</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Crea una cuenta</FormH1>
              {currentUser && currentUser.email}
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <FormButton type="submit" onClick={handleSubmit}>
                Crea tu cuenta
              </FormButton>
              <FormButton onClick={handleSubmit}>
                Ingresa Anonimamente
              </FormButton>
              <FormButton>
                <NavBtnLink to="sign_in">Ingresa con tu cuenta</NavBtnLink>
              </FormButton>
              <Text>Olvidaste la contraseña?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
}
