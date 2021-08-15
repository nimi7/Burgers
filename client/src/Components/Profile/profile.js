import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Salad, Sauses, Breads, Drinks, Extra } from '../Data_Extention/Extentions';
import { FcCameraIdentification } from "react-icons/fc"
import Modal from '../Modal/modal'
export default function Profile(props) {
    const { id, Food, Discription, WitheDiscription, Pic, Price, Rating } = (props.location && props.location.state) || {};
    // Item Props .....
    const [stateid, setstateid] = useState(id);
    const [stateFood, setstateFood] = useState(Food);
    const [stateDiscription, setstateDiscription] = useState(Discription);
    const [stateWitheDiscription, setstateWitheDiscription] = useState(WitheDiscription);
    const [statePic, setstatePic] = useState(Pic);
    const [statePrice, setstatePrice] = useState(Price);
    const [stateRating, setstateRating] = useState(Rating);

    const [TotalPrice, SetTotalPrice] = useState([]);
    const Sum = [];
    let sum;
    const handleChange = (e, Array, SetArray) => {
        var { checked } = e.target
        console.log('e.target.id', e.target.id)


        if (checked) {
            SetArray([Array, e.target.value])

            SetTotalPrice([TotalPrice, e.target.id])



        } else {

            var index = Array.indexOf(e.target.value)
            var PriceIndex = TotalPrice.indexOf(e.target.id)

            if (index !== -1) {

                Array.splice(index, 1)
                SetArray(...Array);
                TotalPrice.splice(PriceIndex, 0)
                SetTotalPrice(...TotalPrice);


            }


        }

    }
    const [Salads, SetSalads] = useState([]);
    const [Sause, SetSause] = useState([]);
    const [Bread, SetBread] = useState([]);
    const [Drink, SetDrink] = useState([]);
    const [Extras, SetExtras] = useState([]);

    let TotalPriceSplit = TotalPrice.toString().split(',');
    let TotalPriceSplitNumber = TotalPriceSplit.map((props) => {
        return Number(props);
    })



    let BurgerCost = TotalPriceSplitNumber.reduce((result, number) => result + number)
    let FinalCost = BurgerCost + Price;
    return (
        <div>

            <div class="border-4 border-yellow-200 absolute top-16 bottom-10 left-10 right-10 z-0"></div>
            <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-7/12 md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">


                                <img src={Pic} class="w-12/13 relative z-10" alt="" />
                                <div class="mb-2">
                                    <div class="mb-2">
                                        <h1 class="font-bold uppercase text-2xl mb-5">{Food} <br /></h1>
                                        <p class="text-sm">{WitheDiscription} <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"> <i class="mdi mdi-arrow-right"></i></a></p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div class="w-full bg-yellow-200 text-xs italic ordinal  md:w-1/2 px-10 rounded-lg">
                            <h5 className='text-center '>Extra </h5>
                            <div class="mb-10 flex text-left  ">
                                <Form>
                                    <Form.Label> <i class="fas fa-carrot fa-lg underline">Salads:</i></Form.Label>
                                    {Salad.map((props) => (
                                        <div key={props.name} className="mb-3 ml-4 mr-4 w-auto  h-16 ordinal">
                                            <Form.Check
                                                value={props.name}
                                                onChange={(e) => handleChange(e, Salads, SetSalads)}
                                                type='checkbox'
                                                id={props.price}
                                                label={props.name}
                                            />
                                            price : {props.price}
                                        </div>
                                    ))}

                                </Form>
                                <Form>
                                    <Form.Label><i class="fas fa-bacon fa-lg underline">Sauces:</i></Form.Label>
                                    {Sauses.map((props) => (
                                        <div key={props.name} className="mb-3 ml-2 mr-0  h-16 w-auto">
                                            <Form.Check
                                                value={props.name}
                                                onChange={(e) => handleChange(e, Sause, SetSause)}
                                                type='checkbox'
                                                id={props.price}
                                                label={props.name}
                                            />
                                            price : {props.price}
                                        </div>
                                    ))}
                                </Form>

                                <Form>
                                    <Form.Label><i class="fas fa-bread-slice fa-lg underline">Type of bread:</i></Form.Label>
                                    {Breads.map((props) => (
                                        <div key={props.name} className="mb-3 ml-0 mr-2  h-16 w-auto">
                                            <Form.Check
                                                value={props.name}
                                                type='checkbox'
                                                id={props.price}
                                                onChange={(e) => handleChange(e, Bread, SetBread)}
                                                label={props.name}
                                            />
                                            price : {props.price}
                                        </div>
                                    ))}
                                </Form>

                                <Form>
                                    <Form.Label><i class="fas fa-wine-glass-alt fa-lg underline">Drinking:</i></Form.Label>
                                    {Drinks.map((props) => (
                                        <div key={props.name} className="mb-3  h-16">
                                            <Form.Check
                                                value={props.name}
                                                type='checkbox'
                                                id={props.name}
                                                onChange={(e) => handleChange(e, Drink, SetDrink)}
                                                id={props.price}
                                                label={props.name}
                                            />
                                            price : {props.price}
                                        </div>
                                    ))}
                                </Form>


                                <Form>
                                    <Form.Label><i class="fas fa-drumstick-bite fa-lg underline">Extras:</i></Form.Label>
                                    {Extra.map((props) => (
                                        <div key={props.name} className="mb-3 h-16">
                                            <Form.Check
                                                value={props.name}
                                                type='checkbox'
                                                id={props.name}
                                                onChange={(e) => handleChange(e, Extras, SetExtras)}
                                                id={props.price}
                                                label={props.name}
                                            />

                                            price : {props.price}
                                        </div>
                                    ))}
                                </Form>


                            </div>



                            <div>


                                <div class="inline-block align-bottom mr-5">

                                    <span class="text-2xl leading-none align-baseline">₪</span>
                                    <span class="font-bold text-5xl leading-none align-baseline">{FinalCost}</span>
                                    <span class="text-2xl leading-none align-baseline">.99</span>
                                </div>
                                <div class="inline-block align-bottom">
                                    <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i>
                                        <Modal
                                            Pic={Pic}
                                            Salad={Salad}
                                            Salads={Salads}
                                            Sause={Sause}
                                            Bread={Bread}
                                            Drink={Drink}
                                            Extras={Extras}
                                            Pic={Pic}
                                            WitheDiscription={WitheDiscription}
                                            Rating={Rating}
                                            Price={Price}
                                            Food={Food}
                                            FinalCost={FinalCost} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div>
            </div>


        </div>
    )
}