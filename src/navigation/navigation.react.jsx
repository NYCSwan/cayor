import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Clock from "../clocks/clock.react";
import WhiteLogo from "../media/grey-white-icon.png";
import ContactForm from "../contact/contact_form.react";
import Accra from "../media/map.jpg";
import Joburg from "../media/map3.jpg";

import "./navigation.css";

class Navigation extends Component {
  state = {
    contactLocation: "",
    joburgContactDetails: [
      {
        location: "Johannesburg, South Africa",
        street_address: "Suite No. 23, Unit E0002, Building 4",
        street_address2: "Asbury Park, Magalieszight Ave",
        city: "Dunkeld West Johannesburg",
        phone: "+27 11 593 3266",
        imageUrl: Joburg,
        imageAlt:
          "Map of Johannesburg, South Africa, Cayor's first Sub-Saharan Africa equity business location"
      }
    ],
    accraContactDetails: [
      {
        location: "Accra, Ghana",
        street_address: "41 Tafawa Balawa St.",
        street_address2: "North Ridge  Residential",
        city: "Accra",
        phone: "+27 11 593 3266",
        imageUrl: Accra,
        imageAlt:
          "Map of Accra Ghana, Cayor's second Sub-Saharan Africa equity office location"
      }
    ],
    collapse: false,
    active: ""
  };

  handleClockClick = e => {
    const contactLocation = e.target.className.split(" ")[0];
    // debugger
    this.setState({ contactLocation });
    this.props.handleClockClick(e);
    // this.handleModalToggle();
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  renderContactPopover = () => {
    console.log("renderContactPopover");
    const {
      contactLocation,
      accraContactDetails,
      joburgContactDetails
    } = this.state;
    const { isContactModalOpen, handleClose, location, smoosh } = this.props;
    // debugger
    if (contactLocation === "accra") {
      return (
        <ContactForm
          location={location}
          contactDetails={accraContactDetails}
          contactLocation={contactLocation}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen}
          smoosh={smoosh}
        />
      );
    } else {
      return (
        <ContactForm
          smoosh={smoosh}
          location={location}
          contactDetails={joburgContactDetails}
          contactLocation={contactLocation}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen}
        />
      );
    }
  };

  render() {
    const { contactLocation, collapse } = this.state;
    const { isContactModalOpen, headerImg, location, smoosh } = this.props;

    // const location = ;

    return (
      <header className={smoosh ? `header ${headerImg} smoosh` : `header ${headerImg}`}>
        <NavLink to="/" className="logo-container">
          <img className="logo" src={WhiteLogo} alt="logo" />
        </NavLink>

        <div id="accra">
          <div id="jbg">
            <div className={location.pathname === "/" ? "right homepage" : "right"}>
              <Nav>
                <NavItem className="linkContainer">
                  <NavLink
                    to={{
                      pathname: "/people",
                      state: {
                        id: "experienced experienced",
                        transitionKey: "people",
                      }
                    }}
                    activeClassName={"active"}
                    className="link people"
                  >
                    PEOPLE
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    to={{
                      pathname: "/opportunity",
                      state: {
                        id: "why_cayor experienced_investors",
                        transitionKey: "opportunity"
                      }
                    }}
                    activeClassName={"active"}
                    className="link opportunity"
                  >
                    OPPORTUNITY
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    to={{
                      pathname: "/approach",
                      state: {
                        id: "cayor_approach cayor_approach",
                        transitionKey: "approach"
                      }
                    }}
                    activeClassName={"active"}
                    className="link approach"
                  >
                    APPROACH
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    to={{
                      pathname: "/esg",
                      state: {
                        id: "philosophy philosophy",
                        transitionKey: "esg"
                      }
                    }}
                    activeClassName={"active"}
                    className="link esg"
                  >
                    ESG
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="clocks">
                <div
                  onClick={this.handleClockClick}
                  className="accra clock-container"
                >
                  <Clock className="accra" offset="0" />
                  <h6 className="accra">ACCRA</h6>
                </div>
                <div
                  onClick={this.handleClockClick}
                  className="jbg clock-container"
                >
                  <Clock className="jbg" offset="2" />
                  <h6 className="jbg">JHB</h6>
                </div>
              </div>
              <Dropdown nav={true} isOpen={collapse} toggle={this.toggle}>
                <DropdownToggle>
                  <FontAwesomeIcon
                    className={"menu"}
                    icon="align-justify"
                    size={"lg"}
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink to={{
                      pathname: "/people",
                      state: {
                        id: "experienced experienced",
                        transitionKey: "people"
                      }
                    }} className="link people">
                      PEOPLE
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to={{
                      pathname: "/opportunity",
                      state: {
                        id: "why_cayor experienced_investors",
                        transitionKey: "opportunity"
                      }
                    }} className="link opportunity">
                      OPPORTUNITY
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to={{
                      pathname: "/approach",
                      state: {
                        id: "cayor_approach cayor_approach",
                        transitionKey: "approach"
                      }
                    }} className="link approach">
                      APPROACH
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to={{
                      pathname: "/esg",
                      state: {
                        id: "philosophy philosophy",
                        transitionKey: "esg"
                      }
                    }} className="link esg">
                      ESG
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {isContactModalOpen && contactLocation !== ""
              ? this.renderContactPopover()
              : null}
          </div>
        </div>
      </header>
    );
  }
}
export default Navigation;
