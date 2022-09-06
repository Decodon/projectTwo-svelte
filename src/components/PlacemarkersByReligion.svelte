<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const placemarkersService = getContext("PlacemarkersService");

    let totalByReligion = {
        labels: ["Catholic Church", "Church Of Ireland", "Islam", "Other"],
        datasets: [
            {
                values: [0, 0, 0, 0]
            }
        ]
    };

    function populateByReligion(placemarkersList) {
        placemarkersList.forEach(placemarkers => {
            if (placemarkers.religion == "Catholic Church") {
                totalByReligion.datasets[0].values[0] += 1;
            } else if (placemarkers.religion == "Church Of Ireland") {
                totalByReligion.datasets[0].values[1] += 1;
            } else if (placemarkers.religion == "Islam") {
                totalByReligion.datasets[0].values[2] += 1;
            } else if (placemarkers.religion== "Other") {
                totalByReligion.datasets[0].values[3] += 1;
            }
        });
    }

    onMount(async () => {
        let placemarkersList = await placemarkersService.getPlacemarkers();
        populateByReligion(placemarkersList);
    });

</script>

<h1 class="title is-4">By Religion</h1>
<Chart data={totalByReligion} type="bar"/>