import { useEffect, useState, useRef } from "react";
import "../CSS/Pages.css";

export function Typing() {
    function getQust() {
        let mQuest = "";
        let ques = "";
        let char = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';']
        for (let j = 0; j < 3; j++) {
            ques = "";
            for (let i = 0; i < 2; i++) {
                let rand = Math.random() * 8;
                rand = Math.floor(rand)
                ques += char[rand];
                console.log(rand, ques);
            }
            mQuest += ques + "";
        }
        // mQuest = mQuest.slice(0, mQuest.length - 1)
        return mQuest;
    }

    function nextQuest() {
        if (ansStatus === "Correct ans") {
            let totalCorrect = correct + 1;
            let accuracy = totalCorrect / 10 * 100;
            setAccu(prev => accuracy)
            setCorrect(prev => prev + 1)
            setNextChar(prev => 0)
        } else {

        }
        // getQust();
        setNumber(prev => prev + 1);
        setAnsStatus(prev => "");
        setInput(prev => "");
    }
    function checkAns(e) {
        let ans = e.target.value.trim();
        // console.log("--", ans, "--", question, "--");
        let ansCode = "";
        let ansSize = ans.length
        if(ans.length < question.length){
            if(ans[ansSize - 1 ] == question [ansSize - 1]){
                setNextChar(prev => ans.length)
            } 
    
        }else {

        if (ans === question) {
            ansCode = "Correct ans"
            setAnsBool(prev => true)
            
        } else {
            ansCode = "Wrong ans try again"
            setAnsBool(prev => false)
        }
    }
        setAnsStatus(prev => ansCode)

    }

    function changeColor(text) {
        console.log(text);
    }


    const [ansBool, setAnsBool] = useState(false);

    const [question, setQuestion] = useState("");

    const [number, setNumber] = useState(1);

    const [ansStatus, setAnsStatus] = useState("");

    // const [speed, setSpeed] = useState(0);

    const [accu, setAccu] = useState(0);

    const [correct, setCorrect] = useState(0);

    const [input, setInput] = useState("");
    // const [correctNum, setCorrectNum] = useState(0);

    const [char, setChar] = useState(0);

    const [average, setAverage] = useState(0);

    const [min, setMin] = useState(0);

    const [total, setTotal] = useState(0);

    const [nextChar, setNextChar] = useState(0);

    const [keyBoard, setkeyBoard] = useState(['a', 's', 'd', 'f', 'j', 'k', 'l', ';'])

    const t = useRef(0);


    useEffect(() => {
        let Q = getQust()
        console.log(Q);
        setQuestion(perv => Q)
        setNextChar(prev => 0)
        console.log(question, nextChar);

    }, [number]);

    useEffect(() => {
        const interval = setInterval((char) => {
            t.current = t.current + char;
            let avgWPM = Math.floor((total + char) / (min + 1))
            // console.log(average, "krishna", total, char, min , t.current)
            setAverage(prev => avgWPM)
            setMin(prev => prev + 1)
            setTotal(prev => prev + char)
            setChar(prev => 0)
        }, 60000)
        return () => clearInterval(interval);

    }, []);

    console.log(nextChar, "right");
    return (
        <div className="main">
            {/* details = {min} {char} {total} {average} */}

            <div className="main_ques">
                {question.split("").map((elem, i) => {
                    return (<span key = {i} style={ nextChar >= i ? {color: "black" } : {color : "yellow"} }>
                        {elem}
                    </span>)
                   // (nextChar == i ? {color : "yellow"} : { color : "white" })

                })}
            </div>
            <div className="keyboard">

                { keyBoard.map((elem, i) => {
                    return ( <div className="box" key = {i} style = { elem == question [nextChar] ? 
                    {backgroundColor: "black", color: "white", fontSize: "20px"} : {backgroundColor: "white", color: "black"}}>
                    {elem}
                </div>)
                   
                })}
               
            </div>
            <input className="main_input"
                value={input}
                onChange={(e) => {
                    setInput(prev => e.target.value);
                    checkAns(e);
                    setChar(prev => prev + 1)
                    changeColor(e.target.value);
                }}
                placeholder="Re-type if filed">
            </input>
            <p className="quest">Question : <span className="num">{number}</span>/25</p>
            <div className="main_result">
                <div className="wpm">WPM: {char}</div>
                <div className="accu">Accuracy: {accu} %</div>
                <div className="aver">Average WPM : {average}</div>

            </div>
            <p style={{ color: ansBool === true ? ("green") : ("red") }} className="st">
                {ansStatus}
            </p>
            <div className="next">
                <button className="nextBtn" onClick={nextQuest}>Next</button>
            </div>
        </div>
    )
}