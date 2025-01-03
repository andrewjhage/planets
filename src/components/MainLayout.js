import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4 max-w-6xl mx-auto">{children}</main>
        </div>
    );
};

export default MainLayout;
