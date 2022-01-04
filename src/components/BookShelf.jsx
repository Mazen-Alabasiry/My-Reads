import React, { Fragment } from 'react'
import Book from './Book'


export default function BookShelf(props) {
    const { books } = props
    const { shelfName } = props
    const {UpdateBooks}=props
     return (
            <Fragment>
                  
                <div className="bookshelf">
                  
                    <h2 className="bookshelf-title">{shelfName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                            {books.map(book => <Book  key={book.id} book={book } UpdateBooks={UpdateBooks} />)
                            
                            }
                           
                        </ol>
                    </div>
                    </div>
            </Fragment>
        )
}

