import React from 'react';
import LinkButton from '../components/LinkButton';
// import { Link } from 'react-router-dom';

const LibraryManager = () => (
    <div className="container"><h1>LibraryManager</h1>
    <p>This will be the LibraryManager where you add new symbols...(TODO:lowdb)</p>
    <LinkButton to="/">Done</LinkButton>
    </div>
)

export default LibraryManager;