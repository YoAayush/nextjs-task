"use client";

import { toast } from "react-toastify";

export const loginSuccessToast = () => {
    toast.success("Login successful", { autoClose: 3000 });
};

export const formSubmitted = () => {
    toast.success("Form Submitted Successfully", { autoClose: 3000 });
};

export const loginErrorToast = () => {
    toast.error("Login failed", { autoClose: 3000 });
};

export const formError = () => {
    toast.error("Form Submission Error, Check all the Fields", { autoClose: 3000 });
};