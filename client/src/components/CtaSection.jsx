import "../styles/CtaSection.css";
import Button from "./Button";
import Blur from "./Blur";

const CtaSection = () => {
    return (
    <div className="cta-section" id="cta-section">
        <Blur
            h={"40%"}
            w={"50%"}
            bg={"#7000FF"}
            x={"35%"}
            y={"52.5%"}
            opacity={0.32}
            blur={"200px"}
            translate_x={"-50%"}
            translate_y={"-50%"}
            border_radius={"100%"}
        />
        <Blur
            h={"40%"}
            w={"50%"}
            bg={"#FF00C7"}
            x={"65%"}
            y={"52.5%"}
            opacity={0.32}
            blur={"200px"}
            translate_x={"-50%"}
            translate_y={"-50%"}
            border_radius={"100%"}
        />
        <p className="cta-section-heading">Hurry up and join our newsletter~</p>
        <p className="cta-section-subheading">Only at AlfBlogs, you can learn more about the different topics regarding web while also learning about everything cloud!</p>
        <Button variant={"primary"} size={"lg"}>Get Started</Button>
    </div>
    );
};

export default CtaSection;