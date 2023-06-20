'use client'

import Nav from "@/components/Nav/page"
import IndicatorModel from '@/model/Indicator'
import StockSelection from "@/components/Notification/StockSelection"
import TimeFrameSelection from "@/components/Notification/TimeFrameSelection"
import InputTelegramUser from "@/components/Notification/InputTelegramUser"
import NotifyCondition from "@/components/Notification/NotifyCondition"
import InputWhatsappUser from "@/components/Notification/InputWhatsappUser"
import ParameterType from "@/model/ParameterType"
import ReturnModel from '@/model/Return'
import ParameterModel from '@/model/Parameter'

import { clientApi } from '@/lib/axios'
import { Button, Col, ConfigProvider, Form, Layout, Row, Typography, notification } from 'antd'
import { useEffect, useRef, useState } from 'react'
import FormField from "@/components/Form/FormField"
import TopCards from "@/components/TopCards/TopCards"
import Chart from "@/components/Chart/Chart"

const { Title } = Typography

export default function Notification() {

  const [api, contextHolder] = notification.useNotification()

    const [symbol, setSymbol] = useState<string>()
    const [timeFrame, setTimeFrame] = useState<string>()
    const [indicators, setIndicators] = useState<IndicatorModel[]>([])
    const buttonSubmit = useRef(null)

    useEffect(() => {
      clientApi.get('/indicators/').then(res => {
          const indicatorsData = res.data as []

          // Parse indicators
          const thisIndicators = indicatorsData.map((indicator: IndicatorModel) => {
              // Parse parameters
              const parameters = indicator.parameters.map((parameter: ParameterModel) => {
                  return {
                      ...parameter,
                      type: ParameterType[parameter.type as unknown as keyof typeof ParameterType]
                  } as ParameterModel
              })

              // Parse returns
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const returns = indicator.returns?.map((ret: any) => {
                  return {
                      ...ret,
                      value: ret.name
                  } as ReturnModel
              })

              // Return parsed Indicator Model
              return {
                  ...indicator,
                  parameters,
                  returns
              } as unknown as IndicatorModel
          })

          // Set indicators
          setIndicators(thisIndicators)
      })
  }, [])

  const [form] = Form.useForm()

  // handle form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
      clientApi.post('/strategies/', values).then(res => {
          if (res.status === 200) {
              api.info({
                  message: 'Added notification',
                  description: "You'll be notified when the condition is met"
              })
          }
      })
  }

  return (
    <>
      <Nav/>
 
      <main className="bg-gray-100 min-h-screen">
        <TopCards/>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <Chart/>
          <FormField/>
        </div>
      </main>
    </>
  )
}
