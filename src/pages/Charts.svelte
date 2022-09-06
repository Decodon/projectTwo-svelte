<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlacemarkersByCounties from "../components/PlacemarkersByCounties.svelte";
    import PlacemarkersByReligion from "../components/PlacemarkersByReligion.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar subTitle={"Analytics"} title={"Church Placemarkers!"}/>
    </div>
    <div class="column">
        <MainNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <PlacemarkersByCounties/>
    </div>
    <div class="column has-text-centered">
        <PlacemarkersByReligion/>
    </div>
</div>