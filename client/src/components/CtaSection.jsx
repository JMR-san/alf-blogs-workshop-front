import "../styles/CtaSection.css";
import Button from "./Button";

const CtaSection = () => {
    return (
    <div className="cta-section" id="cta-section">
        <p className="cta-section-heading">Hurry up and join our newsletter~</p>
        <p className="cta-section-subheading">Only at AlfBlogs, you can learn more about the different topics regarding web while also learning about everything cloud!</p>
        <Button variant={"primary"} size={"lg"}>Get Started</Button>
    </div>
    );
};

export default CtaSection;