import React from 'react'
import StockSelection from '../Notification/StockSelection'
import TimeFrameSelection from '../Notification/TimeFrameSelection'
import InputTelegramUser from '../Notification/InputTelegramUser'
import InputWhatsappUser from '../Notification/InputWhatsappUser'
import { useEffect, useRef, useState } from 'react'
import NotifyCondition from '../Notification/NotifyCondition'
import IndicatorModel from '@/model/Indicator'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"


const FormField = () => {

    const [symbol, setSymbol] = useState<string>()
    const [timeFrame, setTimeFrame] = useState<string>()
    const [indicators, setIndicators] = useState<IndicatorModel[]>([])
    const [activeTab, setActiveTab] = React.useState("order");
    const data = [
      {
        label: "Order",
        value: "order",
      },
      {
        label: "Notification",
        value: "notification"
      },
    ]
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto py-4 border rounded-lg bg-white'>
      <Tabs id="custom-animation" value="1">
      <TabsHeader className='bg-gray-200 font-medium mx-4 my-2 text-sm'>
        {data.map(({ label, value }) => (
      <Tab key={value} value={value}
          onClick={() => setActiveTab(value)}
            className={activeTab === value ? "z-30 flex-auto relative flex list-none flex-wrap rounded-lg bg-white p-2 shadow-none font-medium text-cyan-700" : "p-2 hover:text-cyan-700"}>
          {label}
      </Tab>
      ))}
      </TabsHeader>
      <TabsBody
        animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
      }}
    >
      {data.map(({ value }) => (
        <TabPanel key={value} value={value}>
        {
        <div className="items-center pl-2 pr-4 pt-2 rounded-lg">
                <StockSelection  setSymbol={setSymbol}/>
                <TimeFrameSelection setTimeFrame={setTimeFrame}/>
                <InputTelegramUser/>
                <InputWhatsappUser/>
                <NotifyCondition indicators={indicators}/>
                <button className="bg-cyan-700 text-white py-2 px-4 rounded-lg m-auto flex items-center">
                  Notify me
              </button>
          </div>  
        }
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
    </div>
  )
}

export default FormField