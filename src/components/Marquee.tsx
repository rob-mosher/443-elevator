import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

type MarqueeProps = {
  isLeftToRight?: boolean;
  text: string;
  speedMultiplier?: number;
};

export default function Marquee({ isLeftToRight = true, speedMultiplier = 1, text }: MarqueeProps) {
  // TODO take size of below array dynamically into account
  const baseMarqueeSpeed = 3000 // Base speed of the marquee scroll

  const marqueeVariants = {
    animate: {
      x: [0, baseMarqueeSpeed * (isLeftToRight ? -1 : 1) * speedMultiplier],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 20, // in seconds
          ease: 'linear',
        },
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 6.4, // in seconds
        delay: 3, // in seconds
      },
    },
  }

  return (
    <motion.div
      className={clsx(
        'flex w-full overflow-hidden whitespace-nowrap bg-yellow-300/50 py-2 text-lg uppercase text-black shadow-inner sm:text-2xl',
        isLeftToRight ? 'justify-start' : 'justify-end',
      )}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="inline-block space-x-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {Array(100).fill(`${text} `).map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
