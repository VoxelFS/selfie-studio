'use client'

import { motion } from 'framer-motion';

type Props = {
  stores: { location: string }[]
  curr: number
  setCurr: (index: number) => void
}

const colours = ['#FFD780', '#FFB5CF', '#E7B7E3']
const borderColours = ['#ffbf35', '#FF82AE', '#DA91D4']
const textColours = ['#945000', '#c01551', '#7a1171']

export default function LocationSelector({ stores, curr, setCurr }: Props) {
  return (
    <div className="flex gap-3 md:gap-8 flex-wrap">
      {stores.map((store, index) => (
        <span
          key={index}
          onClick={() => setCurr(index)}
          className={`py-1 px-4 text-xs md:text-sm rounded-2xl font-medium  cursor-pointer
                      transition duration-[400ms] hover:rotate-[5deg] hover:opacity-75 hover:duration-200`}
          style={{
            backgroundColor: colours[index % colours.length],
            border:
              curr === index
                ? `2px solid ${borderColours[index % borderColours.length]}`
                : '2px solid transparent',
            color: textColours[index % textColours.length],
            transform:
              curr === index
                ? 'scale(1.15)'
                : 'scale(1)',

          }}
        >
          {store.location}
        </span>
      ))}
    </div>
  )
}

// <motion.span
//   key={index}
//   onClick={() => setCurr(index)}
//   whileHover={{ scale: 1.15 }}
//   animate={{ scale: curr === index ? 1.15 : 1 }}
//   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//   className="py-1 px-4 text-xs md:text-sm rounded-2xl font-medium text-white cursor-pointer"
//   style={{
//     backgroundColor: colours[index % colours.length],
//     border:
//       curr === index
//         ? `2px solid ${borderColours[index % borderColours.length]}`
//         : '2px solid transparent',
//   }}
// >
//   {store.location}
// </motion.span>
