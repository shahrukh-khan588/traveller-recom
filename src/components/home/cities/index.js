import React, { useEffect } from "react"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import useStyles from "./styles"
import hunzaimg from "../../../assets/images/hunza.jpg"
import sikardu from "../../../assets/images/sikardu.jpg"
import astore from "../../../assets/images/astore.jpg"
import chilas from "../../../assets/images/chilas.jpg"
import phunder from "../../../assets/images/phunder.jpg"
import Rating from "@mui/material/Rating"
import { Typography, Box ,styled} from "@mui/material"

const CursorWrapper=styled(Box)({
  '& .react-multi-carousel-item':{
    display:'grid',
    justifyContent:'center'
  },
  '& .react-multi-carousel-list':{
height:"36rem"
  },
'& .react-multi-carousel-track':{
  margin:"1rem 0",
},
'& .react-multi-carousel-dot-list':{
  margin:'.5rem 0'
}

})
export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    AOS.refresh()
  }, [])
  const classes = useStyles()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1448},
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1448, min: 960},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 960, min: 0 },
      items: 1,
    },
  }

  return (
    <div className={classes.main}>
      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        textAlign="center"
        color="#333"
      >
        <Typography variant="h4">Famous Cities</Typography>
      </Box>
      <CursorWrapper>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        //   customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className={classes.sub_container} >
          <img src={hunzaimg} alt="hnz" className={classes.img} />
          <Box className={classes.detail}>
            <Box
              display="flex"
              alignItems="center"
              padding="30px 17px"
              justifyContent="space-between"
            >
              <Typography className={classes.titles}>Hunza</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Box>
        </div>
        <div data-aos="fade-up" className={classes.sub_container}>
          <img src={sikardu} alt="hnz" className={classes.img} />
          <Box className={classes.detail}>
            <Box
              display="flex"
              alignItems="center"
              padding="30px 17px"
              justifyContent="space-between"
            >
              <Typography className={classes.titles}>Sikardu</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Box>
        </div>
        <div className={classes.sub_container}>
          <img src={astore} alt="hnz" className={classes.img} />
          <Box className={classes.detail}>
            <Box
              display="flex"
              alignItems="center"
              padding="30px 17px"
              justifyContent="space-between"
            >
              <Typography className={classes.titles}>Astore</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Box>
        </div>
        <div className={classes.sub_container}>
          <img src={chilas} alt="hnz" className={classes.img} />
          <Box className={classes.detail}>
            <Box
              display="flex"
              alignItems="center"
              padding="30px 17px"
              justifyContent="space-between"
            >
              <Typography className={classes.titles}>Chilas</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Box>
        </div>
        <div className={classes.sub_container}>
          <img src={phunder} alt="hnz" className={classes.img} />
          <Box className={classes.detail}>
            <Box
              display="flex"
              alignItems="center"
              padding="30px 17px"
              justifyContent="space-between"
            >
              <Typography className={classes.titles}>Phunder</Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
            </Box>
          </Box>
        </div>
      </Carousel>
      </CursorWrapper>
    </div>
  )
}
