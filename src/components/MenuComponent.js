import React, {useState} from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <section
        id="page-title"
        className="style1"
        data-bottom-top="background-position:0 0px;"
        data-top-bottom="background-position:0px -300px;"
      >
        <div className="container clearfix">
          <h1>Menu</h1>
          <span className="font-weight-normal">Choose Items from Our Menu</span>
        </div>
      </section>
      <section id="content">
        <div className="content-wrap py-0">
          <div className="container">
            <div className="tabs tabs-justify" id="tab-1">
              <Nav tabs className="tab-nav clearfix border-bottom-0">
                <li>
                  <a href="#tabs-cupcakes">
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cupcakes
                  </a>
                </li>
                <li>
                  <a href="#tabs-cookies">
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#tabs-cakes">
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cakes
                  </a>
                </li>
              </Nav>

              <div className="tab-container mt-4">
                <div className="tab-content" id="tabs-cupcakes">
                  <div className="row gutter-40">
                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#">
                          <img
                            src="assets/img/redV.jpg"
                            alt="Red Velvet Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Red Velvet Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 12.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="">
                          <img
                            src="assets/img/vanilla.jpg"
                            alt="Vanilla Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Vanilla Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 12.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/strawberry.jpg"
                            alt="cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Strawberry Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 12.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/3.jpg"
                            alt="cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Chocolate Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 12.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/aiCC.jpg"
                            alt="Cupcake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Alcohol Infused Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 18.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/lemon.jpeg"
                            alt="Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Lemon Cupcakes</a>
                          </h4>
                          <div className="item-price">$ 12.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/2.jpg"
                            alt="mini cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">
                              Cake Poppers{" "}
                              <i>
                                <small>Mini Cupcakes</small>
                              </i>
                            </a>
                          </h4>
                          <div className="item-price">$ 10.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="tabs-cookies">
                  <div className="row gutter-40">
                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/1.jpg"
                            alt="Cookie image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Chocolate Chip Cookies</a>
                          </h4>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/6.jpg"
                            alt="Cookie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Peanut Butter Cookies</a>
                          </h4>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/sc.jpg"
                            alt="Cookie image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Tea Cakes</a>
                          </h4>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/9.jpg"
                            alt="Cookie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Blondies</a>
                          </h4>
                          <div className="item-price">$ 10.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/Brownie.jpg"
                            alt="Brownie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Brownies</a>
                          </h4>
                          <div className="item-price">$ 10.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="tabs-cakes">
                  <div className="row gutter-40">
                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/5.jpg"
                            alt="Bundt Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Mini Bundt Cakes</a>
                          </h4>
                          <div className="item-price">$ 20.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/cake.jpg"
                            alt="Banana Nut Bread Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Banana Nut Bread</a>
                          </h4>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/lemonCake.jpeg"
                            alt="Lemon Loaf Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Lemon Loaf Cake</a>
                          </h4>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="portfolio-item">
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/4.jpg"
                            alt="Blueberry Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h4 className="mb-1">
                            <a href="#">Lemon Blueberry Loaf Cake</a>
                          </h4>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="style2 mb-0 mt-3">
            <div className="container">
              <div className="heading-block border-bottom-0 center bottommargin-sm">
                <span className="font-primary ls1 color">Steps of Order</span>
                <h3 className="nott font-secondary ls0">
                  How do you Get your Food
                </h3>
              </div>

              <div className="clear"></div>

              <div className="row mt-5 clearfix">
                <div className="col-lg-4 col-sm-6 bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/route.svg"
                        alt="map Image"
                      />
                    </div>
                    <div className="fbox-content px-0">
                      <h3>1. Choose Your Sweets</h3>
                      <p>Add your items to the cart and place your order.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/shop.svg"
                        alt="shop Image"
                      />
                    </div>
                    <div className="fbox-content px-0">
                      <h3>2. When do you want it?</h3>
                      <p>
                        Select what date would you like your order to be ready.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/delivery-bg.svg"
                        alt="delivery truck Image"
                      />
                    </div>
                    <div className="fbox-content px-0">
                      <h3>3. Your Item is on the Way</h3>
                      <p>
                        Your items will be ready for pick-up or delivery on the
                        date specified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section m-0 bg-transparent">
            <div className="container">
              <div className="mx-auto d-flex justify-content-center center">
                <h3 className="mb-0 ls0">
                  <a
                    href="#"
                    className="button button-circle button-xlarge button-light text-white ls0 nott mt-0 mb-1 ml-3"
                  >
                    <span>Order Now</span>{" "}
                    <i className="icon-line-arrow-right font-weight-semibold"></i>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* 
<div style="position: absolute; bottom: 0; left: 0; width: 100%; z-index: 3; background: url('assets/images/sketch-header.png') repeat center bottom; background-size: auto 100%; height: 40px; margin-bottom: -10px;"></div> */}
      </section>
    </div>
  );
};

export default Menu;
