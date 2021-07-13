/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

import Icon from '@components/atoms/icon';
import Button from '@components/atoms/button';

import {
  videoContainer,
  videoBackground,
  videoPlaceholder,
  rightAligned,
  leftAligned,
  maskOverlay,
  playIcon,
  videoPlayer,
  playingMask,
  playerIframe,
  watchButton,
} from './video.module.scss';

const Video = ({ placeholder, videoUrl }) => {
  const [play, setPlay] = useState(false);
  const [url, setVideoUrl] = useState(videoUrl);

  const switchPlaceholder = (val) => {
    if (val === 'location-tracking') {
      return (
        <StaticImage
          className={videoPlaceholder}
          width={960}
          height={489}
          quality={96}
          alt="Video placeholder"
          placeholder="none"
          src="../../../images/Video placeholder - Location Tracking@2x.png"
        />
      );
    }

    if (val === 'time-tracking') {
      return (
        <StaticImage
          className={videoPlaceholder}
          width={960}
          height={489}
          quality={96}
          alt="Video placeholder"
          placeholder="none"
          src="../../../images/Video placeholder - Time Tracking@2x.png"
        />
      );
    }

    if (val === 'timesheets') {
      return (
        <StaticImage
          className={videoPlaceholder}
          width={960}
          height={489}
          quality={96}
          alt="Video placeholder"
          placeholder="none"
          src="../../../images/Video placeholder - Timesheets@2x.png"
        />
      );
    }

    if (val === 'team-activity') {
      return (
        <StaticImage
          className={videoPlaceholder}
          width={960}
          height={489}
          quality={96}
          alt="Video placeholder"
          placeholder="none"
          src="../../../images/Video placeholder - Team Activity@2x.png"
        />
      );
    }

    return (
      <StaticImage
        className={videoPlaceholder}
        width={960}
        height={489}
        quality={96}
        alt="Video placeholder"
        placeholder="none"
        src="../../../images/Video placeholder - Homepage@2x.png"
      />
    );
  };

  useEffect(() => {
    if (play) {
      setVideoUrl(`${videoUrl}&amp;autoplay=1`);
    } else {
      setVideoUrl(`${videoUrl}`);
    }
  }, [play]);

  return (
    <div className={videoContainer}>
      {!play && (
        <motion.div
          key="content"
          style={{ overflow: 'hidden' }}
          initial="open"
          animate="collapsed"
          exit="open"
          onClick={() => setPlay(true)}
          variants={{
            open: { opacity: 0 },
            collapsed: { opacity: 1 },
          }}
          transition={{ duration: 0.25 }}
          style={{ height: '100%' }}
          className={maskOverlay}
        >
          <span className={`${videoBackground} ${leftAligned}`} />
          {switchPlaceholder(placeholder)}
          <span className={`${videoBackground} ${rightAligned}`} />
          <div className={playIcon} role="button" tabIndex="-1">
            <Icon iconClass="play" fSize={11} />
          </div>
          <div className={watchButton}>
            <Button btnText="Watch Video" btnStyle="round" />
          </div>
        </motion.div>
      )}
      <div className={`${videoPlayer} ${play && playingMask}`}>
        <div className={`${playerIframe}`}>
          {play && (
            <iframe
              src={url}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
              title="Atto  &amp;middot;  Time tracking, simplified"
            />
          )}
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
};
Video.propTypes = {
  videoUrl: PropTypes.string,
};

export default Video;
