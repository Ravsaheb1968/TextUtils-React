import React from 'react'
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <h3>{props.heading}</h3>
                    <div className= {`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
                        <input className="form-check-input" onClick={props.darkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>

            </nav>
        </div>
    )
}
