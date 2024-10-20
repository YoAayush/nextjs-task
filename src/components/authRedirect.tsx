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
        // Only access localStorage if it's available (client-side)
        if (typeof window !== "undefined") {
            const authStatus = localStorage.getItem("authentication");
            setIsAuthenticated(!!authStatus); // Convert authStatus to boolean

            if (!authStatus && (window.location.pathname === "/dashboard" || window.location.pathname === "/form")) {
                router.push("/login");
            }
        }
    }, [router]);

    // Don't render protected pages if not authenticated
    if (!isAuthenticated && (typeof window !== "undefined" && (window.location.pathname === "/dashboard" || window.location.pathname === "/form"))) {
        return null;
    }

    // Render children for authenticated users or public pages
    return <>{children}</>;
}
