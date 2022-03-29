import React from 'react';
import Navigbar from '../components/core/Navigbar';

const Admin = () => {
    return (
        <div>
            <Navigbar />
            <h2 className="text-center ssligne">Admin</h2>
            <a href="https://grainedecitoyenmlg.nohost.me/nextcloud/login" target="_blank"> Lien collaboratif</a>
            
        </div>
    );
};

export default Admin;