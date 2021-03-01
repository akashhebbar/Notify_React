import React, { useState } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

function Time() {
  const [value, onChange] = useState(['10:00', '11:00']);

  return (
    <div className="ml-5">
      <TimeRangePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Time