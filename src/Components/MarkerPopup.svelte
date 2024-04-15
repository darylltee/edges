<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let count;
  export let data;

  function addValue(delta) {
    count += delta;
    dispatch("change", count);
  }
</script>

<div style="width:300px;">
  <h5>{data.location}</h5>
  <span>{data.history}</span>

  <hr />
  <ul>
    {#each data.details as detail}
      <li>{detail}</li>
    {/each}
  </ul>
</div>

<style>
  button {
    width: 2rem;
  }
</style>
