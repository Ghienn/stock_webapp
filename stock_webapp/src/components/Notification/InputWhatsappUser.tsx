import { Form, Input, Space } from 'antd'

export default function InputWhatsappUser() {
    return (
        <Form.Item
            label='WhatsApp number'
            className='w-full'
            rules={[
                {
                    required: true,
                    message: 'Please input your WhatsApp number'
                }
            ]}
        >
            <Space.Compact
                size='large'
                className='w-full'
            >
                <Form.Item
                    name='whatsapp_area_code'
                    noStyle
                    initialValue='+84'
                    className='text-zinc-950 items-center'
                >
                    <Input className='w-3/12' />
                </Form.Item>
                <Form.Item
                    name='whatsapp_number'
                    noStyle
                >
                    <Input
                        className='w-9/12'
                        maxLength={9}
                        minLength={9}
                    />
                </Form.Item>
            </Space.Compact>
        </Form.Item>

        // <div className="flex items-center py-2">
        //     <div className="flex items-center">
        //         <label htmlFor="" className="text-sm block font-bold">WhatsApp number:</label>
        //         <input type="text" className="text-sm w-full p2 m2 border border-gray-300 rounded mt-1" />
        //     </div>
        // </div>
    )
}
