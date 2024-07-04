import {useEffect, useRef} from "react";
import $ from "jquery";
import datepickerFactory from "jquery-datepicker";

datepickerFactory($);//datepicker setup with jquery $
//datepickerJAFactory($)
export default function DatePicker()
{
    let datePicker = useRef(null);
    useEffect(() => {
        console.log("Initialized", datePicker.current);
        $(datePicker.current).datepicker();
        //$ is jquery and datepicker.current is ref of native DOM element and .datepicker() is method
        return $(datePicker.current).datepicker('destroy');
    }, []);
    console.log("Render");
    return(<div>
        Date &nbsp;
        <input type={"text"} ref={datePicker}/>
    </div>);
}