<script>
    import Link from "svelte-link";
    import { Card, CardBody, Col, Container, Row } from "sveltestrap";
    // Import Images
    import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
    import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
    import avatar5 from "../../../../assets/images/users/avatar-5.jpg";
    import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
    import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
    import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
    import dumilag from "../assets/dumilag.png";
    import escopete from "../assets/escopete.png";
    import malto from "../assets/malto.png";
    import mirasol from "../assets/mirasol.png";
    import orgela from "../assets/orgela.png";
    import profile from "../assets/profile.png";
</script>

<section class="section bg-light" id="team">
    <Container>
        <Row class="justify-content-center">
            <Col lg={8}>
                <div class="text-center mb-5">
                    <h3 class="mb-3 fw-semibold">
                        Our <span class="text-success">Team</span>
                    </h3>
                    <p class="text-muted mb-4 ff-secondary">
                        To achieve this, it would be necessary to have uniform
                        grammar, pronunciation and more common words. If several
                        languages coalesce the grammar.
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={dumilag}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">RICHARD DUMILAG</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Leader
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">STEFANI REIGN TAGAL</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            University Research Associate
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">AIREEN MALTO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            University Research Associate
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={mirasol}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MA. LUISA MIRASOL</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">IDA CAPACIO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={escopete}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">ADA ESCOPETE</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={orgela}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">ELDEN ORGELA</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 1
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={3} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={malto}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MARK ARIEL MALTO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 1
                        </p>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <!-- <Row>
            <div class="col-lg-12">
                <div class="text-center mt-2">
                    <Link href="/pages/team/team" class="btn btn-primary"
                        >View All Members <i
                            class="ri-arrow-right-line ms-1 align-bottom"
                        /></Link
                    >
                </div>
            </div>
        </Row>-->
    </Container>
</section>
