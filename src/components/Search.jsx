import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
import { debounce } from "lodash";


export class Search extends Component {
    state = {
        libraryBooks:this.props.books,
        searchedlist: [],
        query: '',
        UpdateBooks: this.props.UpdateBooks,
        error:''
        
    }
    handleChange = (e) => {
        let query = e.currentTarget.value;
        this.setState({ query });
        this.Searchlist(query.trim());
    }
    
    Searchlist = debounce((query) => {
       if (!query) {
           this.setState({
               searchedlist: [],
               error: ''
           });
      return;
    }
        BooksAPI.search(query).then(books => {
          if (!books || books.error) {
          this.setState({
            searchedlist: [],
            error: "No books were found :("
          });
          return;
          }
              books = books.map(book => {
                let Book = this.state.libraryBooks.find(b => b.id === book.id);
                 book.shelf = Book ? Book.shelf : "none";
                return book;
           })
         this.setState({ searchedlist: books })
       //  console.log(this.state.searchedlist)
    }).catch(err => {
        this.setState({
          searchedlist: [],
          error:
            "There was an error searching for books, please check your connection"
        });
      });
  },100) 

    render() {
       
        return (
            <Fragment>
               
                <div className="search-books">
                    <div className="search-books-bar">
                       
                        <Link className="close-search" to='/library'>close</Link>
                    <div className="search-books-input-wrapper">
                       <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>

                    </div>
                    </div>
                    <div className="search-books-results">
                       
                        <ol className="books-grid">
                            {   this.state.searchedlist.length===0?<span style={{color:'red',fontSize:'18pt',fontWeight:'bold'}}>{ this.state.error}</span>:
                                this.state.searchedlist.map(book => <Book key={book.id} book={book} UpdateBooks={this.state.UpdateBooks} />)
                            }
                           
                        </ol>
                    </div>
                </div>
             </Fragment>    
        )
               
           
        
    }
}

export default Search
