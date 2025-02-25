"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export function withAuth(Component) {
    return function ProtectedRoute(props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/login");
            } else {
                setLoading(false);
            }
        }, []);

        if (loading) return <p>Loading...</p>;

        return <Component {...props} />;
    };
}
