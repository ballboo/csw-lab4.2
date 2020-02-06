import React from 'react'
import './BookCard.css'

const BookCard = (props) =>{

    return (
        <div className='bookcard'>
            <p> Title: {props.title}</p>
            <img src={props.imageUrl} />
            <div>
               <button onClick={props.updateBook}>update</button>
               <button onClick={props.deleteBook}>delete</button>
           </div>

        </div>
    )
}
export default BookCard ; 