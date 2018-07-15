import React from 'react';
import LinkButton from '../components/LinkButton';
// import { Link } from 'react-router-dom';

const Library = () => (
    <div className="container"><h1>Library</h1>
    <p>This will be the library where you add new symbols...(TODO:lowdb)</p>
    <LinkButton to="/">Done</LinkButton>
    </div>
)

export default Library;