import React, { Component, Fragment } from 'react'
import Book from './Book'

export class BookShelf extends Component {
    state = {
        shelfName: this.props.shelfName,
        books: this.props.books,
        
    }
    render() {
        const { shelfName, books } = this.state;
     
        return (
            <Fragment>
                  
                <div className="bookshelf">
                  
                    <h2 className="bookshelf-title">{shelfName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                            {books.map(book => <Book  key={book.id} book={book } UpdateBooks={this.props.UpdateBooks} />)
                            
                            }
                           
                        </ol>
                    </div>
                    </div>
            </Fragment>
        )
    }
}

export default BookShelf
