<script>
  import {setContext} from "svelte";
  import {PlacemarkersService} from "./services/placemarkers-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";
  import Placemarkers from "./pages/Placemarkers.svelte";
  import Map from "./pages/Map.svelte";
  import Charts from "./pages/Charts.svelte";

  setContext("PlacemarkersService", new PlacemarkersService("http://localhost:4000"));


  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/report": Report,
    "/logout": Main,
    "/placemarkers" : Placemarkers,
    "/map": Map,
    "/charts": Charts,
  }
</script>

<div class="app">
  <Router {routes}/>
</div>
