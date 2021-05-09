import React, { useContext, useState } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal } from 'react-bootstrap'
import AddForm from '../components/AddForm'

const EmployeeList = () => {


    const { employees } = useContext(EmployeeContext)
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(!show);


    return (
        <React.Fragment>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleClose} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    <Employee employees={employees} />
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='modal-header' closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm  handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close Button
                    </Button>

                </Modal.Footer>


            </Modal>


        </React.Fragment>
    )
}

export default EmployeeList;