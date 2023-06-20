import React from 'react'
import StockSelection from '../Notification/StockSelection'
import TimeFrameSelection from '../Notification/TimeFrameSelection'
import InputTelegramUser from '../Notification/InputTelegramUser'
import InputWhatsappUser from '../Notification/InputWhatsappUser'
import { useEffect, useRef, useState } from 'react'
import NotifyCondition from '../Notification/NotifyCondition'
import IndicatorModel from '@/model/Indicator'


const FormField = () => {

    const [symbol, setSymbol] = useState<string>()
    const [timeFrame, setTimeFrame] = useState<string>()
    const [indicators, setIndicators] = useState<IndicatorModel[]>([])

  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto px-4 py-4 border rounded-lg bg-white'>
        Select Condition
        <div className="items-center pl-2 pr-4 pt-4 rounded-lg">
            <StockSelection  setSymbol={setSymbol}/>
            <TimeFrameSelection setTimeFrame={setTimeFrame}/>
            <InputTelegramUser/>
            <InputWhatsappUser/>
            <NotifyCondition indicators={indicators} side={''}/>
        </div>
    </div>
  )
}

export default FormField