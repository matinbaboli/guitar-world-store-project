import React, {useState, useEffect, useRef} from "react"
import {Grid, IconButton, MobileStepper, Box, Typography } from "@mui/material"
import CardCustomized from "./Card"
import RightArrow from "../../public/right-arrow-icon.svg?react"
import LeftArrow from "../../public/left-arrow-icon.svg?react"
import {primaryColor, primaryColorLight, secondaryColor, secondaryColorLight, primaryColorVeryLight, secondaryColorVeryLight} from "../theme"
import data from "../data.json"
import ArrowIconButton from "../components/ArrowIconButton"

import { context } from "../contextApi"


const CardSlider = ({darkBackground, dataType}) => {
    const [slidercardsindexes, setSlidercardsindexes] = useState([1, 1, 2, 3, 4, 5, 6]);
    const [activeStep, setActiveStep] = useState(0);
    const [sliderDataFiltered , setSliderDataFiltered] = useState(data.slice(0, 8))
    const {windowWidth} = React.useContext(context)


    
    const ref = useRef()

// let sliderDataFiltered = data.slice(0, 8)

    let cardWidth = (windowWidth > 1200 && 335) || 300
    let getInTurnTransformX = (windowWidth > 1200 && 83) || (windowWidth > 900 && 75) || (windowWidth > 600 && 84) || 64
    let slideDuration = 1000
    let comeInFromBackPx = (windowWidth > 1200 && -302) || (windowWidth > 900 && 1) || (windowWidth > 600 && -218) || -238

    const selectNodeAndAddClass =  (nodeIndex, selectedClass) => {
        ref.current.children.item(nodeIndex).firstChild.firstChild.classList.add(selectedClass)

        setTimeout(() => {    
            ref.current.children.item(nodeIndex).firstChild.firstChild.classList.remove(selectedClass) 
        }, slideDuration) 
    }


    function cardSliderNext() {
        let start = Date.now()

        setActiveStep(prevAmount => {
            if (prevAmount === sliderDataFiltered.length - 1) {
                return 0
            } else {
                return prevAmount + 1
            }
        })
        let newIndexArray = [...slidercardsindexes].map((item) => {
            if(item >= sliderDataFiltered.length - 1) {
                return item = 0
            } else {
                return item + 1
            }
        }) 
        
        // newIndexArray.map((item) => {
            //     if(item >= sliderDataFiltered.length - 1) {
        //         return item = 0
        //     } else {
            //         return item + 1
            //     }
            // })

        setTimeout(() => {  
            let end = Date.now()
            setSlidercardsindexes(newIndexArray)
            // console.log(end - (start + slideDuration))
        }, slideDuration)
        // setTimeout(() => {            
        //     const newIndexArray = slidercardsindexes.map((item) => {
        //         if(item >= sliderDataFiltered.length - 1) {
        //             return item = 0
        //         } else {
        //             return item + 1
        //         }
        //     })
        //     setSlidercardsindexes(newIndexArray)
        // }, slideDuration )


        
        selectNodeAndAddClass(2, "go-to-back-from-left")
        selectNodeAndAddClass(3, "move-out-left")
        if (windowWidth > 1200){
            selectNodeAndAddClass(4, "slide-to-left")
            selectNodeAndAddClass(5, "slide-to-left")
            selectNodeAndAddClass(6, "move-in-right")
            selectNodeAndAddClass(7, "go-to-right-from-back")    
        } else if (windowWidth > 900) {

            selectNodeAndAddClass(4, "slide-to-left")
            selectNodeAndAddClass(5, "move-in-right")
            selectNodeAndAddClass(6, "go-to-right-from-back")
        } else if (windowWidth < 900) {
            
            selectNodeAndAddClass(4, "move-in-right")
            selectNodeAndAddClass(5, "go-to-right-from-back")
        }
    }

    function handleNextBtnClick (e) {
        const {currentTarget} = e

        currentTarget.setAttribute("disabled", "")
        setTimeout(() => {    
            currentTarget.removeAttribute("disabled")
        }, slideDuration) 
        cardSliderNext()
    }

    function handlePrevBtnClick (e) {
        const {currentTarget} = e

        currentTarget.setAttribute("disabled", "")
        setTimeout(() => {    
            currentTarget.removeAttribute("disabled")
        }, slideDuration) 
        cardSliderPrev()
    }


    function cardSliderPrev() {

        setActiveStep(prevAmount => {
            if(prevAmount === 0) {
                return sliderDataFiltered.length - 1
            } else {
                return prevAmount - 1
            }
        })

        setTimeout(() => {            
            const newIndexArray = slidercardsindexes.map((item) => {
                if(item <= 0) {
                    return item = sliderDataFiltered.length - 1
                } else {
                    return item - 1
                }
            })
            setSlidercardsindexes(newIndexArray)
        }, slideDuration)


        selectNodeAndAddClass(1, "go-to-left-from-back")
        selectNodeAndAddClass(2, "move-in-left")
        if (windowWidth > 1200){
            selectNodeAndAddClass(3, "slide-to-right")
            selectNodeAndAddClass(4, "slide-to-right")
            selectNodeAndAddClass(5, "move-out-right")
            selectNodeAndAddClass(6, "go-to-back-from-right")
        } else if (windowWidth > 900) {
            
            selectNodeAndAddClass(3, "slide-to-right")
            selectNodeAndAddClass(4, "move-out-right")
            selectNodeAndAddClass(5, "go-to-back-from-right")
            selectNodeAndAddClass(6, "go-to-back-from-right")
        } else if (windowWidth < 900) {
            selectNodeAndAddClass(3, "move-out-right")

            selectNodeAndAddClass(4, "go-to-back-from-right")
            // selectNodeAndAddClass(5, "go-to-right-from-back")
        }

        
    }


    useEffect(() => {
        const sliderAutoNextInterval = setInterval(
            cardSliderNext        
        , 5000)

        return () => clearInterval(sliderAutoNextInterval)
    })

    useEffect(() => {
        let onsaleItems = data.filter(item => item.sale)
        let begginerFriendlyItems = data.filter(item => item.begginerFriendly)
        let sliderDataConditionBased = dataType === "sale" ? onsaleItems: begginerFriendlyItems

        setSliderDataFiltered(sliderDataConditionBased)  



        let copiedSlidercardsindexes = [...slidercardsindexes]
        let counter = -1
        let newArray = copiedSlidercardsindexes.map(item => {
            if (counter >= sliderDataConditionBased.length - 1) {
                return counter = 0
            } else {
                return counter = counter + 1
            }
        })
        setSlidercardsindexes(newArray)
    }, [])




    return <Box display="flex"
    flexDirection="column">

            <Grid
            ref={ref}
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
            spacing={{xs: 0, md:3}}
            sx={{
                position: "relative",
                width: {lg: "1200px", md: "800px", sm: "550px", xs: "390px"},
                isolation: "isolate",
                paddingLeft: {md: "24px", lg: "0px"},
            }}
            >
            <style>
                {`
                .faded {
                    opacity: 10%;
                }
                .move-in-left {
                    animation: leftSideMoveInTurn ${slideDuration}ms ease-in-out;
                }
                .move-out-left {
                    animation: leftSideMoveOutTurn ${slideDuration}ms ease-in-out;
                    }
                    .move-in-right {
                        animation: rightSideMoveInTurn ${slideDuration}ms ease-in-out;
                    }
                    .move-out-right {
                        animation: rightSideMoveOutTurn ${slideDuration}ms ease-in-out;
                    }
                    
                    .slide-to-right {
                        animation: slideRight ${slideDuration}ms ease-in-out;
                    }
                    .slide-to-left {
                        animation: slideleft ${slideDuration}ms ease-in-out;
                    }
                    
                    .go-to-back-from-right {
                        animation: goToBackFromRight ${slideDuration}ms ease-in-out;
                    }
                    .go-to-back-from-left {
                        animation: goToBackFromLeft ${slideDuration}ms ease-in-out;
                    }

                    .go-to-left-from-back {
                        animation: goToLeftFromBack ${slideDuration}ms ease-in-out ;
                    }
                    .go-to-right-from-back {
                        animation: goToRightFromBack ${slideDuration}ms ease-in-out;
                    }
                    
                    
                    @keyframes leftSideMoveInTurn {
                        0% { 
                            opacity: 70%;
                            transform: translate(0px, 0px) scale(1);
                        }
                        100% { 
                            opacity: 100%;
                            transform: translate(${getInTurnTransformX}px, ${windowWidth > 900 ? 27: 2}px) scale(1.173);
                            z-index: 2;
                        }            
                    }
                    @keyframes leftSideMoveOutTurn {
                        0% { 
                            opacity: 100%;
                            transform: translate(0px, 0px) scale(1);
                        }
                        100% { 
                            opacity: 70%;
                            transform: translate(-${getInTurnTransformX}px, ${windowWidth > 900 ? -29: -5}px) scale(0.85);
                        }            
                    }
                    @keyframes rightSideMoveInTurn {
                        0% { 
                            opacity: 70%;
                            transform: translate(0px, 0px) scale(1);
                        }
                        100% { 
                            opacity: 100%;
                            transform: translate(-${getInTurnTransformX}px, ${windowWidth > 900 ? 27: 2}px) scale(1.173);
                            z-index: 1;
                        }            
                    }
                    @keyframes rightSideMoveOutTurn {
                        0% { 
                            position: relative;
                            opacity: 100%;
                            transform: translate(0px, 0px) scale(1);
                            z-index: -1;
                        }
                        100% { 
                            position: relative;
                            opacity: 70%;
                            transform: translate(${getInTurnTransformX}px, ${windowWidth > 900 ? -29: -5}px) scale(0.85);
                            z-index: -1;
                        }            
                    }
                    @keyframes slideRight {
                        0% { 
                            transform: translateX(0px);
                        }
                        100% { 
                            transform: translateX(${cardWidth + 24}px);
                        }            
                    }
                    @keyframes slideleft {
                        0% { 
                            transform: translateX(0px);
                        }
                        100% { 
                            transform: translateX(-${cardWidth + 24}px);
                        }            
                    }
                    @keyframes goToBackFromRight {
                        0% { 
                            display: block;
                            opacity: 70%;
                            transform: translateX(0px);
                            z-index: -2;
                        }
                        100% { 
                            display: none;
                            opacity: 0%;
                            transform: translateX(-50px);
                            z-index: -2;
                        }            
                    }
                    @keyframes goToBackFromLeft {
                        0% { 
                            display: block;
                            opacity: 70%;
                            transform: translateX(0px);
                        }
                        100% { 
                            display: none;
                            opacity: 0%;
                            transform: translateX(50px);
                        }            
                    }
                    @keyframes goToRightFromBack {
                        0% { 
                            display: none;
                            opacity: 0%;
                            transform: translateX(${windowWidth < 900 && -250 || windowWidth > 1200 && -350 || windowWidth > 900 && -100}px);
                        }
                        50% {
                            opacity: 0%;
                        }
                        100% { 
                            display: block;
                            opacity: 70%;
                            transform: translateX(${comeInFromBackPx}px);
                            z-index: -2;
                        }            
                    }
                    @keyframes goToLeftFromBack {
                        0% { 
                            display: none;
                            opacity: 0%;
                            transform: translateX(${windowWidth < 900 && 0 || windowWidth > 1200 && 100 || windowWidth > 900 && 100}px);
                        }
                        50% {
                            opacity: 0%;
                        }
                        100% { 
                            display: block;
                            opacity: 70%;
                            transform: translateX(${windowWidth > 1200 && -34 || windowWidth > 900 && -26 || windowWidth > 600 && -85 || -65}px);
                            z-index: -2;
                        }            
                    }
                    `}
            </style>
            <Grid  item >
                <CardCustomized darkBackground={darkBackground} outOfTurn data={sliderDataFiltered[slidercardsindexes[0]]}/>
            </Grid>

            <Grid  item >
                <CardCustomized darkBackground={darkBackground} outOfTurn start data={sliderDataFiltered[slidercardsindexes[1]]}/>
            </Grid>

            <Grid item >
                <CardCustomized darkBackground={darkBackground} data={sliderDataFiltered[slidercardsindexes[2]]}/>
            </Grid>

            {windowWidth > 900 ? 
                <Grid item >
                    <CardCustomized darkBackground={darkBackground} data={sliderDataFiltered[slidercardsindexes[3]]}/>
                </Grid>
            :
            <Grid item >
                <CardCustomized darkBackground={darkBackground} outOfTurn end data={sliderDataFiltered[slidercardsindexes[3]]}/>
            </Grid>
            }


            {windowWidth > 1200 && 
                <Grid item >
                    <CardCustomized darkBackground={darkBackground} data={sliderDataFiltered[slidercardsindexes[4]]}/>
                </Grid>
            || windowWidth > 900 && 
                <Grid item >
                    <CardCustomized darkBackground={darkBackground} outOfTurn end data={sliderDataFiltered[slidercardsindexes[4]]}/>
                </Grid>
            || windowWidth < 900 && 
                <Grid item>
                    <CardCustomized darkBackground={darkBackground} outOfTurn data={sliderDataFiltered[slidercardsindexes[4]]}/>
                </Grid>     
            }

            {windowWidth > 900 ?
                <Grid item >
                    <CardCustomized darkBackground={darkBackground} outOfTurn end data={sliderDataFiltered[slidercardsindexes[5]]}/>
                </Grid>
            : 
            <Grid item>
                    <CardCustomized darkBackground={darkBackground} outOfTurn data={sliderDataFiltered[slidercardsindexes[5]]}/>
                </Grid>
            }

            <Grid  item >
                <CardCustomized darkBackground={darkBackground} outOfTurn data={sliderDataFiltered[slidercardsindexes[6]]}/>
            </Grid>

        </Grid>
        <Box
            width="100%" 
            display="flex"
            // flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            marginTop="10px"
            pb="10px"
            >
            <ArrowIconButton color={darkBackground ? primaryColorLight: primaryColor} onClick={handlePrevBtnClick} type="previous"/>
            <MobileStepper
                variant="dots"
                steps={sliderDataFiltered.length}
                position="static"
                activeStep={activeStep}
                sx={{ 
                    background: "none", 
                    "&& .MuiMobileStepper-dotActive": {
                        background: darkBackground ? primaryColorVeryLight: primaryColor
                    }
                 }}
                />
            <ArrowIconButton color={darkBackground ? secondaryColorLight: primaryColor} onClick={handleNextBtnClick} type="next"/>


        </Box>

</Box>
 


}

export default CardSlider
