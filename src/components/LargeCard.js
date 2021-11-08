function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <img className="object-cover h-96 w-full rounded-2xl" src={img}/>
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-5xl mb-3 w-64 text-white bg-gray-900 font-bold rounded-xl py-2">{title}</h3>
                <p className="text-2xl mb-3 w-64 text-white font-semibold">{description}</p>

                <button className="text-lg text-white bg-gray-900
                px-4 py-2 rounded-xl mt-5 font-semibold">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
