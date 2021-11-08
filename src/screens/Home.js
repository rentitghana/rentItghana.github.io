import React, {useState, useEffect} from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {listPosts} from '../graphql/queries'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard'
import Banner from '../components/Banner';
import image from '../images/homeimage.png'

const hometypes = [
    {
    
      image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/fullhome.jpeg',
      title: 'Full Home', key: '1',
      type: 'Full Home'
     },
  
     {
    
      image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/apartment.jpeg',
      title: 'Apartments', key: '2',
      type: 'Apartments'
     },
  
     {
    
      image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/1bedroom.jpeg',
      title: 'Self-Contained', key: '3',
      type: 'Self-Contained'
     },
  
     {
    
      image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/house9.jpg',
      title: 'Entire Flat', key: '4',
      type: 'Entire Flat'
     },
  
  
    ]
  const nearby = [
    {
    
      image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/Kejetia_Kumasi.jpeg',
      title: 'Kumasi', key: '1',
      viewport: {nelatitude: 6.79596126605938, swlatitude: 6.584209680657137,
         nelongitude: -1.499633752916653, swlongitude:-1.732578281620697}
     },
     {
         image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/accra.jpeg',
         title: 'Accra', key: '2',
         viewport: {nelatitude: 5.668430510028145, swlatitude: 5.513986947844601,
          nelongitude: -0.06033899208693426, swlongitude:-0.2991199442789696}
          
        },
  
        {
         image:  'https://d5w4alzj7ppu4.cloudfront.net/cities/capecoast.jpeg',
         title: 'CapeCoast', key: '3',
         viewport: {nelatitude: 5.165403505967451, swlatitude: 5.098852055157173          ,
          nelongitude: -1.226370227380231, swlongitude:-1.306858166614428}
          
        },
  
        {
          image:  'https://cdn.christravelblog.com/wp-content/uploads/2020/02/fort-batenstein-butri-beach-ghana-5-lesser-known-slave-forts-day-trip-from-takoradi-IMG_1465-1.jpg',
          title: 'Takoradi', key: '4',
          viewport: {nelatitude: 4.957794722570853, swlatitude: 4.871534649687753          ,
            nelongitude: -1.734895755192074, swlongitude:-1.820125630634097}
            
         },
  
         {
          image:  'https://mapio.net/images-p/18851391.jpg',
          title: 'Sunyani', key: '5',
          viewport: {nelatitude: 7.372511298289318, swlatitude: 7.303387502497822          ,
            nelongitude: -2.260522859561026, swlongitude:-2.366867045590978}
            
         },
  
         {
          image:  'https://upload.wikimedia.org/wikipedia/commons/f/f1/Road%2C_Tamale.jpg',
          title: 'Tamale', key: '6',
          viewport: {nelatitude: 9.502350762182429, swlatitude: 9.350987561434042          ,
            nelongitude: -0.7830725614015351, swlongitude:-0.9314868488888343}
            
         
         },
  ]
function Home() {
    
    return (
        <div>
            
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="flex text-4xl font-semibold py-2">Live Anywhere
          </h2>
          <h4 className="flex text-xl font-light pb-2">Find homes for rent in</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-3">
          {nearby?.map(({image, viewport, title, key}) => (
              <SmallCard
                key={key}
                img={image}
                title={title}
                viewport={viewport}
              />
          ))}
            </div>
          
          
        </section>


        <section className="pt-6">
          <h2 className="flex text-4xl font-semibold py-2">Explore</h2>
          <h4 className="flex text-xl font-light pb-2">We have homes for everyone</h4>
            <div className="flex space-x-4 
            overflow-scroll scrollbar-hide p-3 -ml-3">
            {hometypes?.map(({image,type, key, title}) =>(
              <MediumCard 
              key={key}
              image = {image}
              title = {title}
              type = {type}/>
            ))}
              </div>
            
        
        </section>

        <LargeCard
        img="https://i.pinimg.com/originals/e6/f6/c6/e6f6c6179e15fb0d1937b3bc2d6df815.jpg"
        title="Open your home for rent"
        description="Earn great income"
        buttonText="Call now"
         />

<div class="flex justify-center">
    <div className="flex justify-between mb-10 mt-10">
        
        <div className="flex items-center justify-between mb-10">
        <div onClick={() => window.open("https://apps.apple.com/us/app/rentit-find-homes-rooms/id1580456122", "_self")} class="flex cursor-pointer mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
            <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30" >
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
            </div>
            <div>
                <div class="text-xs">Download on the</div>
                <div class="text-2xl font-semibold font-sans -mt-1">App Store</div>
            </div>
        </div>

        <div onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.rentitghana", "_self")} class="flex cursor-pointer mx-5 mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
            <div class="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                </svg>
            </div>
            <div>
                <div class="text-xs">GET IT ON</div>
                <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
            </div>
        </div>

          </div>

          <div className="flex justify-items-center">
            <img className="object-cover w-full hidden md:block" src={image} />
            </div>

        </div>
      </div>
      </main>
        </div>
    )
}

export default Home
