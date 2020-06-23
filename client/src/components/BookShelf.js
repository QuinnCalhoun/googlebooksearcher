import React, { useState } from 'react'
import { Container, Divider, List, Segment, Button, Label, Accordion, Image, Grid } from 'semantic-ui-react'
import API from '../utils/API'

const BookShelf = (props) => {
    const type = props.type
    const [confirmState, setConfirmState] = useState('')

    const capitalize_Words = (str) => {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    const items = () => {
        let items = [];
        (type === 'finder') ?
            props.results.data.items.map(item =>
                items.push(
                    <Segment key={item.id}>
                        <Grid columns='2'>
                            <Grid.Column width='5'>
                                {(item.volumeInfo.imageLinks) ?
                                    <Image src={item.volumeInfo.imageLinks.smallThumbnail} /> :
                                    null}
                            </Grid.Column>
                            <Grid.Column width='11'>
                                <List.Item
                                    as='a'
                                    href={item.volumeInfo.canonicalVolumeLink}
                                    target='_blank'
                                    children={item.volumeInfo.title +
                                        ' || ' +
                                        'By: ' +
                                        item.volumeInfo.authors}
                                />
                                <Label
                                    as={Button}
                                    icon={(confirmState === item.id) ? 'check' : null}
                                    onClick={() => {
                                        API.addBook(item).then(res => (res.status === 200) ? setConfirmState(item.id) : setConfirmState(false))
                                    }}
                                    content='Add to Reading List' />
                                <Accordion panels={[{ key: item.id, title: 'Description', content: item.volumeInfo.description }]} />
                            </Grid.Column>
                        </Grid>
                    </Segment>)
            ) :
            props.results.data.map(item =>
                items.push(
                    <Segment key={item._id}>
                        <Grid columns='2'>
                            <Grid.Column width='5'>
                                {(item.image) ?
                                    <Image src={item.image} /> :
                                    null}
                            </Grid.Column>
                            <Grid.Column width='11'>
                                <List.Item
                                    as='a'
                                    href={item.link}
                                    target='_blank'
                                    content={
                                        capitalize_Words(item.title) +
                                        ' || ' +
                                        'By: ' +
                                        capitalize_Words(item.author)
                                    }
                                />
                                <Label
                                    as={Button}
                                    onClick={() => {
                                        API.deleteBook(item._id).then(res => {
                                            (res.status === 200) ?
                                                API.showBooks().then(res => props.lift(res)) :
                                                alert('No Book Deleted')
                                        })
                                    }}
                                    content='Remove from List' />
                                <Accordion panels={[{ key: item._id, title: 'Description', content: item.description }]} />
                            </Grid.Column>
                        </Grid>
                    </Segment >)
            )
        return items
    }
    return (
        <Container
            text
            style={{ marginTop: '100px' }}>

            <Divider />

            <List
                items={(props.results) ? items() : null} />


        </Container>
    )
}
export default BookShelf