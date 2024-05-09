<template>
  <div class="home">
    <div class="">
      <!-- slider show servieces  -->
      <div id="service-banner" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="../assets/banner/banner-b-peridot-academic-editing-services-1.webp"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h2 class="mb-3 fw-bold">
                Increase your Acceptance Chances by 24%
              </h2>
              <p>
                From soil to space, our team of subject experts help finalize
                your manuscript to get published in high-impact journals
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="../assets/banner/banner-b-peridot-academic-editing-services-2.webp"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h2 class="mb-3 fw-bold">
                Trusted by Leading Publishers, Societies, Universities and Labs
              </h2>
              <p>
                4 of the top 5 global publishers choose Editage as their author
                services partner
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="../assets/banner/banner-b-peridot-academic-editing-services-3.webp"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h2 class="mb-3 fw-bold">
                21+ Years of Helping Researchers Get Published
              </h2>
              <p>
                Our Publication Support Services are rated excellent with a
                Trustpilot score of 4.7/5
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              src="../assets/banner/banner-b-peridot-academic-editing-services-4.webp"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h2 class="mb-3 fw-bold">
                Journey from Manuscript Finalization to Creating Research Impact
              </h2>
              <p>
                Get the attention your work deserves from peers, media, and
                funders with our Research Promotion Services
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/banner/banner-b-peridot-academic-editing-services-5.webp"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h2 class="mb-3 fw-bold">
                Are you a Bill & Melinda Gates Foundation grantee?
              </h2>
              <p>
                Explore our services for Enterics, Diagnostics, Genomics &
                Epidemiology team grantees of the foundation. Click to know more
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#service-banner"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon rounded-circle shadow bg-white"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#service-banner"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon rounded-circle shadow bg-white"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- show  -->
      <div
        class="container show py-4 d-flex flex-column flex-md-row justify-content-around align-items-center"
      >
        <div class="order-2 order-sm-1">
          <div>
            <h3 class="text-center fs-4 mb-3">
              <span class="d-block fs-3 fw-bold"
                >Welcome to EdigenomiX Scientific</span
              >Your Trusted Partner in Advanced Scientific Solutions.
            </h3>
            <p class="text-center mb-0">
              At EdigenomiX Scientific, we offer an array of premium scientific
            </p>
            <p class="text-center">
              services designed to propel your research and scholarly endeavors
              to new heights.
            </p>
            <div class="d-flex justify-content-center align-items-center">
              <router-link
                :to="{ name: 'Services' }"
                class="btn btn-purple rounded-pill p-3 px-5 fw-bold"
                >Explore Our Services</router-link
              >
            </div>
          </div>
        </div>

        <div class="for-video order-1 order-sm-2">
          <div class="w-100 video">
            <video autoplay loop class="w-100 video-img rounded">
              <source
                src="../assets/video.mp4"
                type="video/mp4"
                class="w-100 h-100"
              />
            </video>
          </div>
        </div>
      </div>

      <!-- about  -->
      <div class="about bg-purple">
        <div class="container">
          <div class="text-center py-3 pt-4">
            <h3 class="fw-bold">Trusted by 1600+ partners</h3>
            <p>
              Including 40+ Journals & Publishers, 500+ Universities and 1,100
              Societies
            </p>
          </div>
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="mx-2 p-3 about-info text-white text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-file-earmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z"
                  />
                </svg>
                <h4>123</h4>
                <p>Projects</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="mx-2 p-3 about-info text-white text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-file-earmark-post"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
                  />
                  <path
                    d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <h4>123</h4>
                <p>Article</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="mx-2 p-3 about-info text-white text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                  />
                </svg>
                <h4>123</h4>
                <p>Happy Clients</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="mx-2 p-3 about-info text-white text-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <h4>123</h4>
                <p>Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- services -->
      <div class="container pt-5">
        <div
          class="d-flex justify-content-between justify-content-xxl-around align-items-center"
        >
          <h2 class="fs-md-1 m-0 fw-bold">Explore Our Services</h2>
          <router-link
            :to="{ name: 'Services' }"
            class="btn btn-purple small-btn"
            type="button"
          >
            All Services <i class="fa-sharp fa-solid fa-right-long"></i>
          </router-link>
        </div>
      </div>

      <Services></Services>

      <!-- team  -->
      <team></team>

      <!-- Get Offer  -->
      <div class="about bg-pearl text-light py-3">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-2 col-sm-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="gold"
                class="bi bi-stopwatch-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"
                />
              </svg>
            </div>
            <div class="col-10 col-sm">
              <div>
                <h3 class="fw-bold">
                  8 Hour Express delivery Working on a strict deadline?
                </h3>
                <p class="mb-0">
                  Get your documents edited in as fast as 8 hours
                </p>
              </div>
            </div>
            <div class="col-12 col-sm">
              <button class="btn btn-light mx-auto d-block fw-bold">
                Get Your Descount
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Published Researchers  -->
      <div class="published container py-4" style="min-height: 100vh">
        <div class="section-title text-center py-4">
          <h2 class="fw-bold">
            Unlock Publishing Success with EdigenomiX: Endorsed by Leading
            Researchers for Higher Acceptance Rates
          </h2>
        </div>
        <div
          id="published-banner"
          class="carousel slide mx-auto"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#published-banner"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
          </div>

          <div class="carousel-inner rounded-4">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="../assets/banner/banner2/published_1.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  Collaborating with EdigenomiX Scientific Co., Ltd. for the
                  editorial assistance on our CHD1L study was a key factor in
                  our successful publication. Their expert team enhanced the
                  manuscript significantly, making complex scientific
                  information accessible and impactful. This led to our paper
                  being accepted in 'Frontiers in Molecular Biosciences' under
                  the theme of Molecular Diagnostics and Therapeutics, with an
                  impressive impact factor of 4.8 and a CiteScore of 5.0.
                  EdigenomiX's commitment to quality and precision in editing is
                  truly commendable
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    A Pan-Cancer Analysis Reveals CHD1L as a Prognostic and
                    Immunological Biomarker in Several Human Cancers
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span> Dr. Mohamed A
                    Soltan
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Molecular Oncology and Immunotherapy
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Faculty of
                      Pharmacy, Sinai University
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="20000">
              <img
                src="../assets/banner/banner2/published_2.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  Our research team's experience with EdigenomiX Scientific Co.,
                  Ltd. was instrumental in achieving publication success for our
                  study on E. coli vaccines. The editorial insights provided
                  were not only precise but deeply informed by a keen
                  understanding of reverse vaccinology and immunoinformatics.
                  Their contribution greatly enhanced our manuscript's clarity,
                  helping it meet the high standards of 'Frontiers in Medicine',
                  specifically within the Infectious Diseases – Surveillance,
                  Prevention, and Treatment section. The journal's impact factor
                  and CiteScore reflected the high visibility and impact our
                  work gained thanks to EdigenomiX's expertise.
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    In silico Designing of an Epitope-Based Vaccine Against
                    Common E. coli Pathotypes
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span> Prof. Dr. Sarah
                    Albogami
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Microbiology and Immunology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      Biotechnology, College of Science, Taif University, Taif,
                      Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="30000">
              <img
                src="../assets/banner/banner2/published_3.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  EdigenomiX Scientific Co., Ltd. provided exceptional editorial
                  services that significantly contributed to the refinement and
                  success of our paper on NRAS SNPs and carcinogenesis. Their
                  team's expertise in computational genomics was evident, as
                  they skillfully enhanced our manuscript, ensuring rigorous
                  scientific analysis and clear expression of complex concepts.
                  This led to its publication in 'Frontiers in Genetics', under
                  the Computational Genomics section, which speaks volumes about
                  their quality of work. The impact factor and specialized focus
                  of the journal have brought our research the recognition it
                  deserves
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Computational Analysis of Deleterious SNPs in NRAS to Assess
                    Their Potential Correlation with Carcinogenesis
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span> Dr. Mohammed Y
                    Behairy
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Genetic Oncology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> : Department of
                      Genetics, Faculty of Science, Alexandria University
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="40000">
              <img
                src="../assets/banner/banner2/published_4.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  "The support from EdigenomiX Scientific Co., Ltd. was crucial
                  in the development and publication of our research on a
                  Marburg virus vaccine. Their editorial team, with deep
                  expertise in immunoinformatics and vaccine design, provided
                  critical insights that enhanced our manuscript's scientific
                  rigor and readability. This support helped us navigate the
                  complex publication process at 'Frontiers in Immunology',
                  particularly within the Vaccines and Molecular Therapeutics
                  section. Their contribution was instrumental in elucidating
                  the potential of epitope-based vaccines, ensuring our research
                  reached a wide, impactful audience.
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Mining of Marburg Virus Proteome for Designing an
                    Epitope-Based Vaccine
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span> Prof. Dr. Waleed K.
                    Abdulsahib
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Virology and Immunotherapy
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      pharmacology and Toxicology, College of Pharmacy, Al-
                      Farahidi University, Baghdad, Iraq
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="50000">
              <img
                src="../assets/banner/banner2/published_5.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  Working with EdigenomiX Scientific Co., Ltd. significantly
                  uplifted the quality of our research on HBD-2 variants and
                  their role in SARS-CoV-2 susceptibility. Their editorial team,
                  proficient in molecular immunology, provided exceptional
                  guidance that sharpened our focus and enhanced the depth of
                  our analysis. This was pivotal for our acceptance in
                  'Frontiers in Immunology' under the section Vaccines and
                  Molecular Therapeutics. The detailed feedback on our
                  methodology and results interpretation helped us communicate
                  our findings clearly, making a significant impact in the
                  field.
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    HBD-2 Variants and SARS-CoV-2: New Insights into
                    Inter-individual Susceptibility
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span>Dr. Mohammed Y.
                    Behairy
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Molecular Immunology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Faculty of
                      Medicine, Ain Shams University
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="60000">
              <img
                src="../assets/banner/banner2/published_6.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  The editorial services provided by EdigenomiX Scientific Co.,
                  Ltd. were crucial in the publication of our groundbreaking
                  study on ghrelin’s effects post-myocardial infarction. Their
                  team’s expertise in biomedicine and pharmacotherapy ensured
                  that our complex findings were presented clearly and
                  compellingly. This led to our successful publication in
                  'Biomedicine & Pharmacotherapy', which has been instrumental
                  in advancing our research's reach and impact. We greatly
                  appreciate their attention to detail and deep understanding of
                  our work’s significance
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Subacute Ghrelin Administration Inhibits Apoptosis and
                    Improves Ultrastructural Abnormalities in Remote Myocardium
                    Post-Myocardial Infarction
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span>Prof. Dr. Refaat A.
                    Eid
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Cardiology and Pathophysiology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      Pathology, College of Medicine, King Khalid University,
                      Abha, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="70000">
              <img
                src="../assets/banner/banner2/published_7.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  Our team at King Khalid University and other collaborating
                  institutions relied on the exceptional editorial services of
                  EdigenomiX Scientific Co., Ltd. for our complex physiological
                  research article. Their profound expertise in nutritional and
                  functional foods helped enhance our manuscript significantly,
                  ensuring that each aspect of our intricate molecular findings
                  was accurately and clearly articulated. This precision
                  contributed immensely to our article's acceptance by the
                  'Journal of Functional Foods'. We are profoundly grateful for
                  their meticulous attention to detail and their commitment to
                  scientific excellence
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Fish Oil Protects Against Corn Oil-Induced Cardiac Insulin
                    Resistance and Left Ventricular Dysfunction in Rats via
                    Upregulation of PPAR-β/γ and Inhibition of
                    Diacylglycerol/PCK Axis Activation
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span>Prof. Dr. Samy M.
                    Eleawa
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Nutritional Physiology and Cardiometabolic Health
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      Applied Medical Sciences, College of Health Sciences
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="80000">
              <img
                src="../assets/banner/banner2/published_8.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  The editorial assistance from EdigenomiX Scientific Co., Ltd.
                  was pivotal in refining our manuscript on the cardioprotective
                  effects of Exendin-4. Their team’s deep understanding of
                  pharmacological mechanisms and clinical physiology allowed us
                  to present our findings clearly and effectively. Thanks to
                  their rigorous editorial standards and scientific acumen, our
                  paper was successfully published in 'Clinical and Experimental
                  Pharmacology and Physiology'. The detailed feedback on our
                  biochemical assays and molecular pathways was invaluable in
                  achieving publication success.
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Exendin-4 Protects the Hearts of Rats from
                    Ischaemia/Reperfusion Injury by Boosting Antioxidant Levels
                    and Inhibition of JNK/p66Shc/NADPH Axis
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span> Prof. Dr. Mohamed
                    Samir Ahmed Zaki
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Cardiovascular Pharmacology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      Anatomy, College of Medicine, King Khalid University,
                      Abha, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="90000">
              <img
                src="../assets/banner/banner2/published_9.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  "The collaboration with EdigenomiX Scientific Co., Ltd. was
                  essential for the successful publication of our intricate
                  study on Exendin-4 and cardiac remodeling in 'Cardiovascular
                  Toxicology'. Their team provided expert editorial guidance,
                  enhancing the presentation and scientific rigor of our
                  research. Their understanding of the molecular cardiology
                  field significantly contributed to effectively communicating
                  our findings, particularly the complex interactions of
                  PARP1/NF-κB and SIRT1 pathways. Their support was crucial in
                  navigating the peer review process, leading to a smooth
                  publication experience
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Exendin-4 Ameliorates Cardiac Remodeling in Experimentally
                    Induced Myocardial Infarction in Rats by Inhibiting
                    PARP1/NF-κB Axis in A SIRT1-Dependent Mechanism
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span>Prof. Dr. Samah
                    Alharbi
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Cardiovascular Pharmacology and Toxicology
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span> Department of
                      Physiology, College of Medicine, Umm Al-Qura University,
                      Mekkah, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/banner/banner2/published_10.jpg"
                class=""
                alt=""
              />
              <div class="carousel-published">
                <p class="mb-3">
                  The editorial expertise provided by EdigenomiX Scientific Co.,
                  Ltd. played a pivotal role in our successful publication on
                  the prognostic significance of RACGAP1 across various cancers.
                  Their deep understanding of oncology and multiomics data
                  analysis greatly enhanced our manuscript, allowing us to
                  articulate complex genomic interactions and their clinical
                  implications effectively. The publication in 'International
                  Journal of Molecular Sciences' benefited immensely from their
                  precise and insightful editing, ensuring that our findings
                  reached a broad audience with clarity and impact. We are
                  extremely grateful for their support in navigating the
                  intricacies of multiomics research
                </p>
                <div class="puplish-cont pb-3">
                  <h6 class="fw-bold">PAPER TITLE :</h6>
                  <h6 class="mb-3">
                    Assessment of RACGAP1 as a Prognostic and Immunological
                    Biomarker in Multiple Human Tumors: A Multiomics Analysis
                  </h6>

                  <h5 class="mb-3 text-black">
                    <span class="fw-bold">Researcher:</span>Prof. Dr. Bonglee
                    Kim
                  </h5>
                  <div class="row">
                    <p class="col fs-6 border-end">
                      <span class="d-inlin fw-bold">Field :</span>
                      Molecular Oncology and Genomics
                    </p>
                    <p class="col fs-6">
                      <span class="fw-bold">Institution :</span>Department of
                      Pathology, College of Korean Medicine, Kyung Hee
                      University, Seoul 02447, Republic of Korea
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#published-banner"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon rounded-circle shadow bg-white"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#published-banner"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon rounded-circle shadow bg-white"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- PROMISE  -->
      <div class="bg-diamond">
        <div class="container promise py-4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card bg-diamond border-0">
                <img
                  style="max-width: 150px"
                  class="mx-auto rounded"
                  src="../assets/logo/Logo.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0">
                <div class="card-body d-flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#8d7677"
                      class="bi bi-chat-left-dots-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 class="card-title fw-bold">Reliable and Punctual</h5>
                    <p class="card-text">
                      Commit to deadlines with confidence. We guarantee
                      punctuality, and if we’re even slightly late, your service
                      is on us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0">
                <div class="card-body d-flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#8d7677"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      />
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 class="card-title fw-bold">
                      Expert Insights Unlimited
                    </h5>
                    <p class="card-text">
                      Have unlimited access to expert consultations to clarify
                      any queries you might have throughout your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0">
                <div class="card-body d-flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#8d7677"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 class="card-title fw-bold">Round-the-Clock Support</h5>
                    <p class="card-text">
                      Available 24/7 to ensure your project never hits a snag.
                      Reach out anytime and get real-time assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0">
                <div class="card-body d-flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#8d7677"
                      class="bi bi-shield-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
                      />
                      <path
                        d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 class="card-title fw-bold">Risk-Free Satisfaction</h5>
                    <p class="card-text">
                      Your satisfaction, guaranteed. If our service doesn’t meet
                      your standards, you receive a full refund— no questions
                      asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0">
                <div class="card-body d-flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#8d7677"
                      class="bi bi-send-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h5 class="card-title fw-bold">Unwavering Data Privacy</h5>
                    <p class="card-text">
                      We safeguard your information with ISO/IEC 27001:2013
                      certified security systems, ensuring your data remains
                      confidential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- process  -->
      <div class="bg-white">
        <div class="process container py-4">
          <div class="section-title text-center py-4">
            <h2 class="fw-bold">Streamlined Process for Optimal Results</h2>
          </div>
          <div class="process-progress">
            <div class="form-steps">
              <!-- First Step -->
              <div class="form-steps__step form-steps__step--active">
                <div class="form-steps__step-circle">
                  <span class="form-steps__step-number"></span>
                  <span class="form-steps__step-check">&#x2713;</span>
                </div>
                <span class="form-step__step-name d-block mb-0 pb-0">Submit Your Request</span>
                <!-- <small>Easily submit your project details</small> -->
              </div>
              <!-- Second Step -->
              <div class="form-steps__step form-steps__step--incomplete">
                <div class="form-steps__step-circle">
                  <span class="form-steps__step-number"></span>
                  <span class="form-steps__step-check">&#x2713;</span>
                </div>
                <span class="form-step__step-name d-block mb-0 pb-0">Expert Intervention</span>
                <!-- <small>Our specialists swiftly engage, bringing expertise to every task.</small> -->
              </div>
              <!-- Thired Step -->
              <div class="form-steps__step form-steps__step--complete">
                <div class="form-steps__step-circle">
                  <span class="form-steps__step-number"></span>
                  <span class="form-steps__step-check">&#x2713;</span>
                </div>
                <span class="form-step__step-name d-block mb-0 pb-0"> Secure & Efficient Payment</span>
                <!-- <small>Complete transactions seamlessly and receive your documents without delay.</small> -->
              </div>
              <!-- Thired Step -->
              <div class="form-steps__step form-steps__step--last">
                <div class="form-steps__step-circle">
                  <span class="form-steps__step-number"></span>
                  <span class="form-steps__step-check">&#x2713;</span>
                </div>
                <span class="form-step__step-name d-block mb-0 pb-0">review our service</span>
                <!-- <small>You can review the service received and give your impression</small> -->
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center my-3">
            <router-link
              :to="{ name: 'Services' }"
              class="btn btn-purple rounded-pill py-2 px-5"
              >Get Quote</router-link
            >
          </div>
        </div>
      </div>

      <!-- subject  -->
      <div class="bg-diamond">
        <div class="container subject py-4">
          <div class="section-title text-center py-4">
            <h2 class="fw-bold">
              Broad Expertise Across Diverse Fields
            </h2>
          </div>
          <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
            <div class="col">
              <div class="card bg-diamond border-0 h-100">
                <img
                  src="../assets/subject/Sciences.svg"
                  class="card-img-top mx-auto"
                  style="width: 150px; height: 150px"
                />
                <div class="card-body pt-0 text-center">
                  <h5 class="card-title fw-bold fs-sm-6" style="color: #ba68c8">
                    Medicine and Health Sciences
                  </h5>
                  <p class="card-text m-0 p-0">
                    <strong>2000+</strong> topics
                  </p>
                  <p class="card-text m-0 p-0"><strong>800+</strong>specialists</p>
                  <p class="card-text m-0 p-0">
                    <strong>4,000+</strong> papers
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0 h-100">
                <img
                  src="../assets/subject/Biologist-bro.svg"
                  class="card-img-top mx-auto"
                  style="width: 150px; height: 150px"
                />
                <div class="card-body pt-0 text-center">
                  <h5 class="card-title fw-bold fs-sm-6" style="color: #59d07b">
                    Biological and Life Sciences
                  </h5>
                  <p class="card-text m-0 p-0">
                    <strong>100+</strong> fields
                  </p>
                  <p class="card-text m-0 p-0">
                    <strong>10,000+</strong> Papers
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0 h-100">
                <img
                  src="../assets/subject/Engineering.svg"
                  class="card-img-top mx-auto"
                  style="width: 150px; height: 150px"
                />
                <div class="card-body pt-0 text-center">
                  <h5 class="card-title fw-bold fs-sm-6" style="color: #469bca">
                    Biomedical Sciences
                  </h5>
                  <small class="card-text m-0 p-0">
                    Supported by a vast repository of knowledge and experienced professionals.
                  </small>
                  <!-- <p class="card-text m-0 p-0">
                    <strong>1000+</strong> Experts
                  </p>
                  <p class="card-text m-0 p-0">
                    <strong>670,000+</strong> Papers
                  </p> -->
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0 h-100">
                <img
                  src="../assets/subject/Social.svg"
                  class="card-img-top mx-auto"
                  style="width: 150px; height: 150px"
                />
                <div class="card-body pt-0 text-center">
                  <h5 class="card-title fw-bold fs-sm-6" style="color: #cc9e33">
                    Genetics and Genomics
                  </h5>
                  <small class="card-text m-0 p-0">
                    Pioneering research supported by leading scientists and extensive academic resources.
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-diamond border-0 h-100">
                <img
                  src="../assets/subject/Business.svg"
                  class="card-img-top mx-auto"
                  style="width: 150px"
                />
                <div class="card-body pt-0 text-center">
                  <h5 class="card-title fw-bold fs-sm-6" style="color: #e96060">
                    Statistical Analysis
                  </h5>
                  <p class="card-text m-0 p-0">
                    <small>Precision and accuracy in data interpretation facilitated by top-tier statisticians.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- reviews  -->
      <div class="reviews bg-white pt-4">
        <div class="container">
          <h2 class="head-text text-center fs-3 text-start mb-4 fw-bold">
            What Clients Say
          </h2>
          <swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            :breakpoints="breakpoints"
            class="pb-5"
          >
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                  style="width: 100px"
                />
                <h5>Dr. Asmaa Sharabash</h5>
                <h6 class="mb-3">
                  (Faculty of Physical Therapy, Cairo University)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  EdigenomiX Scientific's academic editing services have played
                  a crucial role in the publication of my research papers. Their
                  attention to detail and understanding of academic standards
                  really make a difference
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                  style="width: 100px"
                />
                <h5>Dr. Ahmad Ezz Elddin</h5>
                <h6 class="mb-3">(Faculty of Medicine, Zagazig University)</h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Their manuscript preparation service is second to none.
                  EdigenomiX provided insightful feedback and enhancements that
                  significantly improved the quality of my work. Highly
                  recommend for any academic looking to publish
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                  style="width: 100px"
                />
                <h5>Dr. Ayah M. El-Hossainy</h5>
                <h6 class="mb-3">
                  (High Institute of Public Health, Alexandria University)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Working with EdigenomiX has been a game-changer for my thesis.
                  Their proofreading and suggestions have not only refined my
                  work but also taught me better writing practices.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                  style="width: 100px"
                />
                <h5>Dr. Mayar Zayed</h5>
                <h6 class="mb-3">(Faculty of Medicine, Zagazig University)</h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  I relied on EdigenomiX for literature review assistance, and
                  they delivered a comprehensive analysis that was both thorough
                  and clear. Their support was invaluable in framing my research
                  context
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                  style="width: 100px"
                />
                <h5>Prof. Dr. Ramy Elhendawy</h5>
                <h6 class="mb-3">(Department of Tropical Medicine)</h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  EdigenomiX's academic consultation services helped me navigate
                  through complex research design issues. Their expertise in
                  academic methodologies is top-notch
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Prof. Dr. Nahla Alshaer</h5>
                <h6 class="mb-3">
                  (Department of Zoology, Faculty of Science)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Their team understands the nuances of scholarly publication
                  and offers precise and pragmatic advice to enhance the
                  acceptability of papers in peer-reviewed journals
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Dr. Marina Wagdy</h5>
                <h6 class="mb-3">
                  (Department of Cardiovascular/Respiratory Disorder and
                  Geriatrics)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  I appreciate the dedication of EdigenomiX in handling my
                  research data. Their clear explanations and detailed reporting
                  made complex analyses understandable
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Prof. Dr. Eman Hassan</h5>
                <h6 class="mb-3">
                  (Biological and Geological Science Department, Faculty of
                  Education)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Their feedback was not just thorough but also encouraging.
                  EdigenomiX helped me see the potential in my research and
                  motivated me to push my boundaries
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Dr. Ahmed Zakaria</h5>
                <h6 class="mb-3">
                  (Faculty of Pharmacy, Suez Canal University)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  EdigenomiX doesn’t just edit your work; they enhance it to
                  reflect clarity and a high level of scholarly discourse.
                  Essential for anyone serious about academic publishing
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Dr. Prof. Dr. Ragaey Eid</h5>
                <h6 class="mb-3">
                  (Associate Professor of Hepatogastroenterology)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  EdigenomiX Scientific expertly transformed my complex data
                  into a visually stunning and scientifically accurate graphical
                  abstract. This enhancement significantly increased the
                  accessibility and impact of my research. Highly recommended
                  for their professional and effective visual communication
                  services.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Dr. Ali Salah</h5>
                <h6 class="mb-3">
                  (Department of Dermatology, Venereology and Andrology)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  Their paraphrasing service helped me avoid plagiarism concerns
                  and improved the originality of my academic writings. Their
                  approach maintains the integrity and strength of the argument.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="bg-white text-center p-3 rounded-5">
                <img
                  class="rounded-circle shadow-1-strong mb-4 revuser"
                  src="../assets/about/team/user.jpg"
                  alt="avatar"
                />
                <h5>Prof. Dr. Ahmed Elmardenly</h5>
                <h6 class="mb-3">
                  (Department of Pediatrics, King Faisal Specialist Hospital)
                </h6>
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  EdigenomiX provided exceptional support in data
                  interpretation, transforming raw data into clear, publishable
                  content. Their expertise in academic writing is evident.
                </p>
              </div>
            </swiper-slide>
            ...
          </swiper>
        </div>
      </div>

      <!-- support  -->
      <div class="support py-5">
        <div class="container">
          <div class="section-title text-center py-4">
            <h2 class="fw-bold">Tailored Support, Globally Local</h2>
          </div>
          <div>
            <div class="row row-cols-1 row-cols-sm-2 mt-5">
              <div class="col mb-3">
                <div class="card h-100 border-0 support-user">
                  <img
                    src="../assets/about/team/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                    class="card-img-top rounded-circle mx-auto"
                  />
                  <div class="card-body text-center">
                    <h4 class="card-title fw-bold">
                      Native Language Assistance
                    </h4>
                    <p class="card-text">
                      Get support in your preferred language plus English from our team of worldwide professionals.
                    </p>
                    <a href="/services" class="card-link btn text-purple text-center"
                      >Start with a Quote
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-0 mb-2">
                  <div class="card-body d-flex gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="#623de2"
                        class="bi bi-credit-card-2-front-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h5 class="card-title fw-bold">Flexible Payment Options</h5>
                      <p class="card-text">
                        Transparent, straightforward transactions with no hidden costs, available in local currency.
                      </p>
                      <div class="d-flex w-100">
                        <img
                          src="../assets/logo/VISA.svg"
                          style="width: 50px"
                          alt=""
                        />
                        <img
                          src="../assets/logo/paypal.svg"
                          style="width: 40px"
                          alt=""
                        />
                        <img
                          src="../assets/logo/mastercard.svg"
                          style="width: 40px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0">
                  <div class="card-body d-flex gap-3">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="#623de2"
                        class="bi bi-cash-stack"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                        />
                        <path
                          d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h5 class="card-title fw-bold">Localized Invoicing</h5>
                      <p class="card-text">
                        Instantly customize and download invoices that suit your research needs without delay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end  -->
      <div class="end py-4" style="background-color: #dbe3ff">
        <div class="container">
          <div class="row">
            <div
              class="col-sm-9 order-2 order-sm-1 col-12 d-flex justify-content-center"
            >
              <div class="section-title text-center py-3">
                <h2 class="fw-bold">
                  Ready to start your publication journey with Editage? Get
                  Quote
                </h2>
                <div
                  class="d-flex justify-content-center align-items-center my-3"
                >
                  <router-link
                    :to="{ name: 'Services' }"
                    class="btn btn-purple rounded-pill py-2 px-5"
                    >Get Quote</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="col-sm-3 col-12 order-sm-2 d-flex justify-content-center"
            >
              <img
                src="../assets/logo/research.png"
                class=""
                style="width: 100px; height: 100px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "@/components/Services.vue";
