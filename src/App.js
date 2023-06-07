import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FacilityPageProvider } from 'pages/FacilityPageProvider';
import { AppProvider } from 'pages/AppProvider';

function App() {
  return (
    <div className="App">     
      <AppProvider>
        <FacilityPageProvider id = "66275ffa-a7b3-11ed-b76e-0242ac110002"/>
      </AppProvider>
    </div>
  );
}

export default App;
