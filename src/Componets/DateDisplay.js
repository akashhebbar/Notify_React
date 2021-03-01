import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const DateDisplay=()=>
{
    const [selectedDate, setSelectedDate]= useState(null)

    return(
<div>
   
    <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} />
    <br></br><input type="text" placeholder="Choose slot"></input>
</div>

    )
}
export default DateDisplay