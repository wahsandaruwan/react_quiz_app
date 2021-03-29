// Starting Component
function StartComp({startQuiz}) {
    return (
        <div className="start-card">
            <div className="card-body">
                <div className="card-text">
                    <h1>Begin the Tech Quiz!</h1>
                    <p>We wil wish you luck!</p>
                    <button className="btn btn-start" onClick={startQuiz}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default StartComp
