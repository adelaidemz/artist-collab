import * as d3 from 'd3'; 
import {useEffect, useRef} from 'react';

// Declare the chart dimensions and margins.
const width = 800;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

export default function Graph() {
  const gx = useRef();
  const gy = useRef();

  useEffect(() => {
    d3.select(gx.current).call(d3.axisBottom(x))
    d3.select(gy.current).call(d3.axisLeft(y))
  }, [])

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
    </svg>
  )
}