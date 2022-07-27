import styled from "styled-components";
import getRandomHexColor from "../../utils/getRandomHexColor";

const Div = styled.div`
  background-color: ${getRandomHexColor};
  margin: 0 auto;
  padding: 80px 160px;
`;

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;
