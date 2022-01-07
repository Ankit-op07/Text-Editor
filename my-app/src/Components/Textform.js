import React, { useState } from 'react';

import './Textform.css'
const Textform = () => {

    const [text, setText] = useState('');
const handlerUpClick = () => {
  let newText = text.toUpperCase();
setText(newText);
}
const handlerLowClick = () => {
    let newText = text.toLowerCase();
  setText(newText);
  }
const handleronChange = (event) => {
console.log(text);
setText(event.target.value)
}

const ClearScreen = () => {
    setText("");
}
const reverseHandler = ()=> {
    let newText="";
    let n=text.length;
    for(let i=n-1; i>=0; i--){
       newText= newText+text[i];
    }
    setText(newText);
};

const copyHandler = () => {
    navigator.clipboard.writeText(text);
};

    return (

        <div>
<h3>Enter text here :</h3>
<br/>
            <div className="input-group textform" >
  <textarea  placeholder="Enter string with whitespace" id="para" value={text} onChange={handleronChange} className="form-control" rows="10" cols="50"></textarea>
</div>
<button className="btn btn-primary my-3  " onClick={handlerUpClick}><abbr title="Convert string to uppercase">UpperCase</abbr></button>
<button className="btn btn-primary my-3 mx-3   " onClick={handlerLowClick}><abbr title="Convert string to lowercase">LowerCase</abbr></button>
<button className="btn btn-primary my-3 mx-2  " abbrevation onClick={ClearScreen}><abbr title="clear the screen"><i className="fas fa-trash-alt"></i></abbr></button>
<button className="btn btn-primary my-3 mx-2  " abbrevation onClick={copyHandler}><abbr title="copy to clipboard"><i class="far fa-copy"></i></abbr></button>
<button className="btn btn-primary my-3 mx-2 " onClick={reverseHandler}><abbr title="to reverse the string">Reverse</abbr></button>
        </div>


    )
}

export default Textform
