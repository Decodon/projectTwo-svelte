<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlacemarkersMap from "../components/PlacemarkersMap.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Map of Churches Visited"} title={"Church Placemarkers!"}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<PlacemarkersMap/>