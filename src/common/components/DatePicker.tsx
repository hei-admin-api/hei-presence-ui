import React from 'react';
import 'antd/dist/antd.css';

import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

export const Datapicker = () => (
    <Space direction="vertical" size={8}>
        <RangePicker showTime />
    </Space>
);