import React from 'react';
import { Route } from 'react-router-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import 'normalize.css'; // CSS Reset
// Routes
import Home from './routes/Home';
import LibraryManager from './routes/LibraryManager';

import 'normalize.css'; // CSS Reset

function App() {
    return (
        <div className="app">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/library" component={LibraryManager} />
        </div>        
    );
}

export default DragDropContext(HTML5Backend)(App);
