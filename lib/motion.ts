export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (duration: number, delay: number) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };
};

export const scaleIn = (delay: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };
};
