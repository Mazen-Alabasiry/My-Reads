import React, { Component, Fragment } from 'react'
import ListBooks from './ListBooks'
import { Link } from "react-router-dom";
export class Library extends Component {
  constructor(props) {
    super(props);
    this.state ={
      books: this.props.books,
      UpdateBooks:this.props.UpdateBooks,
     
    }
  }
 
  render() {
    const { books } = this.state;

   
        return (
          
        <Fragment>
            
          <div className="list-books">
              <div className="list-books-title">
                <i className="fas fa-book-reader" style={{fontSize:' 20pt',color: 'white',}}></i>
                <h1>MyReads</h1>
            </div>
              <ListBooks books={books }  UpdateBooks={this.state.UpdateBooks}/>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        
         </Fragment>
        )
    }
}

export default Library
