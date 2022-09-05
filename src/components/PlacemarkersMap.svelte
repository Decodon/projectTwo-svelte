<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map.js';
    import {getContext, onMount} from "svelte";

    const PlacemarkersService = getContext("PlacemarkersService");

    const mapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMap("Placemarkers-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        map.addLayerGroup('Placemarkers');

        const Placemarkerss = await PlacemarkersService.getPlacemarkers();
        Placemarkerss.forEach(Placemarkers => {
            addPlacemarkersMarker(Placemarkers);
        });
    });

    export function addPlacemarkersMarker(placemarkers) {
        const placemarkersStr = `${placemarkers.counties.name}, ${placemarkers.counties.province} - ${placemarkers.religion}`;
        map.addMarker({lat: placemarkers.lat, lng: placemarkers.lng}, placemarkersStr, "Placemarkers");
        map.moveTo(11, {lat: placemarkers.lat, lng: placemarkers.lng});
    }
</script>

<div class="box" id="Placemarkers-map" style="height:800px"></div>