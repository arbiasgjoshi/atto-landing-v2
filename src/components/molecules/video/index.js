/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StaticImage, getImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player';

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
  watchButton,
} from './video.module.scss';

const Video = ({ videoUrl }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className={videoContainer}>
      {!play && (
        <div className={maskOverlay}>
          <span className={`${videoBackground} ${leftAligned}`} />
          <StaticImage
            className={videoPlaceholder}
            width={960}
            height={489}
            quality={96}
            alt="Video placeholder"
            placeholder="none"
            src="../../../images/video_placeholder@2x.png"
          />
          <span className={`${videoBackground} ${rightAligned}`} />
          <div className={playIcon} onClick={() => setPlay(true)} role="button" tabIndex="-1">
            <Icon iconClass="play" fSize={11} />
          </div>
          <div className={watchButton}>
            <Button btnText="Watch Video" btnStyle="round" onBtnClick={() => setPlay(true)} />
          </div>
        </div>
      )}
      <div className={videoPlayer}>
        <ReactPlayer url={videoUrl} playing={play} width="100%" height="100%" />
      </div>
    </div>
  );
};
Video.propTypes = {
  videoUrl: PropTypes.string,
};

export default Video;
