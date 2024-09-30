import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here...");
  const [isFirstClick, setIsFirstClick] = useState(true); // Track if it's the first click

  const resetIt = () => {
    setText("Enter the text here...");
    setIsFirstClick(true); // Reset the first click state when resetting
    props.showAlert("Reset","success")
  };

  const uprclass = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (hello) => {
    setText(hello.target.value);
  };

  const handleOnClick = () => {
    if (isFirstClick) {
      setText(""); // Clear the text area on the first click
      setIsFirstClick(false); // Set it so it doesn't reset again on subsequent clicks
    }
  };

  const countWord=(text)=>{
    if(isFirstClick){
      return "0";
    }
    else{
      return text.split(" ").filter(word => word.length > 0).length
    }
  }
  const countChar=(text)=>{
    if(isFirstClick){
      return "0";
    }
    else{
      return text.length
    }
  }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <div className="mb-3" >
      <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4 fw-medium">Enter the text below</label>
      <textarea
        className="form-control" style={{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="7"  value={text}  onChange={handleOnChange} onClick={handleOnClick}/>
      <div className="btn btn-primary my-3 mx-1" onClick={uprclass}>Uppercase</div>
      <div className="btn btn-warning my-3 mx-1" onClick={resetIt}>Reset</div>
    </div>
    <div className={`container fs-5 bg-${props.mode === 'dark'?'black':'white'} text-${props.mode === 'dark'?'white':'black'}`}>
    <p>{countWord(text)} words and {countChar(text)} characters</p>
    </div>
    </div>
    </>
  );
}
