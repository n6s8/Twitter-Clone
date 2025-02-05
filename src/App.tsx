import './App.css'
import SideMenu from "./components/SideMenuComponent";
import Home from "./components/HomeComponent";
import Recommendation from "./components/Recommendation";

export default function App() {

  return (
    <>
      <div className="App">
        <SideMenu/>
        <div className="vertical-divider"></div>
        <Home/>
        <div className="vertical-divider-2"></div>
        <Recommendation/>
      </div>
    </>
  )
}

