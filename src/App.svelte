<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Donate from "./pages/Donate.svelte";
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/donate": Donate,
    "/report": Report,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>