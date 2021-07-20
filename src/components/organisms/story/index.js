import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './story.module.scss';
import stars from '../../../images/stars.png';

const Story = ({ img, paragraph, author, className = '' }) => {
  const staticImage = (val) => {
    if (val === 'homepage') {
      return (
        <StaticImage
          src="../../../images/hear-what-businesses-have-to-say@2x.png"
          alt="Hear what businesses have to say"
          placeholder="none"
          width="300"
          height="450"
          quality={97}
        />
      );
    }
    if (val === 'cleaners') {
      return (
        <StaticImage
          src="../../../images/cleaning/Cleaners review@2x.png"
          alt="Cleaners review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'construction') {
      return (
        <StaticImage
          src="../../../images/construction/Built with construction companies in mind@2x.png"
          alt="Built with construction companies in mind"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'electrical') {
      return (
        <StaticImage
          src="../../../images/electric/Electricians review@2x.png"
          alt="Electricians review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'healthcare') {
      return (
        <StaticImage
          src="../../../images/healthcare/Healthcare reviews@2x.png"
          alt="Healthcare reviews"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'landscaping') {
      return (
        <StaticImage
          src="../../../images/landscaping/Built with landscaping companies in mind@2x.png"
          alt="Built with landscaping companies in mind"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'painting') {
      return (
        <StaticImage
          src="../../../images/painting/Painting reviews@2x.png"
          alt="Painting reviews"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'plumbing') {
      return (
        <StaticImage
          src="../../../images/plumbing/Plumbers review@2x.png"
          alt="Plumbers review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'roofing') {
      return (
        <StaticImage
          src="../../../images/roofing/Roofing reviews@2x.png"
          alt="Roofing reviews"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'mobile-time-tracking') {
      return (
        <StaticImage
          src="../../../images/time-tracking/Time tracking app review@2x.png"
          alt="Time tracking app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'pricing') {
      return (
        <StaticImage
          src="../../../images/time-tracking-app-review.png"
          alt="Hear what businesses have to say"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'product') {
      return (
        <StaticImage
          src="../../../images/en/overview/Time tracking app review@2x.png"
          alt="Time tracking app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'location-tracking') {
      return (
        <StaticImage
          src="../../../images/en/gps-location-tracking/Time tracking app review@2x.png"
          alt="Time tracking app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'team-activity') {
      return (
        <StaticImage
          src="../../../images/en/team-activity/Time tracking app review@2x.png"
          alt="Time tracking app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'time-tracking') {
      return (
        <StaticImage
          src="../../../images/en/time-tracking/Time tracking app review@2x.png"
          alt="Time tracking app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'timesheets') {
      return (
        <StaticImage
          src="../../../images/en/timesheets/Time tracking app review@2x.png"
          alt="Timesheets app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'time-card-app') {
      return (
        <StaticImage
          src="../../../images/time-card-app/Time card app review@2x.png"
          alt="Time card app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'time-clock') {
      return (
        <StaticImage
          src="../../../images/time-clock/Time clock app review@2x.png"
          alt="Time clock app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'timesheet-app') {
      return (
        <StaticImage
          src="../../../images/timesheets/Timesheet app review@2x.png"
          alt="Timesheet app review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }

    if (val === 'work-hours-tracker') {
      return (
        <StaticImage
          src="../../../images/work-hours-tracker/Work hours tracker review@2x.png"
          alt="Work hours tracker review"
          placeholder="none"
          width="250"
          height="400"
          quality={97}
        />
      );
    }
  };
  return (
    <div className={`${styles.container} ${styles[className]}`}>
      <div className={styles.imageContainer}>{staticImage(img)}</div>
      <div className={styles.paragraphContainer}>
        <img
          alt={`star-${author}`}
          width="192"
          height="31"
          className={styles.starsPic}
          src={stars}
        />
        <h4>{paragraph}</h4>
        <h6>{author}</h6>
      </div>
    </div>
  );
};

Story.propTypes = {
  img: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Story;
