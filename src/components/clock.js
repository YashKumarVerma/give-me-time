import React, { useState, useEffect } from "react"
import moment from "moment"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { CONSTANT } from "../constants/env"

const Clock = () => {
  /** attach the clock job to the process */
  useEffect(() => {
    /** start the ticker  */
    setInterval(clockJob, 1000 * 0.5)
  })

  /** clock logic here */
  const clockJob = () => {
    const dayStartTimeStamp = moment().startOf("day").unix()
    const currentTimeStamp = moment().unix()

    let secondsPastDayStart = currentTimeStamp - dayStartTimeStamp

    let hoursPastDayStart = Math.floor(secondsPastDayStart / (CONSTANT.SECONDS * CONSTANT.MINUTES))
    const minutesPastDayStart = Math.floor(
      (secondsPastDayStart - hoursPastDayStart * CONSTANT.SECONDS * CONSTANT.MINUTES) / CONSTANT.MINUTES
    )
    secondsPastDayStart = Math.floor(secondsPastDayStart % CONSTANT.SECONDS)
    /** set AM or PM */
    setHalf(hoursPastDayStart >= 12 ? "PM" : "AM")
    hoursPastDayStart = hoursPastDayStart > 12 ? hoursPastDayStart - 12 : hoursPastDayStart

    setHour(Math.floor(hoursPastDayStart))
    setMinute(Math.floor(minutesPastDayStart))
    setSecond(Math.floor(secondsPastDayStart))
  }

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [half, setHalf] = useState("AM")

  return (
    <div className="container my-60 mx-10">
      <div className="flex justify-around font-bold text-8xl">
        <div>{hour}</div>:<div>{minute}</div>:<div>{second}</div>
        <div>{half}</div>
      </div>
    </div>
  )
}

export { Clock }
