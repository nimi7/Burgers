import React from 'react'
import Logo from './Pictures/logo_transparent.png'

export default function Footer() {
    return (
        <div>
            <div class="w-full bg-yellow-300 text-white">
                <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                    <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
                        <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="160" height="57" viewBox="0 0 160 57">
                                <defs>
                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 197 70">
                                        <image width="197" height="70" href={Logo}/>
                                    </pattern>
                                </defs>
                                <rect id="ETI-Logo" width="160" height="57" fill="url(#pattern)" />
                            </svg>
                            <p class="opacity-60">Concord Royal Court (3rd floor)
                                Dhanmondi, Dhaka 1209, Bangladesh.</p>
                        </div>
                        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                     
                        </div>
                        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                    
                        </div>
                        <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                            <div class="flex flex-row space-x-4">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-google"></i>
                            </div>
                        </div>
                    </div>
                    <div class="opacity-60 pt-2">
                        <p>© Tanks For Order.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}