import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury FashionTV cosmetics website.
 * This hook is designed to provide elegant and smooth animations that reflect the luxury fashion industry.
 *
 * @module useAnimation
 * @returns {Object} - An object containing animation controls and state.
 */
export interface AnimationProps {
  duration: number;
  delay: number;
  iterationCount: number;
  animationName: string;
}

export interface AnimationState {
  isAnimating: boolean;
  startAnimation: () => void;
  stopAnimation: () => void;
}

/
 * Custom hook to manage animation states and properties.
 *
 * @param {AnimationProps} props - The properties for the animation.
 * @returns {AnimationState} - The state and controls for the animation.
 */
export const useAnimation = ({
  duration = 1,
  delay = 0,
  iterationCount = 1,
  animationName = 'fadeIn',
}: AnimationProps): AnimationState => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setAnimating] = useState(false);

  /
   * Starts the animation.
   */
  const startAnimation = () => {
    if (animationRef.current) {
      animationRef.current.style.animation = ${animationName} ${duration}s ${delay}s ${iterationCount};
      setAnimating(true);
    }
  };

  /
   * Stops the animation.
   */
  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.style.animation = 'none';
      setAnimating(false);
    }
  };

  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, []);

  return {
    isAnimating,
    startAnimation,
    stopAnimation,
  };
};