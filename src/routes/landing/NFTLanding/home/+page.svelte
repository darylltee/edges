<script>
    import Link from "svelte-link";
    import { Col, Container, Row } from "sveltestrap";
</script>

<section class="section nft-hero" id="hero">
    <div class="bg-overlay" />
    <Container>
        <Row class="justify-content-center">
            <Col lg={8} sm={10}>
                <div class="text-center">
                    <h1 class="display-4 fw-medium mb-4 lh-base text-white">
                        SEAWEED FARMING IN <span class="text-success"
                            >SORSOGON</span
                        >
                    </h1>
                    <p class="fs-17 text-white-50 lh-base mb-4 pb-2">
                        Sorsogon was historically one of the major producers of
                        wild stock seaweeds in the Philippines and was the
                        pioneer of seaweed farming in the Bicol region. However,
                        in the past two decades, the production of seaweed in
                        the province has been continuously declining. The
                        industry is hampered with various issues throughout the
                        different stages in the value chain, such as lack of
                        low-cost quality seedlings, poor post harvest practices,
                        limited equipment, disorganized farmers, limited market
                        access, and lack of credit access.
                    </p>

                    <div class="hstack gap-2 justify-content-center">
                        <Link
                            href="/NFTmarketplace/CreateNFT/apps-nft-create"
                            class="btn btn-primary"
                            >Create Own <i
                                class="ri-arrow-right-line align-middle ms-1"
                            /></Link
                        >
                        <Link
                            href="/NFTmarketplace/ExploreNow/apps-nft-explore"
                            class="btn btn-secondary"
                            >Explore Now <i
                                class="ri-arrow-right-line align-middle ms-1"
                            /></Link
                        >
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>
