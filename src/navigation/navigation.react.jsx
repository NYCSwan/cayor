import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
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
        street_address2: "North Ridge",
        city: "Accra",
        phone: "+",
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
    const { isContactModalOpen, handleClose, location } = this.props;
    // debugger
    if (contactLocation === "accra") {
      return (
        <ContactForm
          location={location}
          contactDetails={accraContactDetails}
          contactLocation={contactLocation}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen}
        />
      );
    } else {
      return (
        <ContactForm
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
    const { isContactModalOpen, headerImg } = this.props;
    return (
      <header className={`header ${this.props.headerImg}`}>
        <NavLink href="/" className="logo-container">
          <img className="logo" src={WhiteLogo} alt="logo" />
        </NavLink>

        <div id="accra">
          <div id="jbg">
            <div
              className={
                this.props.location.pathname === "/"
                  ? "right homepage"
                  : "right"
              }
            >
              <Nav>
                <NavItem className="linkContainer">
                  <NavLink
                    href="/people"
                    active={headerImg === "people"}
                    className="link people"
                  >
                    PEOPLE
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    href="/opportunity"
                    active={headerImg === "opportunity"}
                    className="link opportunity"
                  >
                    OPPORTUNITY
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    href="/approach"
                    active={headerImg === "approach"}
                    className="link approach"
                  >
                    APPROACH
                  </NavLink>
                </NavItem>
                <NavItem className="linkContainer">
                  <NavLink
                    href="/esg"
                    active={headerImg === "esg"}
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
                  <Clock className="accra" offset="2" />
                  <h6 className="accra">ACCRA</h6>
                </div>
                <div
                  onClick={this.handleClockClick}
                  className="jbg clock-container"
                >
                  <Clock className="jbg" offset="0" />
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
                    <NavLink href="/people" className="link people">
                      PEOPLE
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/opportunity" className="link opportunity">
                      OPPORTUNITY
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/approach" className="link approach">
                      APPROACH
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/esg" className="link esg">
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
