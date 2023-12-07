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
            <DateTimePicker className="custom-datetimepicker"
              label="12/24/2021"
              value={datePickerDateTimePickerValue}
              onChange={(newValue) => {
                setDatePickerDateTimePickerValue(newValue);
              }}
              components={{
                OpenPickerIcon: () => (
                  <div className="icon-wrapper">
                    <Icon>calendar_today_sharp</Icon>
                  </div>
                ),
              }}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
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
