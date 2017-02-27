import React, { PropTypes } from 'react'
import css from './logo.sass'

const color1 = '#E64A55'
const color2 = '#C42B50'
const color3 = '#D3754F'
const color4 = '#F79E73'
const color5 = '#FBC09B'

const Logo = (props) =>
  <div className={css.root}>
    <svg style={{enableBackground:'new 0 0 512.001 512.001'}} version="1.1" viewBox="0 0 512.001 512.001" x="0px" y="0px" xmlSpace="preserve">
      <path style={{fill: color1}} d="M437.027,74.982c-99.976-99.976-262.07-99.976-362.045,0s-99.976,262.07,0,362.045&#xA;    c32.533,32.533,71.646,54.469,113.052,65.829l314.822-314.822C491.495,146.628,469.56,107.516,437.027,74.982z"/>
      <path style={{fill: color2}} d="M437.027,437.028c67.444-67.444,89.379-163.153,65.829-248.993l-89.44-89.44L98.594,413.416&#xA;    l89.44,89.44C273.874,526.407,369.583,504.471,437.027,437.028z"/>
      <path style={{fill: color3}} d="M413.415,98.595l-102.317,86.576l35.418,19.677l66.9-66.9&#xA;    C424.281,127.08,424.281,109.462,413.415,98.595z"/>
      <path style={{fill: color4}} d="M413.415,98.595c-10.867-10.867-28.486-10.867-39.352,0l-66.9,66.9l11.806,27.547L413.415,98.595z"/>
      <path style={{fill: color3}} d="M98.594,413.416l86.576-102.317l19.677,35.418l-66.9,66.9&#xA;    C127.079,424.284,109.461,424.284,98.594,413.416z"/>
      <g>
        <path style={{fill: color4}} d="M98.594,413.416c-10.867-10.867-10.867-28.486,0-39.352l66.9-66.9l27.547,11.806L98.594,413.416z"/>
        <polygon style={{fill: color4}} points="405.544,208.783 354.386,157.624 240.263,240.264 157.623,354.387 208.781,405.545 &#x9;"/>
      </g>
      <rect height="72.348" style={{fill: color5}} width="278.263" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 556.294 230.4297)" x="91.292" y="194.253"/>
      <rect height="22.261" style={{fill: color4}} width="22.261" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 47.9532 626.3249)" x="142.562" y="292.1"/>
    </svg>
  </div>

export default Logo
