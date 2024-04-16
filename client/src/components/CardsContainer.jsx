/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "../styles/CardsContainer.css";
import Button from "./Button";
import FormModal from "./FormModal";
import MainCard from "./MainCard";
import RegularCard from "./RegularCard";

const CardsContainer = ( {isEmpty, filterResult, searchText} ) => {
    return (
    <div className="article-cards-container">
        <MainCard title ={"All About Cloud Computing and AWS Services"} date={"Apr 24 2024"} />
        {
        isEmpty ?(
        <div className="no-articles-container">
            <p className="no-articles-heading">Nothing here yet...</p>
            <p className="no-articles-subheading">You can start writing your articles now.</p>
            <FormModal title="Create Post">
                {(toogleModal) => (
                <Button variant={"primary"} onClick={toogleModal}>Create Article</Button>)}
            </FormModal>
        </div>
        ):
        filterResult.length === 0
        ?
            <div className="no-articles-container">
                <p className="no-articles-heading">No results found for "{searchText}"</p>
                <p className="no-articles-subheading">Try searching for something else</p>
            </div>
        : filterResult
        }
    </div>
    );
};

export default CardsContainer;