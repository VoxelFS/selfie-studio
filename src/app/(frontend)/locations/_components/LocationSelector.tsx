'use client'

import { motion } from 'framer-motion';

type Props = {
  stores: { location: string }[]
  curr: number
  setCurr: (index: number) => void
}

const colours = ['#FFD780', '#FFB5CF', '#E7B7E3']
const borderColours = ['#FFC74D', '#FF82AE', '#DA91D4']

export default function LocationSelector({ stores, curr, setCurr }: Props) {
  return (
    <div className="flex space-x-3 md:space-x-8">
      {stores.map((store, index) => (
        <motion.span
          key={index}
          onClick={() => setCurr(index)}
          whileHover={{ scale: 1.15 }}
          animate={{ scale: curr === index ? 1.15 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="py-1 px-2 text-xs md:text-sm rounded-2xl font-medium text-white cursor-pointer"
          style={{
            backgroundColor: colours[index % colours.length],
            border:
              curr === index
                ? `2px solid ${borderColours[index % borderColours.length]}`
                : '2px solid transparent',
          }}
        >
          {store.location}
        </motion.span>
      ))}
    </div>
  )
}
