import React from 'react';
import LinkButton from '../components/LinkButton';
// import { Link } from 'react-router-dom';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

// TODO: add code for adding symbols (svg's) to db
// TODO: add code for removing / managing symbols

const LibraryManager = () => (
    <div className="container"><h1>LibraryManager</h1>
    <p>This will be the LibraryManager where you add new symbols...(TODO:lowdb)</p>
    <LinkButton to="/">Done</LinkButton>
    </div>
)

export default LibraryManager;