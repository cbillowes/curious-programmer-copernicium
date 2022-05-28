import React, { useState } from "react"
import Kebab from "../Kebab"
import { Cards } from "../Card"
import { achievements } from "../../common/achievements"

const Achievements = () => {
  const [visible, toggleVisibility] = useState(false)
  return (
    <>
      <div className="bg-default text-default-script mt-10">
        <Kebab
          className="cursor-pointer"
          onClick={() => toggleVisibility(!visible)}
          expanded={visible}
        >
          This is what I’ve done so far
        </Kebab>
        <div className={`${visible ? "block" : "hidden"}`}>
          <Cards data={achievements} />
        </div>
      </div>
    </>
  )
}

export default Achievements
