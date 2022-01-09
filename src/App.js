import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library.js'
import Search from './components/Search.js'
import NotFoundpage from './components/NotFound.js'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageLodaing from './components/PageLodaing.js'
import BookInfo from './components/BookInfo.js'

class BooksApp extends React.Component {
  
  state = {
    books: null,
     bookinfo: null,
  }
  async componentDidMount() {
   const books=await BooksAPI.getAll()
      this.setState({ books })
  
  }
   UpdateBooks = (book, shelf) => {
     book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat([book])
    }));
     BooksAPI.update(book, shelf);

  };
  openInfo = (book) => {

  this.setState(prevState => ({
      bookinfo: prevState.bookinfo=book
    }));
   
  }
   
  render() {
    const { books} = this.state;
 
    return (
     
      <div className="app">
        <Routes>
         
          <Route path='/'  element={<Navigate to='/library'/>}/>
          <Route path='/library' element={this.state.books ? <Library books={books} UpdateBooks={this.UpdateBooks} openInfo={this.openInfo}/>:<PageLodaing/>}/>
          <Route path='/search' element={<Search UpdateBooks={this.UpdateBooks} books={books} />} /> 
          <Route path='/notfound' element={<NotFoundpage />} />
          <Route path='/bookinfo' element={<BookInfo book={this.state.bookinfo }/> }/>
          <Route path='*' element={<Navigate to='/notfound' />} /> 
          

        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
