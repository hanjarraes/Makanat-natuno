import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({ value, height, width, spacing, className }) {

  const decimals = Number(value) % 1
  const star = []
  const starPlaceholder = []
  let leftPos = 0

  // star
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width
    star.push(
      <div
        className="star"
        key={`start-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing
        }}
      >

      </div>
    )
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`startWithDecimal}`}
        style={{
          left: leftPos,
          width: decimals * width - spacing,
          height: height
        }}
      >

      </div>
    )
  }

  // star placeholder
  for (let index = 0; index < 5; index++) {
    star.push(
      <div
        className="star placeholder"
        key={`startPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing
        }}
      >

      </div>
    )
  }


  return (
    <>
      <div className={['stars', className].join(" ")} style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  )
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number
}
