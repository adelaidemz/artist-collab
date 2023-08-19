import './App.css';
// import {useState, useEffect, useRef} from 'react';
import Graph from './components/ForceDirectedGraph.js'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Visualization Test
        </p>
        <Graph />
        
      </header>
    </div>
  );
}

// from https://2019.wattenberger.com/blog/react-and-d3
// const Circles = () => {
//   const generateDataset = () => (
//     Array(10).fill(0).map(() => ([
//       Math.random() * 80 + 10,
//       Math.random() * 35 + 10,
//       Math.floor(Math.random()*16777215).toString(16)
//     ]))
//   )

//   const [dataset, setDataset] = useState(
//     generateDataset()
//   )

//   useInterval(() => {
//      const newDataset = generateDataset()
//       setDataset(newDataset)
//   }, 2000)
 

//   return (
//     <svg viewBox="0 0 100 50">
//       {dataset.map(([x, y, color], i) => (
//         <circle
//           key={i}
//           cx={x}
//           cy={y}
//           fill={"#" + color}
//           r="3"
//         />
//       ))}
//     </svg>
//   )
// }

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }