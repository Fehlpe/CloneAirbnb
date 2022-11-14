import styled from "styled-components";
import imagem from "../images/photo-grid.png";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  img {
    max-width: 500px;
    margin-bottom: 32px;
    align-self: center;
  }

  h1 {
    justify-self: start;
  }

  p {
    font-size: 0.8em;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <img src={imagem} alt="" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </StyledHero>
  );
}
