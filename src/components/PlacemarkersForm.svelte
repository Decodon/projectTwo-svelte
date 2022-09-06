<script>
    import {createEventDispatcher, getContext, onMount} from "svelte";
    import Coordinates from "./Coordinates.svelte";

    const dispatch = createEventDispatcher();
    const placemarkersService = getContext("PlacemarkersService");

    let religionMethods = ["Catholic Church", "Church Of Ireland", "Islam", "Other"];
    let selectedReligion = "";

    let countiesList = [];
    let selectedCounties = "";

    let lat = 52.160858;
    let lng = -7.152420;

    let message = "Please enter a Placemarker";


    onMount(async () => {
        countiesList = await placemarkersService.getCounties()
    });

    async function placemarkers() {
        if (selectedCounties && selectedReligion) {
            const countiesNames = selectedCounties.split(',');
            const counties = countiesList.find(counties => counties.name == countiesNames[0] && counties.province == countiesNames[1]);
            const placemarkers = {
                religion: selectedReligion,
                counties: counties._id,
                lat: lat,
                lng: lng
            };
            const success = await placemarkersService.placemarkers(placemarkers);
            if (!success) {
                message = "Placemarker not completed - some error occurred";
                return;
            }
            message = `Thanks! visited this location ${lat} & ${lng} in ${counties.name} ${counties.province}`;
            dispatch("message", {
                placemarkers: placemarkers,
            });
        } else {
            message = "Please select religion, area and location";
        }
    }
</script>

<form on:submit|preventDefault={placemarkers}>
    <div class="field">
        <div class="control">
            {#each religionMethods as method}
                <input bind:group={selectedReligion} class="radio" type="radio" value="{method}"> {method}
            {/each}
        </div>
    </div>
    <div class="field">
        <div class="select">
            <select bind:value={selectedCounties}>
                {#each countiesList as counties}
                    <option>{counties.name},{counties.province}</option>
                {/each}
            </select>
        </div>
    </div>
    <Coordinates bind:lat={lat} bind:lng={lng}/>
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Enter</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>