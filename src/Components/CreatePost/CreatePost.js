import React, { useContext } from 'react';
import {Button, Form} from 'react-bootstrap';
import { PostContext } from '../Home/Home';

const CreatePost = (props) => {
    const [handlePostSubmit, handleValueChange] = useContext(PostContext);
    return (
        <div>
            <Form onSubmit={handlePostSubmit}>
                <Form.Group controlId="post-title">
                    <Form.Control type="text" name='title' placeholder="Post Title" onChange={handleValueChange} />
                </Form.Group>

                <Form.Group controlId="post-body">
                    <Form.Control as="textarea" name='post' onChange={handleValueChange} rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CreatePost;