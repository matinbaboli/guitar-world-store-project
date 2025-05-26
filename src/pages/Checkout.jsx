import React, { useContext } from "react"
import { 
    Box,
    Divider,
    Stack,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    lighten
 } from "@mui/material"
import SectionContainer from "../components/SectionContainer"
import CheckoutItem from "../components/CheckoutItem"
import { colors } from "../style/colors"
import { useShoppingCartItemsStore, useSubTotalPriceStore } from "../store/usePersistantStateStore"
import Navbar from "../components/Navbar"


const Checkout = () => {

    return (
        <>
            <Navbar/>
            <Navbar fixed/>
            <Stack direction={{xs: "column-reverse",md:"row"}} justifyContent="center" gap={{xs: "45px",md: "20px",lg: "45px"}} mt="0px" paddingInline="47px" pt="20px" mb="100px" position="relative">
                <FinalItems/>
                <CheckoutForm/>
           </Stack>
        </>
    )
}

const FinalItems = () => {
    const subTotalPrice = useSubTotalPriceStore(state => state.subTotalPrice)
    const shoppingCartItems = useShoppingCartItemsStore(state => state.shoppingCartItems)
    
    let shipping = 10
    const TotalPrice = subTotalPrice + shipping

    return (
        <Box 
        display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{
            position: {md: "sticky"},
            top: "80px",
            boxSizing: "border-box",
            width: {xs: "100%", md: "380px", lg:"420px"},
            height: "fit-content",
            padding: "20px 27px",
            borderRadius: "16px",
            backgroundColor: "white",     
            backgroundImage: `linear-gradient(to top, ${lighten(colors.primary, 0.9)}, ${lighten(colors.secondary, 0.9)})`,     
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            overflow: "hidden"                    
        }}
        >
            <Typography variant="h4" component="h2" mb="20px" color={colors.primary}>
                Your Items
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" mb="50px">
                {shoppingCartItems.map(item => {
                    return <CheckoutItem key={item.id} data={item}/> 
                })}
            </Box>
            <Box position="relative" width="100%">
                <Divider width="200%" sx={{
                    position: "absolute",
                    left: "-27px",
                    top: "-10px",
                    height: "1px",
                    background: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    // marginBlock: "30px"
                }}/>
                <Stack direction="row" justifyContent="space-between" >
                    <Typography variant="body1" letterSpacing="1px">
                        Subtotal 
                    </Typography>
                    <Typography variant="body1" color="GrayText">
                        ${subTotalPrice} 
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" mt="2px" mb="13px">
                    <Typography variant="body1" letterSpacing="1px">
                        Estimated Shipping 
                    </Typography>
                    <Typography variant="body1" color="GrayText">
                        ${shipping} 
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" >
                    <Typography fontSize="18px" color={colors.primary} letterSpacing="1px">
                        TOTAL 
                    </Typography>
                    <Typography fontSize="18px" color={colors.primary} letterSpacing={1.5}>
                        ${TotalPrice} 
                    </Typography>
                </Stack>
                <Button fullWidth variant="contained" sx={{mt: "50px", background: colors.primary}}>
                    place order
                </Button>
            </Box>
        </Box>

    )
}

const CheckoutForm = () => {
    return (
        <Box 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{xs: "center", md: "start"}}
        gap={4}
        paddingInline="40px"
        pb="80px"
        pt="20px"
        // marginBlock="30px"
        // marginInline={{xs: "0", sm: "50px", md: "0"}}
        sx={{
            borderRadius:"16px",
            width: {xs: "100%",md:"calc(100% - 420px - 45px)"},
            boxSizing: "border-box",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)"
        }}
        >
        <Box width="100%" mb="30px">
            <Typography variant="h4" component="h2">
                Contact Information
            </Typography>
            <TextField variant="standard" label="Email" fullWidth/>
        </Box>
        <Box display="flex" flexDirection="column" gap="20px" width="100%">
            <Typography variant="h4" component="h2">
                Shipping Address
            </Typography>
            <TextField variant="standard" label="First Name" fullWidth/>
            <TextField variant="standard" label="Last Name" fullWidth/>
            <TextField variant="standard" label="Address" fullWidth/>
            <TextField variant="standard" label="Apartment(optional)" fullWidth/>
            <TextField variant="standard" label="Phone(optional)" fullWidth/>
            <Stack direction={{xs: "column",sm: "row"}} justifyContent="space-between" gap={3} mt="30px" width="100%">                    
                <FormControl sx={{
                    width: {xs: "100%", sm: "200px"},
                }}>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{
                    width: {xs: "100%", sm: "200px"},
                }}>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{
                    width: {xs: "100%", sm: "200px"},
                }}>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    </Box>

    )
}

export default Checkout

// maby add a payment method aswell