import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function SearchMap() {
    const center = {
        lat: 59.95,
        lng: 30.33
      }
    return (
        <div className="h-screen w-full">

    <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBbnGmg020XRNU_EKOTXpmeqbCUCsEK8Ys' }}
            defaultCenter={center}
            defaultZoom={11}
            yesIWantToUseGoogleMapApiInternals={true}
            >
            <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
            
            </GoogleMapReact>
            
        </div>
    )
}

export default SearchMap
