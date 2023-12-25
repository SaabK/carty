import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-fit mx-auto">{children}</div>;
}

export default AuthLayout;
