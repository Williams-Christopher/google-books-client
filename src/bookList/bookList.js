import React from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends React.Component {
    render() {
        let books = this.props.books.map((book, i) => {
            return (
                <Book
                    key={i}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors[0]}
                    thumbnail={'imageLinks' in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : ''}
                    description={book.volumeInfo.description}
                    previewLink={book.volumeInfo.previewLink}
                    price={'listPrice' in book.saleInfo ? book.saleInfo.listPrice.amount : ''}
                />
            );
        });

        return (
            <section className='book_list'>
                {books}
            </section>
        );
    }
}

export default BookList;