import React,{useState,useEffect} from 'react'
import Loading from './Loading';
const Timer = () => {
     const [days, setDays] = useState();
     const [hours, setHours] = useState();
     const [mins, setMins] = useState();
     const [sec, setSec] = useState();
     const calculateTime = () => {
       const date = new Date();
       const dDay = new Date("7 January 2022");
       let dayCount = Math.floor((dDay - date) / (1000 * 24 * 60 * 60));
       let hrsCount = Math.floor(
         ((dDay - date) % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
       );
       let minCount = Math.floor(
         (((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) /
           (1000 * 60)
       );
       let secCount = Math.floor(
         ((((dDay - date) % (1000 * 24 * 60 * 60)) % (1000 * 60 * 60)) %
           (1000 * 60)) /
           1000
       );

       setSec(secCount);
       setDays(dayCount);
       setHours(hrsCount);
       setMins(minCount);
     };

     useEffect(() => {
     
       setInterval(() => {
         calculateTime();
       }, 1000);
     }, []);
     if(sec==undefined || days==undefined || hours==undefined || mins==undefined){
        return <>
        <Loading/>
        </>
     }
    return (
      <>
        <main className="timer">
          <div className="time">
            <span className="data">{days < 10 ? `0${days}` : days}</span>
            <span className="label">DAYS</span>
          </div>
          {/* <div className="colon">:</div> */}
          <div className="time">
            <span className="data">{hours < 10 ? `0${hours}` : hours}</span>
            <span className="label">HOURS</span>
          </div>{" "}
          {/* <div className="colon">:</div> */}
          <div className="time">
            <span className="data">{mins < 10 ? `0${mins}` : mins}</span>
            <span className="label">MINUTES</span>
          </div>{" "}
          {/* <div className="colon">:</div> */}
          <div className="time">
            <span className="data">{sec < 10 ? `0${sec}` : sec}</span>
            <span className="label">SECONDS</span>
          </div>
        </main>
      </>
    );
}

export default Timer
