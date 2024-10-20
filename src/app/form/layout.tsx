import AuthRedirect from "@/components/authRedirect";
import React from "react";

const FormLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <AuthRedirect>
                <main>
                    {children}
                </main>
            </AuthRedirect>
        </div>
    );
};

export default FormLayout;