import $ from 'jquery';
import React, { useEffect, useState } from 'react';

const UpperHeader = () => {
    // Hide header on scroll down
    window.onscroll = function () { myFunction() }; function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('header .container').classList.add('.top-up');
        } else {
            document.querySelector('header .container').classList.remove('.top-up');
        }
    }

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        // Aside info bar
        $('.aside_open').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

        // Toggle Header Search
        $('.header_search .form-control-submit').click(function (e) {
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("bg-dark sticky");
            } else {
                header.removeClass("bg-dark sticky");
            }
        });
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header_inner d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href='/' className="light_logo"><img src="images/logo-light.png" alt="logo" /></a>
                        <a href='/' className="dark_logo"><img src="images/logo-dark.png" alt="logo" /></a>
                    </div>


                    <div className="mainnav d-none d-lg-block">
                        <ul className="main_menu">
                            <li className="menu-item "><a href="/">INICIO</a>{/* 
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/">Home One</a></li>
                                    <li className="menu-item"><a href="/home-6">Home Six</a></li>
                                </ul> */}
                            </li>
                            <li className="menu-item "><a href="/project-1">PROYECTOS</a>
                                {/* <ul className="sub-menu">
                                    <li className="menu-item"><a href="/project-1">Projects One</a></li>
                                </ul> */}
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="/about">QUIÉNES SOMOS</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/about">About Us</a></li>
                                    <li className="menu-item "><a href="/team">NOSOTROS</a>
                                        {/* <ul className="sub-menu">
                                            <li className="menu-item"><a href="/team">Our Team</a></li>
                                        </ul> */}
                                    </li>
                                    <li className="menu-item "><a href="/service-1">SERVICIOS</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/service-1">Service One</a></li>
                                        </ul>
                                    </li>
                                    {/* <li className="menu-item menu-item-has-children"><a href="/">Shop</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                            <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                            <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                            <li className="menu-item"><a href="/shop-product">Product Details</a></li>
                                            <li className="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                            <li className="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                            <li className="menu-item"><a href="/login">Login</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="/404">404 Page</a></li>
                                    <li className="menu-item"><a href="/coming-soon">Coming Soon</a></li> */}
                                </ul>
                            </li>
                            <li className="menu-item"><a href="/contact">CONTACTO</a></li>
                            <li className="menu-item "><a href="/blog">NOTICIAS ZIE</a>
                                {/* <ul className="sub-menu">
                                    <li className="menu-item"><a href="/blog">Blog</a></li>
                                    <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                                </ul> */}
                            </li>
                        </ul>
                    </div>
                    <div className="header_right_part d-flex align-items-center">
                        <button className="aside_open">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>

                        {/* Header Search */}
                        <div className="header_search" onClick={handleToggle}>
                            <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                        </div>
                        <div id="open_search" className={isActive ? null : "active"}>
                            <form className="search_form">
                                <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>

                        {/* Mobile Responsive Menu Toggle Button */}
                        <button type="button" className="mr_menu_toggle d-lg-none">
                            <i className="bi bi-list"></i>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default UpperHeader;