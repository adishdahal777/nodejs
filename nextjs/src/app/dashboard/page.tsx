"use client";

import { withAuth } from "@/utlis/auth";
import { useRouter } from "next/navigation";

function Dashboard() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear token
        router.push("/login"); // Redirect to login
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-3xl font-semibold text-gray-800">Welcome to the Dashboard!</h2>
            <button
                onClick={handleLogout}
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
                Logout
            </button>
        </div>
    );
}

export default withAuth(Dashboard); // Protect this page
