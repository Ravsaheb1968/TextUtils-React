import React from 'react'
import { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState("");
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            const txt = e.target.result;
            //   console.log(txt);
            setText(txt);
        };
        reader.readAsText(e.target.files[0]);
    };
    const ClearText = () => {
        let newText = ""
        setText(newText);
        props.showalert("You Clear all text area", "danger")
    }

    const UpperCase = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Convert all text into uppercase", "success")
    }
    const LowerCase = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Convert all text into lowercase", "secondary")
    }
    const ExtraSpace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showalert("Remove the extra spaces between the text", "info")

    }
    const SentenceCase = () => {
        if (text === " ") {
            props.props.showalert("TextArea is EMpty Please Enter text", "warning")
        }
        else {
            let result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) { return c.toUpperCase() })
            setText(result)
        }
        props.showalert("Convert all text into Sentencecase", "primary")
    }
    const copytext = () => {
        let copyText = document.getElementById("Mybox")
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText.value)
        props.showalert("Copy all text ", "warning")

    }
    const onDownloadClick = () => {
        if (text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            console.log("File Download clicked");
            // // const { spawn } = require('child_process');
            // // const childPython = spawn('python', ['--version']);
            // const fs = require("fs");
            // fileName += ".txt";
            // fileName = "C:\\Users\\sanmeet\\Downloads\\" + fileName;
            // fs.open(fileName, "w");
            // fs.writeFile(fileName, text);
            // fs.close();

            let fileName = prompt("Enter file name", "file");
            // let filename = "readme.txt";
            // let text = "Text of the file goes here.\n1";
            let blob = new Blob([text], { type: 'text/plain' });
            let link = document.createElement("a");
            link.download = fileName;
            //link.innerHTML = "Download File";
            link.href = window.URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(link.href);
            }, 100);
            props.showAlert("Download the File Successfully","secondary")
        }
        props.showAlert("Download the File Successfully","secondary")
    }
    return (
        <>
            <div className='container'>
                <div className="mb-3 my-4">
                    <label for="exampleFormControlTextarea1" className="form-label"><h5>Enter the text to Analyse</h5></label>
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="Mybox" rows="7"></textarea>
                </div>
                <div className="container my-4">
                    <h5>or Upload Text File</h5>
                    <input type="file" onChange={showFile} />
                </div>

            </div>
            <div className='container my-4'>
                <button type="button" onClick={UpperCase} className="btn btn-success my-2 mx-1">Convert to UpperCase</button>
                <button type="button" onClick={LowerCase} className="btn btn-secondary my-2 mx-1 ">Convert to LowerCase</button>
                <button type="button" onClick={SentenceCase} className="btn btn-primary my-2 mx-1">Cont to SentenceCase</button>
                <button type="button" onClick={ExtraSpace} className="btn btn-info my-2 mx-1 ">Remove to ExtraSpace</button>
                <button type="button" onClick={copytext} className="btn btn-warning my-2 mx-1">Copy the all TextArea</button>
                <button type="button" onClick={ClearText} className="btn btn-danger my-2 mx-1 ">Clear the all TextArea</button>
                <button className={`btn btn-${props.btn} mx-2 my-2 btn-secondary`} onClick={onDownloadClick}>Download text file<i className="fa fa-download"></i></button>
            </div>
            <div className='container my-2'>
                <h5>Text Summary</h5>
                <p>{(text.split(" ").length) - 1} words and {(text.length) - (text.split(" ").length) + 1} Character</p>
                <p>{0.008 * (text.split(" ").length) - 0.008} Minutes to Read </p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>


        </>

    )
}
