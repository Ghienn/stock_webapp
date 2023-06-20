import IndicatorModel from '@/model/Indicator'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Select, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import Indicator from '../side/Indicator'

const { Title } = Typography

type props = {
    side: string
    indicators: IndicatorModel[]
}

export default function NotifyCondition(props: props) {
    const { indicators } = props
    // const [color, setColor] = useState<string>()
    const [selectingIndicator, setSelectingIndicator] = useState<IndicatorModel>()

    // useEffect(() => {
    //     if (side === 'notification') {
    //         setColor('black')
    //     }
    // }, [side])

    return (
        <div className={`rounded-lg w-full`}> 
            <Form.List name='indicators'>
                {(fields, { add, remove }) => (
                    <>
                        <Form.Item 
                            label = "Select Indicator"
                            className='w-full'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your WhatsApp number'
                                }
                            ]}>
                            <Space.Compact
                                size='large'
                                className='w-full'
                            >
                                <Select
                                    className='w-full'
                                    showSearch
                                    placeholder={`Select indicator`}
                                    optionFilterProp='children'
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '')
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    onSelect={value => {
                                        setSelectingIndicator(indicators.find(e => e.name === value))
                                    }}
                                    options={indicators.map(e => ({
                                        value: e.name,
                                        label: `${e.label} (${e.name}) `
                                    }))}
                                />
                                <Button 
                                    className='bg-blue rounded-lg'
                                    type='primary'
                                    icon={<PlusOutlined />}
                                    onClick={() => {
                                        if (selectingIndicator) add()
                                    }}
                                >
                                    Add indicator
                                </Button>
                            </Space.Compact>
                        </Form.Item>
                        {fields.map(({ key, name }) => (
                            <Indicator
                                key={key}
                                name={name}
                                side='notification'
                                selectingIndicator={
                                    selectingIndicator ?? {
                                        id: '',
                                        name: '',
                                        label: '',
                                        returns: [],
                                        parameters: []
                                    }
                                }
                                remove={remove}
                            />
                        ))}
                    </>
                )}
            </Form.List>
        </div>
    )
}