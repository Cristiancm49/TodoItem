import React from "react";
import { children } from "react"
import "./TodoHeader.css"

function TodoHeader({ children }) {

    return (
        <header className="containerHeader">
            {children}
        </header>
    )
}

export {TodoHeader};
