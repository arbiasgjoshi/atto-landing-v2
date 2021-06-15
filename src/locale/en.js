import googlePlay from '../images/google-play@2x.png';
import appStore from '../images/app-store@2x.png';

export const placeholderData = {};

export const FooterLinks = [
  {
    parent: 'Product',
    id: 0,
    parentPath: '/product',
    subMenuLinks: [
      {
        id: 0,
        path: '/product/why-atto',
        name: 'Why Atto',
        hasLine: true,
      },
      {
        id: 1,
        path: '/product/time-tracking',
        name: 'Time Tracking',
        hasLine: false,
      },
      {
        id: 2,
        path: '/product/time-clock',
        name: 'Time Clock',
        hasLine: false,
      },
      {
        id: 3,
        path: '/product/gps-location-tracking',
        name: 'GPS Location Tracking',
        hasLine: false,
      },
      {
        id: 4,
        path: '/product/team-activity',
        name: 'Team Activity',
        hasLine: false,
      },
      {
        id: 5,
        path: '/product/timesheets',
        name: 'Timesheets',
        hasLine: false,
      },
      // {
      //   id: 6,
      //   path: '/time-clock',
      //   name: 'Time Clock Kiosk',
      //   hasLine: false,
      // },
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
        name: 'Pricing',
        hasLine: false,
      },
    ],
    downloadApp: null,
  },
  {
    parent: 'Industries',
    id: 1,
    parentPath: '/industries',
    subMenuLinks: [
      {
        id: 0,
        path: '/industries/construction',
        name: 'Construction',
        hasLine: false,
      },
      {
        id: 1,
        path: '/industries/painting',
        name: 'Painting',
        hasLine: false,
      },
      {
        id: 2,
        path: '/industries/landscaping',
        name: 'Landscaping',
        hasLine: false,
      },
      {
        id: 3,
        path: '/industries/electrician',
        name: 'Electrician',
        hasLine: false,
      },
      {
        id: 4,
        path: '/industries/cleaning',
        name: 'Cleaning',
        hasLine: false,
      },
      {
        id: 5,
        path: '/industries/plumbing-heating',
        name: 'Plumbing & Heating',
        hasLine: false,
      },
      {
        id: 6,
        path: '/industries/home-healthcare',
        name: 'Home Healthcare',
        hasLine: false,
      },
      {
        id: 7,
        path: '/industries/roofing',
        name: 'Roofing',
        hasLine: false,
      },
    ],
    downloadApp: null,
  },
  {
    parent: 'Resources',
    id: 2,
    parentPath: '/resources',
    subMenuLinks: [
      {
        id: 0,
        path: '/blog',
        name: 'Blog',
        hasLine: false,
      },
      {
        id: 1,
        path: '/help-center',
        name: 'Help Center',
        hasLine: false,
      },
      {
        id: 2,
        path: '/Contact',
        name: 'Contact',
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

export const faqList = [
  {
    title: 'What happens at the end of my free trial?',
    paragraph:
      'After your 14-day free trial ends, you’ll be asked to purchase a subscription in order to continue using Atto. As we don’t require a credit card to sign up for our free trial, you won’t be charged unless you actively choose to subscribe.',
    toggled: true,
  },
  {
    title: 'Are there any usage limits or add-on charges?',
    paragraph:
      'After your 14-day free trial ends, you’ll be asked to purchase a subscription in order to continue using Atto. As we don’t require a credit card to sign up for our free trial, you won’t be charged unless you actively choose to subscribe.',
    toggled: false,
  },
  {
    title: 'What payment options do you accept?',
    paragraph:
      'After your 14-day free trial ends, you’ll be asked to purchase a subscription in order to continue using Atto. As we don’t require a credit card to sign up for our free trial, you won’t be charged unless you actively choose to subscribe.',
    toggled: false,
  },
  {
    title: 'I have a question that isn’t answered',
    paragraph:
      'After your 14-day free trial ends, you’ll be asked to purchase a subscription in order to continue using Atto. As we don’t require a credit card to sign up for our free trial, you won’t be charged unless you actively choose to subscribe.',
    toggled: false,
  },
];
