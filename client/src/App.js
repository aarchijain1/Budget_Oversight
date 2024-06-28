import './App.css';
import Graph from './Components/Graph';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-8xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-yellow-300 text-gray rounded">Budget Oversight</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">

      {/* form */}
      <Form/>
 
      {/* graph/chart */}
      <Graph/>

     

      </div>

      </div>
    </div>
  );
}

export default App;
