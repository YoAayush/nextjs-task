"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormSchema = z.infer<typeof formSchema>;

export default function DynamicForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "fields",
    });

    const onSubmit = (data: FormSchema) => {
        // console.log("Form Data", data);
    };

    const onError = (errors: object) => {
        console.log("Validation Errors", errors);
    };

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-200 font-lato">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="w-1/2 mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Dynamic Form</h2>

                <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input id="name" {...register("name")} className="w-full border-gray-300" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input id="email" type="email" {...register("email")} className="w-full border-gray-300" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                    <Input id="phone" {...register("phone")} className="w-full border-gray-300" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="space-y-4">
                    <Label className="text-gray-700">Dynamic Fields</Label>
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex space-x-4 items-center">
                            <div className="flex-1 space-y-1">
                                <Input
                                    placeholder="Label"
                                    {...register(`fields.${index}.label` as const)}
                                    className="w-full border-gray-300"
                                />
                                {errors.fields?.[index]?.label && (
                                    <p className="text-red-500 text-sm">{errors.fields[index]?.label?.message}</p>
                                )}
                            </div>
                            <div className="flex-1 space-y-1">
                                <Input
                                    placeholder="Value"
                                    {...register(`fields.${index}.value` as const)}
                                    className="w-full border-gray-300"
                                />
                                {errors.fields?.[index]?.value && (
                                    <p className="text-red-500 text-sm">{errors.fields[index]?.value?.message}</p>
                                )}
                            </div>
                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                className="bg-red-500 text-white hover:bg-red-600"
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        onClick={() => append({ label: "", value: "" })}
                        className="bg-blue-500 text-white ml-5 rounded-xl hover:bg-blue-600"
                    >
                        Add Field
                    </Button>
                </div>

                <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
                    Submit
                </Button>
            </form>
        </div>
    );
}
