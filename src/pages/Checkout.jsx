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
    Button
 } from "@mui/material"
 import {primaryColor, primaryColorLight, secondaryColor, secondaryColorVeryLight, generalBackgroundColor, darkBackgroundColor} from "../theme"
import SectionContainer from "../components/SectionContainer"
import CheckoutItem from "../components/CheckoutItem"
import {context} from "../contextApi"


const Checkout = () => {
    const {shoppingCartItems, subTotalPrice} = useContext(context)

    let shipping = 10
    const TotalPrice = subTotalPrice + shipping

    return (
        <SectionContainer backgroundColor={generalBackgroundColor}>
            <Box 
                display={{md: "flex"}} 
                flexDirection="row-reverse"
                justifyContent="start"
                mb="100px"
            >
                <Box 
                    position={{md: "absolute"}}
                    top="0"
                    bottom="0"
                    right="0"
                    display="flex"
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="center"
                    padding="30px"
                    borderRadius={{xs: "8px", md: "0"}}
                    marginBlock={{xs: "30px", md: "0"}}
                    marginInline={{xs: "0", sm: "50px", md: "0"}}
                    sx={{
                        background: secondaryColorVeryLight
                    }}
                >
                    {shoppingCartItems.map(item => {
                        return <CheckoutItem key={item.id} data={item}/> 
                    })}
                    <Divider variant="fullWidth" width="100%" sx={{
                        height: "1px",
                        background: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "5px",
                        marginBlock: "30px"
                    }}/>
                    <Box width="80%">
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
                            <Typography variant="h6" color="secondary" letterSpacing="1px">
                                TOTAL 
                            </Typography>
                            <Typography variant="h6" color="secondary" letterSpacing={1.5}>
                                ${TotalPrice} 
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={{xs: "center", md: "start"}}
                    gap={4}
                    padding="20px"
                    marginBlock={{xs: "30px", md: "0"}}
                    marginInline={{xs: "0", sm: "50px", md: "0"}}
                    sx={{
                        border: {xs: `2px solid ${primaryColor}`, md: "none"},
                        borderRadius:"8px",
                        width: {md:"calc(100% - 352.68px)"},
                        boxSizing: "border-box"
                    }}
                    >
                    <Typography variant="h3" component="h2">
                        Contact Information
                    </Typography>
                    <TextField variant="standard" label="Email" fullWidth/>
                    <Typography variant="h3" component="h2">
                        Shipping Address
                    </Typography>
                    <TextField variant="standard" label="First Name" fullWidth/>
                    <TextField variant="standard" label="Last Name" fullWidth/>
                    <TextField variant="standard" label="Address" fullWidth/>
                    <TextField variant="standard" label="Apartment(optional)" fullWidth/>
                    <TextField variant="standard" label="Phone(optional)" fullWidth/>
                    <Stack direction="row" justifyContent="space-between" gap={2}  width="100%">                    
                        <FormControl sx={{
                            width: {xs: "50%", sm: "200px"},
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
                            width: {xs: "50%", sm: "200px"},
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
                            width: {xs: "50%", sm: "200px"},
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
                    <Button variant="contained" sx={{mt: "50px"}}>
                        place order
                    </Button>
                </Box>
            </Box>
        </SectionContainer>
    )
}

export default Checkout

// maby add a payment method aswell