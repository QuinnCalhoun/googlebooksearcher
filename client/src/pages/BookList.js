import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { NavBar, BookShelf } from '../components/index'
import API from '../utils/API'

function BookList() {
    const [bookList, setBookList] = useState({})

    const bookLifter = (bookListArr) => {
        setBookList({ results: bookListArr })
    }

    useEffect(() => {
        API.showBooks().then(res => {
            setBookList({results: res})
        })
    }, [])

    return (
        <Container>
            <NavBar lift={bookLifter} />
            <BookShelf lift={bookLifter} {...bookList} type='shower' />
        </Container>
    )
}
export default BookList