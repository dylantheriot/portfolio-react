import { useSpring } from 'react-spring';
import { useMediaQuery } from 'react-responsive'

// fades
export function useFadeInAnimationRef(ref) {
    const spring = useSpring({
      from: {
        opacity: 0,
        transform: 'translate(0px, 30px)'
      },
      to: {
        opacity: 1,
        transform: 'translate(0px, 0px)'
      },
      ref: ref,
    });
  
    return spring;
}

// fades
export function useFadeInRightRef(ref) {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(100px, 0px)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    },
    ref: ref,
  });

  return spring;
}

export function useFadeInLeftRef(ref) {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(-100px, 0px)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    },
    ref: ref,
  });

  return spring;
}

export function useFadeInDownRef(ref) {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(0px, -30px)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    },
    ref: ref,
  });

  return spring;
}

export function useFadeInAnimation() {
  const spring = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
  });

  return spring;
}

// Y translate from above 
export function useYAboveAnimationRef(ref) {
    const spring = useSpring({
      from: {
        transform: 'translateY(-200px)'
      },
      to: {
        transform: 'translateY(0px)'
      },
      ref: ref,
    });
    return spring;
}

// bar

export function useWidthExtendAnimation(ref) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const spring = useSpring({
    from: {
      width: '0rem'
    },
    to: {
      width: isMobile ? '5rem' : '8rem',
    },
    ref: ref,
  });

  return spring;
}