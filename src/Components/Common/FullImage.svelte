<script>
  import { Col, Container, Row } from "sveltestrap";

  export let file;
  export let text;
</script>

<section class="py-5" style="max-width: 100%;">
  <div class=" opacity-50" />

  <Row class="text-center gy-4">
    <Col class="col-sm">
      <div class="responsive-image-container">
        <img class="responsive-image" src={file} alt="Image" />
        <div
          class="text-center"
          style="position: absolute; top:35%;font-size:68px;color:white;text-align:center !important; width:100%;font-weight:bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"
        >
          {text}
        </div>
      </div>
    </Col>
  </Row>
</section>

<style>
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  .container {
    width: 100%;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .text {
    text-align: center;
    margin-top: 10px;
  }
</style>
