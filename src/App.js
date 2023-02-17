import "./App.css";
import Canvas from "./Canvas";
import CustomElement from "./CustomElement";
import {memo} from "react"
import { Dustbin } from "./Dustbin";
import { Box } from "./Box";

const App = memo(function Container() {
  return (
    <>
    
    <div
      style={{
        border: "1px solid black",
        margin: "15px",
        display: "flex",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid red",
          width: "25%",
          margin: "15px",
        }}
      >
        <Box />
        {/* <CustomElement text="TextBox" />
        <CustomElement text="TextBox2"/>
        <CustomElement text="TextBox3" /> */}
      </div>
      <div
        style={{
          border: "1px solid blue",
          width: "75%",
          margin: "15px",
        }}
      >
        <Dustbin />
      </div>
    </div>
    </>
  );
});

export default App;
