"use client";

import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}

export default HomeLayout;
