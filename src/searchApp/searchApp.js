import React from 'react';
import SearchBar from '../searchBar/searchBar';
import BookList from '../bookList/bookList';

import './searchApp.css';



export default class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            searchTerm: '',
            printType: 'all', //all, book, magazines
            bookType: 'no-filter', //partial, full, free-ebooks, paid-ebooks, ebooks
            maxResults: 10,
        };
    }

    updatePrintType(val) {
        this.setState({
            printType: val,
        });
    }

    updateBookType(val) {
        this.setState({
            bookType: val,
        });
    }

    updateSearchTerm(val) {
        this.setState({
            searchTerm: val,
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        // Don't make API request if searchTerm is empty
        if(this.state.searchTerm === '') {
            this.setState({
                error: new Error('Please enter a search term.'),
            });
            return;
        }

        // Setup query parameters and coonstruct URL
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
        let term = encodeURIComponent(this.state.searchTerm);
        let queryFilter = this.state.bookType !== 'no-filter' ? `&filter=${this.state.bookType}` : '';
        let printType = `&printType=${this.state.printType}`;
        let maxResults = `&maxResults=${this.state.maxResults}`;
        
        let queryUrl = `${baseUrl}?q=${term}${queryFilter}${printType}${maxResults}`;

        // Perform query against Google Books API
        fetch(queryUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error();
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
                this.setState({
                items: data.items,
                error: null,
            });
        })
        .catch(e => {
                this.setState({
                error: e,
            });
        });
    }

    render() {
        return (
            <section className='search_client'>
                <SearchBar
                    updateSearchTerm={val => this.updateSearchTerm(val)}
                    updatePrintType={val => this.updatePrintType(val)}
                    updateBookType={val => this.updateBookType(val)}
                    handleFormSubmit={e => this.handleFormSubmit(e)}
                />
                {!(this.state.error)
                        ? <BookList books={this.state.items} />
                        : <div className='error'>An error occurred. Error: {this.state.error.message}</div>
                }
            </section>
        );
    }
}

SearchApp.defaultProps = {
    items: [],
};