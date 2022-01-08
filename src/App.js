import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
 import Library from './components/Library'
 import Search from './components/Search'
 import NotFoundpage from './components/NotFound'
import { Navigate, Route, Routes } from 'react-router-dom'
 import PageLodaing from './components/PageLodaing'
 import BookInfo from './components/BookInfo'


class BooksApp extends React.Component {
  
  state = {
    books: null,
     bookinfo: null,
  }
  async componentDidMount() {
    let books=await BooksAPI.getAll()
      this.setState({ books })

  }
   UpdateBooks = (book, shelf) => {
     book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).push(book)
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
          <Route path='/library' element={this.state.books ? <Library books={books} UpdateBooks={this.UpdateBooks} openInfo={ this.openInfo} />:<PageLodaing/>}/>
          <Route path='/search' element={<Search UpdateBooks={this.UpdateBooks} books={books} />} /> 
          <Route path='/notfound' element={<NotFoundpage />} />
          <Route path='/bookinfo' element={<BookInfo book={ this.state.bookinfo}/> }/>
          <Route path='*' element={<Navigate to='/notfound' />} /> 
          

        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
