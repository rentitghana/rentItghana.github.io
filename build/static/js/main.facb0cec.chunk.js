(this.webpackJsonprentitweb=this.webpackJsonprentitweb||[]).push([[0],{172:function(e,t,s){},173:function(e,t,s){},190:function(e,t){},252:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),l=s(35),i=s.n(l),a=(s(172),s.p,s(173),s(16)),r=s(77),o=s(139),d=s.n(o),j=s(21),b=s(6);var x=function(){var e=Object(j.f)(),t=Object(c.useState)(null),s=Object(a.a)(t,2),n=s[0],l=s[1],i=Object(c.useState)(null),o=Object(a.a)(i,2),x=o[0],u=o[1],m=Object(c.useState)(null),p=Object(a.a)(m,2),h=p[0],f=p[1],g=Object(c.useState)(null),O=Object(a.a)(g,2),v=O[0],w=O[1],y=Object(c.useState)(null),N=Object(a.a)(y,2),k=(N[0],N[1]);return Object(b.jsxs)("header",{className:"sticky top-0 z-50 grid  grid-cols-3 bg-white shadow-md p-5 md:px-10",children:[Object(b.jsx)("div",{onClick:function(){return e.push("/")},className:"relative flex items-center h-10 cursor-pointer my-auto",children:Object(b.jsx)("h1",{className:"text-purple-600 font-extrabold text-4xl leading-4 no-underline page-scroll",children:"rentIt"})}),Object(b.jsxs)("div",{className:"flex items-center md:border-2  rounded-full py-2 md:shadow-sm",children:[Object(b.jsx)(d.a,{onChange:function(e){return k(e.target.value)},apiKey:"AIzaSyBbnGmg020XRNU_EKOTXpmeqbCUCsEK8Ys",onPlaceSelected:function(e,t,s){l(e.geometry.viewport.getNorthEast().lat()),u(e.geometry.viewport.getSouthWest().lat()),f(e.geometry.viewport.getNorthEast().lng()),w(e.geometry.viewport.getSouthWest().lng()),console.log(e.geometry.viewport.getNorthEast().lat()),console.log(e.geometry.viewport.getSouthWest().lat()),console.log(e.geometry.viewport.getNorthEast().lng()),console.log(e.geometry.viewport.getSouthWest().lng()),console.log(e.address_components)},options:{types:[],fields:["geometry.location","geometry.viewport"],componentRestrictions:{country:"gh"}},className:"flex-grow pl-5 bg-transparent outline-none md:text-lg md: text-xs placeholder-gray-600 text-gray-600",type:"text",placeholder:"Where do you want to rent?"}),Object(b.jsx)(r.c,{onClick:function(){e.push({pathname:"/search",state:{nelatitude:n,swlatitude:x,nelongitude:h,swlongitude:v,address:""}})},className:"hidden md:flex  h-8 bg-purple-600 text-white rounded-full p-2 cursor-pointer md:mx-2"})]}),Object(b.jsxs)("div",{className:"flex items-center space-x-4 justify-end text-gray-600",children:[Object(b.jsx)(r.a,{className:"h-6 cursor-pointer"}),Object(b.jsxs)("div",{className:"flex items-center space-x-2 border-2 p-2 rounded-full",children:[Object(b.jsx)(r.b,{className:"h-6"}),Object(b.jsx)(r.d,{className:"h-6"})]})]})]})};var u=function(){return Object(b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-500",children:[Object(b.jsxs)("div",{className:"space-y-4 texts-xs text-gray-900",children:[Object(b.jsx)("h5",{className:"font-bold",children:"ABOUT"}),Object(b.jsx)("p",{children:"How RentIt works"}),Object(b.jsx)("p",{children:"Blog"})]}),Object(b.jsxs)("div",{className:"space-y-4 texts-xs text-gray-900",children:[Object(b.jsx)("h5",{className:"font-bold",children:"PARTNER"}),Object(b.jsx)("p",{children:"Upload your Home"}),Object(b.jsx)("p",{children:"How it works"})]}),Object(b.jsxs)("div",{className:"space-y-4 texts-xs text-gray-900",children:[Object(b.jsx)("h5",{className:"font-bold",children:"SUPPORT"}),Object(b.jsx)("p",{children:"Help Center"}),Object(b.jsx)("p",{children:"Trust and Safety"})]})]})},m=(s(13),s(52)),p="\n  query ListPosts(\n    $filter: ModelPostFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        image\n        images\n        type\n        title\n        description\n        bed\n        bedroom\n        maxGuests\n        wifi\n        kitchen\n        bathroom\n        water\n        toilet\n        aircondition\n        oldPrice\n        newPrice\n        latitude\n        longitude\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n";var h=function(e){var t=e.img,s=e.viewport,c=e.title,n=Object(j.f)();return Object(b.jsxs)("div",{onClick:function(){n.push({pathname:"/search",state:{nelatitude:s.nelatitude,swlatitude:s.swlatitude,nelongitude:s.nelongitude,swlongitude:s.swlongitude,title:c}})},className:"flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-white-100 hover:scale-105 transition transform duration-200 ease-out ",children:[Object(b.jsx)("div",{className:"relative h-20 w-20",children:Object(b.jsx)("img",{src:t,className:"object-cover h-20 w-full rounded-lg"})}),Object(b.jsx)("div",{children:Object(b.jsx)("h2",{className:"text-lg font-semibold",children:c})})]})};var f=function(e){var t=e.image,s=(e.type,e.title);return Object(b.jsxs)("div",{className:"cursor-pointer hover:scale-105 transform transition duration-300 ease-out",children:[Object(b.jsx)("div",{className:"relative h-64 w-64 rounded-xl",children:Object(b.jsx)("img",{className:"object-cover h-64 w-full rounded-xl",src:t})}),Object(b.jsx)("h3",{className:"flex font-medium text-xl mt-3",children:s})]})};var g=function(e){var t=e.img,s=e.title,c=e.description,n=e.buttonText;return Object(b.jsxs)("section",{className:"relative py-16 cursor-pointer",children:[Object(b.jsx)("div",{className:"relative h-96 min-w-[300px]",children:Object(b.jsx)("img",{className:"object-cover h-96 w-full rounded-2xl",src:t})}),Object(b.jsxs)("div",{className:"absolute top-32 left-12",children:[Object(b.jsx)("h3",{className:"text-5xl mb-3 w-64 text-white bg-gray-900 font-bold rounded-xl py-2",children:s}),Object(b.jsx)("p",{className:"text-2xl mb-3 w-64 text-white font-semibold",children:c}),Object(b.jsx)("button",{className:"text-lg text-white bg-gray-900 px-4 py-2 rounded-xl mt-5 font-semibold",children:n})]})]})};var O=function(){return Object(b.jsxs)("div",{className:"relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]",children:[Object(b.jsx)("img",{class:"object-cover h-100 w-full transparent ",src:"https://www.atlantaparent.com/wp-content/uploads/2018/10/New-Movers-b.jpg"}),Object(b.jsxs)("div",{className:"absolute top-1/2 w-full text-center",children:[Object(b.jsx)("p",{className:"text-5xl sm:text-5xl text-white font-bold",children:"Find your next home."}),Object(b.jsx)("button",{className:"text-purple-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150",children:"Download App"})]})]})},v=s.p+"static/media/homeimage.6eeaaf82.png",w=[{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/fullhome.jpeg",title:"Full Home",key:"1",type:"Full Home"},{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/apartment.jpeg",title:"Apartments",key:"2",type:"Apartments"},{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/1bedroom.jpeg",title:"Self-Contained",key:"3",type:"Self-Contained"},{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/house9.jpg",title:"Entire Flat",key:"4",type:"Entire Flat"}],y=[{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/Kejetia_Kumasi.jpeg",title:"Kumasi",key:"1",viewport:{nelatitude:6.79596126605938,swlatitude:6.584209680657137,nelongitude:-1.499633752916653,swlongitude:-1.732578281620697}},{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/accra.jpeg",title:"Accra",key:"2",viewport:{nelatitude:5.668430510028145,swlatitude:5.513986947844601,nelongitude:-.06033899208693426,swlongitude:-.2991199442789696}},{image:"https://d5w4alzj7ppu4.cloudfront.net/cities/capecoast.jpeg",title:"CapeCoast",key:"3",viewport:{nelatitude:5.165403505967451,swlatitude:5.098852055157173,nelongitude:-1.226370227380231,swlongitude:-1.306858166614428}},{image:"https://cdn.christravelblog.com/wp-content/uploads/2020/02/fort-batenstein-butri-beach-ghana-5-lesser-known-slave-forts-day-trip-from-takoradi-IMG_1465-1.jpg",title:"Takoradi",key:"4",viewport:{nelatitude:4.957794722570853,swlatitude:4.871534649687753,nelongitude:-1.734895755192074,swlongitude:-1.820125630634097}},{image:"https://mapio.net/images-p/18851391.jpg",title:"Sunyani",key:"5",viewport:{nelatitude:7.372511298289318,swlatitude:7.303387502497822,nelongitude:-2.260522859561026,swlongitude:-2.366867045590978}},{image:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Road%2C_Tamale.jpg",title:"Tamale",key:"6",viewport:{nelatitude:9.502350762182429,swlatitude:9.350987561434042,nelongitude:-.7830725614015351,swlongitude:-.9314868488888343}}];var N=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("main",{className:"max-w-7xl mx-auto px-8 sm:px-16",children:[Object(b.jsxs)("section",{className:"pt-6",children:[Object(b.jsx)("h2",{className:"flex text-4xl font-semibold py-2",children:"Live Anywhere"}),Object(b.jsx)("h4",{className:"flex text-xl font-light pb-2",children:"Find homes for rent in"}),Object(b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",children:null===y||void 0===y?void 0:y.map((function(e){var t=e.image,s=e.viewport,c=e.title,n=e.key;return Object(b.jsx)(h,{img:t,title:c,viewport:s},n)}))})]}),Object(b.jsxs)("section",{className:"pt-6",children:[Object(b.jsx)("h2",{className:"flex text-4xl font-semibold py-2",children:"Explore"}),Object(b.jsx)("h4",{className:"flex text-xl font-light pb-2",children:"We have homes for everyone"}),Object(b.jsx)("div",{className:"flex space-x-4  overflow-scroll scrollbar-hide p-3 -ml-3",children:null===w||void 0===w?void 0:w.map((function(e){var t=e.image,s=e.type,c=e.key,n=e.title;return Object(b.jsx)(f,{image:t,title:n,type:s},c)}))})]}),Object(b.jsx)(g,{img:"https://i.pinimg.com/originals/e6/f6/c6/e6f6c6179e15fb0d1937b3bc2d6df815.jpg",title:"Open your home for rent",description:"Earn great income",buttonText:"Call now"}),Object(b.jsx)("div",{class:"flex justify-center",children:Object(b.jsxs)("div",{className:"flex justify-between mb-10 mt-10",children:[Object(b.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[Object(b.jsxs)("div",{onClick:function(){return window.open("https://apps.apple.com/us/app/rentit-find-homes-rooms/id1580456122","_self")},class:"flex cursor-pointer mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center",children:[Object(b.jsx)("div",{class:"mr-3",children:Object(b.jsx)("svg",{viewBox:"0 0 384 512",width:"30",children:Object(b.jsx)("path",{fill:"currentColor",d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{class:"text-xs",children:"Download on the"}),Object(b.jsx)("div",{class:"text-2xl font-semibold font-sans -mt-1",children:"App Store"})]})]}),Object(b.jsxs)("div",{onClick:function(){return window.open("https://play.google.com/store/apps/details?id=com.rentitghana","_self")},class:"flex cursor-pointer mx-5 mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center",children:[Object(b.jsx)("div",{class:"mr-3",children:Object(b.jsxs)("svg",{viewBox:"30 336.7 120.9 129.2",width:"30",children:[Object(b.jsx)("path",{fill:"#FFD400",d:"M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"}),Object(b.jsx)("path",{fill:"#FF3333",d:"M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"}),Object(b.jsx)("path",{fill:"#48FF48",d:"M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"}),Object(b.jsx)("path",{fill:"#3BCCFF",d:"M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"})]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{class:"text-xs",children:"GET IT ON"}),Object(b.jsx)("div",{class:"text-xl font-semibold font-sans -mt-1",children:"Google Play"})]})]})]}),Object(b.jsx)("div",{className:"flex justify-items-center",children:Object(b.jsx)("img",{className:"object-cover w-full hidden md:block",src:v})})]})})]})]})},k=s(32),C=s(2),S=s.n(C),P=s(4),T=s(138),F=s(251),M=s(155);var E=function(e){var t=e.id,s=e.newPrice,c=e.oldPrice,n=e.image,l=e.bed,i=e.bedroom,a=(e.description,e.title),r=(e.latitude,e.longitude,e.type),o=Object(j.f)();return Object(b.jsxs)("div",{onClick:function(){return e=t,void o.push({pathname:"/details",state:{homeid:e}});var e},className:"flex py-7 px-2 border-b cursor-pointer hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t",children:[Object(b.jsx)("div",{className:"relative h-52 w-60 md:h-52 md:w-80 flex-shrink-0",children:Object(b.jsx)("img",{className:"object-cover md: h-52 w-full rounded-2xl",src:n})}),Object(b.jsxs)("div",{className:"flex flex-col flex-grow pl-5",children:[Object(b.jsxs)("div",{className:"flex justify-between items-end pt-5",children:[Object(b.jsx)("p",{className:"text-xl font-medium truncate",children:a}),Object(b.jsx)(M.a,{className:"h-7 cursor-pointer"})]}),Object(b.jsx)("div",{className:"border-b w-10 pt-2"}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsxs)("p",{className:"flex-items-center",children:[l," bed | ",i," bedrooms | ",r]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"text-lg lg:text-xl font-semibold pb-2",children:["GH\u20b5 ",Math.round(1.07*s)," / year"]}),Object(b.jsxs)("p",{className:"text-right font-light text-lg lg:text-xl line-through",children:["GH\u20b5 ",c," / year"]})]})]})]})]})},_=s(159),A=function(e){var t=e.text;return Object(b.jsx)("div",{children:t})};var z=function(){return Object(b.jsx)("div",{className:"h-screen w-full",children:Object(b.jsx)(_.a,{bootstrapURLKeys:{key:"AIzaSyBbnGmg020XRNU_EKOTXpmeqbCUCsEK8Ys"},defaultCenter:{lat:59.95,lng:30.33},defaultZoom:11,yesIWantToUseGoogleMapApiInternals:!0,children:Object(b.jsx)(A,{lat:59.955413,lng:30.337844,text:"My Marker"})})})};var H=function(e){var t=Object(c.useState)([]),s=Object(a.a)(t,2),n=s[0],l=s[1],i=Object(c.useState)([]),r=Object(a.a)(i,2),o=r[0],d=r[1],x=Object(j.g)(),u=x.state.nelatitude,m=x.state.swlatitude,h=x.state.nelongitude,f=x.state.swlongitude,g=x.state.title;return Object(c.useEffect)((function(){var e=function(){var e=Object(P.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.graphql(Object(F.b)(p,{filter:{and:{latitude:{between:[m,u]},longitude:{between:[f,h]}}}}));case 3:t=e.sent,l(t.data.listPosts.items),d(t.data.listPosts.items),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("main",{className:"flex",children:[Object(b.jsxs)("section",{className:"flex-grow pt-14 px-6",children:[Object(b.jsxs)("h1",{className:"flex text-4xl font-bold mt-2 mb-6",children:[o.length," Homes available for rent,  ",g||""]}),Object(b.jsxs)("div",{className:"flex mb-5 space-x-4 text-gray-800 whitespace-nowrap",children:[Object(b.jsx)("p",{onClick:function(){d(Object(k.a)(n.filter((function(e){return"Full Home"===e.type}))))},className:"px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 disa hover:bg-black hover:text-white transition transform duration-100 ease-out",children:"Full Home"}),Object(b.jsx)("p",{className:"px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform duration-100 hover:bg-black hover:text-white ease-out",children:"Self-Contained"}),Object(b.jsx)("p",{className:"px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform duration-100 hover:bg-black hover:text-white ease-out",children:"Single Room"}),Object(b.jsx)("p",{className:"px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform hover:bg-black hover:text-white duration-100 ease-out",children:"Entire Flat"}),Object(b.jsx)("p",{className:"px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-700 transition transform hover:bg-black hover:text-white duration-100 ease-out",children:"Apartment"})]}),Object(b.jsx)("div",{className:"flex flex-col",children:null===o||void 0===o?void 0:o.map((function(e){var t=e.id,s=e.oldPrice,c=e.bed,n=e.bedroom,l=e.newPrice,i=e.description,a=e.image,r=e.longitude,o=e.latitude,d=e.type,j=e.title;return Object(b.jsx)(E,{image:a,title:j,description:i,longitude:r,latitude:o,newPrice:l,oldPrice:s,bed:c,bedroom:n,id:t,type:d},t)}))})]}),Object(b.jsx)("section",{className:"flex",children:Object(b.jsx)(z,{})})]})})},I=s(156),K=(s(240),s(150)),G=s(157),L=s(84),R=Object(K.a)({apiKey:"AIzaSyCkObVpSjghGmwqbHUHHns1J2tMk0Wuono",authDomain:"rentitapp-8fc19.firebaseapp.com",projectId:"rentitapp-8fc19",storageBucket:"rentitapp-8fc19.appspot.com",messagingSenderId:"953170635360",appId:"1:953170635360:web:5befac64c8a740f200f105",measurementId:"G-H9WN6F3EFX"}),U=(Object(G.a)(R),Object(L.b)(R),s(106)),q=s(53),B=(s(152),s(241),new q.a),W=Object(q.b)(),D=W.currentUser;Object(q.c)(W,B).then((function(e){q.a.credentialFromResult(e).accessToken,e.user})).catch((function(e){e.code;var t=e.message;console.log(t);e.email,q.a.credentialFromError(e)}));var $=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),s=(t[0],t[1],Object(j.g)().state.homeid),n=Object(c.useState)(),l=Object(a.a)(n,2),i=l[0],r=l[1],o=Object(c.useState)(0),d=Object(a.a)(o,2),x=d[0],u=d[1],m=Object(c.useState)(0),h=Object(a.a)(m,2),f=h[0],g=h[1];if(Object(c.useEffect)((function(){var e=function(){var e=Object(P.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.graphql(Object(F.b)(p));case 3:t=e.sent,r(t.data.listPosts.items),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),void 0===i)return null;var O=i.find((function(e){return e.id===s})),v=Math.round(1.07*O.newPrice),w=O.images.map((function(e,t){return{src:e,index:t}}));console.log(w);var y={reference:(new Date).getTime().toString(),email:"rentitghana@gmail.com",amount:100*v,currency:"ghs",channels:["mobile_money"],publicKey:"pk_live_6869737082c788c90a3ea0df0a62018c57fc6759"},N={reference:(new Date).getTime().toString(),email:"rentitghana@gmail.com",amount:100*v,currency:"ghs",channels:["card"],publicKey:"pk_live_6869737082c788c90a3ea0df0a62018c57fc6759"},k=function(e){console.log(e)},C=function(){console.log("closed")},M=function(){var e=Object(U.a)(y);return Object(b.jsx)("div",{className:"px-6 pt-4 pb-2",children:Object(b.jsx)("button",{className:" bg-black w-full text-xl font-semibold px-2 py-3 rounded-xl bg-blend-color text-white",onClick:function(){if(!D)return null;e(k,C)},children:"Pay with Mobile Money"})})},E=function(){var e=Object(U.a)(N);return Object(b.jsx)("div",{className:"px-6 pt-4 pb-2",children:Object(b.jsx)("button",{className:" bg-pink-600 w-full text-xl font-semibold px-2 py-3 rounded-xl bg-blend-color text-white",onClick:function(){e(k,C)},children:"Pay with ATM Card"})})};return Object(b.jsx)("div",{children:Object(b.jsx)("main",{className:"flex",children:Object(b.jsxs)("section",{className:"flex-grow pt-14 px-6",children:[Object(b.jsx)("h1",{className:"flex text-4xl font-bold mt-2 mb-6",children:O.title}),Object(b.jsx)("div",{className:"flex justify-between",children:Object(b.jsxs)("p",{className:"flex-items-center text-xl font-light mb-4",children:[O.type," | ",O.bed," bed | ",O.bedroom," bedrooms"]})}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)("div",{className:"mb-4 rounded-xl",children:Object(b.jsx)(I.a,{className:"mb-4",isLoop:!0,isAutoPlaying:!0,canAutoPlay:!0,hasThumbnails:!1,images:w,style:{height:500,width:700}})}),Object(b.jsxs)("div",{class:"px-4 py-4 mb-6 max-w-sm rounded-2xl bg-opacity-100 opacity-100 border border-gray-300 mx-10 bg-white  overflow-hidden shadow-2xl",children:[Object(b.jsxs)("div",{class:"px-6 py-4",children:[Object(b.jsxs)("div",{class:"flex font-bold text-xl mb-2 mt-2",children:["GH\u20b5 ",Math.round(v)," / year"]}),Object(b.jsx)("div",{className:" border-b w-100 mb-2",children:" "}),Object(b.jsxs)("p",{class:"mb-10 flex justify-between text-gray-700 text-base",children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"flex text-sm mr-4 font-semibold",children:" How many years"})}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)("p",{onClick:function(){return g(Math.max(0,f-1))},className:"cursor-pointer px-4 ml-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black",children:"-"}),Object(b.jsx)("p",{className:"px-4",children:f}),Object(b.jsx)("p",{onClick:function(){return g(f+1)},className:"cursor-pointer px-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black",children:"+"})]})]}),Object(b.jsx)("div",{className:" border-b w-100 mb-2 mt-2",children:" "}),Object(b.jsxs)("p",{class:"mb-10 flex justify-between text-gray-700 text-base",children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"flex text-sm mr-4 font-semibold",children:" How many months"})}),Object(b.jsxs)("div",{className:"flex justify-between",children:[Object(b.jsx)("p",{onClick:function(){return u(Math.max(0,x-1))},className:"cursor-pointer px-4 ml-4 flex  text-md font-semibold rounded-full  bg-pink-white border border-black",children:"-"}),Object(b.jsx)("p",{className:"px-4",children:x}),Object(b.jsx)("p",{onClick:function(){return u(x+1)},className:"cursor-pointer px-4 flex text-md font-semibold rounded-full  bg-pink-white border border-black",children:"+"})]})]}),Object(b.jsx)("div",{className:" border-b w-100 mb-2",children:" "})]}),Object(b.jsxs)("div",{className:"flex justify-between px-4 py-4 mb-10 border w-full border-black rounded-2xl max-w-full",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Years"}),Object(b.jsx)("p",{children:"Months"}),Object(b.jsx)("p",{children:"Total"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:f}),Object(b.jsx)("p",{children:x}),Object(b.jsxs)("p",{children:["GH\u20b5",Math.round(v*(f+x/12))]})]})]}),Object(b.jsx)(M,{}),Object(b.jsx)(E,{})]})]})]})})})};var X=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/details",children:Object(b.jsx)($,{})}),Object(b.jsx)(j.a,{path:"/search",children:Object(b.jsx)(H,{})}),Object(b.jsx)(j.a,{path:"/",children:Object(b.jsx)(N,{})})]}),Object(b.jsx)(u,{})]})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,281)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),l(e),i(e)}))};s(69).default.configure({aws_appsync_graphqlEndpoint:"https://6fh6r2ls2fbtrl36ftl4lmc4x4.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-ceryuzsswnfgpbstxmhi37nqyu"}),i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),Y()}},[[252,1,2]]]);
//# sourceMappingURL=main.facb0cec.chunk.js.map