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
    Stack,
    lighten
} from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import CardCustomized from "../components/Card"
import UpArrow from "../../public/up-arrow-icon.svg?react"
import SettingsIcon from "../../public/settings-icon.svg?react"
import {motion} from "motion/react"
import data from "../data.json"
import { colors } from "../style/colors"
import { useMediaQueryStore } from "../store/useMediaQueryStore"
import Navbar from "../components/Navbar"
import { useExtraFilterStore, useProductTypeFilterStore } from "../store/usePersistantStateStore"


let mostExpensiveItem = Math.max.apply(null, data.map(item => {
    return item.price
}))

const MotionBox = motion(Box)


const Catalog = () => {
    const [open, setOpen] = useState(false)
    const [finalData, setFinalData] = useState(data)
    const isTabletAndMobile = useMediaQueryStore(state => state.isTabletAndMobile)
    // function changingData(newData) {
    //     setFinalData(newData)
    //     console.log(finalData)
    // }


    return (
    <>
        <Navbar/>
        <Navbar fixed/>
        <Box paddingInline={{md: "24px", lg: "50px"}} mb="150px" sx={{ 
        }}>

            <MotionBox
            initial={{
                y: 20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.5,
                delay: 0.3,   
                ease: "easeInOut"         
            }}
            
            sx={{
                transformOrigin: "left"
            }}
            >
                <Box mt={{xs: "10px", md: "64px"}} pt={{xs: "0px", md: "50px"}} paddingInline={{xs: "24px", md: "0px"}} overflow="hidden" position="relative" sx={{
                    borderRadius: "16px",
                    boxShadow: "0px 30px 50px -25px rgba(166, 124, 82, 0.8)",
                }}>
                    {
                        !isTabletAndMobile &&
                        <Box component="img" src="images/banner-guitar.png" height="450px" position="absolute" bottom={-155} right={-180} zIndex={1} sx={{
                            // transform: "rotate(20deg)",
                            filter: "drop-shadow(-3px 12px 5px rgba(0, 0, 0, 0.4))"
                        }}/>

                    }
                    <Box display="flex" flexDirection={{xs: "column", md: "row"}} justifyContent="start" gap="20px" alignItems="center" position="relative" sx={{
                        backgroundImage: "url(images/banner-background.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "start",
                        width: "100%",
                        height: {xs: "450px", md:"220px"},
                        borderRadius: "16px",
                        overflow: "hidden",
                        isolation: "isolate"
                    }}>
                        <Box width={{xs: "80%", md: "50%"}} pl={{xs: "0px", md:"67px"}} paddingBlock="33px" textAlign={{xs:"center", md: "start"}}>
                            <Typography component="h1" fontSize={{xs: "30px", sm: "36px", md:"43px"}} lineHeight="50px" color={colors.mainbackground} mb="10px">
                                Find the Guitar That Matches Your Sound
                            </Typography>
                            <Typography variant="body1" fontSize={{xs: "15px", sm:"16px"}} color={colors.mainbackground}>
                                Explore our collection of finely crafted instruments — from beginner-friendly acoustics to professional-grade models.
                            </Typography>
                        </Box>
                        {
                            isTabletAndMobile &&
                            <Box component="img" src="images/banner-guitar.png" position="absolute" bottom={{xs: -10, sm: 0}} zIndex={-5} height={{xs: "200px",sm: "300px"}} sx={{
                                transform: {xs: "rotate(-30deg)", sm: "rotate(-20deg)"},
                                filter: "drop-shadow(-3px 12px 5px rgba(0, 0, 0, 0.4))"
                            }}/>    
                        }
                        <Box 
                        position="absolute" 
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        zIndex={-1}
                        sx={{
                            background: `linear-gradient(to bottom, rgba(42, 42, 42, 0.2), transparent)`,
                        }}
                        />                        
                    </Box>
                </Box>
            </MotionBox>

            <Stack direction="row" justifyContent="space-between" gap="81px" marginBlock="50px" pt="20px" position="relative" borderTop={`1px solid #C0C0C0`}>
                {finalData.length === 0 ?
                    <Stack alignItems="center" gap={3} width={{md: "calc(105% - 300px)"}}>
                        <Box component="img" width="300px" src="images/magnifier.png"/>
                        <Typography variant="h6">Sorry couldn't find the items you where looking for</Typography>    
                    </Stack>
                :
                <Grid container justifyContent={{xs: "center", xl: "start"}}
                gap={{xs: "30px", xl: "50px"}}
                alignContent="start" sx={{
                    width: {md: "100%"}
                }}>
                        {finalData.map((guitar) => {
                            return (
                                <Grid key={guitar.id} item>
                                    <CardCustomized small data={guitar}/>
                                </Grid>
                            )
                        })}
                </Grid>
                }
                {isTabletAndMobile ? <>
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
                            backgroundColor: colors.backgroundDark,
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
                    <Box display="flex" justifyContent="center" alignItems="start" sx={{
                        position: "sticky",
                        top: "60px",
                        width: "500px",
                        height: "fit-content",
                        padding: "20px 10px",
                        border: "1px solid #C0C0C0",
                        borderRadius: "16px",
                        background: "white",                            
                    }}>
                        <DrawerContent setFinalData={setFinalData}/>
                    </Box>
                }
            </Stack>
        </Box>
    </>
    )
}







const DrawerContent = ({setFinalData, setOpen}) => {
    const [sort, setSort] = useState("none")
    // const [type, setType] = useState("All")
    const productTypeFilter = useProductTypeFilterStore(state => state.productTypeFilter)
    const setProductTypeFilter = useProductTypeFilterStore(state => state.setProductTypeFilter)
    const extraFilter = useExtraFilterStore(state => state.extraFilter)
    const setExtraFilter = useExtraFilterStore(state => state.setExtraFilter)

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
           flexDirection="column"
           justifyContent="space-between"
           gap="20px"
            sx={{
                width: "100%"
            }}
           >
               <Button variant="outlined" onClick={removeAllFilters}>
                   Remove filters
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