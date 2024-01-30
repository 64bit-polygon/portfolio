import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ToggleMediaType } from "../ToggleMediaType";
import { VideoPlayer } from "../VideoPlayer";
import { CarouselPlayer } from "../CarouselPlayer";

export const VIDEO = "video";
export const CAROUSEL = "carousel";

export const MediaPlayer = ({
  desktopCarouselCaptions,
  desktopCarouselUrls,
  desktopVideoCaptions,
  desktopVideoDuration,
  desktopVideoUrl,
  desktopVideoPoster,
  mobileCarouselUrls,
  mobileVideoDuration,
  mobileVideoUrl,
  mobileVideoPoster
}) => {
  const [mediaType, setMediaType] = useState(() => (!!desktopVideoUrl || !!mobileVideoUrl) ? VIDEO : CAROUSEL);

  const hasDesktopVideo = !!desktopVideoUrl;
  const hasMobileVideo = !!mobileVideoUrl;
  const hasDesktopCarousel = !!desktopCarouselUrls?.length;
  const hasMobileCarousel = !!mobileCarouselUrls?.length;
  const hasVideo = hasDesktopVideo || hasMobileVideo;
  const hasCarousel = hasDesktopCarousel || hasMobileCarousel;
  const hasDesktop = hasDesktopVideo || hasDesktopCarousel;
  const hasMobile = hasMobileVideo || hasMobileCarousel;

  return (
    <div className={styles.mediaPlayer}>
    {(hasVideo && hasCarousel) && (
      <ToggleMediaType mediaType={mediaType} setMediaType={setMediaType} />
    )}
      <div className={styles.media}>
      {hasDesktop && (
        <div className={styles.desktopPlayer}>
        {(mediaType === VIDEO) && (
          <VideoPlayer
            videoUrl={desktopVideoUrl}
            duration={desktopVideoDuration}
            captionsData={desktopVideoCaptions}
            poster={desktopVideoPoster}
          />
        )}
        {(mediaType === CAROUSEL) && (
          <CarouselPlayer
            imgUrls={desktopCarouselUrls}
            captions={desktopCarouselCaptions}
          />
        )}
        </div>
      )}
      {hasMobile && (
        <div className={styles.mobilePlayer}>
        {(mediaType === VIDEO) && (
          <VideoPlayer
            videoUrl={mobileVideoUrl}
            duration={mobileVideoDuration}
            poster={mobileVideoPoster}
            isPhone={true}
          />
        )}
        {(mediaType === CAROUSEL) && (
          <CarouselPlayer imgUrls={mobileCarouselUrls} isPhone={true}/>
        )}
        </div>
      )}
      </div>
    </div>
  )
};
