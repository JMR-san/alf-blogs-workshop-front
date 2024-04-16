import React, { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";

import { API_URL, DEFAULT_COVER_PHOTO } from "../constants";
import "../styles/ArticleSection.css";
import Blur from "./Blur";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import FormModal from "./FormModal";
import RegularCard from "./RegularCard";
import Searchbar from "./Searchbar";

export const articlesLoader = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);

  if (!response.ok) throw response;

  const data = await response.json();
  const cards = data.map((card) => {
    const path = card.cover_photo;
    const cover_photo = path ? `${API_URL}${path.split("public")[1]}` : DEFAULT_COVER_PHOTO;
    return {
      ...card,
      content: JSON.parse(card.content),
      cover_photo,
    };
  });
  return cards;
};

export const articleCreateAction = async ({ request }) => {
  const formData = await request.formData();
  const newFormData = new FormData();
  newFormData.append("title", formData.get("title"));
  newFormData.append("author", formData.get("author"));
  newFormData.append("cover_photo", formData.get("cover_photo"));
  newFormData.append("content", localStorage.getItem("content"));
  console.log("New FormData:", Object.fromEntries(newFormData));

  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    body: newFormData,
  });

  if (!response.ok) throw response;
  const data = await response.json();
  console.log("Data:", data);
  return redirect(`/article/${data._id}`);
};

const ArticleSection = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const cards = useLoaderData();

  const isCardMatch = (val, card) => {
    const titleMatch = card.title.toLowerCase().includes(val.toLowerCase().trim());
    return (val.length != 0 && titleMatch) || val.length == 0;
  };

  const handleCardSearch = (value) => {
    const cardsMatched = [];

    setSearchText(value);
    cards.forEach((card) => {
      if (isCardMatch(value, card)) {
        cardsMatched.push(<RegularCard key={card._id} {...card} />);
      }
    });

    setSearchResult(cardsMatched);
  };

  useEffect(() => {
    handleCardSearch(searchText);
  }, []);

  return (
    <div id="articleSection">
      <Blur
        h={"60%"}
        w={"45%"}
        bg={"#7000FF"}
        x={"0"}
        y={"25%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />
      <Blur
        h={"50%"}
        w={"35%"}
        bg={"#60FFE7"}
        x={"80%"}
        y={"80%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />

      <div className="article-sec-heading-container">
        <p className="article-sec-heading">Learn About Everything Tech!</p>
        <p className="article-sec-subheading">brought to you by AWSCC Department of Software and Web Development</p>
      </div>

      {cards.length > 0 && (
        <div className="article-top-container">
          <FormModal title="Create Post">
            {(toggleModal) => (
              <Button variant="primary" onClick={toggleModal}>
                Create Article
              </Button>
            )}
          </FormModal>
          <Searchbar searchText={searchText} onSearchChange={handleCardSearch} />
        </div>
      )}

      <CardsContainer isEmpty={cards.length === 0} filterResult={searchResult} searchText={searchText} />
    </div>
  );
};

export default ArticleSection;