import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {listPosts} from '../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import InfoCard from '../components/InfoCard';
import SearchMap from '../components/SearchMap';
function SearchPage(props) {
    const[posts, setPosts] = useState([]);
    const[datalist, setDatalist] = useState([])
    const location = useLocation();
    const nelatitude = location.state.nelatitude;
    const swlatitude = location.state.swlatitude;
    const nelongitude = location.state.nelongitude;
    const swlongitude = location.state.swlongitude;
    const title = location.state.title;
    useEffect ( () => {
    const fetchPosts = async () => {
        try{
            const postsResult = await API.graphql(
                graphqlOperation(listPosts, {

                    filter: {
                        and: {
                            
                            latitude: {
                                between: [
                                    // Latitude - (0.4/2),
                                    // Latitude + (0.4/2),
                                    
                                    swlatitude,
                                    nelatitude,
                                    //viewport.southwest.lat,
                                    //viewport.northeast.lat,
                                ],
                            },
                            longitude: {
                                between: [
                                  
                                //   Longitude - (0.4/2),
                                //   Longitude + (0.4/2),
                                    //viewport.southwest.lng,
                                    //viewport.northeast.lng,
                                    
                                    swlongitude,
                                    nelongitude,
                                ],
                            }
                        }
                        
                    }
                
            })
            )

            setPosts(postsResult.data.listPosts.items);
            setDatalist(postsResult.data.listPosts.items);
        } catch (e){
            console.log(e);
        }
    }

    fetchPosts();
}, [])

const filterList = () => {
    setDatalist([...posts.filter(category => category.type === "Full Home")])
    
}
//console.log(initialPost.length)
    return (
        <div>
            <main className='flex'>
                <section className="flex-grow pt-14 px-6">

                    <h1 className="flex text-4xl font-bold mt-2 mb-6">{datalist.length} Homes available for rent,  { title || ''}</h1>
                
                <div className="flex mb-5 space-x-4 text-gray-800 whitespace-nowrap">
                    <p onClick={filterList} className="px-4 py-2 border rounded-full cursor-pointer
                    hover:shadow-lg active:scale-95 disa hover:bg-black hover:text-white transition transform
                    duration-100 ease-out">Full Home</p>

                    <p className="px-4 py-2 border rounded-full cursor-pointer
                    hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform
                    duration-100 hover:bg-black hover:text-white ease-out">Self-Contained</p>

                    <p className="px-4 py-2 border rounded-full cursor-pointer
                    hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform
                    duration-100 hover:bg-black hover:text-white ease-out">Single Room</p>

                    <p className="px-4 py-2 border rounded-full cursor-pointer
                    hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform
                    hover:bg-black hover:text-white duration-100 ease-out">Entire Flat</p>

                    <p className="px-4 py-2 border rounded-full cursor-pointer
                    hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform
                    hover:bg-black hover:text-white duration-100 ease-out">Apartment</p>
                </div>
                <div className="flex flex-col">

                {datalist?.map(({id, oldPrice, bed, bedroom, newPrice, description, 
                image, longitude, latitude, type, title,}) => (
              <InfoCard
                key={id}
                image={image}
                title={title}
                description={description}
                longitude={longitude}
                latitude={latitude}
                newPrice={newPrice}
                oldPrice={oldPrice}
                bed={bed}
                bedroom={bedroom}
                id={id}
                type={type}
                
              />
          ))}

                </div>
                </section>

            <section className="flex">
                    <SearchMap />
            </section>
            </main>
        </div>
    )
}

export default SearchPage
