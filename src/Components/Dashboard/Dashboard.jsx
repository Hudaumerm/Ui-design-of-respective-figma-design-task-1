import React, { useState } from "react";
import "./Dashboard.css";
import {
  IoIosAdd,
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropright,
  IoMdClose,
  IoMdLogOut,
} from "react-icons/io";
import {
  MdOutlineArrowRightAlt,
  MdOutlineEmail,
  MdPlayArrow,
} from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { FcFaq } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";

function Dashboard() {
  const [menu, setmenu] = useState(false);

  const planData = [
    {
      id: 1,
      plan_name: "Basic",
      old_price: "89.99/mo",
      new_price: "9.99/mo",
      dt: "What you will get:",
      dd1: "Upto 25 Users",
      dd2: "Upto 25gb Storage",
      dd3: "Email Support",
      btn_clr: "#F6EAC2",
    },
    {
      id: 2,
      plan_name: "Standard",
      old_price: "189.99/mo",
      new_price: "99.99/mo",
      dt: "What you will get:",
      dd1: "Upto 50 Users",
      dd2: "Upto 60gb Storage",
      dd3: "Email+Chat Support",
      btn_clr: "#FD8A8A",
    },
    {
      id: 3,
      plan_name: "Premium",
      old_price: "389.99/mo",
      new_price: "199.99/mo",
      dt: "What you will get:",
      dd1: "Upto 75 Users",
      dd2: "Upto 100gb Storage",
      dd3: "Email+Chat+Whatsapp Support",
      btn_clr: "#F6A6FF",
    },
  ];

  const bottomCardData = [
    {
      id: 1,
      berdge: "Free Forever",
      berdge_clr: "greenyellow",
      name: "Free Starter",
      desc: "The quickest and easiest way to try protocols with basic functionalities",
      btn: "Get Started",
      dt: "What you will get",
      dd1: "Upto 8 Users",
      dd2: "Upto 3gb Storage",
      dd3: "Email Support",
      dd4: "Basics of Documents,Task Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included",
    },
    {
      id: 2,
      berdge: "Let's Connect",
      berdge_clr: "#6EB5FF",
      name: "Enterprise Plan",
      desc: "Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success",
      btn: "Contact Us",
      dt: "What you will get",
      dd1: "More than 75 Users",
      dd4: "Customization of all other features",
    },
  ];
  return (
    <section className="dashboard">
      <div className="header">
        <div className="slope">
          <img
            src="/Images/dragomirescu210300341-p-creative-blue-gradient-alphabet-letter-logo-for-branding-and-business-design-for-lettering-and.jpg"
            alt=""
            className="logo"
          />
        </div>
        <div className="btn-group">
          <button>XYZ Enterprises Pvt.Ltd</button>
          <button>
            <IoIosArrowDown />
          </button>
          <VscBellDot className="bell-btn-display" />
        </div>
      </div>
      <div className="dashboard-wrapper">
        {menu ? (
          <IoMdClose className="menu-close" onClick={() => setmenu(!menu)} />
        ) : (
          <LuMenu className="menu-item-show" onClick={() => setmenu(!menu)} />
        )}
        <div className={menu ? "menu-item" : "left-section"}>
          <div className="profile-details">
            <div className="profile-wrapper">
              <img src="/Images/photo-1583864697784-a0efc8379f70.jpeg" alt="" />
              <h4 className="profile-name">
                Ram Mohan <IoIosArrowForward />
              </h4>
              <h5 className="email">rammohan2@gmail.com</h5>
            </div>
          </div>
          <div className="options">
            <button className="dash">
              <RiDashboardFill />
              Dashboard
            </button>
            <button className="perk">
              <PiPottedPlantDuotone />
              Perks
            </button>
            <button className="add-on">
              <AiOutlineAppstoreAdd />
              Addons
            </button>
            <button className="faq">
              <FaQuestion />
              FAQ
            </button>
            <button className="support">
              <BiSupport />
              Support
            </button>
          </div>
          <button className="logout">
            Logout <IoMdLogOut />
          </button>
        </div>
        <div className="right-section">
          <h1 className="title">Choose a plan that's just right for you !</h1>
          <nav>
            <div class="btn-container">
              <label class="switch btn-color-mode-switch">
                <input
                  type="checkbox"
                  name="color_mode"
                  id="color_mode"
                  value="1"
                />
                <label
                  for="color_mode"
                  data-on="Annually"
                  data-off="Monthly"
                  class="btn-color-mode-switch-inner"
                ></label>
              </label>
            </div>
          </nav>
          <div className="plan-wrapper">
            {planData.map((data) => {
              return (
                <div className="plans" key={data.id}>
                  <h3 className="plan-name">{data.plan_name}</h3>
                  <h6 className="old-price">{data.old_price}</h6>
                  <h3 className="new-price">{data.new_price}</h3>
                  <button
                    className="btn-get-started-1"
                    style={{ backgroundColor: data.btn_clr }}
                  >
                    Get Started
                    <MdOutlineArrowRightAlt />
                  </button>
                  <hr />
                  <dl>
                    <dt>{data.dt}</dt>
                    <dd>
                      <GoPerson />
                      {data.dd1}
                    </dd>
                    <dd>
                      <HiOutlineCloudArrowUp />
                      {data.dd2}
                    </dd>
                    <dd>
                      <MdOutlineEmail />
                      &nbsp;{data.dd3}
                    </dd>
                  </dl>
                  <button className="explore-btn">
                    EXPLORE FEATURES
                    <MdPlayArrow style={{ fill: data.btn_clr }} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="bottom-section">
            {bottomCardData.map((data) => {
              return (
                <div className="bottom-card">
                  <div className="one-side">
                    <button
                      className="berdge"
                      style={{ backgroundColor: data.berdge_clr }}
                    >
                      {data.berdge}
                    </button>
                    <h4>{data.name}</h4>
                    <p>{data.desc}</p>
                    <button
                      className="btn-get-started-1"
                      style={{ backgroundColor: data.berdge_clr }}
                    >
                      {data.btn}
                      <MdOutlineArrowRightAlt />
                    </button>
                  </div>
                  <div className="second-side">
                    <dl>
                      <dt>{data.dt}</dt>
                      <dd>
                        <GoPerson />
                        {data.dd1}
                      </dd>
                      <dd>
                        {data.dd2 && <HiOutlineCloudArrowUp />}
                        {data.dd2}
                      </dd>
                      <dd>
                        {data.dd3 && <MdOutlineEmail />}
                        {data.dd3}
                      </dd>
                      <dd>
                        <LiaCheckDoubleSolid />
                        {data.dd4}
                      </dd>
                    </dl>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bottom-par">
            <p className="bottom-note">
              *some unique features are provided as add-ons with individual
              plans for each feature
            </p>
          </div>
        </div>
        <div className="right-side-bar">
          <button>
            <VscBellDot />
          </button>
          <div></div>
          <button className="plus">
            <IoIosAdd />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
