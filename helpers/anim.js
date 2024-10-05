export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const TitlePresence = {
  initial: {
    opacity: 0,
    rotateX: "-90deg",
    y: "50%"
  },
  animate: (i) =>({
    opacity: 1,
    rotateX: "0deg",
    y: "0%",
    transition: {
      duration: 1,
      delay: i * 0.03 + 0.2,
      ease: [0,.58,.4,.99]
    }
  })
}

export const TransitionPage = {
  wrapper: {
    initial: {
      y: "0%",
      transition: {
        duration: 0
      }
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 0
      }
    },
    exit: {
      y: "100%",
      transition: {
        duration: 1.5,
        ease: [.3,.6,.7,.1]
      }
    }
  },
  images: [
    {
      initial: {
        y: "0%",
        transition: {
          duration: 0
        }
      },
      animate: {
        y: "-10%",
        transition: {
          duration: 0
        }
      },
      exit: {
        y: "10%",
        transition: {
          duration: .5,
          ease: [.3,.6,.7,.1]
        }
      }  
    }
  ]
}