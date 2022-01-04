import React, {  Fragment } from 'react'
import ListBooks from './ListBooks'
import { Link } from "react-router-dom";


export default function Library(props) {
  const { books } = props;
  const { UpdateBooks } = props;
  const { openInfo } = props;
 return (
          
        <Fragment>
            
          <div className="list-books">
              <div className="list-books-title">
                <i className="fas fa-book-reader" style={{fontSize:' 20pt',color: 'white',}}></i>
                <h1>MyReads</h1>
            </div>
       <ListBooks books={books} UpdateBooks={UpdateBooks} openInfo={ openInfo}/>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        
         </Fragment>
        )
}

