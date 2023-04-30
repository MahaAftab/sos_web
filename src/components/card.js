import React from "react";
import DrawerAppBar from "./navbar";
import AutoLip from "./auto-lip";
import UploadRecord from "./uploadRecord";
import RectangleAndCircle from "./contact";
import AboutUs from "./about";
// import TwoButtonsWithIcons from './buttons'
function Card() {
    return (
      <div>
        <DrawerAppBar />
        <AutoLip />
        <UploadRecord />
        <AboutUs/>
        <RectangleAndCircle />
        {/* <TwoButtonsWithIcons /> */}
      </div>
    );
  }
  
  export default Card;
  