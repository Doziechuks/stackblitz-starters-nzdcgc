import {useState,React} from "react";


function useDate(){
    const [date,setDate] = useState({month:"",day:""})

    return {data,setDate};
}

export default useDate;