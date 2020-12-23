import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function header() {
    return (
        <div className="header text-center">
            <div className="row">
                <div className="col-12 text-info">
                    <h1>G.WebDev's Todo App</h1>
                </div>
            </div>
        </div>
    );
}

export default header;