<script>
import church4 from "/src/assets/church4.jpg";
import TitleBar from "../components/TitleBar.svelte";
import MainNavigator from "../components/MainNavigator.svelte";
import PlacemarkersList from "../components/PlacemarkersList.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Visited so far"} title={"Church Placemarkers!"}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="Homer" src={church4} width="400"/>
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Visited so far</h1>
        <PlacemarkersList/>
    </div>
</div>