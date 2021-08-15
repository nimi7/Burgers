import React, { useEffect, useState } from 'react';
import Axios from 'axios';



export default function Burger() {
    const [allBurgers, setallBurgers] = useState([]);

    useEffect(() => {
        Axios.get('/Burgers')
            .then(res => {

                setallBurgers(res.data)
                console.log('this is server call!!!!')

            })
            .catch(err => {
                console.log(err);
            })
    })
    console.log('allBurgers', allBurgers)
    return (
        <div>

            <h1>Data</h1>
            {allBurgers.map((props)=>{
                return <div>
                    {props.Food}
                    </div>
            })}
        </div>
    )
}