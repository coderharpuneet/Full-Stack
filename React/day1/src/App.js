import './App.css';
import MyList from './components/MyList';
function App() {
  return (
    <div className="App">
      <h1><center>List of Particulars</center></h1>
      <table border={2}>
            <tr>
                <td>S.No.</td>
                <td>Particulars</td>
                <td>Details</td>
            </tr>
          
      <MyList sno="1" part="Website" detail="www.chitkara.edu.in"/>
      <MyList sno="2" part="Phn no." detail="1234567890"/>
      <MyList sno="3" part="Fax no." detail="5437346382"/>
      </table>






      <h1><center>List of Courses</center></h1>
      <table border={2}>
            <tr>
                <td>S.No.</td>
                <td>Name</td>
                <td>Fees</td>
            </tr>
          
      <MyList sno="1" part="React" detail="2000"/>
      <MyList sno="2" part="Node" detail="6000"/>
      <MyList sno="3" part="DSA" detail="4000"/>
      </table>
    </div>
  );
}

export default App;
