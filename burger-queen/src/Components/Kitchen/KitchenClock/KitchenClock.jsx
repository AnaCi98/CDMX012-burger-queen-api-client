// import Clock from 'react-clock';
// import { useState, useEffect } from 'react';
// import 'react-clock/dist/Clock.css';
import './KitchenClock.css';

export default function KitchenClock() {
  // const [value, setValue] = useState(new Date());

  // useEffect(() => {
  //   // const interval = setInterval(() => setValue(new Date()), 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <object className="clock-box">
      <div className="kitchen-clock">
        {/* <Clock value={value} /> */}
      </div>
    </object>
  );
}
