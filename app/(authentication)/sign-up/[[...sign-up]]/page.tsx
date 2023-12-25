import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
    return (
        <section className="my-5">
            <SignUp />
        </section>
    );
}

export default SignUpPage;
