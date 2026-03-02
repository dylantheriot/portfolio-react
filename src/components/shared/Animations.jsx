import { useSpring } from '@react-spring/web';

export function useFadeInAnimationRef(ref) {
  return useSpring({
    from: { opacity: 0, transform: 'translate(0px, 30px)' },
    to: { opacity: 1, transform: 'translate(0px, 0px)' },
    ref,
  });
}

export function useFadeInRightRef(ref) {
  return useSpring({
    from: { opacity: 0, transform: 'translate(100px, 0px)' },
    to: { opacity: 1, transform: 'translate(0px, 0px)' },
    ref,
  });
}

export function useFadeInLeftRef(ref) {
  return useSpring({
    from: { opacity: 0, transform: 'translate(-100px, 0px)' },
    to: { opacity: 1, transform: 'translate(0px, 0px)' },
    ref,
  });
}

export function useFadeInDownRef(ref) {
  return useSpring({
    from: { opacity: 0, transform: 'translate(0px, -30px)' },
    to: { opacity: 1, transform: 'translate(0px, 0px)' },
    ref,
  });
}

export function useFadeInAnimation() {
  return useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
}

export function useYAboveAnimationRef(ref) {
  return useSpring({
    from: { transform: 'translateY(-200px)' },
    to: { transform: 'translateY(0px)' },
    ref,
  });
}

export function useWidthExtendAnimation(ref) {
  return useSpring({
    from: { width: '0rem' },
    to: { width: '8rem' },
    ref,
  });
}
