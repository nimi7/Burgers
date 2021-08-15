import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { GiKnifeFork, GiTomato } from 'react-icons/gi'

export default function Example(props) {
    const { Salads, Sause, Bread, Drink, Extras, Pic, WitheDiscription, Rating, Price, Food, Salad, FinalCost } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                BUY NOW
            </Button>



            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='flex' >
                            <h3 className='flex'>your order : <GiKnifeFork /></h3>

                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="h-auto bg-gray-200 flex justify-center items-center">

                        <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
                            <div id="header" class="flex">
                                <img alt="mountain" class="w-48 rounded-md border-2 border-gray-300" src={Pic} />
                                <div id="body" class="flex flex-col ml-5">
                                    <h4 id="name" class=" flex text-xl font-semibold mb-1"><GiTomato /> Slads:
                                        {Salads.map((props) => {
                                            return `${props},`
                                        })}

                                    </h4>
                                    <h4 id="name" class=" flex text-xl font-semibold mb-1"><GiTomato /> Sause: {Sause.map((props, idx) => {
                                        return `${props},`

                                    })} </h4>
                                    <h4 id="name" class=" flex text-xl font-semibold mb-1"><GiTomato /> Bread: {Bread.map((props) => {
                            return `${props},`
                        })} </h4>
                                    <h4 id="name" class=" flex text-xl font-semibold mb-1"><GiTomato /> Drink:{Drink.map((props) => {
                            return `${props},`
                        })} </h4>
                                    <h4 id="name" class=" flex text-xl font-semibold mb-1"><GiTomato /> Extras:{Extras.map((props) => {
                            return `${props},`
                        })} </h4>
                                    <div class="flex mt-5">
                                       
                                        <p class="ml-3">Total Price : {FinalCost}.99₪</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal.Body>



                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                       Complete Order
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}