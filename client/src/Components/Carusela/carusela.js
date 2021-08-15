import React from 'react';
import { Carousel } from 'react-bootstrap';
import Burger1 from '../Pictures/burger1.jpg'
import Burger2 from '../Pictures/burger2.jpg'
import Burger3 from '../Pictures/burger3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carusela() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-screen h-64"
                        src={Burger1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-screen h-64"
                        src={Burger2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-screen  h-64"
                        src={Burger3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}