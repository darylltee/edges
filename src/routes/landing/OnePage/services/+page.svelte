<script>
    import Link from "svelte-link";
    import { Col, Container, Row } from "sveltestrap";

    import farming from "./assets/farming02.png";
</script>

<section class="section" id="services">
    <Container>
        <Row class="justify-content-center">
            <Col lg={12}>
                <div class="text-center mb-5">
                    <h1 class="mb-3 ff-secondary fw-semibold lh-base">
                        Seaweed farming in Sorsogon
                    </h1>
                    <p class="text-muted " style="font-size:20px;">
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
                </div>
            </Col>
        </Row>
        <Row class="align-items-center gy-4">
            <Col lg={6} sm={7} class="mx-auto">
                <div>
                    <img
                        src={farming}
                        alt=""
                        style="border-radius:20px;"
                        class="img-fluid mx-auto rounded-tl-lg rounded-sm"
                    />
                </div>
            </Col>
            <Col lg={6}>
                <div class="text-muted">
                    <div class="avatar-sm icon-effect mb-4">
                        <div
                            class="avatar-title bg-transparent rounded-circle text-success h1"
                        >
                            <i class="ri-collage-line fs-36" />
                        </div>
                    </div>
                    <h3 class="mb-3 fs-20" />
                    <p class="mb-4 ff-secondary fs-16">
                        With the growing demand for seaweed products globally,
                        it presents an opportunity to revive the industry in the
                        province by helping the seaweed farmers and other value
                        chain players in developing viable enterprises.
                    </p>

                    <Row class="pt-3">
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>3</h4>
                                <p>Target Groups</p>
                            </div>
                        </Col>
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>83</h4>
                                <p>Farmers</p>
                            </div>
                        </Col>
                        <!--<Col class="col-4">
                            <div class="text-center">
                                <h4>7+</h4>
                                <p>Functional Apps</p>
                            </div>
                        </Col>-->
                    </Row>
                </div>
            </Col>
        </Row>

        <Row class="g-3">
            <!--
            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-pencil-ruler-2-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Creative Design</h5>
                        <p class="text-muted my-3 ff-secondary">The creative design includes designs that are unique, effective and memorable.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-palette-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Unlimited Colors</h5>
                        <p class="text-muted my-3 ff-secondary">The collection of rules and guidelines which designers use to communicate with users through appealing.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-lightbulb-flash-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Strategy Solutions</h5>
                        <p class="text-muted my-3 ff-secondary">Business development firm that provides strategic planning, market research services and project.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-customer-service-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Awesome Support</h5>
                        <p class="text-muted my-3 ff-secondary">Awesome Support is the most versatile and feature-rich support plugin for all version.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-stack-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Truly Multipurpose</h5>
                        <p class="text-muted my-3 ff-secondary">You usually get a broad range of options to play with. This enables you to use a single theme across multiple.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-settings-2-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Easy to customize</h5>
                        <p class="text-muted my-3 ff-secondary">Personalise your own website, no matter what theme and what customization options.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-slideshow-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Responsive & Clean Design</h5>
                        <p class="text-muted my-3 ff-secondary">Responsive design is a graphic user interface (GUI) design approach used to create content.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-google-fill fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Google Font Collection</h5>
                        <p class="text-muted my-3 ff-secondary">Google Fonts is a collection of 915 fonts, all available to use for free on your website.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div class="d-flex p-3">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm icon-effect">
                            <div class="avatar-title bg-transparent text-success rounded-circle">
                                <i class="ri-briefcase-5-line fs-36"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="fs-18">Top Industry Specialists</h5>
                        <p class="text-muted my-3 ff-secondary">An industrial specialist works with industrial operations to ensure that manufacturing facilities work.</p>
                        <div>
                            <Link href="#!" class="fs-13 fw-medium">Learn More <i class="ri-arrow-right-s-line align-bottom"></i></Link>
                        </div>
                    </div>
                </div>
            </Col>
            -->
        </Row>
    </Container>
</section>
