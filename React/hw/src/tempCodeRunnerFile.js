import Science from './components/Science.js'
import Commerce from './components/Commerce'
import Arts from './components/Arts'
function App() {
  return (
    <div className="App">
      <h1>
        Science
      </h1>
      <Science sub1="Physics" sub2="Chemistry" sub3="Maths"/>

      <h1>
        Commerce
      </h1>
      <Commerce sub1="Accountancy" sub2="Economics" sub3="Business Studies"/>

      <h1>
        Arts
      </h1>
      <Arts sub1="Psychology" sub2="Economics" sub3="Maths"/>
    </div>
  );
}
export default App;
