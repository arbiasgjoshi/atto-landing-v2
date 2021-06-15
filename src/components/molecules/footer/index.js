import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import { StaticImage } from 'gatsby-plugin-image';

import CustomSelect from '../../atoms/custom-select';

import {
  leftFooterItems,
  footerLinksWrapper,
  pageFooter,
  footerTop,
  footerBottom,
  footerSitemap,
  hasLine,
  parentPath,
  downloadApp,
} from './footer.module.scss';

const Footer = ({ FooterLinks }) => (
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
        <p>A highly accurate time tracking solution for any company</p>

        <div>
          {/* TODO Dropdown here */}
          <CustomSelect />
        </div>
      </div>
      <div className={footerSitemap}>
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
                  <Link to={app.href} target="_blank" rel="noreferrer" key={app.id}>
                    <img src={app.src} alt="Mobile" />
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
        Terms
      </Link>{' '}
      &{' '}
      <Link to="/privacy" target="_blank">
        Privacy
      </Link>
    </p>
  </footer>
);

Footer.propTypes = {
  FooterLinks: PropTypes.arrayOf({}),
};

export default Footer;
