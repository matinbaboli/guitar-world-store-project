import React, {useState, useContext, useEffect} from "react"
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
    Stack
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import CardCustomized from "../components/Card"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import UpArrow from "../../public/up-arrow-icon.svg?react"
import SettingsIcon from "../../public/settings-icon.svg?react"
import {context} from "../contextApi"

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
        <SectionContainer backgroundColor={generalBackgroundColor} hero={finalData.length === 0}>
                {finalData.length === 0 ?
                    <Stack alignItems="center" gap={3} width={{md: "calc(105% - 300px)"}}>
                        <Box component="img" width="300px" src="images/magnifier.png"/>
                        <Typography variant="h6">Sorry couldn't find the items you where looking for</Typography>    
                    </Stack>
                :
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
                }
           {windowWidth < 900 ? <>
           <IconButton
                // endIcon={<UpArrow/>} 
                onClick={() => setOpen(true)}
                sx={{
                    position: "fixed",
                    top: 180,
                    // left: 0,
                    right: -1,
                    zIndex: 5,
                    pr: 2.3,
                    pl: 1.6,
                    paddingBlock: 1.4,

                    // marginInline: "100px"
                    backgroundColor: darkBackgroundColor,
                    borderRadius: "10px",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    }}>
                    <SettingsIcon/>
            </IconButton>
            <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                [`& .MuiDrawer-paper`]: { width: {xs: "80%", sm: "60%"}}
            }}
            >
                <DrawerContent setOpen={setOpen} finalData={finalData} setFinalData={setFinalData}/>
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







const DrawerContent = ({setFinalData, setOpen}) => {
    const [sort, setSort] = useState("none")
    // const [type, setType] = useState("All")
    const {productTypeFilter, setProductTypeFilter, extraFilter, setExtraFilter} = useContext(context)
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
        if(productTypeFilter === "All") {
            newData = sortedData
        } else {
            newData = sortedData.filter((item) => item.type === productTypeFilter)
        }
        return newData
    }

    function limitBasedOnPriceRange(filteredData) {
        let newData = filteredData.filter((item) => item.price >= sliderValue[0] && item.price <= sliderValue[1])
        return newData
        // console.log(sliderValue)
    }

    function handleExtraFilter(limitedDataBasedOnPrice) {
        let newData = []
        if(extraFilter === "None") {
            newData = limitedDataBasedOnPrice
        } else if(extraFilter === "SpecialOffers") {
            newData = limitedDataBasedOnPrice.filter((item) => item.sale)
        } else {
            newData = limitedDataBasedOnPrice.filter((item) => item.begginerFriendly)
        }
        return newData
    }

    function applyFilters() {
        let sortedData = sortData()
        let filteredData = filterBasedOnType(sortedData)
        let limitedDataBasedOnPrice = limitBasedOnPriceRange(filteredData)
        let extraFilterApplied = handleExtraFilter(limitedDataBasedOnPrice)
        setFinalData(extraFilterApplied) 
    }
    
    function handleApplyBtnClick() {
        applyFilters()
        setOpen(false)
    }
    
    function removeAllFilters() {
        setSort("none")
        setProductTypeFilter("All")
        setSliderValue([0, mostExpensiveItem])
        setExtraFilter("None")
        setFinalData(data)
        setOpen(false)
    }

    useEffect(() => {
        applyFilters()
    }, [])

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
                       value={productTypeFilter}
                       onChange={(e) => setProductTypeFilter(e.target.value)}
                   >
                       <FormControlLabel value="Classical" control={<Radio />} label="Classical" />
                       <FormControlLabel value="Acoustic" control={<Radio />} label="Acoustic" />
                       <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
                       <FormControlLabel value="All" control={<Radio />} label="All" />
                   </RadioGroup>
               </FormControl>

               <Box sx={{ width: "99%", marginBlock:"40px" }}>
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

               <FormControl sx={{ width: "100%", mb: "30px" }}>
                   <FormLabel id="extra-filters-controlled-radio-buttons">Extra Filters</FormLabel>
                   <RadioGroup
                       row
                       aria-labelledby="extra-filters-controlled-radio-buttons"
                       name="radio-buttons-group"
                       value={extraFilter}
                       onChange={(e) => setExtraFilter(e.target.value)}
                   >
                       <FormControlLabel value="None" control={<Radio />} label="None" />
                       <FormControlLabel value="SpecialOffers" control={<Radio />} label="Special Offers" />
                       <FormControlLabel value="ForBegginers" control={<Radio />} label="For Begginers" />
                   </RadioGroup>
               </FormControl>

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
               <Button variant="contained" onClick={handleApplyBtnClick}>
                   Apply
               </Button>
           </Box>
       </Box>

    )
}


export default Catalog

// after implementing useContext learn how to get height of things to to fix the settings button going under the footer