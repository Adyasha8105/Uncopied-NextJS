import React from "react";
import { Link } from "react-router-dom";

export default function sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li><Link to="/">Create Artwork</Link></li>
          <li><Link to="/src">Uploaded Artworks</Link></li>
          <li><Link to="/">Your Certificates</Link></li>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </div>
        
    );
}