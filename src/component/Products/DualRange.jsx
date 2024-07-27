import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

const DualRange = () => {
  const [values, setValues] = useState([0, 10000])
  const STEP = 1
  const MIN = 0
  const MAX = 10000

  return (
    <div className='w-full px-4 py-6'>
      <div className='text-lg font-medium mb-4 text-center'>
        {values[0]}
        <small className='ml-1 font-bold'>
          <sup>DA</sup>
        </small>{' '}
        - {values[1]}
        <small className='ml-1 font-bold'>
          <sup>DA</sup>
        </small>
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className='w-full h-1 bg-gray-300 rounded'
            style={{
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#000', '#ccc'],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged, index }) => (
          <div
            key={index}
            {...props}
            className='w-4 h-4 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
          />
        )}
      />
    </div>
  )
}

export default DualRange
