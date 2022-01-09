import React, { Fragment } from 'react'
import BookShelf from './BookShelf'


export default function ListBooks(props) {
    const { books } = props;
    const {UpdateBooks}=props
    const {openInfo}=props
        let currentlyReading = books.filter(b => b.shelf === 'currentlyReading')
        let wantToRead = books.filter(b => b.shelf === 'wantToRead')
         let read = books.filter(b => b.shelf === 'read')
        
      return (
            <Fragment>
               
            <div className="list-books-content">
                      
                    <div>
                       
                        <BookShelf shelfName={'currently Reading'} books={currentlyReading}  UpdateBooks={UpdateBooks} openInfo={openInfo }/>
                        <BookShelf shelfName={`Want to Read`} books={wantToRead} UpdateBooks={UpdateBooks} openInfo={openInfo }/>
                        <BookShelf shelfName={`Read`} books={read} UpdateBooks={UpdateBooks} openInfo={openInfo }/>
                       
                    
                </div>
            </div>
            </Fragment>
        )
}
