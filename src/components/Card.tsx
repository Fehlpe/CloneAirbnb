import styled from "styled-components";

const StyledCard = styled.div`
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  .card--image {
    width: 100%;
    border-radius: 9px;
  }

  .card--title {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card--price {
    margin-top: auto;
  }

  .card--stats {
    display: flex;
    align-items: center;
  }

  .card--star {
    height: 14px;
  }

  .card--badge {
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: white;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
  }

  .bold {
    font-weight: bold;
  }

  .gray {
    color: #918e9b;
  }
`;

interface Card {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
}

interface Item {
  item: Card;
}

export default function Card(props: Item) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <StyledCard>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </StyledCard>
  );
}
