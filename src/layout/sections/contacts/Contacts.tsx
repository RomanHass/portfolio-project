import styled from "styled-components";
import { SectionTitle } from "../../../compontens/SectionTitle";
import { Button } from "../../../compontens/Button";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <StyledForm>
        <label>Name</label>
        <Field placeholder={"enter name"}/>
        <label>Email</label>
        <Field placeholder={"enter email"}/>
        <label>Message</label>
        <Field as={"textarea"} placeholder={"enter message"}/>
        <Button type={"submit"}>Send</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 600px;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Field = styled.input`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`
