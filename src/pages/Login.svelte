<script>
    import homer2 from "/src/assets/homer2.png";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import LoginForm from "../components/LoginForm.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Donation Services Inc."} subTitle={"Sign up or Log in"}/>
    </div>
    <div class="column">
        <WelcomeNavigator/>
    </div>
</div>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="homer" src="{homer2}" width="300">
    </div>
    <div class="column">
        <div class="box">
            <h1 class="title">Login</h1>
            <LoginForm/>
        </div>
    </div>
</div>