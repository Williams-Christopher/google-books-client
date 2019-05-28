import React from 'react';
import './bookList.css';
import Book from '../book/book';

class BookList extends React.Component {
    render() {
        // let books = this.props.books.map((book, i) => {
        //     return (
        //         <Book className='book-from-booklist'
        //             key={i}
        //             title={{title} = book.volumeInfo}
        //         />
        //     );
        // });

        return (
            <section className='book_list'>
                <p>BookList component placeholder text</p>
                <Book title={'Lorem Ipsum'} authors={'I.P. Freely'} price={29.34}description={'A lovely journey through the events that led to the classic book, Yellow Pools.'} />
            </section>
        );
    }
}

export default BookList;