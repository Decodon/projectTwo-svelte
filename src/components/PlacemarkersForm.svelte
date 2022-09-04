<script>
    import {getContext, onMount} from "svelte";

    const placemarkersService = getContext("PlacemarkersService");

    let latitude = 0;
    let longitude = 0;

    let religionMethods = ["Paypal", "Cash", "Paypal", "Cash"];
    let selectedReligion = "";

    let countiesList = [];
    let selectedCounties = "";

    let message = "Please donate";

    onMount(async () => {
        countiesList = await placemarkersService.getCounties()
    });

    async function placemarkers() {
        if (selectedCounties && latitude && longitude && selectedReligion) {
            const countiesNames = selectedCounties.split(',');
            const counties = countiesList.find(counites => counties.name == countiesNames[0] && counties.province == countiesNames[1]);
            const donation = {
                latitude: latitude,
                longitude: longitude,
                religion: selectedReligion,
                counties: counties._id,
            };
            const success = await placemarkersService.placemarkers(placemarkers);
            if (!success) {
                message = "Donation not completed - some error occurred";
                return;
            }
            message = `Thanks! You donated ${latitude} & ${longitude} to ${counties.name} ${counties.province}`;
        } else {
            message = "Please select amount, method and candidate";
        }
    }
</script>

<form on:submit|preventDefault={placemarkers}>
    <div class="field">
        <label class="label" for="latitude">Enter Latitude</label>
        <input bind:value={latitude} class="input" id="latitude" name="latitude" type="number">
    </div>
    <div class="field">
        <label class="label" for="longitude">Enter Longitude</label>
        <input bind:value={longitude} class="input" id="longitude" name="longitude" type="number">
    </div>
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
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Donate</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>