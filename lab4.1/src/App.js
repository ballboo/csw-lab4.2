import React, { useState } from 'react';
import './App.css';
import BookCard from './component/BookCard'
import Form from './component/Form'


// // ["harry Potter","harry Potter 2" ]
// const arr = booklist.map((book, index) => {
//   return book.title
// })

function App() {

  let [bookList,setBookList] = useState([
      {
        title: "Harry Potter",
        imageUrl:'https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg'
      },
      {
        title: "Harry Potter 2",
        imageUrl:'https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s550x406.jpg'
      },
      {
        title: "Harry Potter 3",
        imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg'
      }
    ])

  // const bookList = [
  //   {
  //     title: "Harry Potter",
  //     imageUrl:'https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg'
  //   },
  //   {
  //     title: "Harry Potter 2",
  //     imageUrl:'https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s550x406.jpg'
  //   },
  //   {
  //     title: "Harry Potter 3",
  //     imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg'
  //   }
  // ];

  let handleClick = (data) =>{
    // bookList.push({
    //   title: "Harry Potter",
    //   imageUrl:'https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg'
    // })
    setBookList([data,...bookList])
    console.log("create")
  }
   
 let deleteBook = (index) => {
  const filtedBookList = bookList.filter((book, i) => {
    return i !== index;
  });

  setBookList(filtedBookList);
}

    let updateBook = (index) => {
      console.log('test')
      const updated = bookList.map((book, i) => {
        if (index === i)
          return {
            title: "Harry Potter",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg"
          }
        else
          return book;
      });
    
      setBookList(updated)
    }
   
  return (
    <div className="App">
      {/* <BookCard {...booklist[0]} />
      <BookCard title={booklist[1].title} imageUrl={booklist[1].imageUrl} /> */}
      <div className='book-list'>
      {
        bookList.map((book, index) => {
          return <BookCard key={index} {...book} 
          deleteBook={()=> {deleteBook(index)}} 
          updateBook={() => { updateBook(index)}} />
        })
      }
      </div>
      <div>
      </div>
      <Form onClick={handleClick}/> 
    </div>
  );
}

export default App;
