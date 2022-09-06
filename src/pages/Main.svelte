<script>
    import church1 from "/src/assets/church1.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import {getContext} from "svelte";

    const placemarkerService = getContext("PlacemarkersService");
    placemarkerService.logout();

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Church Placemarkers!"} subTitle={"Sign up or Log in"}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="400" src="{church1}" alt="church">
    </div>
    <div class="column">
        <h1 class="title">Help Me Run Springfield</h1>
        <p>Donate what you can now - No Bitcoins accepted!</p>
    </div>
</div>