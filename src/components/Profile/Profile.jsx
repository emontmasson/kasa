import React from 'react';
import './Profile.scss'; // Assure-toi que ce fichier CSS existe

const Profile = ({ src, alt = 'Profile Picture', size = 100, name }) => {
    return (
        <div className="profile-container">
            <div className="profile-text">
                <h3>{name}</h3>

            </div>
            <div className="profile-picture" style={{ width: size, height: size }}>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default Profile;
