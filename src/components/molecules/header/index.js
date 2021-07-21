import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useIntl, navigate } from 'gatsby-plugin-react-intl';
import useScroll from 'react-use-scroll';

import Button from '@components/atoms/button';
import Divider from '@components/atoms/divider';
import Icon from '@components/atoms/icon';
import Modal from '@components/molecules/modal';
import Accordion from '@components/organisms/accordion';

import ProductIcon from '@images/product-overview-logo.svg';
import TimeTrackingIcon from '@images/time-tracking.svg';
import LocationTrackingIcon from '@images/location-tracking-logo.svg';
import TeamActivityLogo from '@images/team-activity-logo.svg';
import TimesheetsLogo from '@images/timesheets-logo.svg';

import ConstructionLogo from '@images/construction-industry-logo.svg';
import PaintingLogo from '@images/painting-industry-logo.svg';
import HealthcareLogo from '@images/healthcare-industry-logo.svg';
import PlumbingLogo from '@images/plumbing-industry-logo.svg';
import ElectrianLogo from '@images/electrician-industry-logo.svg';
import LandscapingLogo from '@images/landscaping-industry-logo.svg';
import RoofingLogo from '@images/roofing-industry-logo.svg';
import CleaningLogo from '@images/cleaning-industry-logo.svg';
import ThreeDots from '@images/three-dots.svg';

import HelpCenterLogo from '@images/help-center-logo.svg';
import BlogLogo from '@images/blog-menu-logo.svg';
import ContactLogo from '@images/contact-menu-logo.svg';
import HeaderLogo from '@images/logo@3x.png';

import {
  headerWrapper,
  onScrollStyle,
  container,
  leftNav,
  menuLinks,
  login,
  rightNavButtons,
  menu,
  menuSection,
  contentPadding,
  leftItems,
  notMobile,
  mobile,
  mainItem,
  subItems,
  rightItems,
  menuItems,
  menuItem,
  activeMenuItem,
  menuItemWrapper,
  resourcesMenu,
  menuIcon,
  menuItemDesc,
  pricingStyle,
  menuTrigger,
  activeButton,
  tiles1,
  tiles2,
  tiles3,
  collapsibleMenu,
  mobileButtons,
  triggerItemWrap,
} from './header.module.scss';

import './collapsible.scss';