import team from "@/components/Team.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";

import axios from "axios";

export default {
  name: "HomeView",
  components: { Services, team, Swiper, SwiperSlide },
  data() {
    return {
      modules: [Pagination, Navigation],
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  #service-banner {
    .carousel-item {
      background-color: #e6f4f4;
      min-height: 300px;
      img {
        min-height: 300px;
      }

      .carousel-caption {
        position: absolute;
        right: 0%;
        top: 1.25rem;
        left: 10%;
        width: 40%;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        color: #090909;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .carousel-control-prev-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='cornflowerblue' viewBox='0 0 16 16'%3e%3cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z'/%3e%3c/svg%3e");
    }
    .carousel-control-next-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='cornflowerblue' viewBox='0 0 16 16'%3e%3cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'/%3e%3c/svg%3e");
    }

    .carousel-control-next:hover,
    .carousel-control-prev:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  .bg-pearl {
    background-color: #00084d;
  }
  .about {
    .about-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      p {
        margin: 0;
        padding: 0;
      }
      h4 {
        margin: 0;
        padding: 0;
      }
    }
  }
  .show {
    .for-video {
      width: 50%;
      max-width: 570px;
    }
  }
  .reviews {
    .revuser {
      width: 80px;
    }
    .reviews-content {
      max-height: 26rem;
      overflow: auto;
    }
  }
  #published-banner {
    max-width: 800px;
    .carousel-item {
      background-color: #d2ebfa;
      img {
        height: 170px;
        width: 100%;
      }
      .carousel-published {
        padding: 2rem;
        min-height: 440px;
        right: 15%;
        top: 1.25rem;
        color: #090909;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .carousel-control-prev-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='cornflowerblue' viewBox='0 0 16 16'%3e%3cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z'/%3e%3c/svg%3e");
    }
    .carousel-control-next-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='cornflowerblue' viewBox='0 0 16 16'%3e%3cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'/%3e%3c/svg%3e");
    }
  }
  .bg-diamond {
    background-color: #f9f3f6;
  }
  .process {
    .process-progress {
      // Form steps wrapper
      .form-steps {
        width: 100%;
        clear: both;
        &:before,
        &:after {
          display: table;
          content: "";
        }
        &:after {
          clear: both;
        }
      }
      // Step wrapper
      .form-steps__step {
        width: 25%;
        float: left;
        padding: 1rem;
        text-align: center;
        position: relative;
        // progress line
        &:after {
          content: "";
          background: #8e8cdb;
          height: 0.2rem;
          top: 3.5rem;
          left: 50%;
          width: 100%;
          display: block;
          position: absolute;
          z-index: 1;
        }

        // if is the last
        &--last {
          &:after {
            display: none;
          }
        }
        // if is the active (current) step
        &--active {
          // change the color of the circle
          .form-steps__step-circle {
            background-image: url(https://www.editage.com/assets/images/icons/make-payment-download-document.svg);
            background-size: contain;
            border: 1px solid var(--right-purple);
            color: #fff;
          }
        }
        // if is incompleted
        &--incomplete {
          // change the color of the progress bar
          &:after {
            background: #8e8cdb;
          }
          // change the color of the circle
          .form-steps__step-circle {
            background-image: url(https://www.editage.com/assets/images/icons/2-experts-get-on-job.svg);
            background-size: contain;
            border: 1px solid var(--right-purple);
            color: #fff;
            // when is completed we show the checkmark and hide the number
            .form-steps__step-number {
              display: none;
            }
            .form-steps__step-check {
              display: inline-block;
            }
          }
        }
        // if is completed
        &--complete {
          // change the color of the progress bar
          &:after {
            background: #8e8cdb;
          }
          // change the color of the circle
          .form-steps__step-circle {
            background-image: url(https://www.editage.com/assets/images/icons/our-technology-kicks.svg);
            background-size: contain;
            border: 1px solid var(--right-purple);
            color: #fff;
            // when is completed we show the checkmark and hide the number
            .form-steps__step-number {
              display: none;
            }
            .form-steps__step-check {
              display: inline-block;
            }
          }
        }

        &--last {
          // change the color of the progress bar
          &:after {
            background: #8e8cdb;
          }
          // change the color of the circle
          .form-steps__step-circle {
            background-image: url(https://www.editage.com/assets/images/icons/place-an-order.svg);
            background-size: contain;
            border: 1px solid var(--right-purple);
            color: #fff;
            // when is completed we show the checkmark and hide the number
            .form-steps__step-number {
              display: none;
            }
            .form-steps__step-check {
              display: inline-block;
            }
          }
        }
      } // End form steps

      // Steps circle
      .form-steps__step-circle {
        background: #eee;
        border: 1px solid var(--right-purple);
        line-height: 2.4rem;
        border-radius: 50%;
        height: 5.5rem;
        width: 5.5rem;
        text-align: center;
        color: #bdbdbd;
        margin: 0 auto;
        position: relative;
        z-index: 3;
      }

      // By default we hide the checkmark
      .form-steps__step-check {
        display: none;
      }

      // Steps name
      .form-step__step-name {
        margin-top: 0.8rem;
        display: inline-block;
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }
  }
  .support {
    .row {
      max-width: 1200px;
      margin: auto;
    }
    .support-user {
      .card-img-top {
        width: 7rem;
        transform: translate(0, -50%);
        border: 2px solid var(--right-purple);
      }
      .card-body {
        margin-top: -50px;
      }
    }
  }
}
@media (max-width: 787px) {
  .home {
    #service-banner {
      .carousel-item {
        img {
          display: none !important;
        }
        .carousel-caption {
          // position: absolute;
          right: 0%;
          top: 1.25rem;
          left: 0%;
          width: 80%;
          text-align: center;
          margin: auto;
        }
      }
    }
    .show {
      .for-video {
        width: 100%;
      }
    }
    .reviews {
      .reviews-content {
        max-height: 15rem;
        overflow: auto;
      }
    }
    .process {
      .process-progress {
        .form-steps__step {
          // progress line
          &:after {
            content: "";
            top: 2.7rem;
          }
        } // End form steps
        .form-steps__step-circle {
          height: 3.5rem;
          width: 3.5rem;
        }
        span.form-step__step-name {
          font-size: 12px;
          line-height: 1;
        }
      }
    }
    .subject {
      .card {
        .card-title {
          font-size: 15px;
        }
      }
    }
  }
}
@media (min-width: 787px) and (max-width: 1200px) {
  .img-graph {
    display: none;
  }
}
</style>
