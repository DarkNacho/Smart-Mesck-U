import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./GraphContainer.css";

const GraphContainer = ({iconPath, title, graphPath, edit  }) => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="graphcontainer">
        <div className="title2">
          <img className="icon1" alt="" src={iconPath} />
          <b className="title3">{title}</b>
          {edit && <b className="text11">Edit</b>}
          <div >
                <TextField className="custom-datetimepicker"
                id="datetime-local"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </div>
        </div>
        <iframe className="iframe" src={graphPath} title="Graph" />
      </div>
    </LocalizationProvider>
  );
};

export default GraphContainer;
