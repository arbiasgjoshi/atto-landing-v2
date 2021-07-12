import React from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';

// Team Activity
import teamActivityArticleLocaleOneEn from '@images/en/team-activity/Never feel in the dark again with team activity updates@2x.png';
import teamActivityArticleLocaleOneDe from '@images/de/team-activity/DE_Never feel in the dark again with team activity updates@2x.png';
import teamActivityArticleLocaleOneEs from '@images/es/team-activity/ES_Never feel in the dark again with team activity updates@2x.png';
import teamActivityArticleLocaleOneFr from '@images/fr/team-activity/FR_Never feel in the dark again with team activity updates@2x.png';

import teamActivityArticleLocaleTwoEn from '@images/en/team-activity/Simplify team management with departments@2x.png';
import teamActivityArticleLocaleTwoDe from '@images/de/team-activity/DE_Simplify team management with departments@2x.png';
import teamActivityArticleLocaleTwoEs from '@images/es/team-activity/ES_Simplify team management with departments@2x.png';
import teamActivityArticleLocaleTwoFr from '@images/fr/team-activity/FR_Simplify team management with departments@2x.png';

import teamActivityArticleLocaleThreeEn from '@images/en/team-activity/Find out what any employee is up to in seconds@2x.png';
import teamActivityArticleLocaleThreeDe from '@images/de/team-activity/DE_Find out what any employee is up to in seconds@2x.png';
import teamActivityArticleLocaleThreeEs from '@images/es/team-activity/ES_Find out what any employee is up to in seconds@2x.png';
import teamActivityArticleLocaleThreeFr from '@images/fr/team-activity/FR_Find out what any employee is up to in seconds@2x.png';

import teamActivityArticleLocaleFourEn from '@images/en/team-activity/Eliminate back and forth phone calls and constant check-ins@2x.png';
import teamActivityArticleLocaleFourDe from '@images/de/team-activity/DE_Eliminate back and forth phone calls and constant check-ins@2x.png';
import teamActivityArticleLocaleFourEs from '@images/es/team-activity/ES_Eliminate back and forth phone calls and constant check-ins@2x.png';
import teamActivityArticleLocaleFourFr from '@images/fr/team-activity/FR_Eliminate back and forth phone calls and constant check-ins@2x.png';

import teamActivityArticleLocaleFiveEn from '@images/en/team-activity/See your team’s progress at the end of each day@2x.png';
import teamActivityArticleLocaleFiveDe from '@images/de/team-activity/DE_See your team’s progress at the end of each day@2x.png';
import teamActivityArticleLocaleFiveEs from '@images/es/team-activity/ES_See your team’s progress at the end of each day@2x.png';
import teamActivityArticleLocaleFiveFr from '@images/fr/team-activity/FR_See your team’s progress at the end of each day@2x.png';

// Time Card App
import TimeCardGetWageEstimates from '@images/time-card-app/Get wage estimates from your employees’ time cards@2x.png';
import TimeCardSummariesImage from '@images/time-card-app/See time card summaries per employee, team, or project@2x.png';
import TimeCardViewTimeCard from '@images/time-card-app/View time card data as a daily map-based timeline@2x.png';

import {
  container,
  textWrapper,
  imageWrapper,
  secondDesc,
  secondBlock,
  swap,
} from './article.module.scss';

