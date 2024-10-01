import React from 'react';
import './About.css'; // Import for custom CSS

const AboutSection = () => {
  return (
    <section className="section-content-block py-12">
      <div className=" section mx-auto p-6">
        <div className="flex flex-wrap">
          <div className="col-md-6 col-sm-12 hidden lg:block md:block">
            <img
              src="https://templates.bwlthemes.com/fixer_buddies/images/about_feat_bg_2.jpg"
              alt="feat"
              className="w-full   h-64 object-cover"
            />
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12 text-left]">
            <div className="about-us-intro about-us-overlay theme-custom-box-shadow p-6">
              <p className="our-experience text-2xl font-semibold leading-relaxed">
                A Trusted Name To
                <br />
                Customers Over
                <span className="text-4xl font-bold">33 Years</span>
                <br />
                For Quality Computer Repair Service.
              </p>
              <p className="mt-4">
                We have been in the repair and service business since 1984. We
                have an experienced service department ready to handle all of
                your repair tasks. Our team will get your device with guarantee.
              </p>
              <p className="mt-6">
                <a
                  href="#"
                  className="btn btn-theme btn-square bg-theme-color text-white px-4 py-2 rounded-md hover:bg-theme-color-dark transition-all"
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
