import ReactECharts from 'echarts-for-react'

import React, { useRef, useEffect } from "react"
import { init, getInstanceByDom } from "echarts"
import type { CSSProperties } from "react"
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts"

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

const Chart = () => {
  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>

    </div>
  )
}

export default Chart