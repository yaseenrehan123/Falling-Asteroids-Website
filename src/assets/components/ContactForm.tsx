import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import FormSubmitButton from './FormSubmitButton';
const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 2000)
      return () => clearTimeout(timer);
    }
  }, [result])

  const accessKey = "eaeaae61-61d1-4c75-93ac-06e8f2358d23";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Falling Asteroids Website",
      subject: "New Contact Message",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  const wrappedSubmit = async (data: any) => {
    setIsLoading(true);
    await onSubmit(data); // useWeb3Forms handles this
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(wrappedSubmit)} className='flex items-center flex-col gap-4'>
      <input
        className='w-80 h-8 bg-neutral-800 outline-black outline-2 text-center rounded-2xl'
        placeholder='Your Name'
        type='text'
        {...register('name', { required: true })}
      />
      <input
        className='w-80 h-8 bg-neutral-800 outline-black outline-2 text-center rounded-2xl'
        placeholder='Your Email'
        type='email'
        {...register('email', { required: true })}
      />
      <textarea
        className='w-80 h-40 bg-neutral-800 outline-2 outline-black rounded-2xl resize-none text-center scrollbar-none'
        placeholder='Your Message'
        {...register('message', { required: true })}
      ></textarea>

      <FormSubmitButton isLoading={isLoading}/>

      {result && (
        <p className={`text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
          {result}
        </p>
      )}
    </form>
  );
};


export default ContactForm;