const Article = ({
  title,
  description,
  secondDescription,
  image,
  isSwapped = false,
  maxWidth,
  imagePadding = '',
  imageHeight,
  imageWidth,
}) => {
  const swapStaticImage = (val) => {
    if (val === 'timesheet-estimates') {
      return (
        <StaticImage
          src="../../../images/timesheets/Get wage estimates from your employees’ timesheets@2x.png"
          quality={96}
          width="490"
          height="273"
          alt="Get wage estimates from your employees’ timesheets"
          placeholder="none"
        />
      );
    }
    if (val === 'timesheet-summaries') {
      return (
        <StaticImage
          src="../../../images/timesheets/See timesheet summaries per employee, team, or project@2x.png"
          quality={96}
          alt="See timesheet summaries per employee, team, or project"
          width="465"
          height="409"
          placeholder="none"
        />
      );
    }
    if (val === 'timesheet-viewtimecard') {
      return (
        <StaticImage
          src="../../../images/timesheets/View timesheets as a daily map-based timeline@2x.png"
          width="543"
          height="383"
          alt="View timesheets as a daily map-based timeline"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'cleaning-one') {
      return (
        <StaticImage
          src="../../../images/cleaning/Group 11@2x.png"
          width="580"
          height="383"
          alt="View timesheets as a daily map-based timeline"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'cleaning-two') {
      return (
        <StaticImage
          src="../../../images/cleaning/Entrust managers to track your cleaners’ time @2x.png"
          width="529"
          height="426"
          alt="Entrust managers to track your cleaners’ time"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'electrical-one') {
      return (
        <StaticImage
          src="../../../images/electric/Buzz your electricians with helpful reminders so they don’t forget to clock-in@2x.png"
          width="580"
          height="383"
          alt="Buzz your electricians with helpful reminders so they don’t forget to clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'electrical-two') {
      return (
        <StaticImage
          src="../../../images/electric/Give on-site supervisors the power to track your electricians’ time@2x.png"
          width="575"
          height="430"
          alt="Give on-site supervisors the power to track your electricians’ time"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'healthcare-one') {
      return (
        <StaticImage
          src="../../../images/healthcare/Get helpful reminders so your caregivers never forget to clock-in@2x.png"
          width="580"
          height="383"
          alt="Get helpful reminders so your caregivers never forget to clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'healthcare-two') {
      return (
        <StaticImage
          src="../../../images/healthcare/Allow your senior caregivers to track everyone’s time @2x.png"
          width="486"
          height="402"
          alt="Allow your senior caregivers to track everyone’s time"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'painting-one') {
      return (
        <StaticImage
          src="../../../images/painting/Get helpful reminders so your painters never forget to clock-in@2x.png"
          width="580"
          height="383"
          alt="Get helpful reminders so your painters never forget to clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'painting-two') {
      return (
        <StaticImage
          src="../../../images/painting/Allow your supervisor to track your painting crew’s time @2x.png"
          width="578"
          height="424"
          alt="Allow your supervisor to track your painting crew’s time"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'plumbing-one') {
      return (
        <StaticImage
          src="../../../images/plumbing/Get helpful reminders so your plumbers never forget to clock-in@2x.png"
          width="580"
          height="383"
          alt="Get helpful reminders so your plumbers never forget to clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'plumbing-two') {
      return (
        <StaticImage
          src="../../../images/plumbing/Allow your on-site manager to track your plumbers’ time@2x.png"
          width="428"
          height="430"
          alt="Allow your on-site manager to track your plumbers’ time"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'roofing-one') {
      return (
        <StaticImage
          src="../../../images/roofing/Get helpful reminders so your roofers never forget to clock-in@2x.png"
          width="580"
          height="383"
          alt="Get helpful reminders so your roofers never forget to clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'roofing-two') {
      return (
        <StaticImage
          src="../../../images/roofing/Allow your supervisor to track your roofing crew’s time @2x.png"
          width="522"
          height="432"
          alt="Allow your supervisor to track your roofing crew’s time "
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'mobile-workers') {
      return (
        <StaticImage
          src="../../../images/time-tracking/Time tracking for mobile workers @2x.png"
          width="510"
          height="380"
          alt="Time tracking for mobile workers"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'employees-together') {
      return (
        <StaticImage
          src="../../../images/time-tracking/Time tracking for teams of employees working together@2x.png"
          width="470"
          height="490"
          alt="Time tracking for teams of employees working together"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'office-workers') {
      return (
        <StaticImage
          src="../../../images/time-tracking/Time tracking for office workers@2x.png"
          width="489"
          height="380"
          alt="Time tracking for office workers"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'never-forget') {
      return (
        <StaticImage
          src="../../../images/time-tracking/Never forget to start tracking time again@2x.png"
          width="414"
          height="483"
          alt="Never forget to start tracking time again"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'add-notes') {
      return (
        <StaticImage
          src="../../../images/time-clock/Add notes, track breaks, assign job codes, and more@2x.png"
          width="584"
          height="498"
          alt="Add notes, track breaks, assign job codes, and more"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'give-managers') {
      return (
        <StaticImage
          src="../../../images/time-clock/Give managers the power to track employee time@2x.png"
          width="550"
          height="581"
          alt="Give managers the power to track employee time"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'ensure-employees') {
      return (
        <StaticImage
          src="../../../images/time-clock/Ensure employees are ready to work before they clock-in@2x.png"
          width="575"
          height="484"
          alt="Ensure employees are ready to work before they clock-in"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'get-notification') {
      return (
        <StaticImage
          src="../../../images/time-clock/Get handy notifications of time clock activity@2x.png"
          width="440"
          height="456"
          alt="Get handy notifications of time clock activity"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'record-pto') {
      return (
        <StaticImage
          src="../../../images/time-clock/Record paid time off for complete payroll data@2x.png"
          width="452"
          height="548"
          alt="Record paid time off for complete payroll data"
          quality={96}
          placeholder="none"
        />
      );
    }
    if (val === 'see-employees') {
      return (
        <StaticImage
          src="../../../images/time-clock/See what your employees have been up to@2x.png"
          width="584"
          height="498"
          alt="See what your employees have been up to"
          quality={96}
          placeholder="none"
        />
      );
    }

    if (val === 'timecardapp-estimates') {
      return (
        <StaticImage
          src="../../../images/time-card-app/Get wage estimates from your employees’ time cards@2x.png"
          quality={96}
          width="490"
          height="273"
          alt="Get wage estimates from your employees’ time cards"
          placeholder="none"
        />
      );
    }
    if (val === 'timecardapp-summaries') {
      return (
        <StaticImage
          src="../../../images/time-card-app/See time card summaries per employee, team, or project@2x.png"
          quality={96}
          alt="See time card summaries per employee, team, or project"
          width="465"
          height="409"
          placeholder="none"
        />
      );
    }
    if (val === 'timecardapp-viewtimecard') {
      return (
        <StaticImage
          src="../../../images/time-card-app/View time card data as a daily map-based timeline@2x.png"
          width="543"
          height="383"
          alt="View time card data as a daily map-based timeline"
          quality={96}
          placeholder="none"
        />
      );
    }

    return null;
  };

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div style={maxWidth && { maxWidth }} className={textWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
        {secondDescription && <p className={secondDesc}>{secondDescription}</p>}
      </div>
      <div className={secondBlock}>
        <div style={{ padding: imagePadding }} className={imageWrapper}>
          {/* <img width={imageWidth} alt={title} imageHeight={imageHeight} src={image} /> */}
          {swapStaticImage(image)}
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isSwapped: PropTypes.bool,
  maxWidth: PropTypes.number,
  imagePadding: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
};

export default Article;
