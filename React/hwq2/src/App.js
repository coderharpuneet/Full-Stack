
import Record from './components/Record';
import './App.css'
function App() {
  return (
    <div className="App">
      <h1 className="Heading">Streams</h1>
      <table border="2">
        <tr><th>S.No.</th> <th>Streams</th> <th>Subjects</th></tr>
        <Record sno="1" str="Arts" subject="History"/>
        <Record sno="2" str="Arts" subject="Psychology"/>
        <Record sno="3" str="Commerce" subject="Accountancy"/>
        <Record sno="4" str="Commerce" subject="Economics"/>
        <Record sno="5" str="Science" subject="Physics"/>
        <Record sno="6" str="Science" subject="Chemistry"/>
      </table>
    </div>
  );
}

export default App;
