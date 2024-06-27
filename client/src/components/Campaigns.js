import React from "react";
import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";

function Campaigns() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          backgroundColor="black"
          justifyContent="center"
          alignItems="center"
        >
          <h1
            style={{ textAlign: "center", fontWeight: "bold", color: "gray" }}
          >
            Campaigns
          </h1>
        </Flex>
      </div>
      {/* Adaugă funcționalitatea pentru configurarea campaniilor aici */}
    </div>
  );
}

export default Campaigns;
