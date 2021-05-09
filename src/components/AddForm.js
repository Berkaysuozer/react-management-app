import { Form, Button } from 'react-bootstrap';

const AddForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control type='text' placeholder='Name' required>
                </Form.Control>

                <Form.Control type='text' placeholder='email' required>
                </Form.Control>

                <Form.Control as='textarea' placeholder='Address' rows={3}>
                </Form.Control>

                <Form.Control type='text' placeholder='phone' >
                </Form.Control>
            </Form.Group>
            <Button variant='success' type='submit' block> Add New Employee</Button>
        </Form>
    )
}

export default AddForm;