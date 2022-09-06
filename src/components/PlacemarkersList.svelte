<script>
import {getContext, onMount} from 'svelte'

const placemarkersService = getContext("PlacemarkersService");
let placemarkersList = [];

onMount(async () => {
    placemarkersList = await placemarkersService .getPlacemarkers();
});
</script>

<table class="table is-fullwidth">
    <thead>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Religion</th>
    <th>County</th>
    <th>Explorer</th>
    </thead>
    <tbody>
    {#each placemarkersList as placemarkers}
        <tr>
            <td>
                {placemarkers.lat}
            </td>
            <td>
                {placemarkers.lng}
            </td>
            <td>
                {placemarkers.religion}
            </td>
            <td>
                {placemarkers.counties.name}, {placemarkers.counties.province}
            </td>
            <td>
                {placemarkers.explorer.firstName},  {placemarkers.explorer.lastName}
            </td>
        </tr>
    {/each}
    </tbody>
</table>