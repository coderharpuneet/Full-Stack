import './App.css';
import CountryList from'./components/CountryList';
import StateList from'./components/StateList';
import CapitalList from'./components/CapitalList';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Country List</h1>
      <CountryList name="India"/>
      <CountryList name="Pakistan"/>
      <CountryList name="China"/>

      <h1>State</h1>
      <StateList name="Punjab"/>
      <StateList name="Haryana"/>
      <StateList name="U.P."/>

      <h1>State</h1>
      <CapitalList name="Chandigarh"/>
      <CapitalList name="Chandigarh"/>
      <CapitalList name="Lucknow"/>
    </div>
  );
}

export default App;
