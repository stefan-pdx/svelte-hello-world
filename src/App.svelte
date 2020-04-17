<script>
    import { writable } from "svelte/store";

    import Greeting from "./Greeting.svelte";
    import Form from "./Form.svelte";

    const name = writable("Ernest");
</script>

<h1>Hello world!</h1>

<Form { name }/>

<Greeting { name }/>