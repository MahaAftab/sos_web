import React from 'react';
import '../css/contact.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RectangleAndCircle() {
    const [formStatus, setFormStatus] = React.useState('Submit')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <Box
    sx={{
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: 'white',
      marginBottom:10
    }}
  >
    <div className="container row" style={{textAlign: 'center'}}>
<h1 style={{fontWeight: 700, color: 'rgb(12, 48, 125)', marginTop:20}}>Contact Us</h1>
<h2 style={{color: 'rgb(12, 48, 125)', marginBottom:30, fontWeight: 400}}>Any questions or remarks? Just write us a message!</h2>

        <div className='container1 column'style={{textAlign: 'right'}}> 
            <div className="rectangle" >
                <h3 className='headings'><PhoneIcon sx={{ color: "white",  }} />  </h3>
                <p className='details'>+ 123-456-789</p>

                <h3 className='headings'>  <EmailIcon sx={{ color: "white",  }} /></h3>
                <p className='details'>fyp.sos.bese25c@gmail.com</p>

                <h3 className='headings'><LocationOnIcon sx={{ color: "white",  }} />  </h3>
                <p className='details'>Military College Of Signals, NUST</p>
                </div>  

            <div className="circle" />

            <div className="small-circle" >
                <img src={require('./white_logo.png')} alt="Logo" />
            </div>
        </div>

        <div className='container2 column'>
        <Form onSubmit={onSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
                <Form.Label column sm={2}>
                    <AccountBoxIcon sx={{ color: "black", fontSize: 40 }} />
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Enter Your Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    <EmailIcon sx={{ color: "black", fontSize: 40 }} />
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Enter a Valid Email Address" />
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="floatingTextarea2">
                <Form.Label column sm={2}>
                    <MessageIcon sx={{ color: "black", fontSize: 40  }} />
                </Form.Label>
                <Col sm={10}>
                <Form.Control as="textarea" placeholder="Message" style={{ height: '100px' }} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="floatingTextarea2">
                <Col sm={6} > <Button as="input" type="submit" value="Submit" />  </Col>
            </Form.Group>

            </Form>
            
        </div>

    </div>

</Box>
    </>
  );
}

export default RectangleAndCircle;
