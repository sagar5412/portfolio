import { Hero } from "./components/Hero"
import { Technologies } from "./components/Technologies"
import GithubHeatMap from "./components/GithubHeatMap"

function App() {
  return <>
    <div className="mx-auto max-w-3xl py-10 flex flex-col">
      <Hero />
      <Technologies />
      <GithubHeatMap />


    </div>
  </>
}

export default App