import React from "react";
import {DatePicker, TimePicker} from "antd/es";
import {datepicker} from "../../../types/models/dateInput";
;

export class InputDate extends React.Component<datepicker> {
    render() {
        if (this.props.type === 'time') return <TimePicker onChange={this.props.onChange}/>;
        if (this.props.type === 'date') return <DatePicker onChange={this.props.onChange}/>;
    }
}