import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { useEffect, useState } from "react"
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


export const Map = () => {
  // code JS 👇

  // Hooks : useState()
  const [pokemons, setPokemons] = useState([])
  // console.log("1. Pokemon avant Fetch", pokemons);

  // Hooks : useEffect()
  useEffect(
    () => {

      // Self-Invoking Anonymous Function
      (
        // Fetch API Pokémon
        async () => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
          const data = await res.json()
          // Mettre à jour le state de la variable pokemons
          setPokemons(data.results)
        }
      )()
    },
    []
  )
  // console.log("2. Pokemon après Fetch", pokemons);

  return (
    // Code JS 👇


    <div style={{ width: '80%', height: '600px', margin: '0 auto'}}>
    {/* HTML 👇 */}

    <MapContainer
        center={[46.6681699, -1.4148661]}
        zoom={12}
        scrollWheelZoom={false} // Zoomer avec le scroll de la souris
        style={{ height: "100%", width: "100%" }}
      >

        <TileLayer
          url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnVudGhlYXIiLCJhIjoiY2tkYTdnOHpmMGI3NDJxbXpoc2QwMXc3MyJ9.nu-giQ821MNuH64prgx2yg"}
          attribution='Pokemon Go !' 
        />
          {
          pokemons.map(
            (pokemon, index) => {
              return (
                <Marker
                  position={[46.6681699, -1.4148661]}
                  draggable={true}
                  icon={
                    L.icon({
                      iconSize: [60, 60],
                      setRadius: 10,
                      iconAnchor: [10, 41],
                      popupAnchor: [2, -40],
                      shadowSize: [100, 30], // size of the shadow
                      shadowAnchor: [15, 10],  // the same for the shadow
                      iconUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
                      shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
                    })
                  }>
                  <Popup>Bulbi</Popup>
                </Marker>
              )
            }
          )}

      </MapContainer>
    
    </div>
  )
}