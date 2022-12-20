<script>
    import Router from "svelte-spa-router";
    import routes from "./routes";
    import Layout from "./lib/Layout.svelte";
    import Load from "./lib/Load.svelte";
</script>

<Layout>
    <Router routes="{routes}" restoreScrollState="{true}"/>
</Layout>
