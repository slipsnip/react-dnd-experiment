import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Library from '../components/Library';
// import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';

const Grid = styled.div`
    display: grid;
    height: 100vh;
    border: 1px solid black;
    text-align: center;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0.5em;
    grid-template-rows: 8fr minmax(200px, auto);
    grid-template-areas:
        "area1 area2"
        "area3 area2"
`;

const Home = () => (
    <Grid>
        <Container title="whiteboard" area="area1" />
        <Library title="library" area="area2">
            <LinkButton to="/library">Manage Library</LinkButton>
        </Library>
        <Container title="properties" area="area3" />
    </Grid>
);

export default Home;