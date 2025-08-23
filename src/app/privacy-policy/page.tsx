import React from 'react';
import NavBar from '../components/NavBar';
import { PrivacyPolicyContent } from './components/PrivacyPolicyContent';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <NavBar />

            {/* Main Content */}
            <div className="relative z-10">
                <PrivacyPolicyContent />
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
