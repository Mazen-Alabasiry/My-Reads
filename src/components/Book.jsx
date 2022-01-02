import React, { Component, Fragment } from 'react'
import * as BooksAPI from '../BooksAPI'

export class Book extends Component {
    state = {
        book:this.props.book,
        selectBook: '',
        selectedShelf: '',
        UpdateBooks: this.props.UpdateBooks 
    }
    handelSelectChange = (e) => {
        let selectedShelf = e.currentTarget.value;
        this.setState({selectedShelf})
        BooksAPI.get(this.state.book.id).then(book => {
            let selectBook = book;
            this.setState({selectBook})
            this.state.UpdateBooks(selectBook,selectedShelf);
        })
        
    }
  
    
    render() {
        
        const { book } = this.props;
         let image = book.imageLinks
        ? book.imageLinks.thumbnail
        :` https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjzyPH2LrPz1aWXdwjZYGhid7Z7xCUl-0IQ&usqp=CAU`;
        return (
            <Fragment>
               
                
                     <li key={book.id} >
                    
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})`}}></div>
                                <div className="book-shelf-changer">
                                <select value={book.shelf }onChange={this.handelSelectChange}>
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
}

export default Book
