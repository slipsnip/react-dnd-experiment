import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import styled from 'styled-components';

const Title = styled.h1`
    padding: 0.2em;
    margin: 0;
    text-align: center;
    background: #ddd;
`;

const Frame = styled.div`
    background: #eee;
    padding: 0px;
    margin: 0px;
    ${props => (props.area && `grid-area:${props.area}`)}
`;

const containerDrop = {
    drop(props, monitor, component) {
        return {
            item: monitor.getItem(),
            type: monitor.getItemType()
        };
    }
};

const containerCollector = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    };
};

class Container extends Component {
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <Frame area={this.props.area}>
                <Title>{this.props.title}</Title>
                <p>{this.props.children}</p>
            </Frame>
        );
    }
}

export default DropTarget(['symbol'], containerDrop, containerCollector)(Container);
