import React from "react";
import { createRoot } from "react-dom/client";

const Button = ({text}) => {
    return <button>{text}</button>;
}

createRoot(document.getElementById("root")).render(
    <React.Fragment>
        <Button text="Hola Mundo" />
        <Button text="Adiós Mundo" />   
    </React.Fragment>,
);
