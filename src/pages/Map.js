import { React, useEffect } from "react";
import { initMap } from "./Mapkit/IndoorMap.js";
import './Map.css';

function Map() {
	
	useEffect(() => {
		initMap();
	});

	return (<div id="map"></div>);
}

export { Map };
