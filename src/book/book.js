import React from 'react';
import './book.css';

function Book(props) {
    return (
        <article className='book'>
            <img className='book__thumbnail' src={props.thumbnail} alt={props.title} />
            <div className='book__details'>
                <h2>{props.title}</h2>
                <p>{props.authors}</p>
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
        </article>
    );
}

export default Book;
