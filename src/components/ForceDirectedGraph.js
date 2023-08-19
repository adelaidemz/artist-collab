import * as d3 from 'd3'; 
import {useEffect, useState} from 'react';
import {dummyData} from '../data/dummydata.js'

// Sample d3 graph and data sourced from:
// https://observablehq.com/@d3/disjoint-force-directed-graph/2?intent=fork


// Specify the dimensions of the chart.
const width = 928;
const height = 680;

// Specify the color scale.
const color = d3.scaleOrdinal(d3.schemeCategory10);

const links = dummyData.links; //.map(d => ({...d}));
const nodes = dummyData.nodes; //.map(d => ({...d}));


export default function Graph() {
  const [animatedNodes, setAnimatedNodes] = useState([]);
  const [animatedLinks, setAnimatedLinks] = useState([]);

  useEffect(() => {
    const linkForce = d3.forceLink([...links]).id(d => d.id);

    // Create a simulation with several forces.
    const simulation = d3.forceSimulation([...nodes])
    .force("link", linkForce)
    .force("charge", d3.forceManyBody())
    .force("x", d3.forceX())
    .force("y", d3.forceY());

    // update state on every frame
    simulation.on("tick", () => {
      setAnimatedNodes([...simulation.nodes()]);
      setAnimatedLinks([...linkForce.links()]);
    });

    // console.log(linkForce.links()[1])

    // stop simulation on unmount
    return () => simulation.stop();
  }, []);

  return (
    <svg width={width} height={height} 
         viewBox={[-width / 2, -height / 2, width, height]}
         style={{maxWidth: "100%", height: "auto"}}>
      
      <g stroke="#999" strokeOpacity={0.6}>
        {animatedLinks.map((d, i) => {
          return (
            <line key={i}
              x1={d.source.x}
              y1={d.source.y}
              x2={d.target.x}
              y2={d.target.y}
              strokeWidth={Math.sqrt(d.value)} />
          )})
        }
      </g>

      <g stroke="#fff" strokeWidth={1.5}>
        {animatedNodes.map((d, i) => {
          return (
            <circle 
              key={d.id}
              cx={d.x}
              cy={d.y}
              r={5}
              fill={color(d.group)} />
          )})
        }
      </g>
    </svg>
  )
}


