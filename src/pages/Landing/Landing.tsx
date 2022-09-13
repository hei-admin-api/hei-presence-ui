import React from 'react';
import { Banner } from './components';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import {Center, Grid, GridItem, Wrap, WrapItem} from "@chakra-ui/react";
import {Info} from "./components/Info";


export const Landing = () => (
  <>
      <Navbar/>
      <Wrap display={"flex"} flexDirection={"row"} >
          <WrapItem flexWrap={"wrap"}>
                  <Banner/>
                  <Info/>
          </WrapItem>
      </Wrap>
      <Footer/>
  </>
);
