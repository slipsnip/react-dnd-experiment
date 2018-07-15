import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';
// import { Link } from 'react-router-dom';


// TODO: add code for adding symbols (svg's) to db
// TODO: add code for removing / managing symbols

const data = {
    "categories": [
    { id: "1", category: "sequence", desc: "Sequence Diagrams"},
    { id: "2", category: "communication", desc: "Communication Diagrams"},
    { id: "3", category: "interaction", desc: "Interaction Overview Diagrams"},
    { id: "4", category: "timing", desc: "Timing Diagrams"},
    { id: "5", category: "structure", desc: "Structure Diagrams"},
    { id: "6", category: "behaviour", desc: "Behaviour Diagrams"},
    { id: "7", category: "usecase", desc: "Use Case Diagram"},
    { id: "8", category: "state", desc: "State Machines"},
    { id: "9", category: "class", desc: "Class Diagrams"}
    ]
}


class LibraryManager extends Component {
    render() {
        return (
            <div>
                <h1>LibraryManager</h1>
                <form action="add" method="post">
                    <label htmlFor="">Category:
                        <select name="category" id="1">
                            {data.categories.map((category) => (
                                <option value="{category.category}">
                                    {category.desc}
                                </option>
                            ))
                            }
                        </select>
                    </label><br/>
                    <label htmlFor="">Name:
                        <input type="text" name="title" id="2"/>
                    </label><br/>
                    <label htmlFor="">SVG
                        <textarea name="svg" id="3" cols="30" rows="10" />
                    </label><br/>
                    <button type="submit">Add</button>
                    <button>Delete</button>

                </form>
                <LinkButton to="/">Done</LinkButton>

            </div>
        );
    }
}


export default LibraryManager;