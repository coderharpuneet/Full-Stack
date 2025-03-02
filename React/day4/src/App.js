// Customer NamedNodeMap, Product name,Price Quantity,Bill with 10% discount, Net,layout in table
import logo from './logo.svg';
import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <h1><center>Shopping Bill</center></h1>
      <table border="2" style={{marginLeft:'50px'}}>
        <tr>
          <th>Customer Name</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Bill</th>
          <th>Discount</th>
        </tr>
        <tr>
          <td><input type="text" placeholder="Customer Name"/></td>
          <td><input type="text" placeholder="Product Name"/></td>
          <td><input type="text" placeholder="Price"/></td>
          <td><input type="text" placeholder="Quantity"/></td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
      </table>
    </div>
  );
}

export default App;
