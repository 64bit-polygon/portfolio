import React from "react";
import { WindowMonitor } from "../WindowMonitor";
import { PhoneMonitor } from "../PhoneMonitor";

export const MonitorWrapper = ({isPlaying, setIsPlaying, isPhone, caption, children, onClick}) => (
  isPhone ? (
    <PhoneMonitor isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={onClick}>
      {children}
    </PhoneMonitor>
  ) : (
    <WindowMonitor caption={caption} isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={onClick}>
      {children}
    </WindowMonitor>
  )
);
