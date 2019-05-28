import React from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends React.Component {
    render() {
        return (
            <section className='book_list'>
                <p>BookList component placeholder text</p>
                <Book />
            </section>
        );
    }
}

export default BookList;