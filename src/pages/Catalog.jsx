import React, {useState, useRef} from "react"
import {
    Box,
    Drawer,
    Typography,
    Button,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Slider,
    Grid,
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import Card from "../components/Card"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import UpArrow from "../../public/up-arrow-icon.svg?react"

const Catalog = ({windowWidth}) => {
    const [open, setOpen] = useState(false)
    const [sort, setSort] = useState()
    const [sliderValue, setSliderValue] = useState([0, 100])

    const drawerContent = () => {
        return (
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"

            sx={{
               p: "20px",
               minHeight: "300px",
           }}>
               
               <Box
               display="flex"
               flexDirection="column"
               justifyContent="start"
               alignItems="center" 
               >
                   <FormControl sx={{ m: 1, width: "100%" }} size="small">
                   <InputLabel id="demo-select-small-label">Sort</InputLabel>
                       <Select
                           labelId="demo-select-small-label"
                           id="demo-select-small"
                           value={sort}
                           label="Sort"
                           onChange={(e) => setSort(e.target.value)}
                       >
                           <MenuItem value="">
                           <em>None</em>
                           </MenuItem>
                           <MenuItem value={10}>By Rating</MenuItem>
                           <MenuItem value={20}>By Lowest Price</MenuItem>
                           <MenuItem value={30}>By highest Price</MenuItem>
                       </Select>
                   </FormControl>
                   <Divider variant="fullWidth" sx={{marginBlock: "30px", width: "100%"}}></Divider>
                   <FormControl sx={{ width: "100%" }}>
                       <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
                       <RadioGroup
                           row
                           aria-labelledby="demo-controlled-radio-buttons-group"
                           name="controlled-radio-buttons-group"
                           // value={}
                           // onChange={}
                       >
                           <FormControlLabel value="classical" control={<Radio />} label="Classical" />
                           <FormControlLabel value="acoustic" control={<Radio />} label="Acoustic" />
                           <FormControlLabel value="electric" control={<Radio />} label="Electric" />
                           <FormControlLabel value="all" control={<Radio />} label="All" />
                       </RadioGroup>
                   </FormControl>
                   <Box sx={{ width: "99%", mt: "50px", mb: "70px" }}>
                       <FormLabel id="demo-controlled-radio-buttons-group">Price Range</FormLabel>
                       <Slider
                           getAriaLabel={() => 'Price range'}
                           value={sliderValue}
                           onChange={(e) => setSliderValue(e.target.value)}
                           valueLabelDisplay="auto"
                           // getAriaValueText={valuetext}
                       />
                   </Box>
               </Box>
               <Box
               display="flex"
               justifyContent="space-between"
                sx={{
                    width: "100%"
                }}
               >
                   <Button variant="outlined">
                       Remove Changes
                   </Button>
                   <Button variant="contained">
                       Apply
                   </Button>
               </Box>
           </Box>

        )
    }

    return (
        <SectionContainer backgroundColor={generalBackgroundColor}>
            <Grid container justifyContent="center"
            alignContent="center" gap={{xs: 8, sm: 4}} marginBlock="50px" sx={{
                width: {md: "calc(105% - 300px)"}
            }}>
                <Grid item xs={12}>
                    <Typography variant="h2" component="h1" align="center" mb="50px">
                        Our Products
                    </Typography>
                </Grid>
                <Grid item>
                    <Card small/>
                </Grid>
                <Grid item>
                    <Card small/>
                </Grid>
                <Grid item>
                    <Card small/>
                </Grid>
                <Grid item>
                    <Card small/>
                </Grid>
            </Grid>
           {windowWidth < 900 ? <>
           <Button
                variant="contained"
                endIcon={<UpArrow/>} 
                onClick={() => setOpen(true)}
                sx={{
                    position: "fixed",
                    bottom: "0px",
                    left: 0,
                    right: 0,
                    marginInline: "100px"
                    
                    }}>
                    catalog settings
            </Button>
            <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            >
                {drawerContent()}
            </Drawer>
            </>
            :
            <Drawer 
            variant="permanent" 
            anchor="right"
            sx={{
                [`& .MuiDrawer-paper`]: { width: "300px", boxSizing: 'border-box',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    // right: 0,
                 }
            }}
            >
                {drawerContent()}
            </Drawer>
        }
        </SectionContainer>
    )
}

export default Catalog

// after implementing useContext learn how to get height of things to to fix the settings button going under the footer