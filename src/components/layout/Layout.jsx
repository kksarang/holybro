import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const WhatsAppWidget = lazy(() => import('../WhatsAppWidget'));

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <Suspense fallback={null}>
                <WhatsAppWidget />
            </Suspense>
        </div>
    );
};

export default Layout;
