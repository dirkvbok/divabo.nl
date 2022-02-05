import styled from "styled-components";
import GameCard from "../../components/GameCard";
import googleplaybadge from "../../images/googleplaybadge.png";

export default function Squap() {
  return (
    <GameCard
      title="SQUAP"
      imageSrc={googleplaybadge}
      route="/games/squap"
    ></GameCard>
  );
}
