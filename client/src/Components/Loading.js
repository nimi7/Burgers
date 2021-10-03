import React from 'react'


export default function Loading() {
    const load = [0, 1, 2];
    return (
        <div>
            <div className='text-center text-yellow-800 mt-5'>
               please wait loading data...
                <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                   
                </span>
            </div>
            {load.map((props) => {
                return <div class="border border-yellow-300 shadow rounded-md p-3 max-w-2xl h-64 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4 mt-10">
                        <div class="rounded-sm bg-yellow-400 h-44 w-64"></div>
                        <div class="flex-1 space-y-4 py-1 mt-4">

                            <div class="h-4 bg-yellow-400 rounded w-3/4"></div>
                            <div class="space-y-2">
                                <div class="h-4 bg-yellow-400 rounded"></div>
                                <div class="h-4 bg-yellow-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    )

}