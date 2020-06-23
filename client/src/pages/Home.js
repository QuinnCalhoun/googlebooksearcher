import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import {BookShelf, NavBar} from '../components/index'
import API from '../utils/API'

function Home() {
  const [bookList, setBookList] = useState({})

  const bookLifter = (bookListArr) => {
    setBookList({results: bookListArr})
  }

  useEffect(() => {
    API.getBooks('Fight Club').then(res => setBookList({results: res}))
}, [])

  return (
    <Container>
      <NavBar lift={bookLifter} type='home' />
      <BookShelf {...bookList} type='finder' />
    </Container>
    // <div>hello world</div>
  );
}


export default Home;
