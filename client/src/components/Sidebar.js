import React, { useState } from 'react';

function Sidebar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-section">
                <div className="logo-container">
                    <h1>Logo</h1>
                </div>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-links">
                    <p>Currently Out</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="sidebar-section sidebar-footer">
                <div>
                    <p>footer</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;