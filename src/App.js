import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library'
import Search from './components/Search'
import NotFoundpage from './components/NotFound'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageLodaing from './components/PageLodaing'


class BooksApp extends React.Component {
  
  state = {
    books: null,
     navigate: false,
  }
  async componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })

    })
   

  }
   UpdateBooks = (book, shelf) => {
     book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat([book])
    }));
     BooksAPI.update(book, shelf);

  };

  render() {
    const { books} = this.state;
 
    return (
     
      <div className="app">
        <Routes>
         
          <Route path='/'  element={<Navigate to='/library'/>}/>
          <Route path='/library'  element={this.state.books?<Library  books={books} UpdateBooks={this.UpdateBooks} />:<PageLodaing/>}/>
          <Route path='/search' element={<Search UpdateBooks={this.UpdateBooks} />} /> 
          <Route path='/notfound' element={<NotFoundpage/> }/>
          <Route path='*' element={<Navigate to='/notfound' />} /> 
          

        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
