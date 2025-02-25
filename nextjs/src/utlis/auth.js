import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function withAuth(Component, isLoginPage = false) {
    return function ProtectedRoute(props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = localStorage.getItem("token");

            if (isLoginPage && token) {
                router.push("/dashboard"); // Redirect to dashboard if logged in
            } else if (!isLoginPage && !token) {
                router.push("/login"); // Redirect to login if not logged in
            } else {
                setLoading(false); // Set loading to false after auth check
            }
        }, []);

        if (loading)
            return (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
                    <p className="mt-4 text-lg text-gray-700">Loading...</p>
                </div>
            );

        return <Component {...props} />;
    };
}
