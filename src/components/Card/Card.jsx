import styled from "styled-components";

import getRandomHexColor from "../../utils/getRandomHexColor";

const CardWrapper = styled.div`
  background-color: ${getRandomHexColor};
  margin: 0 auto;
  padding: 60px;
  width: 640px;

  border: 1px solid ${getRandomHexColor};
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000; ;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 24px;
  text-align: center;
`;
const Author = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: end;
  margin-bottom: 60px;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 30px;
  margin-bottom: 60px;

  width: 120px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${getRandomHexColor};

  cursor: pointer;
`;

const Card = ({ data, onClick }) => {
  return (
    <CardWrapper id="quote-box">
      <TextWrapper>
        <Text id="text">
          <i className="fa fa-quote-left"></i>
          {` ${data.quote} `}
          <i className="fa fa-quote-right"></i>
        </Text>
      </TextWrapper>
      <Author id="author">{data.author}</Author>

      <Button id="new-quote" type="button" onClick={onClick}>
        New-quote
      </Button>
    </CardWrapper>
  );
};

export default Card;
