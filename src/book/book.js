import React from 'react';
import './book.css';

class Book extends React.Component {
    render() {
        return (
            <article className='book'>
                <img src={this.props.thumbnail} alt={this.props.title} />
                <h2>{this.props.title}</h2>
                <p>{this.props.authors}</p>
                <p>${this.props.price}</p>
                <p>{this.props.description}</p>
            </article>
        );
    }
}

export default Book;
