import React from "react";

const ListTitle = () => {
    return (
        <div className="container-md mt-4">
            <div className="row">
                <h3 className="">Todos</h3>
            </div>
        </div>
    )
}

const List = () => {
    return (

        <div className="container-md mt-4">
            <div className="row">
                <ul>
                    <li>
                        <label>
                            <input className="" type="checkbox"/>
                            <span className=""> Learn Basic React</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className="" type="checkbox"/>
                            <span className="text-sm"> Start coding</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className="" type="checkbox"/>
                            <span className="text-sm"> Check Coding result</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Section() {
    return (
        <section className="p-4">
            <ListTitle/>
            <List/>
        </section>
    )
}

export default Section;