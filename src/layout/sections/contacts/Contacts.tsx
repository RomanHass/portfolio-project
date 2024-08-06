import styled from "styled-components";
import { SectionTitle } from "../../../compontens/SectionTitle";
import { Button } from "../../../compontens/Button";
import { Container } from "../../../compontens/Container";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Label>Name
            <Field placeholder={"Enter name"}/>
          </Label>
          <Label>Email
            <Field placeholder={"Enter email"}/>
          </Label>
          <Label>Message
            <Field as={"textarea"} placeholder={"Enter message"}/>
          </Label>
          <Button type={"submit"}>Send</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  ${Button} {
    margin-left: auto;
  }

  textarea {
    resize: none;
    height: 160px;
  }
`

const Field = styled.input`
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-top: 8px;
  padding: 11px 15px;
  background-color: #fff;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 8px;

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.accent};
`