import React from 'react';
import './book.css';

function Book(props) {
    return (
        <article className='book'>
            <img src={props.thumbnail} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.authors}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}

export default Book;
