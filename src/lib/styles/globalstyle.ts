import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  letter-spacing: normal;
  font-size: 14px;
  font-family: "Noto Sans KR"
}
`;

export default GlobalStyles