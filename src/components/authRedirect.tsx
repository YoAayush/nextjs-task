"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

interface AuthRedirectProps {
    children: ReactNode;
}

export default function AuthRedirect({ children }: AuthRedirectProps) {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem("authentication"); // Replace this with your actual authentication check

    useEffect(() => {
        if (!isAuthenticated && (window.location.pathname === "/dashboard" || window.location.pathname === "/form")) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated && (window.location.pathname === "/dashboard" || window.location.pathname === "/form")) {
        return null;
    }

    // If the user is authenticated or is on an unprotected page, render the children
    return <>{children}</>;
}
