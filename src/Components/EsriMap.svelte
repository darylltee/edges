<script>
  import ArcGISMap from "@arcgis/core/Map";

  import esriConfig from "@arcgis/core/config.js";
  import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
  import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
  import MapView from "@arcgis/core/views/MapView";
  import { onMount } from "svelte";
  import { Button, Col, Row } from "sveltestrap";

  let bagacayGubat = null;
  let caricaranBacon = null;
  let carayatPrietoDiaz = null;
  let view = null;

  onMount(() => {
    /**
     * Initialize application
     */
    const map = new ArcGISMap({
      basemap: "topo-vector",
    });

    esriConfig.apiKey =
      "AAPK4b19c76fdb2045eabd67aa5e9660311dqScumy-HDniZesXfu4baM3ULXFNR8u-2h6Sv2yfdhy-1rT6gYhrGTSXlsVfJwap0";

    view = new MapView({
      map,
      center: [124.05007, 13.01005],
      container: "viewDiv",
      zoom: 12,
      // center: [12.985905, 12324.0117],
    });

    bagacayGubat = new FeatureLayer({
      url: "https://services1.arcgis.com/abZf6VwV6hTNyAey/arcgis/rest/services/20230427_1308_bagacay_gubat_boundary/FeatureServer/0",
    });

    caricaranBacon = new FeatureLayer({
      url: "https://services1.arcgis.com/abZf6VwV6hTNyAey/arcgis/rest/services/20230505_1138_caricaran_bacon_boundary/FeatureServer/0",
    });

    carayatPrietoDiaz = new FeatureLayer({
      url: "https://services1.arcgis.com/abZf6VwV6hTNyAey/arcgis/rest/services/20230421_0758_carayat_prieto_diaz_boundary/FeatureServer/0",
    });

    map.add(bagacayGubat);
    map.add(caricaranBacon);
    map.add(carayatPrietoDiaz);
  });

  function zoomToFeature(id) {
    switch (id) {
      case "0":
        caricaranBacon?.when(() =>
          view.goTo(caricaranBacon.fullExtent, { duration: 1000 })
        );
        break;
      case "1":
        carayatPrietoDiaz?.when(() =>
          view.goTo(carayatPrietoDiaz.fullExtent, { duration: 1000 })
        );
        break;
      case "2":
        bagacayGubat?.when(() =>
          view.goTo(bagacayGubat.fullExtent, { duration: 1000 })
        );
        break;
      default:
        console.log("No feature selected");
    }
  }
</script>

<main>
  <Row>
    <Col sm={6} lg={12} style="text-align:center">
      <Button
        color="success"
        outline
        on:click={() => {
          zoomToFeature("0");
        }}>Caricaran</Button
      >
      <Button
        color="success"
        outline
        on:click={() => {
          zoomToFeature("1");
        }}>Carayat</Button
      >
      <Button
        color="success"
        outline
        on:click={() => {
          zoomToFeature("2");
        }}>Bagacay</Button
      >
    </Col>
    <Col sm={6} lg={4} />
    <Col sm={6} lg={4} />
  </Row>
  <div id="viewDiv" />
</main>

<style>
  main,
  #viewDiv {
    padding: 0;
    margin: 0;
    height: 400px;
    width: 100%;
  }
</style>
