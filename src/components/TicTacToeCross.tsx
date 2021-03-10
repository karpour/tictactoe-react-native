import * as React from "react"
import Svg, { SvgProps, Path, Line } from "react-native-svg"

function TicTacToeCross(props: SvgProps) {
  return (
    <Svg width="100%" height="100%" viewBox="-50 -50 100 100" {...props}>
      <Line x1="-40" x2="40" y1="-40" y2="40" stroke="#FF665C" strokeWidth={15} strokeLinecap="round" />
      <Line x1="40" x2="-40" y1="-40" y2="40" stroke="#FF665C" strokeWidth={15} strokeLinecap="round" />
    </Svg>
  )
}

export default TicTacToeCross