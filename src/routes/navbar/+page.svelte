<script>
    import { onMount } from "svelte";
    import Link from "svelte-link";
    import {
        Collapse,
        Container,
        Dropdown,
        DropdownItem,
        DropdownMenu,
        DropdownToggle,
        Nav,
        Navbar,
        NavbarToggler,
        NavItem,
        NavLink,
    } from "sveltestrap";
    // Import Images
    import {
        default as logodark,
        default as logolight,
    } from "../assets/logo.webp";
    let navClass = "";
    let screenSize;
    let isOpen = true;

    onMount(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            navClass = "is-sticky";
        } else {
            navClass = "";
        }
    };
</script>

<svelte:window bind:innerWidth={screenSize} />
<nav
    class={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass}
    id="navbar"
>
    <Container>
        <Link class="navbar-brand" href="/">
            <img
                src={logodark}
                class="card-logo card-logo-dark"
                alt="logo dark"
                height="50"
            />
            <img
                src={logolight}
                class="card-logo card-logo-light"
                alt="logo light"
                height="17"
            />
        </Link>

        <NavbarToggler
            class="navbar-toggler py-0 fs-20 text-body"
            on:click={() => (isOpen = !isOpen)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="mdi mdi-menu" />
        </NavbarToggler>

        <Collapse
            isOpen={screenSize > 500 ? true : false}
            class="navbar-collapse  justify-content-start"
            id="navbarSupportedContent"
            style={{ overflow: "visible !important" }}
        >
            <Nav class="ms-auto d-flex" navbar>
                <Dropdown nav inNavbar>
                    <DropdownToggle nav caret>ABOUT US</DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>
                            <NavLink
                                class="navlinkcs"
                                href="/about-us/our-goals">Our Goals</NavLink
                            >
                        </DropdownItem>
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/how-we-do-it"
                                >How we do it</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/our-outputs"
                                >Our Outputs</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/implications"
                                >Implications</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/community-influence"
                                >Community Influence</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/farmer-beneficiaries"
                                >Farmer Beneficiaries</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/testimonies"
                                >Testimonies</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/about-us/our-team">Our Team</NavLink
                            ></DropdownItem
                        >
                    </DropdownMenu>
                </Dropdown>
                <Dropdown nav inNavbar>
                    <DropdownToggle nav caret>OUR WORK</DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem
                            ><NavLink
                                class="navlinkcs"
                                href="/our-work/geomapping">Geomapping</NavLink
                            ></DropdownItem
                        >
                        <DropdownItem>Profiling</DropdownItem>
                        <Dropdown nav inNavbar>
                            <DropdownToggle nav caret>Farming</DropdownToggle>
                            <DropdownMenu end style={{ left: "50%" }}>
                                <DropdownItem>Planting</DropdownItem>
                                <DropdownItem>Monitoring</DropdownItem>

                                <DropdownItem>Harvesting</DropdownItem>
                                <DropdownItem>Value-Adding</DropdownItem>
                                <DropdownItem>Marketing</DropdownItem>
                                <DropdownItem>Insurance</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown nav inNavbar>
                    <DropdownToggle nav caret>OUR PARTNERS</DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>Sorsogon State University</DropdownItem>
                        <DropdownItem>DOST-PCAARRD AABH</DropdownItem>
                        <DropdownItem>BFAR-NSTDC</DropdownItem>
                        <DropdownItem>PCIC</DropdownItem>
                        <DropdownItem>Seoul National University</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink href="https://github.com/sveltestrap/sveltestrap"
                        >PUBLICATION</NavLink
                    >
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/sveltestrap/sveltestrap"
                        >CONTACT US</NavLink
                    >
                </NavItem>
            </Nav>
        </Collapse>
    </Container>
</nav>
