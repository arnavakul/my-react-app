import React from "react";

export default function Entry(props) {
  return (
    <article id="journal-entry">
      <img src={props.img.src} id="entry-img" alt={props.img.alt} />
      <div id="div1">
        <img src="/marker.jpg" id="marker"></img>
        <span id="jp">{props.country}</span>
        <a href={props.googlemaps} id="link-japan">
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
