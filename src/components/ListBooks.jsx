import React, { Component, Fragment } from 'react'
import BookShelf from './BookShelf'

export class ListBooks extends Component {

    render() {
        const books = this.props.books;
        let currentlyReading = books.filter(b => b.shelf === 'currentlyReading')
        let wantToRead = books.filter(b => b.shelf === 'wantToRead')
         let read = books.filter(b => b.shelf === 'read')
        
        return (
            <Fragment>
               
            <div className="list-books-content">
                      
                    <div>
                       
                        <BookShelf shelfName={'currently Reading'} books={currentlyReading}  UpdateBooks={this.props.UpdateBooks} />
                        <BookShelf shelfName={`Want to Read`} books={wantToRead} UpdateBooks={this.props.UpdateBooks}/>
                        <BookShelf shelfName={`Read`} books={read} UpdateBooks={this.props.UpdateBooks} />
                       
                    
                </div>
            </div>
            </Fragment>
        )
    }
}

export default ListBooks
