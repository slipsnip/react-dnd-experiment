import React, { Component } from 'react';
import styled from 'styled-components';

class Library extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <h1>{this.props.title}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default styled(Library)`
    background: #ddd;
    padding: 0px;
    margin: 0px;
    ${props => (props.area && `grid-area:${props.area}`)}
    h1 {
        color: blue;
        padding: 0.2em;
        margin: 0;
        text-align: center;
        background: #ccc;
    }
`;
