import React from "react";

const About = () => {
  return (
    <div>
      <div className="about">
        <div class="content-wrap pb-0">
          <div class="container">
            <div class="heading-block border-bottom-0 bottommargin-sm">
              <h2 class="font-secondary color nott">How We Work</h2>
            </div>

            <div class="row col-mb-50">
              <div class="col-lg-4">
                <div class="feature-box media-box">
                  <div class="fbox-media">
                    <img src="assets/images/icons/bowl.svg" alt="bowl Image" />
                  </div>
                  <div class="fbox-content px-0">
                    <h3>Our Shop</h3>
                    <p>
                      This is a mobile shop based in Decatur, GA. We have
                      pick-up and delivery options available in the Atlanta
                      area. Currently, we do not ship.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="feature-box media-box">
                  <div class="fbox-media">
                    <img
                      src="assets/images/icons/spoon.svg"
                      alt="spoon Image"
                    />
                  </div>
                  <div class="fbox-content px-0">
                    <h3>Ample Options</h3>
                    <p>
                      We have a variety of products to choose from to satisfy
                      your sweet tooth including cupcakes, cookies, cakes, &
                      brownies.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="feature-box media-box">
                  <div class="fbox-media">
                    <img
                      src="assets/images/icons/glass.svg"
                      alt="glass Image"
                    />
                  </div>
                  <div class="fbox-content px-0">
                    <h3>Alcohol Infused</h3>
                    <p>
                      Try our alcohol infused sweets to add life to the party.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="line mt-5"></div>
          </div>

          <div class="section about2 mb-0">
            <div class="container clearfix">
              <div class="heading-block center border-bottom-0">
                <span class="font-primary ls1">Expert &amp; Skillful</span>
                <h3 class="nott font-secondary ls0">Our Chefs</h3>
              </div>

              <div class="row clearfix">
                <div class="col-lg-3 col-md-6">
                  <div class="team">
                    <div class="team-image imagescalein">
                      <img
                        src="assets/images/chefs/1.jpg"
                        alt="Michelle Barkers image"
                      />
                    </div>
                    <div class="team-desc">
                      <div class="team-title">
                        <h4 class="font-primary font-weight-normal ls2">
                          Michelle Barkers
                        </h4>
                        <span>Owner & Baker</span>
                      </div>
                      <p>
                        Peace, Love and Light Family! My name is Michelle
                        Barkers, the owner and baker of Mimi B Vegan Sweets,
                        LLC. I started this business with a passion to make a
                        major career and lifestyle change. This may have been a
                        big risk, but it incorporates everything I've ever
                        wanted in a business and as a business owner. The vegan
                        journey has been life changing and has brought many
                        health benefits, but I still have a sweet thooth. Don't
                        we all lol. Creating these yummy vegan sweets allow me
                        to maintain this lifestyle and still enjoy the sweet
                        treats I crave. I hope you enjoy them as much as I do.
                        Thank you for your support. Enjoy!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="headerbg"></div>
      </div>
    </div>
  );
};

export default About;
