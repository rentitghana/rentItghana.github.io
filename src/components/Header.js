import React, {useState} from 'react';
import {SearchIcon,
GlobeAltIcon,
MenuIcon,
UserCircleIcon,
UsersIcon} from '@heroicons/react/solid';
import Autocomplete from "react-google-autocomplete";
import { useHistory } from "react-router-dom";



function Header() {
    const router = useHistory();
    const [nelatitude, setNeLatitude] = useState(null);
    const [swlatitude, setSwLatitude] = useState(null);
    const [nelongitude, setNeLongitude] = useState(null);
    const [swlongitude, setSwLongitude] = useState(null);
    
    const search = () =>{
        router.push({
            pathname: "/search",
            state: {
                nelatitude : nelatitude,
                swlatitude: swlatitude,
                nelongitude: nelongitude,
                swlongitude: swlongitude,
                address: '',
            },
        })
    }
    
    return (
        <header className="sticky top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div 
            onClick={() => router.push("/")}
            className="relative flex items-center h-10 cursor-pointer my-auto">
            <h1 className="text-purple-600 font-extrabold text-4xl leading-4 no-underline page-scroll">rentIt</h1>
            {/* <img src="https://d1.awsstatic.com/product-marketing/rds/airbnb_horizontal_lockup_web.bd87ed2c8e964eb35463744e07a1a0670177bda2.png"
             width={200}
             /> */}
            </div>

            {/* Middle section of header search*/}
           
            <div className="flex items-center md:border-2 
            rounded-full py-2 md:shadow-sm">
                <Autocomplete
                onChange = {(event) => console.log(event.target.value)}
                apiKey={"AIzaSyBbnGmg020XRNU_EKOTXpmeqbCUCsEK8Ys"}
                onPlaceSelected={(place, inputRef, autocomplete) => {
                    //var latitude = place.geometry.location.lat;
                    setNeLatitude(place.geometry.viewport.getNorthEast().lat());
                    setSwLatitude(place.geometry.viewport.getSouthWest().lat());
                    setNeLongitude(place.geometry.viewport.getNorthEast().lng());
                    setSwLongitude(place.geometry.viewport.getSouthWest().lng());
                    console.log(place.geometry.viewport.getNorthEast().lat());
                    console.log(place.geometry.viewport.getSouthWest().lat());
                    console.log(place.geometry.viewport.getNorthEast().lng());
                    console.log(place.geometry.viewport.getSouthWest().lng());
                    
                    
                    
                  }}
                options={{
                    types: [],
                    fields:["geometry.location", "geometry.viewport"],
                    
                    componentRestrictions: { country: "gh" },
                  }} 
                className="flex-grow pl-5 bg-transparent outline-none md:text-lg
                md: text-xs placeholder-gray-600 text-gray-600" 
                type="text"
                 placeholder='Where do you want to rent?'/>
                <SearchIcon 
                onClick ={search}
                className="hidden md:flex  h-8 bg-purple-600
                text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>

            {/* Right section of header*/}
            <div className="flex items-center space-x-4 justify-end text-gray-600">
                {/*<p className="hidden md:inline cursor-pointer">Become a host</p>*/}
                {/* <GlobeAltIcon className="h-6 cursor-pointer"/> */}

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
