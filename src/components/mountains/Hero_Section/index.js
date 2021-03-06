import React, { useEffect } from "react"
import useStyles from "../styles"
import { Box, Typography, Paper } from "@mui/material"
import AOS from "aos"
import "aos/dist/aos.css"
// import Select from "../../Ui_components/Select";
// import Button from "../../Ui_components/Button";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    AOS.refresh()
  }, [])
  const classes = useStyles()
  return (
    <>
      <div className={classes.root} style={{position:'relative'}}>
        <Box maxWidth="50%" margin="auto 0px" textAlign="center" color="#fff">
          <Typography variant="h3">
            FOUND AMAZING MOUNTAIN TO EXPLORE
          </Typography>
          <Typography variant="body2" className={classes.subheading}>
            Start to getting bored with your activities ? it,s time to start
            your adventures
          </Typography>
        </Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute', bottom:0}}> 
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,224L17.1,229.3C34.3,235,69,245,103,229.3C137.1,213,171,171,206,144C240,117,274,107,309,122.7C342.9,139,377,181,411,202.7C445.7,224,480,224,514,192C548.6,160,583,96,617,101.3C651.4,107,686,181,720,186.7C754.3,192,789,128,823,96C857.1,64,891,64,926,101.3C960,139,994,213,1029,229.3C1062.9,245,1097,203,1131,154.7C1165.7,107,1200,53,1234,37.3C1268.6,21,1303,43,1337,64C1371.4,85,1406,107,1423,117.3L1440,128L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      </div>
    </>
  )
}
