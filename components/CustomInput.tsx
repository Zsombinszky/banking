import React from 'react'
import {FormControl, FormField, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import {Control, FieldPath} from 'react-hook-form'
import {z} from "zod";
import {authFormSchema} from "@/lib/utils";

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
    // Use the field name as the ID
    const id = name;

    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({field}) => (
                    <div className="form-item">
                        <FormLabel className="form-label" htmlFor={id}>
                            {label}
                        </FormLabel>
                        <div className="flex flex-col w-full">
                            <FormControl>
                                <Input id={id} type={name === 'password' ? 'password' : 'text'} {...field}
                                       className="input-class" placeholder={placeholder}/>
                            </FormControl>
                            <FormMessage className="form-message mt-2"/>
                        </div>
                    </div>
                )}
            />
        </div>
    )
}
export default CustomInput
