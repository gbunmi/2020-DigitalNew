import React, { useState, useEffect } from 'react';

/**
 * Portable Splash Screen Component
 * @param duration - How long (ms) to show the logo before starting the exit fade.
 * @param onComplete - Optional callback when the screen has fully disappeared.
 */
export const SplashScreen: React.FC<{ duration?: number; onComplete?: () => void }> = ({ duration = 2000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent body scroll while splash is active
    document.body.style.overflow = 'hidden';
    
    // 1. Initial timer to start the fade exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // 2. Final timer to remove from DOM after CSS transition finishes
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = ''; // Restore overflow
        if (onComplete) onComplete();
      }, 700); // Matches the 0.7s transition in the style below

      return () => clearTimeout(removeTimer);
    }, duration);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = '';
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#d73a3b', // Brand Red
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.7s ease',
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      <svg viewBox="0 0 400 123" style={{ width: 400, maxWidth: "70vw" }}>
        {/* Scoped Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes loaderFadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes loaderSlideIn {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}} />

        {/* First portion of logo - Fades in up */}
        <path 
          d="M166.351 25.6278C165.327 24.2952 164.303 23.1391 163.315 22.1508C152.857 11.6932 138.684 10.3781 127.503 10.3781C116.331 10.3781 102.149 11.7022 91.6916 22.1508C89.4324 24.41 86.9436 27.5428 84.8607 31.7522C83.4402 24.966 79.504 20.2443 73.9093 16.7409C66.6993 12.1786 56.7271 10.3696 44.1073 10.3696C34.0115 10.3696 21.1536 11.4548 12.3814 17.8176C8.29564 20.8182 0.609126 28.1515 0.723894 41.9717H29.5635V40.8861C29.5635 37.6386 30.8876 34.5143 32.6878 32.7141C36.0501 29.3519 41.9364 29.3519 43.0216 29.3519C45.9074 29.3519 49.5082 29.9521 51.9175 31.5142C53.8413 32.8378 55.6415 35.1234 55.6415 38.6005C55.6415 41.3626 54.3178 44.1247 51.9175 46.4103C50.2317 47.9724 47.5933 49.5345 39.6593 53.2586L27.0399 59.2686C16.5824 64.3163 11.6579 68.164 10.3343 69.364C1.56213 76.8125 0 85.4698 0 95.0802V96.1569H82.7958V75.4888H40.498C41.3363 73.0884 42.6599 71.7648 48.908 69.117L54.3179 66.9551C56.118 66.2312 58.0419 65.393 59.842 64.5548L65.1282 62.2687C70.2996 59.9832 74.7386 57.9445 78.71 54.2205C79.2396 53.7176 79.7246 53.2144 80.1748 52.7026C80.1659 53.0911 80.1484 53.4617 80.1484 53.8588C80.1484 70.6792 86.5202 80.4132 91.6827 85.5846C102.14 96.0421 116.313 97.3569 127.494 97.3569C133.725 97.3569 140.882 96.942 147.809 94.7712L166.351 25.6278ZM136.637 73.8208C133.513 76.3449 129.665 76.7066 127.503 76.7066C124.256 76.7066 121.017 75.9827 118.369 73.8208C113.921 70.2116 111.883 62.6483 111.883 53.8766C111.883 45.1045 113.921 37.5327 118.369 33.932C121.017 31.6464 124.256 31.0462 127.503 31.0462C130.265 31.0462 133.628 31.4079 136.637 33.932C141.085 37.656 143.123 45.1045 143.123 53.8766C143.123 62.5336 141.085 70.2201 136.637 73.8208Z" 
          fill="#FCD9D0" 
          style={{ opacity: 0, animation: "loaderFadeIn 0.6s ease forwards 0.3s" }} 
        />
        
        {/* Second portion of logo - Slides in from right */}
        <path 
          d="M385.096 25.5836C371.592 12.0813 353.289 10.3781 338.86 10.3781C324.432 10.3781 306.12 12.0813 292.618 25.5836C289.697 28.5047 286.484 32.5462 283.793 37.9824C281.966 29.2192 276.883 23.1301 269.655 18.5942C260.345 12.6989 247.469 10.3691 231.178 10.3691C218.144 10.3691 201.544 11.7638 190.213 19.9884C188.139 21.5153 185.342 23.9156 182.72 27.3396L190.045 0H173.198L140.731 121.158H157.578L176.331 51.1757H212.399V49.7815C212.399 45.5899 214.102 41.5568 216.432 39.227C220.774 34.885 228.381 34.885 229.775 34.885C233.5 34.885 238.15 35.6616 241.257 37.6828C243.736 39.3856 246.066 42.3419 246.066 46.8341C246.066 50.4081 244.363 53.9735 241.257 56.921C239.085 58.9417 235.67 60.954 225.433 65.7637L209.143 73.5207C195.64 80.0426 189.277 85.0018 187.574 86.555C176.243 96.1743 174.231 107.347 174.231 119.764V121.158H281.137V94.4711H226.519C227.604 91.3647 229.316 89.6614 237.383 86.2464L244.363 83.4486C246.693 82.5135 249.173 81.4279 251.502 80.3422L258.333 77.3948C265.004 74.4474 270.75 71.8086 275.868 66.9989C276.548 66.346 277.174 65.6931 277.765 65.0398C277.756 65.543 277.73 66.0285 277.73 66.5403C277.73 88.2583 285.955 100.825 292.627 107.505C306.129 121.008 324.432 122.711 338.869 122.711C353.298 122.711 371.609 121.008 385.105 107.505C391.774 100.834 399.999 88.2672 399.999 66.5403C399.991 44.8218 391.766 32.2551 385.096 25.5836ZM350.651 92.3003C346.618 95.5567 341.649 96.0243 338.86 96.0243C334.669 96.0243 330.486 95.0887 327.07 92.3003C321.326 87.6407 318.696 77.8713 318.696 66.5403C318.696 55.2088 321.334 45.4399 327.07 40.7803C330.486 37.8324 334.677 37.0558 338.86 37.0558C342.426 37.0558 346.777 37.5238 350.651 40.7803C356.396 45.5899 359.026 55.2088 359.026 66.5403C359.026 77.7213 356.387 87.6496 350.651 92.3003Z" 
          fill="white" 
          style={{ opacity: 0, animation: "loaderSlideIn 0.6s ease forwards 0.9s" }} 
        />
      </svg>
    </div>
  );
};
