import {HeartIcon} from '@heroicons/react/outline'
import { useHistory } from "react-router-dom";

function InfoCard({id, newPrice, oldPrice,image, bed, bedroom, description, title,
latitude, longitude, type }) {
    const router = useHistory();

    const gotoDetails = (Id) => {
        router.push({
            pathname: "/details",
            state: {
                homeid: Id,
            },
        })
    }
    return (
        <div
         onClick={() => gotoDetails(id)}
         className="flex py-7 px-2 border-b cursor-pointer
         hover:shadow-lg pr-4 transition duration-200 ease-out
        first:border-t">
            <div className="relative h-52 w-60 md:h-52 md:w-80
            flex-shrink-0">
                <img className="object-cover md: h-52 w-full rounded-2xl" src={image}/>
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between items-end pt-5">
                    <p className="text-xl font-medium truncate">{title}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <div className="border-b w-10 pt-2"></div>

                <div className="flex justify-between">
                    <p className="flex-items-center">{bed} bed | {bedroom} bedrooms | {type}</p>
                    <div>
                        <p className="text-lg lg:text-xl font-semibold pb-2">GH₵ {Math.round(newPrice * 1.07)} / year</p>
                        <p className="text-right font-light text-lg lg:text-xl line-through">GH₵ {oldPrice} / year</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default InfoCard
