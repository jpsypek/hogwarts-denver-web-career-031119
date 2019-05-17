import React from 'react'

const HogDetails = (props) => {

  return (
    <div>
    <p>{props.specialty}</p>
    <p>{props.greased ? "Greasy" : "Not Greasy"}</p>
    <p>Weight: {props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
    <p>Best Medal: {props['highest medal achieved']}</p>
    </div>
  )

}
export default HogDetails
