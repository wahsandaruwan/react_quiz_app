import {useState, useEffect, useRef} from 'react';

function QuestionComp({data, onAnsUpdate, numOfQues, activeQues, onSetActiveQues, onSetCount}) {
    // UseStates
    const [choosed, setChoosed] = useState('');
    const [err, setErr] = useState('');
    // UseRef
    const radiosWrap = useRef();
    // UseEffect
    useEffect(() => {
        const findChoosedAns = radiosWrap.current.querySelector('input:checked');
        if(findChoosedAns){
            findChoosedAns.checked = false;
        }
    }, [data]);

    // Answer change
    const changeHandler = (e) => {
        setChoosed(e.target.value);
    }

    // Next question
    const nextClickHandler = (e) => {
        if(choosed === ''){
            return setErr('Please select an answer!');
        }
        onAnsUpdate(prevState => [...prevState, {q: data.question, c: choosed}]);
        setChoosed('');
        if(activeQues < numOfQues - 1){
            onSetActiveQues(activeQues + 1);
        }
        else{
            onSetCount(3);
        }
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-text">
                    <h1 className="ques"><span>{activeQues + 1 + '.'}</span> {data.question}</h1>
                    <div className="answers" ref={radiosWrap}>
                        {data.choices.map((option, i) => (
                            <label className="option" key={i}>
                                <input type="radio" name="answer" value={option} onChange={changeHandler}/>
                                {option}
                            </label>
                        ))}
                    </div>
                    {err && <div className="error-msg">{err}</div>}
                    <button className="btn" onClick={nextClickHandler}>Next Question</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionComp
