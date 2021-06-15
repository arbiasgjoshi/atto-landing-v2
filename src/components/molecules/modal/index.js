import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import EmailForm from '../../atoms/email-form';
import Button from '@components/atoms/button';

import {
  dialogContainer,
  textContainer,
  confirmEmailContainer,
  iconContainer,
  emailTextContainer,
} from './modal.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

function Example({ showDialog, close }) {
  return (
    <div>
      <Dialog className={dialogContainer} isOpen={showDialog} onDismiss={close}>
        <div className={textContainer}>
          <h3>Sign up for a 14-day free trial</h3>
          <p>There's no time to waste!</p>
        </div>
        <EmailForm
          placeholder="Type your email"
          checkItemOne="No credit card required"
          checkItemTwo="14 day free trial"
          checkItemThree="Cancel anytime"
          style="homepage"
        />
      </Dialog>
    </div>
  );
}

export default Example;
