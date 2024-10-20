"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface AuthRedirectProps {
    children: ReactNode;
}

export default function AuthRedirect({ children }: AuthRedirectProps) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem("authentication");
        setIsAuthenticated(!!authStatus);

        if (!authStatus && (window.location.pathname === "/dashboard" || window.location.pathname === "/form")) {
            router.push("/login");
        }
    }, [router]);

    if (!isAuthenticated && (window.location.pathname === "/dashboard" || window.location.pathname === "/form")) {
        return null;
    }

    // Render the children if the user is authenticated or is on an unprotected page
    return <>{children}</>;
}
