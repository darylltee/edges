<script>
    import { Container } from "sveltestrap";
    import Client from "./client/+page.svelte";
    import Contact from "./contact/+page.svelte";
    import Counter from "./counter/+page.svelte";
    import Cta from "./cta/+page.svelte";
    import Faqs from "./faq/+page.svelte";
    import Features from "./features/+page.svelte";
    import Footer from "./footer/+page.svelte";
    import GeoMap from "./geomap/+page.svelte";
    import Home from "./home/+page.svelte";
    import Navbar from "./navbar/+page.svelte";
    import Products from "./products/+page.svelte";
    import Reviews from "./reviews/+page.svelte";
    import Services from "./services/+page.svelte";
    import Team from "./team/+page.svelte";
    import WorkProcess from "./workProcess/+page.svelte";

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
    <Client />
    <Services />
    <GeoMap />
    <Features />
    <Products />
    <!-- <Faqs /> -->
    <!--<Reviews /> -->
    <!--<Counter />-->
    <!-- <WorkProcess />-->
    <Team />
    <!-- <Contact /> -->
    <!-- <Cta /> -->
    <!-- <Footer /> -->
    <button
        class="btn btn-danger btn-icon landing-back-top"
        id="back-to-top"
        on:click={() => toTop()}
    >
        <i class="ri-arrow-up-line" />
    </button>
</div>
