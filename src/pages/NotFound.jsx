import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
            <h1 className="text-6xl font-extrabold mb-4 text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-all"
            >
                Go Back Home
            </Link>
        </section>
    );
};

export default NotFound;
