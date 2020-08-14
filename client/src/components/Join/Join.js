import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Spring } from "react-spring/renderprops";
import LogoCard from "./LogoCard/LogoCard";
import MouseParallax from "./MouseParallax/MouseParallax";
import useStyles from "./JoinStyles";
import InputField from "./InputField";

const SignIn = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Box component="div" style={{ background: "#36393F", height: "100vh" }}>
      <MouseParallax />

      <Grid container justify="center">
        <form name="contact" className={classes.form}>
          <Spring
            from={{
              scale: 10,
              opacity: 0,
              freq: "0.0175, 0.0",

              width: 100,
              padding: 0,
              transform: "translate3d(400px,0,0) scale(2) rotateX(90deg)",
              shape: "M20,380 L380,380 L380,380 L200,20 L20,380 Z",
            }}
            to={{
              scale: 150,
              opacity: 1,
              freq: "0.0, 0.0",

              width: "auto",
              transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
              shape: "M20,20 L20,380 L380,380 L380,20 L20,20 Z",
            }}
            config={{ duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                {" "}
                <LogoCard />{" "}
              </div>
            )}
          </Spring>
          <br />
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
            config={{ duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
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
              </div>
            )}
          </Spring>
          <br />
          <Spring
            from={{
              scale: 10,
              opacity: 0,
              transform: "scale(0.3)",
              freq: "0.0175, 0.0",
            }}
            to={{
              scale: 150,
              opacity: 1,
              transform: "scale(1)",
              freq: "0.0, 0.0",
            }}
            config={{ duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
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
              </div>
            )}
          </Spring>
        </form>
      </Grid>
    </Box>
  );
};

export default SignIn;
