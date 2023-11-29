import { Map } from "./components/Map"
import { Nav } from "./components/Nav"
import { Election } from "./components/Election"
function App() {
   

  return (
    <div className="container mapbackground border border-black ">
      <Nav />
      <div className="flex justify-evenly">
        <Map />
        <Election />
      </div>
    </div>
  )
}

export default App
