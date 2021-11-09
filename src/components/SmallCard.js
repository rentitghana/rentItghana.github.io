import React from 'react'
import { useHistory } from "react-router-dom";

function SmallCard({img, viewport, title}) {

    const router = useHistory();
    const search = () =>{
        router.push({
            pathname: "/search",
            state: {
                nelatitude : viewport.nelatitude,
                swlatitude: viewport.swlatitude,
                nelongitude: viewport.nelongitude,
                swlongitude: viewport.swlongitude,
                title: title,
            },
        })
    }
    return (
        <div onClick={search} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
        hover:bg-white-100 hover:scale-105 transition transform duration-200 ease-out
        ">
            {/* Left */}
            <div className="relative h-20 w-20">
                <img src={img} className="object-cover h-20 w-full rounded-lg"/>
            </div>
            <div>
                <h2 className="text-lg font-semibold" >{title}</h2>
            </div>
        </div>
    )
}

export default SmallCard
