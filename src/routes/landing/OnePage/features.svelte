<script>
    import Link from "svelte-link";
    import { Col, Container, Row } from "sveltestrap";
    // Import Images
    import img1 from "../../../assets/images/landing/features/img-1.png";
    import img2 from "../../../assets/images/landing/features/img-2.png";
    import img3 from "../../../assets/images/landing/features/img-3.png";
    import agencies from "./assets/agencies.png";
    import edges from "./assets/edges.png";
    import targetgroups from "./assets/targetgroups2.png";
</script>

<section class="section bg-light py-5" id="features">
    <Container>
        <Row class="align-items-center gy-4">
            <Col lg={6} sm={7} class="mx-auto">
                <div>
                    <img src={edges} alt="" class="img-fluid mx-auto" />
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
                    <h3 class="mb-3 fs-48" style="color:green">ABOUT EDGES</h3>
                    <p class="mb-4 ff-secondary fs-16">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ea enim molestiae aspernatur, vero accusamus rem?
                        Cum soluta, sint dolorem corrupti expedita harum, error
                        enim, quod dolorum est quibusdam voluptatum esse.
                    </p>

                    <Row class="pt-3">
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>11</h4>
                                <p>MEMBERS</p>
                            </div>
                        </Col>
                        <Col class="col-3">
                            <div class="text-center">
                                <h4>7</h4>
                                <p>TARGET OBJECTIVES</p>
                            </div>
                        </Col>
                        <Col class="col-4">
                            <div class="text-center">
                                <h4>3</h4>
                                <p>ACHIEVED</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</section>
<!--
<section class="py-5 bg-primary position-relative">
    <div class="bg-overlay bg-overlay-pattern opacity-50" />
    <Container>
        <Row class="align-items-center gy-4">
            <Col class="col-sm">
                <div />
            </Col>
            <Col class="col-sm-auto" />
        </Row>
    </Container>
</section>
-->
<section class="section">
    <Container>
        <Row class="align-items-center gy-4">
            <Col lg={6} class="order-2 order-lg-1">
                <div class="text-muted">
                    <h5 class="fs-12 text-uppercase text-success">PROJECT</h5>
                    <h4 class="mb-3">Cooperating agency/ies</h4>
                    <p class="mb-4 ff-secondary" />

                    <Row>
                        <Col sm={5}>
                            <div class="vstack gap-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            BFAR-National Seaweed
                                            TechnologyDevelopment Center
                                            (NSTDC), Cabid-an, Sorsogon City
                                        </h5>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            Local Government Units of Sorsogon
                                            City, Gubat, and Prieto Diaz
                                        </h5>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            DOST-PCAARRD Agri-Aqua Business Hub
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div class="vstack gap-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            Carican Self Help Group
                                        </h5>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            Rural Improvement Club
                                        </h5>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div
                                                class="avatar-title bg-transparent text-success rounded-circle h2"
                                            >
                                                <i class="ri-check-fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 mb-0">
                                            Carayat Farmers Seaweed Association
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div class="mt-4">
                        <!--<Link href="/dashboard" class="btn btn-primary"
                            >Learn More <i
                                class="ri-arrow-right-line align-middle ms-1"
                            /></Link
                        >
                    </div>-->
                    </div>
                </div></Col
            >

            <Col lg={6} sm={7} class="col-10 ms-auto order-1 order-lg-2">
                <div>
                    <img src={agencies} alt="" class="img-fluid" />
                </div>
            </Col>
        </Row>

        <Row class="align-items-center mt-5 pt-lg-5 gy-4">
            <Col lg={6} sm={7} class="col-10 mx-auto">
                <div>
                    <img src={targetgroups} alt="" class="img-fluid" />
                </div>
            </Col>
            <Col lg={6}>
                <div class="text-muted ps-lg-5">
                    <h5 class="fs-12 text-uppercase text-success">PROJECT</h5>
                    <h4 class="mb-3">TARGET GROUPS</h4>
                    <p class="mb-4">
                        It is estimated that at least 81 men and women seaweed
                        farmers and processors that belong to three (3) seaweed
                        groups will benefit from this study.
                    </p>

                    <div class="vstack gap-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div
                                        class="avatar-title bg-transparent text-success rounded-circle h2"
                                    >
                                        <i class="ri-check-fill" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">Carican Self Help Group</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div
                                        class="avatar-title bg-transparent text-success rounded-circle h2"
                                    >
                                        <i class="ri-check-fill" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">Rural Improvement Club (RIC)</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-2">
                                <div class="avatar-xs icon-effect">
                                    <div
                                        class="avatar-title bg-transparent text-success rounded-circle h2"
                                    >
                                        <i class="ri-check-fill" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-0">
                                    Carayat Seaweed Farming Association (CFSA)
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p class="mb-4">
                        As indirect beneficiaries, the LGU, academe and policy
                        makers within the province may benefit from the
                        replication and/or scaling of interventions.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
</section>
