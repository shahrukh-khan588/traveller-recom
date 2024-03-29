import { makeStyles } from "@mui/styles";
import { themeShadows } from "../../theme/shadows";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
    padding: "10px",
    margin: " 20px auto",
  },
  Container: {
    overflowX: "hidden !important",
    width: "100vw",
    overflowY: "scroll",
    marginLeft: "1%",
    display: "flex",
    [theme.breakpoints.down("msm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("msm")]: {
      flexDirection: "row",
    },
  },
  firstBlock: {
    [theme.breakpoints.down("msm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("msm")]: {
      width: "100%",
    },
  },
  secondBlock: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("msm")]: {
      height: "95vh",
    },
    overflowY: "scroll",
    [theme.breakpoints.down("msm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("msm")]: {
      width: "60%",
      height: "95vh",
    },
  },
  mainCard: {
    marginTop: "2rem",
    maxHeight: "90vh",
    width:'98%',
    // paddingInline:'2%',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "12px",
  },
  TripsContainer: {
    [theme.breakpoints.down("msm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("msm")]: {
      width: "100%",
    },
  },
  subheading: {
    margin: "20px",
  },
  mainPaper: {
    "&.MuiPaper-root": {
      justifyContent: "space-between",
      display: "flex",
      width: "80%",
      borderRadius: "12px",
      margin: "1rem auto",
      border: `1px solid ${theme.palette.primary.main}`,
      minHeight: "7vh",
      padding: "20px 10px",
      boxShadow: themeShadows().primary,
      "@media (max-width: 1000px)": {
        width: "100%",
      },
    },
  },
  img: {
    width: "100%",
    height: "80%",
    objectFit: "cover",
    borderRadius: "24px 24px 0px 0px",
  },
  imgwrapper: {
    height: "400px",
    borderRadius: "24px 24px 0px 0px",
  },
  squreimg: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
    borderRadius: "24px",
  },

  content_main: {
    position: "relative",
    zIndex: "1",
    opacity: "0.4",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    height: "100%",
    display: "grid",
    alignItems: "center",
    borderRadius: "24px",
  },
  content_sub: {
    position: "relative",
    zIndex: "2",
  },
  avatar: {
    position: "relative",
    top: "-37px",
    left: "-23px",
    width: "100%",
  },
  btnHire: {
    position: "relative",
    top: "27px",
    left: "146px",
  },
  svg: {
    width: "36.4%",
    zIndex: 999,
    top: "-304px",
    left: " -6.2%",
    position: "absolute",
    animation: "floaty3 15s ease-in-out infinite",
  },
  event: {
    maxWidth: "80%",
    margin: "5rem auto",
    display: "flex",
    justifyContent: "space-between",
  },

  heading: {
    fontsize: "24px",
  },
  eventImg: {
    width: "200px",
    height: "200px",
    borderRadius: "1.5rem",
  },
}));
export default useStyles;
