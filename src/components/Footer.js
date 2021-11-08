function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10
        px-32 py-14 bg-gray-500">
            <div className="space-y-4 texts-xs text-gray-900">
                <h5 className="font-bold">ABOUT</h5>
                <p>How RentIt works</p>
                <p>Blog</p>
            </div>

            <div className="space-y-4 texts-xs text-gray-900">
                <h5 className="font-bold">PARTNER</h5>
                <p>Upload your Home</p>
                <p>How it works</p>
            </div>


            <div className="space-y-4 texts-xs text-gray-900">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust and Safety</p>
            </div>


        </div>
    )
}

export default Footer
