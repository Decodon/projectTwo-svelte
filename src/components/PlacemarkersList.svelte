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
    <th>Amount</th>
    <th>Method</th>
    <th>Candidate</th>
    <th>Donor</th>
    </thead>
    <tbody>
    {#each placemarkersList as placemarkers}
        <tr>
            <td>
                {placemarkers.latitude}
            </td>
            <td>
                {placemarkers.longitude}
            </td>
            <td>
                {placemarkers.religion}
            </td>
            <td>
                {placemarkers.counties.name}, {placemarkers.counties.province}
            </td>
            <td>
                {placemarkers.explorer.lastName},  {placemarkers.explorer.lastName}
            </td>
        </tr>
    {/each}
    </tbody>
</table>