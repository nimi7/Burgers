import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Component } from 'react'
import { Link } from "react-router-dom";
import { BsStar } from 'react-icons/bs'
import { GetAllBurgers } from '../api/index'
import Loading from './Loading'
export default function Burgers() {

    const [allBurgers, setallBurgers] = useState([]);
    const [load, Setload] = useState(false);

    const loadData = async () => {
        try {
            const Data = GetAllBurgers.then(data => {
                console.log('data', data)
                setallBurgers(data)
            })
            Setload(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        loadData();


    }, [])


    // GetAllBurgers.then(data => {
    //     console.log('data', data)
    //     setallBurgers(data)
    // }).catch(err => {
    //     console.log(err)
    // })
    const isLoaded = () => {
        window.scroll(0, 0);
    }


    console.log('getAllBurgers', allBurgers)
    if (allBurgers.length < 1) {
        return (
            <Loading />
        )
    } else {
        return (
            <div>

                {allBurgers.map((props) => {
                    return <div className=' grid justify-items-center my-10'>
                        <div class="bg-yellow-200 p-2 w-100 max-w-5xl sm:w-full sm:p-4 h-full sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                            <div
                                style={{ backgroundImage: `url(${props.Pic})` }}
                                class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
                            ></div>
                            <div class="flex sm:flex-1 flex-col gap-2 p-1">
                                <h1 class="text-lg sm:text-xl font-semibold  text-gray-600">
                                    {props.Food}
                                </h1>
                                <p class="text-gray-500 text-sm sm:text-base line-clamp-3">
                                    {props.WitheDiscription}
                                </p>
                                <div class="flex gap-4 mt-auto">
                                    <button
                                        class='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
                                    >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                        <span>Rating : {[0, 1, 2, 3, 4].map((i) => {
                                            if (Number(props.Rating) > i)
                                                return (
                                                    <i class="fa fa-star" aria-hidden="true">🤩</i>
                                                );
                                            else {
                                                return (
                                                    <div></div>
                                                )
                                            }
                                        })}</span>
                                    </button>
                                    <button
                                        class='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
                                    >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
                                        <span>{props.Price}₪</span>
                                    </button>
                                    <button
                                        class='ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
                                    >
                                        <span><Link onClick={isLoaded} to={{
                                            pathname: `/Burgers/${props._id}`,
                                            state: {
                                                Food: props.Food,
                                                Discription: props.Discription,
                                                WitheDiscription: props.WitheDiscription,
                                                Pic: props.Pic,
                                                Price: props.Price,
                                                Rating: props.Rating

                                            },
                                        }}
                                        >      <button
                                            class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-yellow-500 hover:text-yellow shadow-md py-2 px-6 inline-flex items-center">
                                                <span class="mx-auto">Order</span>
                                            </button></Link></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                })}




            </div>
        )

    }

}
