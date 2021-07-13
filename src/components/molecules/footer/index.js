import React from 'react';
import PropTypes from 'prop-types';
import { Link, useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import googlePlay from '@images/google-play@2x.png';
import appStore from '@images/apple-store@2x.png';
import CustomSelect from '@components/atoms/custom-select';

import {
  leftFooterItems,
  footerLinksWrapper,
  pageFooter,
  footerTop,
  footerBottom,
  footerSitemap,
  hiddenItem,
  hasLine,
  parentPath,
  downloadApp,
  linkWrap,
} from './footer.module.scss';

const Footer = () => {
  const Intl = useIntl();

  const FooterLinks = [
    {
      parent: Intl.formatMessage({ id: 'header.menu.productLabel' }),
      id: 0,
      parentPath: '/product',
      subMenuLinks: [
        {
          id: 0,
          path: '/product',
          name: 'Why Atto',
          hasLine: true,
        },
        {
          id: 1,
          path: '/product/time-tracking',
          name: Intl.formatMessage({ id: 'header.menu.timeTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/time-clock',
          name: 'Time Clock',
          hasLine: false,
        },
        {
          id: 3,
          path: '/product/location-tracking',
          name: Intl.formatMessage({ id: 'header.menu.locationTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 4,
          path: '/product/team-activity',
          name: Intl.formatMessage({ id: 'header.menu.teamActivityTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 5,
          path: '/product/timesheets',
          name: Intl.formatMessage({ id: 'header.menu.timesheetsTrackingLabel' }),
          hasLine: false,
        },
        {
          id: 7,
          path: '/work-hours-tracker',
          name: 'Work Hours Tracker',
          hasLine: false,
        },
        {
          id: 8,
          path: '/time-card-app',
          name: 'Time Card App',
          hasLine: true,
        },
        {
          id: 9,
          path: '/product/pricing',
          name: Intl.formatMessage({ id: 'header.menu.pricingLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: null,
    },
    {
      parent: Intl.formatMessage({ id: 'header.menu.industriesLabel' }),
      id: 1,
      parentPath: '/industries',
      subMenuLinks: [
        {
          id: 0,
          path: '/industries/construction',
          name: Intl.formatMessage({ id: 'pages.industries.constructionLabel' }),
          hasLine: false,
        },
        {
          id: 1,
          path: '/industries/painting',
          name: Intl.formatMessage({ id: 'pages.industries.paintingLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/industries/landscaping',
          name: Intl.formatMessage({ id: 'pages.industries.landscapingLabel' }),
          hasLine: false,
        },
        {
          id: 3,
          path: '/industries/electrician',
          name: Intl.formatMessage({ id: 'pages.industries.electricalLabel' }),
          hasLine: false,
        },
        {
          id: 4,
          path: '/industries/cleaning-and-maintenance',
          name: Intl.formatMessage({ id: 'pages.industries.cleaningLabel' }),
          hasLine: false,
        },
        {
          id: 5,
          path: '/industries/plumbing-and-heating',
          name: Intl.formatMessage({ id: 'pages.industries.plumbingLabel' }),
          hasLine: false,
        },
        {
          id: 6,
          path: '/industries/healthcare-and-medical',
          name: Intl.formatMessage({ id: 'pages.industries.healthcareLabel' }),
          hasLine: false,
        },
        {
          id: 7,
          path: '/industries/roofing',
          name: Intl.formatMessage({ id: 'pages.industries.roofingLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: null,
    },
    {
      parent: Intl.formatMessage({ id: 'header.menu.resourcesLabel' }),
      id: 2,
      parentPath: '/resources',
      subMenuLinks: [
        {
          id: 0,
          path: '/blog',
          name: Intl.formatMessage({ id: 'header.menu.blogLabel' }),
          hasLine: false,
        },
        {
          id: 1,
          path: '/help-center',
          name: Intl.formatMessage({ id: 'header.menu.helpCenterLabel' }),
          hasLine: false,
        },
        {
          id: 2,
          path: '/Contact',
          name: Intl.formatMessage({ id: 'header.menu.contactLabel' }),
          hasLine: false,
        },
      ],
      downloadApp: [
        {
          id: 0,
          name: 'App Store',
          src: appStore,
          icon: 'apple',
          href: 'https://apps.apple.com/us/app/atto-employee-time-location/id1132847984?ls=1',
        },

        {
          id: 1,
          name: 'Google Play',
          src: googlePlay,
          icon: 'play',
          href: 'https://play.google.com/store/apps/details?id=tech.zetta.atto',
        },
      ],
    },
  ];
  return (
    <footer className={pageFooter}>
      <div className={footerTop}>
        <div className={leftFooterItems}>
          <StaticImage
            src="../../../images/logo@3x.png"
            alt="footer-logo"
            quality={100}
            width={86}
            placeholder="none"
          />
          <p>{Intl.formatMessage({ id: 'pages.miscellaneous.footerText' })}</p>

          <div>
            <CustomSelect />
          </div>
        </div>
        <div className={`${footerSitemap} ${Intl.locale !== 'en' && hiddenItem}`}>
          {FooterLinks.map((section) => (
            <div className={footerLinksWrapper} key={section.id}>
              <h5 className={parentPath}>{section.parent}</h5>
              {section.subMenuLinks.map((subMenu) => (
                <Link
                  to={`${subMenu.path}`}
                  className={subMenu.hasLine ? hasLine : null}
                  key={subMenu.id}
                >
                  {subMenu.name}
                </Link>
              ))}
              {section.downloadApp && (
                <div className={downloadApp}>
                  <h5 className={parentPath}>Download</h5>
                  {section.downloadApp.map((app) => (
                    <Link
                      to={app.href}
                      target="_blank"
                      rel="noreferrer"
                      key={app.id}
                      className={linkWrap}
                    >
                      <img src={app.src} alt="Mobile" width="19" />
                      <p>{app.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className={footerBottom}>
        © Specta Labs, Inc.{' '}
        <Link to="/terms" target="_blank">
          {Intl.formatMessage({ id: 'pages.miscellaneous.footerLinkOne' })}
        </Link>{' '}
        &{' '}
        <Link to="/privacy" target="_blank">
          {Intl.formatMessage({ id: 'pages.miscellaneous.footerLinkTwo' })}
        </Link>
      </p>
    </footer>
  );
};

Footer.propTypes = {
  FooterLinks: PropTypes.arrayOf({}),
};

export default Footer;
