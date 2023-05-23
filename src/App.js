import './App.css';
import MapComponent from './components/svgComponents/svgMapComponent';
import '@progress/kendo-theme-default/dist/all.css';
import "./styles/common.scss"

function App() {
  return (
    <div className="App">
      <h1>Simple Svg Map</h1>
      <MapComponent />
    </div>
  );
}

export default App;
