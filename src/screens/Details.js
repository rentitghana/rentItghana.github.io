import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {listPosts} from '../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {firebase} from '../firebase';
import { usePaystackPayment } from 'react-paystack';
import { GoogleAuthProvider } from "firebase/auth";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import { getAuth, signInWithPopup} from "firebase/auth";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";


const override = css`
  display: block;
  margin: 0 auto;
  margin-bottom: 180px;
  margin-top: 180px;
`;

const provider = new GoogleAuthProvider();
const auth = getAuth();
const user = auth.currentUser;
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



  
  
function Details() {
    const [userIn , setUserIn] =  useState(true);
    
    
    const location = useLocation();
    const homeid = location.state.homeid;
    const [posts, setPosts] = useState();
    const [months, setMonths] = useState(0);
    const [years, setYears] = useState(0);
    const [loading, setLoading] = useState(true);
    const Modal = () => (
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
          <span> Modal content </span>
        </Popup>
      );
    useEffect ( () => {
        const fetchPosts = async () => {
            try{
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                )

                setPosts(postsResult.data.listPosts.items);
                if(loading){
                    setLoading(false);
                }
            } catch (e){
                console.log(e);
            }
        }

        fetchPosts();
    }, [])
    if(posts === undefined){
        return null;
    }


    const post = posts.find(place => place.id === homeid);
    const amount = Math.round(post.newPrice * 1.07);
    const images = post.images.map((item, index) => ({
        src: item,
        index: index
      }));
      console.log(images);


      const mobileMoneyConfig = {
        reference: (new Date()).getTime().toString(),
        email: "rentitghana@gmail.com",
        amount: amount*100,
        currency:"ghs",
        channels: ["mobile_money"],
        publicKey: 'pk_live_6869737082c788c90a3ea0df0a62018c57fc6759',
    };
    const atmConfig = {
        reference: (new Date()).getTime().toString(),
        email: "rentitghana@gmail.com",
        amount: amount*100,
        currency:"ghs",
        channels: ["card"],
        publicKey: 'pk_live_6869737082c788c90a3ea0df0a62018c57fc6759',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    const PayMobileMoney = () => {
      const initializePayment = usePaystackPayment(mobileMoneyConfig);
      return (
        <div className="px-6 pt-4 pb-2">
            <button className=" bg-black w-full text-xl font-semibold
             px-2 py-3 rounded-xl bg-blend-color text-white" onClick={() => {
                if (user){
                    initializePayment(onSuccess, onClose)
                }
                else{
                    return null;
                }
                
            }}>Pay with Mobile Money</button>
        </div>
      );
  };

  const PayATMCard = () => {
    const initializePayment = usePaystackPayment(atmConfig);
    return (
      <div className="px-6 pt-4 pb-2">
          <button className=" bg-pink-600 w-full text-xl font-semibold
           px-2 py-3 rounded-xl bg-blend-color text-white" onClick={() => {
               
                initializePayment(onSuccess, onClose)
               
              
          }}>Pay with ATM Card</button>
      </div>
    );
};
    if (loading && post === null){
            return <div>
                <main className="flex">
                <SyncLoader color={"deeppink"} css={override}  size={12} />
                </main>
            </div>
        }
    return (
        <div>
            <main className='flex'>
                <section className="flex-grow pt-14 px-6">

                    <h1 className="flex text-4xl font-bold mt-2 mb-6">{post.title}</h1>
                    <div className="flex justify-between">

                        <p className="flex-items-center text-xl font-light mb-4">{post.type} | {post.bed} bed | {post.bedroom} bedrooms</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="mb-4 rounded-xl">
                        <Carousel
                        className="mb-4"
                        isLoop={true}
                        isAutoPlaying={true}
                        canAutoPlay={true} 
                        hasThumbnails={false}
                        images={images}
                        style={{ height: 500, width: 700 }}
                            /> 
                        </div>
                
                <div class="px-4 py-4 mb-6 max-w-sm rounded-2xl bg-opacity-100 opacity-100 border border-gray-300 mx-10 bg-white  overflow-hidden shadow-2xl">
                    <div class="px-6 py-4">
                        <div class="flex font-bold text-xl mb-2 mt-2">GH₵ {Math.round(amount)} / year</div>
                        <div className=" border-b w-100 mb-2"> </div>
                        <p class="mb-10 flex justify-between text-gray-700 text-base">
                            <div>
                                <p className="flex text-sm mr-4 font-semibold"> How many years</p>
                            </div>
                            <div className="flex justify-between">
                                <p onClick={() => setYears(Math.max(0, years - 1))} className="cursor-pointer px-4 ml-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black">-</p>
                                <p className="px-4">{years}</p>
                                <p onClick={() => setYears (years + 1)} className="cursor-pointer px-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black">+</p>
                            </div>
                            
                        </p>
                        <div className=" border-b w-100 mb-2 mt-2"> </div>
                        <p class="mb-10 flex justify-between text-gray-700 text-base">
                            <div>
                                <p className="flex text-sm mr-4 font-semibold"> How many months</p>
                            </div>
                            <div className="flex justify-between">
                                <p onClick={() => setMonths(Math.max(0, months - 1))} className="cursor-pointer px-4 ml-4 flex  text-md font-semibold rounded-full  bg-pink-white border border-black">-</p>
                                <p className="px-4">{months}</p>
                                <p onClick={() => setMonths (months + 1)} className="cursor-pointer px-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black">+</p>
                            </div>
                            
                        </p>
                        <div className=" border-b w-100 mb-2"> </div>
                    </div>

                    <div className="flex justify-between px-4 py-4 mb-10 border w-full border-black rounded-2xl max-w-full">
                        <div>
                            <p>Years</p>
                            <p>Months</p>
                            <p>Total</p>
                        </div>
                        <div>
                        <p>{years}</p>
                        <p>{months}</p>
                        <p>GH₵{Math.round(amount*(years+(months/12)))}</p>
                            </div>
                    </div>
                    <PayMobileMoney />
                    <PayATMCard />
                    
                    </div>
                        
                    </div>
                
                
                </section>
            </main>
            
        </div>
    )
}

export default Details
