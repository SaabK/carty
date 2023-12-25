import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
    return (
        <section className="my-5">
            <SignIn />
        </section>
    );
}

export default SignInPage;
