import React from "react";
import Calendly from "../components/Calendly";

function Home() {
    return (
      <div>
        <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="FreeFlo social media marketing agency website"
    />

    <link rel="icon" href="img/favicon/favicon.png" />
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
    <link rel="manifest" href="manifest.webmanifest" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/queries.css" />

    <script
      type="module"
      src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
    ></script>

    <script
      defer
      src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
    ></script>

    <script defer src="js/script.js"></script>

    <title>FreeFlo</title>
  </head>
  <body>
    <header class="header">
      <a href="#">
        <img class="logo" alt="FreeFlo Logo" src="img/logo-orange-tick.png" />
      </a>
    </header>

    <main>
    {/* SECTION HERO  */}
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              We Help E-commerce Brands Soar To The Next Level Via Paid
              Advertising
            </h1>
            <p class="hero-description">
              Ads shouldn't be weighing down your business, so
              <em>why let them?</em>
              With a breathtaking ROI and full money back guarantee let Us do
              the heavy lifting!
            </p>
            <a href="#cta" class="btn">Book a free Growth Demo</a>
          </div>
          <div class="hero-image-box">
            <picture>
            {/* <source srcset="img/hero.webp" type="image/webp" /> */}
              <source srcset="img/logo-white-tick.png" type="image/png" />

              <img
                src="img/logo-white-tick.png"
                class="hero-image"
                alt="FreeFlo logo"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* SECTION TWO */}
      <section class="section-two section-two-four">
        <div class="two-four">
          <div class="two-four-image-box">
            <picture>
            {/* <source srcset="img/hero.webp" type="image/webp" /> */}
              <source srcset="img/two.svg" type="image/svg" />

              <img
                src="img/two.svg"
                class="two-four-image"
                alt="Illustration of ad on computer"
              />
            </picture>
          </div>
          <div class="two-four-text-box">
            <h2 class="heading-secondary">Let your business Flo!</h2>
            <div class="two-four-description">
              <p class="two-four-description-child">
                At FreeFlo we believe that running Ads for your ecom brand
                shouldn't be what's holding you back from scaling to your goals.
              </p>
              <p class="two-four-description-child">
                Spending hours and hours on Ads shouldn't be where your energy
                is directed.
              </p>
              <p class="two-four-description-child">
                Your business product is your baby and
                <strong>you shouldn't have have to compromise</strong>
                developing your product to run low yielding Ads.
              </p>
              <p class="two-four-description-child">
                At FreeFlo we also put our money where our mouth is, unlike
                <em>other</em> agencies if we can't give you a desired ROI we
                guarantee you a full refund - no questions asked.
              </p>
            </div>
            <a href="#cta" class="btn">Book a free Growth Demo</a>
          </div>
        </div>
      </section>

      {/* SECTION THREE */}
      <section class="section-three center-text" id="three">
        <div class="container">
          <h2 class="heading-secondary">Our 3 point 'soar' strategy</h2>
          <span class="subheading"
            >Our approach to scaling your ecom brand</span
          >
        </div>
        <div class="container grid grid--3-cols">
          <div class="three-text-box">
            <h3 class="heading-tertiary">Diagnose</h3>
            <p class="three-description">
              Not every solution is the same. The first stage of our strategy is
              to understand your current ad-spend and all it's nooks and
              crannies.
            </p>
          </div>
          <div class="three-text-box">
            <h3 class="heading-tertiary">Flow</h3>
            <p class="three-description">
              Next, we craft a plan of action to increase ad-spend ROI by
              tailoring a solution that perfectly lets your ecom business flow.
            </p>
          </div>
          <div class="three-text-box">
            <h3 class="heading-tertiary">Soar</h3>
            <p class="three-description">
              And finally we let your business soar! And we won't leave you in
              the dark, we'll regularly update you on your ad-spends juicy
              results.
            </p>
          </div>
        </div>
        <div class="container">
          <a href="#cta" class="btn">Book a free Growth Demo</a>
        </div>
      </section>

      {/* SECTION FOUR */}
      <section class="section-four section-two-four">
        <div class="two-four">
          <div class="two-four-text-box">
            <span class="subheading">What do we offer?</span>
            <h2 class="heading-secondary">Paid advertising</h2>
            <div class="two-four-description">
              <p class="two-four-description-child">
                ... That's it. We do one thing, and one thing only. Many
                agencies offer a wild host of services, however ultimately fail
                to ever deliver anything.
              </p>
              <p class="two-four-description-child">
                At FreeFlo we've doubled down on our expertise to ensure that
                every penny spent has a purpose.
              </p>
              <p class="two-four-description-child">
                We have mastered one thing and one thing alone, which is how we
                can guarantee results.
              </p>
            </div>

            <a href="#cta" class="btn">Book a free Growth Demo</a>
          </div>
          <div class="two-four-image-box">
            <picture>
            {/* <source srcset="img/hero.webp" type="image/webp" /> */}
              <source srcset="img/four.svg" type="image/svg" />

              <img
                src="img/four.svg"
                class="two-four-image"
                alt="Illustration of statistics"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* SECTION FIVE */}
      <section class="section-five" id="five">
        <div class="container">
          <h2 class="heading-secondary center-text">
            How we operate at FreeFlo
          </h2>
        </div>

        <div class="container grid grid--3-cols">
          <div class="five-img-box">
            <picture>
            {/* <source srcset="img/hero.webp" type="image/webp" /> */}
              <source srcset="img/five.svg" type="image/svg" />

              <img
                src="img/five.svg"
                class="two-four-image"
                alt="Illustration of lady searching the web"
              />
            </picture>
          </div>

          <div class="five-box">
            <header class="five-header center-text">
              <p class="five-name">What we do</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>We analyse the history of your brand</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  We create & manage campaigns that sell your product
                  efficiently
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  We collect & utilize data to continuously optimise & scale
                  your campaigns
                </span>
              </li>
            </ul>
          </div>

          <div class="five-box">
            <header class="five-header center-text">
              <p class="five-name">What we don't do</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="close-outline"></ion-icon>
                <span>We do not create the content for campaigns</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="close-outline"></ion-icon>
                <span>We do not charge money to onboard you</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="close-outline"></ion-icon>
                <span>
                  We do not offer any other service such as SEO optimisation or
                  Email marketing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="container center-text">
          <a href="#cta" class="btn">Book a free Growth Demo</a>
        </div>
      </section>

      {/* SECTION CTA */}
      <section class="section-cta" id="cta">
        <div class="container">
          <div class="cta">
            <h2 class="heading-secondary center-text">Let's Talk</h2>
            <span class="subheading center-text">Book a call</span>

            <div class="cta-text-box">
            {/* REPLACE EMBED HERE */}
            <Calendly/> 
            </div>

            <div class="five-box">
              <header class="five-header center-text">
                <p class="five-name">What we do</p>
              </header>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>We analyse the history of your brand</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    We create & manage campaigns that sell your product
                    efficiently
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    We collect & utilize data to continuously optimise & scale
                    your campaigns
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container center-text">
        <a href="#" class="footer-logo">
          <img class="logo" alt="FreeFlo Logo" src="img/logo-orange-tick.png" />
        </a>
      </div>
    </footer>
    </body>
      </div>
    );
  }
  
  export default Home;
  