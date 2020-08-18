import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#7289da",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

export default InputField;
