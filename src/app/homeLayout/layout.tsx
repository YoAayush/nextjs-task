import Footer from '@/components/Footer/page';
import Navbar from '@/components/Navbar/page';
import React from 'react';

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;