import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = () => {
    const token = useSelector(state => state.user.token)
    return token ? <Navigate to="/contacts" replace /> : <><Outlet /></>

}