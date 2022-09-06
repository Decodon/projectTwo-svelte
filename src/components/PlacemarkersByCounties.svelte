<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const placemarkersService = getContext("PlacemarkersService");

    let totalByCounties= {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    }

    function populateByCounties(placemarkersList, counties) {
        totalByCounties.labels = [];
        counties.forEach(counties => {
            totalByCounties.labels.push(`${counties.name}, ${counties.province}`)
            totalByCounties.datasets[0].values.push(0);
        })
        counties.forEach((counties, i) => {
            placemarkersList.forEach(placemarkers => {
                if (placemarkers.counties._id == counties._id) {
                    totalByCounties.datasets[0].values[i] += 1;
                }
            });
        });
    }

    onMount(async () => {
        let placemarkersList = await placemarkersService.getPlacemarkers();
        let counties = await placemarkersService.getCounties()
        populateByCounties(placemarkersList, counties);
    });

</script>

<h1 class="title is-4">By Counties</h1>
<Chart data={totalByCounties} type="pie"/>