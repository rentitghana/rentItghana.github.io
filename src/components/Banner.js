function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]
        2xl:h-[700px]">
           <img class="object-cover h-100 w-full transparent " 
           src="https://www.atlantaparent.com/wp-content/uploads/2018/10/New-Movers-b.jpg"
           />

        <div className="absolute top-1/2 w-full text-center">
            <p className="text-5xl sm:text-5xl text-white font-bold">Find your next home.</p>
            <button className="text-purple-600 bg-white
            px-10 py-4 shadow-md rounded-full font-bold my-5
            hover:shadow-xl active:scale-90 transition duration-150">Download App</button>
        </div>
        </div>
    );
}

export default Banner
