import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative pt-10 sm:pt-5">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-15 sm:gap-10 pb-15 border-b-2 border-[#F8F8FE]">
          {/*//! AMR FARAG */}
          <div className="col-span-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center space-y-7">
            {/*//* Text */}
            <h5 className="footer-title uppercase -tracking-[1px]">
              amr farag
            </h5>
            <p className="footer-des max-w-[224.29px]">
              Finance helps companies manage payments easily.
            </p>

            {/*//* Social icons */}
            <div className="flex gap-4">
              <img src="/footer/linkedin.svg" alt="social-icon" />
              <img src="/footer/messenger.svg" alt="social-icon" />
              <img src="/footer/twitter.svg" alt="social-icon" />
              <img src="/footer/twoo.svg" alt="social-icon" />
            </div>
          </div>

          {/*//! Company */}
          <div className="space-y-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            {/*//* Title */}
            <h5 className="footer-title">Company</h5>

            {/*//* Navigation Links */}
            <div className="space-y-4">
              <p className="footer-des">About Us</p>
              <p className="footer-des">Careers</p>
              <p className="footer-des">Blog</p>
              <p className="footer-des">Pricing</p>
            </div>
          </div>

          {/*//! Product */}
          <div className="space-y-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            {/*//* Title */}
            <h5 className="footer-title">Product</h5>

            {/*//* Navigation Links */}
            <div className="space-y-4">
              <p className="footer-des">Invoicing</p>
              <p className="footer-des">Contract</p>
              <p className="footer-des">Accounting</p>
              <p className="footer-des">Proposal</p>
            </div>
          </div>

          {/*//! Resources */}
          <div className="space-y-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            {/*//* Title */}
            <h5 className="footer-title">Resources</h5>

            {/*//* Navigation Links */}
            <div className="space-y-4">
              <p className="footer-des">Proposal Template</p>
              <p className="footer-des">Invoice Template</p>
              <p className="footer-des">tutorial</p>
              <p className="footer-des">How to write a contract</p>
            </div>
          </div>

          {/*//! Contact Us */}
          <div className="space-y-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            {/*//* Title */}
            <h5 className="footer-title">Contact Us</h5>

            {/*//* Navigation Links */}
            <div className="space-y-4 flex flex-col max-sm:items-center">
              <div className="flex gap-1 xs:gap-3 items-center">
                <img
                  src="/footer/email.svg"
                  alt="contact-icon"
                  className="max-sm:w-4"
                />
                <p className="footer-des max-sm:text-center">Proposal Template</p>
              </div>

              <div className="flex gap-1 xs:gap-3 items-center">
                <img
                  src="/footer/call.svg"
                  alt="contact-icon"
                  className="max-sm:w-4"
                />
                <p className="footer-des max-sm:text-center">Invoice Template</p>
              </div>
            </div>
          </div>
        </div>

        {/*//! Copy right */}
        <div className="pt-10 pb-6">
          <h5 className="text-tiny max-sm:text-[14px] text-[#181433] leading-[26px] sm:-tracking-[1px] text-center">
            © {new Date().getFullYear()} AMR FARAG. All Rights Reserved.
          </h5>
        </div>

        {/*//! Bottom shadow */}
        <Image
          src="/footer/shadow.png"
          alt="footer-bottom-shadow"
          width={1200}
          height={300}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[90%] h-[150px] sm:h-auto"
        />
      </div>
    </section>
  );
}
