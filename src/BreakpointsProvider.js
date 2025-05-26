import { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useMediaQueryStore } from './store/useMediaQueryStore';

export const BreakpointProvider = () => {
  const theme = useTheme();
  const setBreakpoints = useMediaQueryStore((state) => state.setBreakpoints);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isTabletAndMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallLaptop = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    setBreakpoints({
      isMobile,
      isTablet,
      isSmallLaptop,
      isDesktop,
      isTabletAndMobile
    });
  }, [isMobile, isTablet, isSmallLaptop, isDesktop, isTabletAndMobile, setBreakpoints]);

  return null; // doesn't render anything
};
