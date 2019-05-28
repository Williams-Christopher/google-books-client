import React from 'react';
import SearchBar from '../searchBar/searchBar';
import BookList from '../bookList/bookList';

import './searchApp.css';

export default class SearchApp extends React.Component {
    render() {
        return (
            <section className='search_client'>
                <p>SearchApp component placeholder text</p>
                <SearchBar />
                <BookList />
            </section>
        );
    }
}