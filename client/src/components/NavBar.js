import React, { useState } from 'react'
import { Container, Menu, Icon, Input } from 'semantic-ui-react'
import API from '../utils/API'
import { Link } from 'react-router-dom'

const NavHeader = (props) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <Menu stackable widths='5' fixed='top' inverted style={{ height: '79px' }}>
                <Container>
                    <Menu.Item as={Link} to='/' header>
                        <Icon name='book' size='large' />
                        GoogleBookSearcher
                     </Menu.Item>
                    <Menu.Item as={Link} to='/home'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/booklist'>Book List</Menu.Item>
                    <Input
                        placeholder='Title or Author'
                        onChange={(e, target) => setSearchTerm(target.value)}
                        style={{
                            height: '45px',
                            margin: 'auto'
                        }}
                        action={(props.type === 'home') ?
                            {
                                name: 'search',
                                content: 'Search for Books',
                                onClick: () => {
                                    if (searchTerm !== '') {
                                        API.getBooks(searchTerm).then(res => props.lift(res))
                                        console.log('Searching Google Books For: ' + searchTerm)
                                    } else {
                                        alert('You did not search for anything')
                                    }


                                }
                            } :
                            {
                                name: 'find',
                                content: 'Find Books In Your List',
                                onClick: () => {
                                    if (searchTerm !== '') {
                                        API.findByName(searchTerm).then(res => console.log(res))
                                        console.log('Searching Your List For: ' + searchTerm)
                                    } else {
                                        alert('You did not search for anything')
                                    }


                                }
                            }}
                    />


                </Container>
            </Menu>
        </div>
    )
}
export default NavHeader