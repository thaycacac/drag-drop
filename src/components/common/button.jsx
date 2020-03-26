import styled from "styled-components";

const TButton = styled.button`
  background-image: linear-gradient(
    to right,
    #4cb8c4 0%,
    #3cd3ad 51%,
    #4cb8c4 100%
  );
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  &:hover {
    background-image: linear-gradient(
      to right,
      #2bc0e4 0%,
      #eaecc6 51%,
      #2bc0e4 100%
    );
  }
  &:focus {
    outline: none;
    background-image: linear-gradient(
      to right,
      #2bc0e4 0%,
      #15ecd2 51%,
      #2bc0e4 100%
    );
  }
`;

export default TButton;
