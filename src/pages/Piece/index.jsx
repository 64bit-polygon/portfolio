import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useParams, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import DOMPurify from "dompurify";
import { pieceSelector } from "../../state/selectors";
import { NOT_FOUND } from "../../constants";
import { PieceHeading } from "./PieceHeading";
import { AuthorRoles } from "./AuthorRoles";
import { Devices } from "./Devices";
import { MediaPlayer } from "./MediaPlayer";

function Piece() {
  const { route } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const piece = useRecoilValue(pieceSelector(route));
  if (!piece) return <></>
  if (piece === NOT_FOUND) {
    return <Navigate to="/" />
  };
  
  const description = DOMPurify.sanitize(piece.description);

  const hasMedia = !!piece.desktopCarouselCaptions?.length
                   || !!piece.mobileCarouselCaptions?.length
                   || !!piece.desktopVideoUrl
                   || !!piece.mobileVideoUrl;

  return (
    <div className={styles.piece}>
      <header className={styles.header}>
        <PieceHeading externalLink={piece.externalLink}>{piece.title}</PieceHeading>
        <AuthorRoles isDeveloper={!!piece.isDeveloper} isDesigner={!!piece.isDesigner} />
        <Devices hasDesktop={!!piece.hasDesktop} hasTablet={!!piece.hasTablet} hasMobile={!!piece.hasMobile} />
      </header>
      <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
     {hasMedia && ( 
      <MediaPlayer
        desktopCarouselCaptions={piece.desktopCarouselCaptions}
        desktopCarouselUrls={piece.desktopCarouselUrls}
        desktopVideoCaptions={piece.desktopVideoCaptions}
        desktopVideoDuration={piece.desktopVideoDuration}
        desktopVideoUrl={piece.desktopVideoUrl}
        desktopVideoPoster={piece.desktopVideoPoster}
        mobileCarouselUrls={piece.mobileCarouselUrls}
        mobileVideoDuration={piece.mobileVideoDuration}
        mobileVideoUrl={piece.mobileVideoUrl}
        mobileVideoPoster={piece.mobileVideoPoster}
      />
     )}
    </div>
  )
}

export default Piece
