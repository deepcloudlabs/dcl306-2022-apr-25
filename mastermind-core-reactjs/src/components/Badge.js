export default function Badge(props) {
    return(
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}:</label>
            <span id={props.id} className="badge alert-primary">{props.value}</span>
        </div>
    );
}