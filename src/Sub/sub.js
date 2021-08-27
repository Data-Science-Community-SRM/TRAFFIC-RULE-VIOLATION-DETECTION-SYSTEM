import React from "react";
import "./sub.css";

const Sub = () => {
    return (
      <div id="project">
<div class="sub">
<div ><div class="heading-title"id="project">Traffic Violation</div>
    
    <div class="traffic">In 2020, there were around 151 thousand deaths due to road accidents in India
     and most of them are due to Signal Violation and No helmet. In 2017 around 98 riders died everyday 
     as they were not wearing a helmet.
     <br /><br />
     India is one of the largest motorcyle market in the world. It is also the second highest poulation 
     in the world. For a major city like Bangalore or Mumbai it is really tough to keep a tab on people who violate
     rules. So we at Data Science Community to help and reduce these deaths, have created photo based 
     recognision system which help individuals to report people who drive without helmets.

     
    </div>
    </div>
        <div class="wrapper">
        <form action="/action_page.php">
        <label class="custom-file-upload">
    <input type="file"/>
    Upload Image
</label><br />
<label class="submit">
        <input type="submit" />
        Submit
        </label>
         </form>
         
        </div>      
        </div>    
        </div>   
  ); 
};

export default Sub;
