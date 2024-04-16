/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../styles/ArticleSection.css";
import Button from "./Button";
import Blur from "./Blur";
import CardsContainer from "./CardsContainer";
import Searchbar from "./Searchbar";
import RegularCard from "./RegularCard";
import { API_URL } from "../constants";

const cards =[
    {_id: 1, title: "Title 1", date: Date.now(), cover_photo: "/preview.png", content: "CONTENT"},
    {_id: 2, title: "Title 2", date: Date.now(), cover_photo: "/preview.png", content: "Congerytent"},
    {_id: 3, title: "Title 3", date: Date.now(), cover_photo: "/preview.png", content: "k78tdfvsas"},
    {_id: 4, title: "Title 4", date: Date.now(), cover_photo: "/preview.png", content: "dffasdsad"},
    {_id: 5, title: "Title 5", date: Date.now(), cover_photo: "/preview.png", content: "3wetgvca"},
];

const ArticleSection = () => {
    
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
  
    const isCardMatch = (val, card) => {
        const titleMatch = card.title.toLowerCase().includes(val.toLowerCase().trim());
        return (val.length != 0 && titleMatch) || val.length == 0;
    };

    const handleCardSearch = (value) => {
        const cardsMatched = []
    
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
        
        const fecthData = async () => {
            try {
                const response = await fetch(`${API_URL}/posts`);
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }; 
        fecthData();
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
                {cards.length > 0 &&
                <div className="article-top-container">
                    <Button variant={"primary"}>Create Article</Button>
                    <Searchbar searchText={searchText} setSearchText={handleCardSearch}/>
                </div>
            }
            <CardsContainer isEmpty={cards.length === 0} filterResult={searchResult} searchText={searchText}/>
        </div>
    );
};

export default ArticleSection;