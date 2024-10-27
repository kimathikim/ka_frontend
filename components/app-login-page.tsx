'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to verify credentials
    // For this example, we'll use a mock login
    if (username === 'user' && password === 'password') {
      router.push('/contact-form')
    } else {
      setError('Invalid username or password')
    }
  }

  const handleForgotPassword = async () => {
    // Here you would typically make an API call to send a reset email
    // For this example, we'll just set a state to show a success message
    setResetEmailSent(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your username and password to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button className="w-full mt-4" type="submit">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link" onClick={handleForgotPassword}>Forgot password?</Button>
        </CardFooter>
      </Card>
      {resetEmailSent && (
        <Alert className="absolute bottom-4 right-4 w-96">
          <AlertTitle>Password Reset Email Sent</AlertTitle>
          <AlertDescription>
            Check your email for instructions to reset your password.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
