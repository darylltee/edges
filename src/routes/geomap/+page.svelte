<script>
  import { onMount } from "svelte";
  import { Col, Container, Row } from "sveltestrap";

  let EsriMap, Charts;

  onMount(async () => {
    const module = await import("../../Components/EsriMap.svelte");
    EsriMap = module.default;
    const module2 = await import("../../Components/Charts.svelte");
    Charts = module2.default;
  });
</script>

<section class="section bg-light py-5">
  <Container>
    <Row>
      <Col lg={12} sm={12} style="margin-top:-10px;">
        <h1 class="mb-3 ff-secondary fw-semibold lh-base text-center">
          GEOMAP DATABASE
        </h1>
        <svelte:component this={EsriMap} style="border:1px solid green" />
      </Col>
    </Row>
  </Container>
</section>

<section>
  <Container>
    <Row>
      <Col lg={12} sm={12}>
        <h3
          class="mb-3 ff-secondary fw-semibold lh-base text-center"
          style="margin-top:50px"
        />
        <svelte:component this={Charts} />
      </Col>
    </Row>
  </Container>
</section>

<style>
  @import "https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/light/main.css";
</style>
