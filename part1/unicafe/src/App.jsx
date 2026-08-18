import { useState } from "react"

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const StaticLine = (props) => {
    return(
        <tr>
            <td>{props.text} </td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return("No feedback given")
    }
    else{
        return(
            <table>
                <tbody>
                    <StaticLine text= "good" value= {props.good}/>
                    <StaticLine text= "neutral" value= {props.neutral}/>
                    <StaticLine text= "bad" value= {props.bad}/>
                    <StaticLine text= "all" value= {props.all}/>
                    <StaticLine text= "average" value= {props.average}/>
                    <StaticLine text= "positive" value= {props.positive}/> 
                </tbody>
            </table>
        )
    }
}

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    function increase(x) {
        setFeedback({
            ...feedback,
            [x]: feedback[x] + 1
        })
    }

    const all = feedback.good + feedback.neutral + feedback.bad
    let average = 0
    let positive = 0

    if (all > 0) {
        average = (feedback.good - feedback.bad) / all
        positive = feedback.good / all * 100
    }
    
    return(
        <>
            <h1>give feedback</h1>

            <Button 
                handleClick = {() => increase('good')}
                text= "good"
            />
            <Button 
                handleClick = {() => increase('neutral')}
                text= "neutral"
            />
            <Button 
                handleClick = {() => increase('bad')}
                text= "bad"
            />
            
            <h2>Statistics</h2>
            <Statistics
                good= {feedback.good}
                neutral= {feedback.neutral}
                bad= {feedback.bad}
                all= {all}
                average= {average}
                positive= {positive}
            />
        </>
    )
}
export default App
