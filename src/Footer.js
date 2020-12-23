import React from "react";
import App from "./App";


function footer() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="">
                <div>{App().todos || [].filter(todo => !todo.complete).length} left to do</div>
                <p className="text-info pt-2">G.WebDev</p>
            </div>
        </div>
    )
}

export default footer;