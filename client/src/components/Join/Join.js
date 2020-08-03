import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import logo from "../../icons/apple-touch-icon.png";
import { Spring } from "react-spring/renderprops";
import LogoCard from "./LogoCard/LogoCard"
import MouseParallax from "./MouseParallax/MouseParallax"

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "6rem",
  },
  button: {
    marginTop: "1rem",
    color: "#7289da",
    borderColor: "#7289da",
  },
}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#7289da",
    },
    "& label": {
      color: "#b9bbbe",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b9bbbe",
      },
      "&:hover fieldset": {
        borderColor: "#b9bbbe",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b9bbbe",
      },
    },
  },
})(TextField);

const SignIn = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Box
      component="div"
      style={{ background: "#36393F", height: "100vh",  }}
    >
      {/* <MouseParallax/> */}
      <Spring
        from={{
          scale: 10,
          opacity: 0,
          transform: "scale(0.9)",
          freq: "0.0175, 0.0",
        }}
        to={{
          scale: 150,
          opacity: 1,
          transform: "scale(1)",
          freq: "0.0, 0.0",
        }}
        config={{ duration: 3000 }}
      >
        {(props) => (
          <Grid container justify="center" style={props}>
            <form name="contact" className={classes.form}>
              {/* <img
                src={logo}
                style={{ height: "30vmin", width: "30vmin" }}
                alt="logo"
              /> */}
<LogoCard style={{ justify: "center"}}/>
              <br />
              <InputField
                fullWidth={true}
                type="text"
                name="name"
                label="Name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
                onChange={(event) => setName(event.target.value)}
              ></InputField>
              <br />
              <InputField
                fullWidth={true}
                type="email"
                name="email"
                label="Chat Room Name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
                onChange={(event) => setRoom(event.target.value)}
              ></InputField>

              <br />
              <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
              >
                <Button
                  type="submit"
                  className={classes.button}
                  fullWidth={true}
                  variant="outlined"
                  endIcon={<SendIcon />}
                >
                  JOIN CHAT
                </Button>
              </Link>
            </form>
          </Grid>
        )}
      </Spring>
    </Box>
  );
};

export default SignIn;
