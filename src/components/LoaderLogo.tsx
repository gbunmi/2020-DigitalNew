import * as React from "react";

export function LoaderLogo() {
  return (
    <svg viewBox="0 0 400 123" style={{ width: 400, maxWidth: "70vw" }}>
      {/* First portion of logo - Fades in up and forward */}
      <path 
        d="M166.351 25.6278C165.327 24.2952 ..." 
        fill="#FCD9D0" 
        style={{ opacity: 0, animation: "loaderFadeIn 0.6s ease forwards 0.3s" }} 
      />
      {/* Second portion of logo - Slides in from the right */}
      <path 
        d="M385.096 25.5836C371.592 12.0813 ..." 
        fill="white" 
        style={{ opacity: 0, animation: "loaderSlideIn 0.6s ease forwards 0.9s" }} 
      />
    </svg>
  );
}
