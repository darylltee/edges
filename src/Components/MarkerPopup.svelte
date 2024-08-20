<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let count;
  export let data;
  let hovered = false;
  function addValue(delta) {
    count += delta;
    dispatch("change", count);
  }
</script>

<div style="width:500px;" class="popup">
  <img src={data.cover} alt={data.title} class="cover" />
  <button
    type="button"
    class="know-more-button"
    href={data.src}
    on:click={() => (window.location.href = data.src)}>Know More</button
  >
</div>

<style>
  .leaflet-popup-content {
    width: 500px !important;
  }
  .cover {
    width: 100%;
    height: auto;
  }
  button {
    width: 2rem;
  }
  /* Add this block */
  .know-more-button {
    position: absolute;
    bottom: 10px;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background-color: #5a9b5a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .popup:hover .know-more-button {
    opacity: 1;
  }
</style>
