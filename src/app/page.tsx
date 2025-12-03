'use client'

import React from "react"
import { Button } from "../components/ui/button"
import { FaApple, FaFacebook, FaGoogle, FaEnvelope } from "react-icons/fa"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/dist/client/link";

export default function CardDemo() {
  return (
    <div className="text-center flex items-center justify-center h-screen bg-gray-100">
    <div className="flex gap-x-12">
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle>Welcome To MESH! <span role="img" aria-label="waving hand">👋 </span>   </CardTitle>

        <CardDescription>
          Dont miss the opportunity to easly find your dream home at Mesh
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardFooter className="flex flex-col gap-8  border border-black-500 rounded-lg mb-6">
          <Button type="button" className="w-full bg-neutral-50 text-black hover:bg-neutral-300">
            <FaApple size={20} color="#000"/>
            Sign up with Apple
          </Button>
        </CardFooter>
        <CardFooter className="flex flex-col gap-8  border border-black-500 rounded-lg mb-6">
          <Button type="button" className="w-full bg-neutral-50 text-black hover:bg-neutral-300">
            <FaFacebook size={20} color="#1877F3"/>
            Sign up with Facebook
          </Button>
        </CardFooter>
        <CardFooter className="flex flex-col gap-8  border border-black-500 rounded-lg mb-6">
          <Button type="button" className="w-full bg-neutral-50 text-black hover:bg-neutral-300">
            <FaGoogle size={20} color="#EA4335" />
            Sign up with Google
          </Button>
        </CardFooter>
        <CardFooter className="flex flex-col gap-8  border border-black-500 rounded-lg mb-6">
          <Button type="button" className="w-full bg-neutral-50 text-black hover:bg-neutral-300">
            <FaEnvelope size={20} color="#1877F3"/>
            Sign up with Email
          </Button>
        </CardFooter>
        <div className="my-6" />
        <CardDescription className="text-center text-sm text-muted-foreground">
          Or
        </CardDescription>
        <div className="my-6" />
        <CardFooter className="flex-col gap-2">
          <Link href="/login" className="w-full"> 
          <Button type="button" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
            Log in to my account
          </Button>         
          </Link> 
        </CardFooter>
        <div className="my-8" />
        <CardDescription className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </CardDescription>
      </CardContent>
    </Card>

    
  </div>
    </div>
  )
}
