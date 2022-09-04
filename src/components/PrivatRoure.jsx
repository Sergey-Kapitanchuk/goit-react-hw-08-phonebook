import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivatRoute = () => {
    const token = useSelector(state => state.user.token)
    return token ? <><Outlet /></> : <Navigate to="/login" replace />

}