import React from 'react';
import { DragSource } from 'react-dnd';
import logo from '../../logo.svg';

// How Symbol reacts to being dragged
const symbolSource = {
    beginDrag(props) {
        const { name } = props;
        return { name };
    }
};
const symbolCollector = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

const Symbol = (props) => {
    const { connectDragSource } = props;
    return connectDragSource(
        <img src={logo} alt="logo" />
    );
};


export default DragSource('symbol', symbolSource, symbolCollector)(Symbol);
