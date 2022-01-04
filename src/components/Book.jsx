import React, { Fragment } from 'react'
import * as BooksAPI from '../BooksAPI'


export default function Book(props) {
    const { book } = props;
    const { UpdateBooks } = props;
    let image = book.imageLinks
        ? book.imageLinks.thumbnail
        : ` https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjzyPH2LrPz1aWXdwjZYGhid7Z7xCUl-0IQ&usqp=CAU`;
    
    
    function handelSelectChange (e) {
        let selectedShelf = e.currentTarget.value;
        BooksAPI.get(book.id).then(book => {
            let selectBook = book;
           UpdateBooks(selectBook,selectedShelf);
        })
        
    }
   return (
            <Fragment>
               
                
                     <li key={book.id} >
                    
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})`}}></div>
                                <div className="book-shelf-changer">
                                <select value={book.shelf }onChange={handelSelectChange}>
                                    <option disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.join(", ") : "Author unknown!!"}</div>
                            </div>
                        </li>
                        
              
            
            </Fragment>
        )
}

