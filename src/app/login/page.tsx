'use client';
import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    amount: '', // Added amount property
  });
const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    

  };
const [error, setError] = useState('');

 // Quand tu soumets le formulaire :
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Récupère les anciennes données
  setError('');
  if (form.password !== form.confirmPassword) {
    setError('Les mots de passe ne correspondent pas.');
    return;
  }
  const data = localStorage.getItem("invoices");
  const invoices = data ? JSON.parse(data) : [];
  // Ajoute la nouvelle entrée
  invoices.push({
    id: Date.now().toString(),
    name: form.name,
    email: form.email,
    amount: form.amount,
    password: form.password, // Ajoute le mot de passe
  });
  // Sauvegarde dans le localStorage
  localStorage.setItem("invoices", JSON.stringify(invoices));
  // Optionnel : vider le formulaire ou rediriger
  router.push("/recap");
  
};

  return (
    <div className="text-center flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Create your personal account now to access all the exclisive benefits we have to offer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="eg@gmail.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="......." 
                  required 
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="......" 
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && (
    <div className="text-red-600 text-sm mb-4">{error}</div>
  )}
            <div className="my-8" />
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Next
                </Button>
              <Button className="w-full bg-neutral-50 border hover:bg-neutral-300 text-blue"
              
                onClick={() => router.back()}>
                Back
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
