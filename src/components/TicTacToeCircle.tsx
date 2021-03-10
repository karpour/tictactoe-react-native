import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"

const TicTacToeCircle = (props: SvgProps) => {
  return (
    <Svg width="100%" height="100%" viewBox="-50 -50 100 100" {...props}>
      <Circle r={40} stroke="#FF665C" strokeWidth={15} strokeLinecap="round" />
    </Svg>
  )
}

export default TicTacToeCircle;