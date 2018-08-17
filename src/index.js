import {
    Provider
} from 'react-redux';
import {
    createStore
} from 'redux';
import React from 'react';
import App from './App.js';
import {
    addComment,
    thumbUpComment,
    thumbDownComment
} from './actions.js';
import ReactDOM from 'react-dom';
import {
    reducer
} from './reducer.js';

const store = createStore(reducer);
ReactDOM.render( <
    Provider store = {
        store
    } >
    <
    App / >
    <
    /Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
export {
    thumbUpComment,
    thumbDownComment
}