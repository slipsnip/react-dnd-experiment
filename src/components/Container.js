import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import styled from 'styled-components';

const Title = styled.h1`
    padding: 0.2em;
    margin: 0;
    text-align: center;
    background: #ddd;
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
            <div className={this.props.className} area={this.props.area}>
                <Title>{this.props.title}</Title>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

const StyledContainer = styled(Container)`
    background: #eee;
    padding: 0px;
    margin: 0px;
    ${props => (props.area && `grid-area:${props.area}`)}
`;

export default DropTarget(['symbol'], containerDrop, containerCollector)(StyledContainer);
