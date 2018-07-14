import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import styled from 'styled-components';
import Container from './components/Container/Container';
import Symbol from './components/Symbol/Symbol';
// import logo from './logo.svg';
import 'normalize.css'; // CSS Reset

const Grid = styled.div`
    display: grid;
    height: 100vh;
    border: 1px solid black;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.5em;
    grid-template-rows: 8fr minmax(200px, auto);
    grid-template-areas:
        "area1 area2"
        "area3 area2"
`;

function App() {
    return (
        <Grid>
            <Container title="whiteboard" area="area1" />
            <Container title="library" area="area2"><Symbol id="123e" name="logo" /></Container>
            <Container title="properties" area="area3" />
        </Grid>
    );
}

export default DragDropContext(HTML5Backend)(App);
