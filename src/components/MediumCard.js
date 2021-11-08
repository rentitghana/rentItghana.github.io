function MediumCard({image, type, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-64 w-64 rounded-xl">
            <img className="object-cover h-64 w-full rounded-xl" src={image} />
        </div>
        <h3 className="flex font-medium text-xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
