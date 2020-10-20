import React from "react";

function Form() {
    return (
        <div className="container-md mt-4 d-flex justify-content-center">
            <form className="row" method="POST">
                <input type="text" id="item" name="item"
                       className=""/>
                <input type="submit" id="submit" value="Submit Todo"
                       className="btn btn-outline-danger ml-2"/>
            </form>
        </div>
    );
};

export default Form;