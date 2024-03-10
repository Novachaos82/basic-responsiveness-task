import Image from "next/image";
import React from "react";
import facebook from "@/assets/Footer/fb.svg";
import { ChevronDown, Search } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white ">
      <div className="container-lg row mx-auto py-5">
        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/* collspase */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between "
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              Hobbycue <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse1" id="collapseExample1">
              <p>About Us</p>
              <p>Our Services</p>
              <p>Work with Us</p>
              <p>FAQ</p>
              <p>Contact Us</p>
            </div>
          </div>
          {/* collapse */}
          <div className="d-none  d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3 ">Hobbycue</h2>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Work with Us</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/*  */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between "
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              How Do I <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse" id="collapseExample2">
              <p>Sign Up</p>
              <p>Add a Listing</p>
              <p>Claim Listing</p>
              <p>Post a Query</p>
              <p>Add a Blog Post</p>
              <p> Other Querie</p>
            </div>
          </div>
          {/*  */}
          <div className="d-none  d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3 ">How Do I</h2>
            <p>Sign Up</p>
            <p>Add a Listing</p>
            <p>Claim Listing</p>
            <p>Post a Query</p>
            <p>Add a Blog Post</p>
            <p> Other Querie</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/*  */}
          <div className="d-lg-none ">
            <h2
              className="fs-5 fw-semibold pb-3 d-flex justify-content-between "
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ fontSize: "12px" }}
            >
              Quick Links <ChevronDown size={24} stroke="#939CA3" />
            </h2>
            <div className="collapse" id="collapseExample3">
              <p>Listings</p>
              <p>Blog Posts</p>
              <p>Shop / Store</p>
              <p>Community</p>
            </div>
          </div>
          {/*  */}
          <div className="d-none  d-lg-block">
            <h2 className="fs-5 fw-semibold pb-3 ">Quick Links</h2>
            <p>Listings</p>
            <p>Blog Posts</p>
            <p>Shop / Store</p>
            <p>Community</p>
          </div>
        </div>

        <div className="d-flex flex-column lh-1   col-lg fs-6">
          {/* socials */}
          <div>
            <h2 className="fs-5 fw-semibold pb-3 ">Social Media</h2>
            {/* icons */}
            <div className="d-flex flex-row gap-3">
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
              <Image
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                style={{
                  background: "#EBEDF0",
                  borderRadius: "50%",
                  padding: 2,
                }}
              />
            </div>
          </div>
          {/* invite friends */}
          <div className="pt-3">
            <h2 className="fs-5 fw-semibold pb-3 ">Invite Friends</h2>
            <div className="input-group w-auto  rounded-5 ">
              <input
                type="text"
                className="form-control"
                style={{
                  background: "white",
                  borderRadius: "8px 0  0 8px",
                  border: "1px solid #8064A2",
                }}
              />
              <span
                className="input-group-text border-0 text-white fs-6 fw-semibold "
                style={{
                  background: "#8064A2",
                  borderRadius: "0 8px 8px 0",
                  cursor: "pointer",
                }}
                id="basic-addon1"
              >
                invite
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 p-md-5 fw-semibold "
        style={{ background: "#F7F5F9" }}
      >
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
