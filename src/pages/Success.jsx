import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
            {/* Success Icon */}
            <CheckCircle className="w-20 h-20 text-primary mb-6 animate-bounce" />

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">
                Message Sent Successfully!
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Thank you for reaching out! I’ll get back to you as soon as possible.
            </p>

            {/* Back Button */}
            <Link
                to="/"
                className="px-6 py-3 rounded-full bg-primary text-background font-medium hover:bg-primary/90 transition-all"
            >
                Back to Home Page
            </Link>
        </section>
    );
};

export default Success;
