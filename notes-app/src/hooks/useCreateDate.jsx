const useCreateDate = () => {
  const dateObj = new Date()
  const month = dateObj.getMonth()
  let monthName
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let day = days[dateObj.getDay()]
  let hr = dateObj.getHours()
  let ampm = 'am'
  if (hr > 12) {
    hr -= 12
    ampm = 'pm'
  }

  switch (month) {
    case 0:
      monthName = 'Jan'
      break
    case 1:
      monthName = 'Feb'
      break
    case 2:
      monthName = 'Mar'
      break
    case 3:
      monthName = 'Apr'
      break
    case 4:
      monthName = 'May'
      break
    case 5:
      monthName = 'Jun'
      break
    case 6:
      monthName = 'Jul'
      break
    case 7:
      monthName = 'Aug'
      break
    case 8:
      monthName = 'Sep'
      break
    case 9:
      monthName = 'Oct'
      break
    case 10:
      monthName = 'Nov'
      break
    case 11:
      monthName = 'Dec'
      break
  }
  const date = `${day.length >3 ?(day.substring(0,3)): day } ${dateObj.getDate()} ${monthName},${dateObj.getFullYear()} at ${hr}:${dateObj.getMinutes()}${ampm}`

  return date
}

export default useCreateDate
