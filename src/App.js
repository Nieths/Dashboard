import MiniDrawer from './MiniDrawer'
import axios from 'axios'
import React,{useState,useEffect} from 'react';

function App() {
  // Getting data from Shipments
  const [dataShip, setDataShip] = useState([]);
  useEffect(async () => {
    const result = await axios(
      'https://localhost:44349/api/VieweMPowerShipment',
    );
 
    setDataShip(result.data);
  }, []);

  // Getting Data from Container
  const [dataCont, setDataCont] = useState([]);
  useEffect(async () => {
    const result = await axios(
      'https://localhost:44349/api/VieweMPowerContainer',
    );
    setDataCont(result.data);
  }, []);

  return (
    <div className="App">
    
      <MiniDrawer dataShip={dataShip} dataCont={dataCont}/>
    </div>
  );
}

export default App;