const HeaderComponent = ({ headerStyle }) => {
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [overMenu, setOverMenu] = useState(false);
  const [aboveLinks, setAbove] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const [showDialog, setShowDialog] = useState(false);
  const [values, setValues] = useState(null);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);

  const scroll = useScroll();
  const Intl = useIntl();

  const listentoScroll = () => (scroll === 0 ? setShadow(false) : setShadow(true));

  useEffect(() => {
    listentoScroll();
  }, [scroll]);

  const productSection = () => (
    <div className={menuSection}>
      <div className={`${leftItems} ${contentPadding}`}>
        <div className={mainItem}>
          <Link
            className={`${menuItem} ${menuItemWrapper}`}
            to="/product"
            activeClassName={activeMenuItem}
          >
            <div className={menuIcon}>
              <ProductIcon />
            </div>
            <div className={menuItemDesc}>
              <div className={notMobile}>
                <h6>{Intl.formatMessage({ id: 'pages.productOverview.name' })}</h6>
                <p>{Intl.formatMessage({ id: 'header.menu.productOverviewDesc' })}</p>
              </div>
              <div className={mobile}>
                <h6>Overview</h6>
                <p>Atto is a simple all-in-one time-tracking and timesheet solution.</p>
              </div>
            </div>
          </Link>
        </div>
        <Divider className="style7" />
        <div className={subItems}>
          <Link className={menuItem} activeClassName={activeMenuItem} to="/product/time-tracking">
            <div className={menuIcon}>
              <TimeTrackingIcon />
            </div>
            <div className={menuItemDesc}>
              <h6>{Intl.formatMessage({ id: 'header.menu.timeTrackingLabel' })}</h6>
              <p>{Intl.formatMessage({ id: 'header.menu.timeTrackingDesc' })}</p>
            </div>
          </Link>
          <Link
            className={menuItem}
            activeClassName={activeMenuItem}
            to="/product/location-tracking"
          >
            <div className={menuIcon}>
              <LocationTrackingIcon />
            </div>
            <div className={menuItemDesc}>
              <h6>{Intl.formatMessage({ id: 'header.menu.locationTrackingLabel' })}</h6>
              <p>{Intl.formatMessage({ id: 'header.menu.locationTrackingDesc' })}</p>
            </div>
          </Link>
          <Link className={menuItem} activeClassName={activeMenuItem} to="/product/team-activity">
            <div className={menuIcon}>
              <TeamActivityLogo />
            </div>
            <div className={menuItemDesc}>
              <h6>{Intl.formatMessage({ id: 'header.menu.teamActivityTrackingLabel' })}</h6>
              <p>{Intl.formatMessage({ id: 'header.menu.teamActivityTrackingDesc' })}</p>
            </div>
          </Link>
          <Link className={menuItem} activeClassName={activeMenuItem} to="/product/timesheets">
            <div className={menuIcon}>
              <TimesheetsLogo />
            </div>
            <div className={menuItemDesc}>
              <h6>{Intl.formatMessage({ id: 'header.menu.timesheetsTrackingLabel' })}</h6>
              <p>{Intl.formatMessage({ id: 'header.menu.timesheetsTrackingDesc' })}</p>
            </div>
          </Link>
        </div>
      </div>
      {Intl.locale === 'en' && (
        <div className={rightItems}>
          <h6>More Features</h6>
          <ul>
            <li>
              <Link to="/mobile-time-tracking">
                <Icon iconClass="arrow-right" />
                Mobile Time Tracking
              </Link>
            </li>
            <li>
              <Link to="/time-clock">
                <Icon iconClass="arrow-right" />
                Time Clock
              </Link>
            </li>
            <li>
              <Link to="/time-card-app">
                <Icon iconClass="arrow-right" />
                Time Card App
              </Link>
            </li>
            <li>
              <Link to="/work-hours-tracker">
                <Icon iconClass="arrow-right" />
                Work Hours Tracker
              </Link>
            </li>
            <li>
              <Link to="/timesheet-app">
                <Icon iconClass="arrow-right" />
                Accurate Reports
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  const industriesSection = () => (
    <div className={`${menuSection} ${contentPadding}`}>
      <div className={menuItems}>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/industries/construction">
          <div className={menuIcon}>
            <ConstructionLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Construction</h6>
            <p>Track your entire crew’s time and location in real-time.</p>
          </div>
        </Link>
        <Link
          className={menuItem}
          activeClassName={activeMenuItem}
          to="/industries/painting-and-decorating"
        >
          <div className={menuIcon}>
            <PaintingLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Painting & Decorating</h6>
            <p>Using paper timesheets is like watching paint dry.</p>
          </div>
        </Link>
        <Link
          className={menuItem}
          activeClassName={activeMenuItem}
          to="/industries/healthcare-and-medical"
        >
          <div className={menuIcon}>
            <HealthcareLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Healthcare & Medical</h6>
            <p>Keep accurate time records while providing care.</p>
          </div>
        </Link>
        <Link
          className={menuItem}
          activeClassName={activeMenuItem}
          to="/industries/plumbing-and-heating"
        >
          <div className={menuIcon}>
            <PlumbingLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Plumbing & Heating</h6>
            <p>All cisterns go! Get to work with accurate time tracking from Atto.</p>
          </div>
        </Link>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/industries/electrical">
          <div className={menuIcon}>
            <ElectrianLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Electrical</h6>
            <p>Avoid a nasty shock by tracking work hours in real-time</p>
          </div>
        </Link>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/industries/landscaping">
          <div className={menuIcon}>
            <LandscapingLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Landscaping</h6>
            <p>The grass is always greener for landscapers that use Atto.</p>
          </div>
        </Link>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/industries/roofing">
          <div className={menuIcon}>
            <RoofingLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Roofing</h6>
            <p>Keep accurate time records while working outdoors.</p>
          </div>
        </Link>
        <Link
          className={menuItem}
          activeClassName={activeMenuItem}
          to="/industries/cleaning-and-maintenance"
        >
          <div className={menuIcon}>
            <CleaningLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>Cleaning & Maintenance</h6>
            <p>Let’s make it a clean sweep! Keep your time tracking tidy.</p>
          </div>
        </Link>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/all-features">
          <div className={menuIcon}>
            <ThreeDots />
          </div>
          <div className={menuItemDesc}>
            <h6>More industries</h6>
            <p>Security, Logistics, Government, Consulting, and many more…</p>
          </div>
        </Link>
      </div>
    </div>
  );

  const resourceSection = () => (
    <div className={`${menuSection} ${resourcesMenu} ${contentPadding}`}>
      <div className={menuItems}>
        <a className={menuItem} activeClassName={activeMenuItem} href="https://help.attotime.com/">
          <div className={menuIcon}>
            <HelpCenterLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>{Intl.formatMessage({ id: 'header.menu.helpCenterLabel' })}</h6>
            <p>{Intl.formatMessage({ id: 'header.menu.helpCenterDesc' })}</p>
          </div>
        </a>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/blog">
          <div className={menuIcon}>
            <BlogLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>{Intl.formatMessage({ id: 'header.menu.blogLabel' })}</h6>
            <p>{Intl.formatMessage({ id: 'header.menu.blogDesc' })}</p>
          </div>
        </Link>
        <Link className={menuItem} activeClassName={activeMenuItem} to="/contact">
          <div className={menuIcon}>
            <ContactLogo />
          </div>
          <div className={menuItemDesc}>
            <h6>{Intl.formatMessage({ id: 'header.menu.contactLabel' })}</h6>
            <p>{Intl.formatMessage({ id: 'header.menu.contactDesc' })}</p>
          </div>
        </Link>
      </div>
    </div>
  );

  const viewMenuSections = (val) => {
    switch (val) {
      case 'product':
        return productSection();
      case 'industries':
        return industriesSection();
      case 'resources':
        return resourceSection();
      default:
        return null;
    }
  };

  const menuClasses = (val) => {
    let menuClass = menu;
    if (val === 'resources') {
      menuClass += ` ${resourcesMenu}`;
    }

    return menuClass;
  };

  const toggleMenu = () => {
    setOpenMobile(!openMobile);
  };

  const overMenuLinks = () => {
    setOverMenu(true);
    setAbove(false);
  };

  const showMenu = (val) => {
    setOpen(true);
    setActiveItem(val);
  };

  const menuStateConfig = () => {
    if (!overMenu && !aboveLinks) {
      setOpen(false);
    }
  };

  const menuItemsOne = [
    {
      title: Intl.formatMessage({ id: 'header.menu.productLabel' }),
      url: false,
      description: productSection(),
    },
    {
      title: Intl.formatMessage({ id: 'header.menu.industriesLabel' }),
      url: false,
      description: industriesSection(),
    },
    {
      title: Intl.formatMessage({ id: 'header.menu.pricingLabel' }),
      description: '',
      url: '/pricing',
    },
    {
      title: Intl.formatMessage({ id: 'header.menu.resourcesLabel' }),
      url: false,
      description: resourceSection(),
    },
  ];

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch('/delete-invite', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setValues(res);
        openModal();
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
    } else {
      toggleDeleteInvite(val);
    }
  };

  useEffect(() => {
    if (values) {
      setTimeout(() => {
        setShowDialog(true);
      }, 1500);
    }
  }, [values]);

  useEffect(() => {
    menuStateConfig();
  }, [overMenu, aboveLinks]);

  return (
    <header
      className={`${headerWrapper} ${headerStyle && pricingStyle} ${shadow && onScrollStyle}`}
    >
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      <div className={container}>
        <div className={leftNav}>
          <Link to="/">
            <img src={HeaderLogo} alt="Header Logo" width="87" height="30" />
          </Link>
        </div>
        <div className={menuLinks} onMouseEnter={() => setAbove(true)}>
          <Link
            to="/product"
            activeClassName={activeMenuItem}
            onMouseEnter={() => showMenu('product')}
          >
            {Intl.formatMessage({ id: 'header.menu.productLabel' })}
          </Link>
          {Intl.locale === 'en' && (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              activeClassName={activeMenuItem}
              onMouseEnter={() => showMenu('industries')}
            >
              {Intl.formatMessage({ id: 'header.menu.industriesLabel' })}
            </a>
          )}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            activeClassName={activeMenuItem}
            onMouseEnter={() => showMenu('resources')}
          >
            {Intl.formatMessage({ id: 'header.menu.resourcesLabel' })}
          </a>
          <Link to="/pricing" activeClassName={activeMenuItem} onMouseEnter={() => setOpen(false)}>
            {Intl.formatMessage({ id: 'header.menu.pricingLabel' })}
          </Link>
        </div>
        <div className={rightNavButtons}>
          <a
            href="https://app.attotime.com/login"
            rel="noreferrer"
            target="_blank"
            className={login}
          >
            {Intl.formatMessage({ id: 'header.menu.login' })}
          </a>
          <Button
            onBtnClick={openModal}
            btnText={Intl.formatMessage({ id: 'header.menu.tryForFreeLabel' })}
            btnStyle="teal"
          />
          <button
            className={`${menuTrigger} ${openMobile && activeButton} `}
            type="button"
            aria-label="toggle-menu"
            onClick={() => toggleMenu()}
          >
            <i className={tiles1} />
            <i className={tiles2} />
            <i className={tiles3} />
          </button>
        </div>
        {open && (
          <div
            className={menuClasses(activeItem)}
            onMouseEnter={() => overMenuLinks()}
            onMouseLeave={() => setOverMenu(false)}
          >
            {viewMenuSections(activeItem)}
          </div>
        )}
        {openMobile && (
          <div className={collapsibleMenu}>
            <Accordion
              items={menuItemsOne}
              isExpanded={null}
              arrowIcon
              noIconPadding
              mainMenuStyle
            />
            <div className={mobileButtons}>
              <Button
                btnStyle="gray"
                btnText={Intl.formatMessage({ id: 'header.menu.login' })}
                onBtnClick={() => navigate('https://app.attotime.com')}
              />
              <Button
                btnStyle="teal"
                btnText={Intl.formatMessage({ id: 'pages.miscellaneous.start14Days' })}
                onBtnClick={openModal}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  headerStyle: PropTypes.string,
};

export default HeaderComponent;
