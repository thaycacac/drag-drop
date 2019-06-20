import styled from 'styled-components'

const TButton = styled.button`
  background-image: linear-gradient(to right, #4CB8C4 0%, #3CD3AD 51%, #4CB8C4 100%);
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  &:hover {
    background-image: linear-gradient(to right, #2BC0E4 0%, #EAECC6 51%, #2BC0E4 100%);
  };
  &:focus {
    outline: none;
    background-image: linear-gradient(to right, #2BC0E4 0%, #15ECD2 51%, #2BC0E4 100%);
  }
`;

export default TButton
