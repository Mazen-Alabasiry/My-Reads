import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Bookinfo.css'
export default function BookInfo(props) {
    const { book } = props;
   
    return (
        <div className='content'>
           
            {book ? <Fragment>
            
             <div className="book-cover" style={{  backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div> 
                
             
            <h1 className='title'>Title: <span style={{color:'gray'}}> :{book.title}</span></h1>
            <h4 className='authors'>Authors: <span> {book.authors.join(', ')}</span></h4>
            <h4 className='lan'>Language:<span> {book.language}</span> </h4>
            <h4 className='pageCount'>page Count: <span>{book.pageCount+' page'} </span></h4>
            <h4 className='desc'>Description:<span> {book.description}</span></h4>
            <h4 className='cat'>categories:<span> {book.categories.join(', ')}</span> </h4>
             <h4 className='date'>publish Date: <span> {book.publishedDate}</span></h4>
              <h4 className='link'>publish Date: <span  >{<a target='_blank' style={{color:'#ff0000d4' ,textDecoration:'none'}} href={book.infoLink}>Book Link </a>}</span></h4>  
            {console.log(book)}
             
               </Fragment> :''} 
        </div>
    )
}
