import { Hero } from "./components/Hero"
import { Technologies } from "./components/Technologies"
import GithubHeatMap from "./components/GithubHeatMap"
import { Projects } from "./components/Projects"
import { SideNav } from "./components/SideNav"

function App() {
  return <>
    <SideNav />
    <div className="mx-auto max-w-3xl py-10 flex flex-col">
      <section id="home"><Hero /></section>
      <section id="technologies"><Technologies /></section>
      <section id="github"><GithubHeatMap /></section>
      <section id="projects"><Projects /></section>
    </div>
  </>
}

export default App