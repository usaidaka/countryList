import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({
  onChange,
  placeholder = "Region",
  value = "region",
  setter,
  list,
}) {
  return (
    <div>
      <FormControl sx={{ marginTop: 0, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">
          {placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={placeholder}
          onChange={(e) => setter(e.target.value)}
          onClick={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {list.map((item, idx) => {
            console.log(item);
            return (
              <MenuItem value={item} key={idx}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
