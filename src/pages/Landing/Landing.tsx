import React from 'react';
import { Banner } from './components';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import {Center, Grid, GridItem, Wrap, WrapItem} from "@chakra-ui/react";
import {Info} from "./components/Info";


export const Landing = () => (
  <>
      <Navbar/>
      <Wrap>
          <WrapItem>
              <Center>
                  <Banner/>
              </Center>
          </WrapItem>
          <WrapItem justifyContent={"flex-end"} alignSelf={"flex-end"} alignItems={"end"} alignContent={"end"}>
              <Center m={"5"}>
                  <Info/>
              </Center>
          </WrapItem>


      </Wrap>
      <Footer/>




      {/*<Grid*/}
      {/*    templateAreas={`"header header"*/}
      {/*            "nav main"*/}
      {/*            "nav footer"`}*/}
      {/*    gridTemplateRows={'70px 1fr 40px'}*/}
      {/*    gridTemplateColumns={'500px 1fr'}*/}
      {/*    gap='1'*/}

      {/*    fontWeight='bold'*/}

      {/*>*/}

      {/*            <GridItem pl='2' bg='orange.300' area={'header'}>*/}
      {/*                <Navbar/>*/}
      {/*            </GridItem>*/}
      {/*            <GridItem pl='2' area={'nav'}>*/}
      {/*                <Banner/>*/}
      {/*            </GridItem>*/}
      {/*            <GridItem pl='2' area={'main'}>*/}
      {/*                <Info/>*/}
      {/*            </GridItem>*/}
      {/*            <GridItem pl='2' bg='blue.300' area={'footer'}>*/}
      {/*                <Footer/>*/}
      {/*            </GridItem>*/}
      {/*</Grid>*/}

  </>
);
