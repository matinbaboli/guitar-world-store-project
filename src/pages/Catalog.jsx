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
import CardCustomized from "../components/Card"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import UpArrow from "../../public/up-arrow-icon.svg?react"

import data from "../data.json"


let mostExpensiveItem = Math.max.apply(null, data.map(item => {
    return item.price
}))



const Catalog = ({windowWidth}) => {
    const [open, setOpen] = useState(false)
    const [finalData, setFinalData] = useState(data)

    // function changingData(newData) {
    //     setFinalData(newData)
    //     console.log(finalData)
    // }


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

                {finalData.map((guitar) => {
                    return (
                        <Grid key={guitar.id} item>
                            <CardCustomized small data={guitar}/>
                        </Grid>
                    )
                })}
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
                <DrawerContent finalData={finalData} setFinalData={setFinalData}/>
            </Drawer>
            </>
            :
            // <Box
            //         position="absolute"
            //         top={0}
            //         bottom={0}
            //         margin={100}
            // >   
                <Drawer 
                variant="permanent" 
                anchor="right"
                sx={{
                    [`& .MuiDrawer-paper`]: { width: "300px", boxSizing: 'border-box',
                        // position:{md: "sticky"},
                        // top:"0px",
                
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        // right: 0,
                    }
                }}
                >
                    <DrawerContent setFinalData={setFinalData}/>
                </Drawer>
            // </Box>
        }
        </SectionContainer>
    )
}







const DrawerContent = ({setFinalData}) => {
    const [sort, setSort] = useState("none")
    const [type, setType] = useState("All")
    const [sliderValue, setSliderValue] = useState([0, mostExpensiveItem])


    function sortData() {
        const compareFunctions = {
            none: {method: (guitar1, guitar2) => null},
            rating: {method: (guitar1, guitar2) => (guitar1.rating < guitar2.rating) ? 1 : (guitar1.rating > guitar2.rating) ? -1 : 0 },
            lowestPrice: {method: (guitar1, guitar2) => (guitar1.price > guitar2.price) ? 1 : (guitar1.price < guitar2.price) ? -1 : 0 },
            highestPrice: {method: (guitar1, guitar2) => (guitar1.price < guitar2.price) ? 1 : (guitar1.price > guitar2.price) ? -1 : 0 },
        }
        const newData = [].concat(data).sort(compareFunctions[sort].method)
        return newData
    }

    function filterBasedOnType(sortedData) {
        let newData
        if(type === "All") {
            newData = sortedData
        } else {
            newData = sortedData.filter((item) => item.type === type)
        }
        return newData
    }

    function limitBasedOnPriceRange(filteredData) {
        let newData = filteredData.filter((item) => item.price >= sliderValue[0] && item.price <= sliderValue[1])
        return newData
        // console.log(sliderValue)
    }

    function applyFilters() {
        let sortedData = sortData()
        let filteredData = filterBasedOnType(sortedData)
        let limitedDataBasedOnPrice = limitBasedOnPriceRange(filteredData)
        setFinalData(limitedDataBasedOnPrice) 
    }

    function removeAllFilters() {
        setSort("none")
        setType("All")
        setSliderValue([0, mostExpensiveItem])
        setFinalData(data)
    }

    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
        sx={{
           p: "20px",
           minHeight: "300px",
       }}>
           
           <Box
           display="flex"
           flexDirection="column"
           justifyContent="start"
           alignItems="center"
           position={{md: "sticky"}}
           top="0px"
   
   
    
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
                       <MenuItem value="none">
                       <em>None</em>
                       </MenuItem>
                       <MenuItem value="rating">By Rating</MenuItem>
                       <MenuItem value="lowestPrice">By Lowest Price</MenuItem>
                       <MenuItem value="highestPrice">By highest Price</MenuItem>
                   </Select>
               </FormControl>
               <Divider variant="fullWidth" sx={{marginBlock: "30px", width: "100%"}}></Divider>
               <FormControl sx={{ width: "100%" }}>
                   <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
                   <RadioGroup
                       row
                       aria-labelledby="demo-controlled-radio-buttons-group"
                       name="controlled-radio-buttons-group"
                       value={type}
                       onChange={(e) => setType(e.target.value)}
                   >
                       <FormControlLabel value="Classical" control={<Radio />} label="Classical" />
                       <FormControlLabel value="Acoustic" control={<Radio />} label="Acoustic" />
                       <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
                       <FormControlLabel value="All" control={<Radio />} label="All" />
                   </RadioGroup>
               </FormControl>
               <Box sx={{ width: "99%", mt: "50px", mb: "70px" }}>
                   <FormLabel id="demo-controlled-radio-buttons-group">Price Range</FormLabel>
                   <Slider
                       getAriaLabel={() => 'Price range'}
                       value={sliderValue}
                       onChange={(e) => setSliderValue(e.target.value)}
                       valueLabelDisplay="auto"
                       max={mostExpensiveItem}
                    //    getAriaValueText={() => `$${sliderValue}`}
                       valueLabelFormat={(value) => `$${value}`}
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
               <Button variant="outlined" onClick={removeAllFilters}>
                   Remove Changes
               </Button>
               <Button variant="contained" onClick={applyFilters}>
                   Apply
               </Button>
           </Box>
       </Box>

    )
}


export default Catalog

// after implementing useContext learn how to get height of things to to fix the settings button going under the footer