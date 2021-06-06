import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { cupcakes } from "../shared/cupcakes";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("cupcakes");

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
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={{ active: activeTab === "cupcakes" }}
                    onClick={() => {
                      toggle("cupcakes");
                    }}
                  >
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cupcakes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={{ active: activeTab === "cookies" }}
                    onClick={() => {
                      toggle("cookies");
                    }}
                  >
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cookies
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={{ active: activeTab === "cakes" }}
                    onClick={() => {
                      toggle("cakes");
                    }}
                  >
                    <img
                      src="assets/images/icons/dessert.svg"
                      alt="Dessert Image"
                    />
                    Cakes
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane className="tab-content" tabId="cupcakes">
                  <Row gutter="40">
                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#">
                          <img
                            src="assets/img/redV.jpg"
                            alt="Red Velvet Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Red Velvet Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 12.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="">
                          <img
                            src="assets/img/vanilla.jpg"
                            alt="Vanilla Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Vanilla Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 12.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/strawberry.jpg"
                            alt="cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Strawberry Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 12.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/3.jpg"
                            alt="cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Chocolate Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 12.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/aiCC.jpg"
                            alt="Cupcake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Alcohol Infused Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 18.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/lemon.jpeg"
                            alt="Cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">Lemon Cupcakes</a>
                          </h3>
                          <div className="item-price">$ 12.00</div>
                        </CardTitle>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/2.jpg"
                            alt="mini cupcake image"
                            className="portfolio-image"
                          />
                        </a>
                        <CardTitle>
                          <h3 className="mb-1">
                            <a href="#">
                              Cake Poppers{" "}
                              <i>
                                <small>Mini Cupcakes</small>
                              </i>
                            </a>
                          </h3>
                          <div className="item-price">$ 10.00</div>
                        </CardTitle>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane className="tab-content" tabId="cookies">
                  <Row className="row gutter-40">
                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/1.jpg"
                            alt="Cookie image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Chocolate Chip Cookies</a>
                          </h3>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/6.jpg"
                            alt="Cookie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Peanut Butter Cookies</a>
                          </h3>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/sc.jpg"
                            alt="Cookie image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Tea Cakes</a>
                          </h3>
                          <div className="item-price">$ 8.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/9.jpg"
                            alt="Cookie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Blondies</a>
                          </h3>
                          <div className="item-price">$ 10.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/Brownie.jpg"
                            alt="Brownie Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Brownies</a>
                          </h3>
                          <div className="item-price">$ 10.00</div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane className="tab-content" tabId="cakes">
                  <Row className="row gutter-40">
                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/5.jpg"
                            alt="Bundt Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Mini Bundt Cakes</a>
                          </h3>
                          <div className="item-price">$ 20.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/cake.jpg"
                            alt="Banana Nut Bread Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Banana Nut Bread</a>
                          </h3>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/img/lemonCake.jpeg"
                            alt="Lemon Loaf Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Lemon Loaf Cake</a>
                          </h3>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </Card>
                    </Col>

                    <Col lg="3" md="6">
                      <Card body>
                        <a href="#" className="portfolio-image">
                          <img
                            src="assets/images/items/desserts/4.jpg"
                            alt="Blueberry Cake Image"
                            className="portfolio-image"
                          />
                        </a>
                        <div className="portfolio-desc pt-2">
                          <h3 className="mb-1">
                            <a href="#">Lemon Blueberry Loaf Cake</a>
                          </h3>
                          <div className="item-price">$ 15.00</div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>

          <div className="mb-0 mt-3">
            <div className="container">
              <div className="heading-block border-bottom-0 center bottommargin-sm">
                <span className="font-primary ls1 color">Steps of Order</span>
                <h3 className="nott font-secondary ls0">
                  How do you Get your Food
                </h3>
              </div>

              <div className="clear"></div>

              <Row className="mt-5 clearfix">
                <Col lg="4" sm="6" className="bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/route.svg"
                        alt="map Image"
                        className="mini-logos"
                      />
                    </div>
                    <div className="fbox-content px-0">
                      <h3>1. Choose Your Sweets</h3>
                      <p>Add your items to the cart and place your order.</p>
                    </div>
                  </div>
                </Col>

                <Col lg="4" sm="6" className="bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/shop.svg"
                        alt="shop Image"
                        className="mini-logos"
                      />
                    </div>
                    <div className="fbox-content px-0">
                      <h3>2. When do you want it?</h3>
                      <p>
                        Select what date would you like your order to be ready.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg="4" sm="6" className="bottommargin-sm">
                  <div className="feature-box media-box">
                    <div className="fbox-media">
                      <img
                        src="assets/images/icons/delivery-bg.svg"
                        alt="delivery truck Image"
                        className="mini-logos"
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
                </Col>
              </Row>
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
      </section>
    </div>
  );
};

export default Menu;
