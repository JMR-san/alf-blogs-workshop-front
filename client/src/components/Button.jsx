/* eslint-disable react/prop-types */
import "../styles/Button.css";

const theme = {
    primary: "btn__primary",
    outlined: "btn__outlined",
    destructive: "btn__destructive",
    icon: "btn__icon",
    accent: "btn__accent",
};

const sizes = {
    icon: "btn__size__icon",
    sm: "btn__size__sm",
    md: "btn__size__md",
    lg: "btn__size__lg",
};

const Button = ({ active, variant, size, className, children, ...props }) => {

    const activeClassName = active ? "active" : "";
    const newClassName = className ?? "";

    return (
    <button className={`btn ${theme[variant]} ${sizes[size] ?? sizes.sm} ${activeClassName} ${newClassName}`}
    {...props} >
        { children }
    </button>);
};

export default Button;