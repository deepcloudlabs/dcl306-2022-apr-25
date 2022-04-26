function handleFileChange(event, props){
    const filename = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        props.handleFileChange(e.target.result);
    }
    reader.readAsDataURL(filename);
}

export default function Image(props) {
    return (
        <div className="input-group">
            <label className="input-group-text"
                   htmlFor={props.id}>{props.label}</label>
            <img id={props.id}
                 alt=""
                 style={{height: '128px'}}
                 src={props.value}
                 className="img-thumbnail"/>
            <label>
                <input style={{'display': 'none'}}
                       className="form-control"
                       onChange={(event) => handleFileChange(event,props)}
                       type="file"/>
                <span className="btn-lg btn-info">File</span>
            </label>
        </div>
    );
}