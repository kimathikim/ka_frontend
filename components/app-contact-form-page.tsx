'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    mobilePhone: '',
    email: '',
    address: '',
    registrationNumber: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to save the contact details
    // For this example, we'll just set a success state
    if (Object.values(formData).every(value => value.trim() !== '')) {
      setSuccess(true)
      setError('')
      // Redirect to search page after successful submission
      setTimeout(() => router.push('/search'), 2000)
    } else {
      setError('Please fill in all fields')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
          <CardDescription>Please enter your contact information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="mobilePhone">Mobile Phone Number</Label>
                <Input 
                  id="mobilePhone" 
                  value={formData.mobilePhone}
                  onChange={handleChange}
                  placeholder="Enter your mobile phone number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="registrationNumber">Registration Number</Label>
                <Input 
                  id="registrationNumber" 
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Enter your registration number"
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
            <Button className="w-full mt-4" type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
      {success && (
        <Alert className="absolute bottom-4 right-4 w-96">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your contact details have been successfully submitted. Redirecting to search page...
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
