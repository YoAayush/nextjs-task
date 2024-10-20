"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import loginSchema from "./loginSchema";
import axios from "axios";

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        console.log("Data:", data);
        try {
            const res = await axios.post("/api/auth/jwt", {
                email: data.email,
                password: data.password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    alg: "HS256",
                    typ: "JWT",
                },
            });
            const generatedToken = res.data.token;
            console.log("Generated Token:", generatedToken);

            const res2 = await axios.post("/api/auth/login", {
                email: data.email,
                password: data.password,
            });
            const res2Data = res2.data.data;
            console.log("Login Response:", res2Data);

            if (generatedToken === res2Data.jwtToken) {
                console.log("Login Successful");
                localStorage.setItem("authentication", "true");
                window.location.href = "/dashboard";
            } else {
                console.log("Login Failed");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 font-lato">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="email" className="text-gray-700">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="Enter your email"
                            className="mt-1 w-full border-gray-300"
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="password" className="text-gray-700">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            {...register("password")}
                            placeholder="Enter your password"
                            className="mt-1 w-full border-gray-300"
                        />
                        {errors.password && (
                            <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </Button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
