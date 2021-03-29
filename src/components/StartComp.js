// Starting Component
function StartComp({onStartQuiz}) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-text">
                    <h1>Begin the Tech Quiz!</h1>
                    <p>We wish you a best of luck!</p>
                    <button className="btn" onClick={onStartQuiz}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default StartComp
