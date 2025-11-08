'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import ButtonFill from '../ui/ButtonFill';
import { useAuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import googleIcon from '@/assets/google.svg';

interface LoginFormProps {
  admin?: boolean;
}

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues extends LoginValues {
  confirmPassword: string;
}

export default function LoginForm({ admin }: LoginFormProps) {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  const [values, setValues] = useState<LoginValues>({
    email: '',
    password: '',
  });

  const [valuesRegister, setValuesRegister] = useState<RegisterValues>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeRegister = (e: ChangeEvent<HTMLInputElement>) => {
    setValuesRegister({ ...valuesRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.email === '' || values.password === '') {
      toast('Incomplete data');
      return;
    }
    if (values.password.length < 6) {
      toast('The password must be at least 6 characters');
      return;
    }
    loginUser({
      ...values,
      callback: () => goToHome(),
      error: () => toast('Invalid email or password'),
    });
  };

  const handleSubmitGoogle = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    googleLogin(() => goToHome());
  };

  const handleSubmitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      valuesRegister.email === '' ||
      valuesRegister.password === '' ||
      valuesRegister.confirmPassword === ''
    ) {
      toast('Incomplete data');
      return;
    }

    if (valuesRegister.password !== valuesRegister.confirmPassword) {
      toast('Passwords do not match');
      return;
    }

    registerUser({
      ...valuesRegister,
      callback: () => goToHome(),
      error: () => toast('User exist'),
    });
  };

  return (
    <div className="bg-neutral-800 px-8 py-6 rounded-md flex gap-x-4">
      <form className="flex-1" onSubmit={handleSubmit}>
        <h2 className="text-xl">Login</h2>
        <input
          type="email"
          value={values.email}
          placeholder="Email"
          className="p-2 rounded w-full block bg-neutral-700 my-4"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          placeholder="Password"
          className="p-2 rounded w-full block bg-neutral-700 my-4"
          name="password"
          onChange={handleChange}
        />
        <ButtonFill type="submit" ariaLabel="Login">
          Login
        </ButtonFill>
        {!admin && (
          <div className="w-full flex justify-center">
            <Image
              src={googleIcon}
              alt="google icon"
              onClick={handleSubmitGoogle}
              className="w-12 h-12 cursor-pointer"
            />
          </div>
        )}
      </form>

      {!admin && (
        <form className="flex-1 flex flex-col" onSubmit={handleSubmitRegister}>
          <h2 className="text-xl">Register</h2>
          <input
            type="email"
            value={valuesRegister.email}
            placeholder="Email"
            className="p-2 rounded w-full block bg-neutral-700 mt-4"
            name="email"
            onChange={handleChangeRegister}
          />
          <input
            type="password"
            value={valuesRegister.password}
            placeholder="Password"
            className="p-2 rounded w-full block bg-neutral-700 mt-4"
            name="password"
            onChange={handleChangeRegister}
          />
          <input
            type="password"
            value={valuesRegister.confirmPassword}
            placeholder="Confirm password"
            className="p-2 rounded w-full block bg-neutral-700 mt-4"
            name="confirmPassword"
            onChange={handleChangeRegister}
          />
          <ButtonFill type="submit" className="mt-auto" ariaLabel="Register">
            Register
          </ButtonFill>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}