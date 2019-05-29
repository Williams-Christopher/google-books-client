import React from 'react';
import SearchBar from '../searchBar/searchBar';
import BookList from '../bookList/bookList';

import './searchApp.css';



export default class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: false,
            searchTerm: 'flower growing',
            printType: 'all',
            bookType: 'no-filter',
        };
    }

    componentDidMount() {
        // this.setState({
        //     items,
        // });
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
        let term = encodeURIComponent(this.state.searchTerm);
        let queryFilter = this.state.bookType !== 'no-filter' ? `&filter=${this.state.bookType}` : '';
        let printType = `&printType=${this.state.printType}`;
        const maxResults = `&maxResults=10`;
        
        let queryUrl = `${baseUrl}?q=${term}${queryFilter}${printType}${maxResults}`;
        console.log(queryUrl);

        fetch(queryUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error('A problem occurred with your request. Please try again later.');
            }

            return response.json();
        })
        .then(data => {
            console.log(data.items);
            this.setState({
                items: data.items,
                error: false,
            });
        })
        .catch(e => {
            console.log('Error: ', e.message);
            this.setState({
                error: true,
            });
        });
    }

    render() {
        return (
            <section className='search_client'>
                <SearchBar />
                <BookList books={this.state.items} />
            </section>
        );
    }
}

SearchApp.defaultProps = {
    items: [],
};