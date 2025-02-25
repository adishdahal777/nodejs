"use client";

import { withAuth } from "../../utlis/auth";

function Dashboard() {
    return <h2>Welcome to the Dashboard!</h2>;
}

export default withAuth(Dashboard);
