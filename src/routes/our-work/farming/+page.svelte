<script>
  import Footer from "../../footer/+page.svelte";
  import Navbar from "../../navbar/+page.svelte";
  import Content from "./content/content.svelte";
  /*  window.onscroll = function () {
      scrollFunction();
  };*/

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
</script>

<div class="layout-wrapper landing">
  <Navbar />
  <Content />
  <Footer />
  <button
    class="btn btn-danger btn-icon landing-back-top"
    id="back-to-top"
    on:click={() => toTop()}
  >
    <i class="ri-arrow-up-line" />
  </button>
</div>
