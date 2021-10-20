import React from 'react';
import { useForm } from 'react-hook-form';

const PricingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-info pb-5">
            <h2>Welcome for Choosing Our Service.</h2>
            <div>---------------------</div> <br /> <br /> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Please Enter First Name</h3>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <h3>Please Enter Last Name</h3>
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <h3>Your Age</h3>
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default PricingForm;