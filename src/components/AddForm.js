import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const AddForm = (props) => {

    const { addEmployee } = useContext(EmployeeContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    console.log(name, email, address, phone)

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
        props.handleClose();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Name' required>
                </Form.Control>

                <Form.Control type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' required>
                </Form.Control>

                <Form.Control as='textarea' value={address} onChange={e => setAddress(e.target.value)} placeholder='Address' rows={3}>
                </Form.Control>

                <Form.Control type='text' value={phone} onChange={e => setPhone(e.target.value)} placeholder='phone' >
                </Form.Control>
            </Form.Group>
            <Button variant='success' type='submit' block> Add New Employee</Button>
        </Form>
    )
}

export default AddForm;