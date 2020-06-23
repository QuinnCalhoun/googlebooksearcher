import axios from 'axios'

const apikey = 'key=AIzaSyA9yAx5yBvtMRTtHW62ao40a1YVxraIxq4'

export default {
    getBooks: (rawSearchTerm) => {
        const searchTerm = rawSearchTerm.replace(/ +/g, '+')
        const queryUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '+' + apikey
        // console.log(queryUrl)
        return axios.get(queryUrl)

    },
    addBook: (bookObj) => {
        console.log(bookObj)
        let book = {
            title: bookObj.volumeInfo.title,
            author: bookObj.volumeInfo.authors[0],
            description: (bookObj.volumeInfo.description) ?
                bookObj.volumeInfo.description :
                bookObj.volumeInfo.title,
            image: bookObj.volumeInfo.imageLinks.smallThumbnail,
            link: bookObj.volumeInfo.canonicalVolumeLink
        }
        console.log(book)
        return axios.post('/api/books/', book)
    },
    showBooks: () => {
        return axios.get('/api/books')
    },
    findByName: (bookTitle) => {
        return axios.get(`/api/books/` + bookTitle)
    },
    findByID: (bookId) => {
        return axios.get('/api/books/' + bookId)
    },
    deleteBook: (bookId) => {
        return axios.delete('/api/books/' + bookId)
    }
}