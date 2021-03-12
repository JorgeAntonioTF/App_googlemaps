import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />

      <Helmet>
<script defer data-key="d756976a-4e8d-457f-8556-068d25d2d226" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
    
  );
}



export default App;
