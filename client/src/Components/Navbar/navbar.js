import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import Logo from '../Pictures/logo_transparent.png'


export default function navbar() {
    return (
        <div className='bg-yellow-200'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            alt=""
                            src={Logo}
                            width="50"
                            height="60"
                            className="d-inline-block align-bottem"
                        />{' '}
                        <span className=' text-yellow-200'>Burger-Salon</span>
                       
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}