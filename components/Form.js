import styled from 'styled-components';

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues),
  });
}

export default function Form() {
  return (
    <StyledForm onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>‚
      <input type="text" id="name" name="name" />
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  color: chartreuse;
  background-color: black;
  position: fixed;
`;
