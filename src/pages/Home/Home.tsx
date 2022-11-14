import React from "react";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import NavBar from "../../components/Navbar";
import itemList from "../../data";

const cards = itemList.map((value) => {
  return (
    <Card
      key={value.id}
      item={value}
    />
  );
});

const ComponetName: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </React.Fragment>
  );
};

export default ComponetName;
