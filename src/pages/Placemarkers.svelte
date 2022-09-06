<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlacemarkersForm from "../components/PlacemarkersForm.svelte";
    import PlacemarkersMap from "../components/PlacemarkersMap.svelte";

    let placemarkersMap = null;

    function placemarkersMade(event) {
        placemarkersMap.addPlacemarkersMarker(event.detail.placemarkers);
    }
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Please Document your Church Visits!"} title={"Church Placemarkers!"}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns is-vcentered">
    <div class="column has-text-centered">
        <PlacemarkersMap bind:this={placemarkersMap}/>
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">Enter your recent church visit!</h1>
        <PlacemarkersForm on:message={placemarkersMade}/>
    </div>
</div>