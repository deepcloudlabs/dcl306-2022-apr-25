import React from "react";

export default function Table(props) {
    return (
        <table className="table table-bordered table-responsive table-hover table-striped">
            <thead>
            <tr>
                {
                    props.headers.split(",").map((title) =>
                        <th key={title}>{title}</th>
                    )
                }
            </tr>
            </thead>
            {props.children}
        </table>
    );
}
