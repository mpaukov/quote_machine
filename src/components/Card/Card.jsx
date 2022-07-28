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

  width: 120px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${getRandomHexColor};

  cursor: pointer;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${getRandomHexColor};
  font-size: 36px;
  text-decoration: none;
  margin-right: 15px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Thumb = styled.div`
  display: flex;
  align-items: center;
`;

const Card = ({ data, onClick }) => {
  return (
    <CardWrapper id="quote-box">
      <Text id="text">
        <i className="fa fa-quote-left"></i>
        {` ${data.quote} `}
        <i className="fa fa-quote-right"></i>
      </Text>

      <Author id="author">{data.author}</Author>
      <LinkWrapper>
        <Thumb>
          <Link
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${data.quote} ${data.author}`}
          >
            <i className="fa fa-twitter"></i>
          </Link>

          <Link
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=${data.author}&amp;content=${data.quote}&amp;canonicalUrl=https://www.tumblr.com/buttons&amp;shareSource=tumblr_share_button`}
            rel="noreferrer"
          >
            <i className="fa fa-tumblr"></i>
          </Link>
        </Thumb>
        <Button id="new-quote" type="button" onClick={onClick}>
          New quote
        </Button>
      </LinkWrapper>
    </CardWrapper>
  );
};

export default Card;
