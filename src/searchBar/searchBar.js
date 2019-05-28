import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <section className='search_bar'>
                <div className='search_bar__term'>
                    <form>
                        <label htmlFor='search-term'>Search:</label>
                        <input type='text' name='search-term' id='search-term' placeholder='Interesting subject' />
                        <button>Search</button>
                    </form>
                </div>
                <div className='search_bar__filters'>
                    <label htmlFor='print-type'>Print Type: </label>
                    <select name='print-type' id='print-type'>
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                    <label htmlFor='book-type'>Book Type: </label>
                    <select name='book-type' id='book-type'>
                        <option value='no-filter'>No filter</option>
                        <option value='partial'>Parts of text are previewable</option>
                        <option value='free-ebooks'>Free ebooks</option>
                        <option value='paid-ebooks'>Paid ebooks</option>
                        <option value='ebooks'>Any ebooks</option>
                    </select>
                </div>  
            </section>
        );
    }
}

export default SearchBar;