export default function MoveEvaluation(props) {
    let partial = "";
    let perfect = "";
    let noMatch = "";
    if (props.move.perfectMatch === 0 && props.move.partialMatch === 0)
        noMatch = <span className="badge alert-warning">No Match</span>;
    if (props.move.perfectMatch > 0)
        perfect = <span className="badge alert-success">{props.move.perfectMatch}</span>;
    if (props.move.partialMatch > 0)
        partial = <span className="badge alert-danger">{props.move.partialMatch}</span>;
    return (
        <>
            {partial}
            {perfect}
            {noMatch}
        </>
    );
}