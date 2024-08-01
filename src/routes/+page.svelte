<script>
    import Accross from "./accross/+page.svelte";

    import Farming from "./farming/+page.svelte";
    import Features from "./features/+page.svelte";
    import Footer from "./footer/+page.svelte";
    import GeoMap from "./geomap/+page.svelte";
    import Home from "./home/+page.svelte";
    import Navbar from "./navbar/+page.svelte";
    import Products from "./products/+page.svelte";

    import Services from "./services/+page.svelte";
    import Team from "./team/+page.svelte";

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
    <Home />
    <Accross />
    <Farming />
    <!--<Client />-->
    <!--<Services />-->
    <!--<GeoMap /><Features />
    <Products /> <Team />-->

    <!-- <Faqs /> -->
    <!--<Reviews /> -->
    <!--<Counter />-->
    <!-- <WorkProcess />-->

    <!-- <Contact /> -->
    <!-- <Cta /> -->
    <Footer />
    <button
        class="btn btn-danger btn-icon landing-back-top"
        id="back-to-top"
        on:click={() => toTop()}
    >
        <i class="ri-arrow-up-line" />
    </button>
</div>
