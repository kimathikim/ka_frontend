'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Contact {
  mobilePhone: string;
  email: string;
  address: string;
  registrationNumber: string;
}

export function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState<Contact | null>(null)
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to search for the contact
    // For this example, we'll use a mock contact
    if (searchTerm === '12345') {
      setSearchResult({
        mobilePhone: '123-456-7890',
        email: 'user@example.com',
        address: '123 Main St, City, Country',
        registrationNumber: '12345'
      })
      setError('')
    } else {
      setSearchResult(null)
      setError('No contact found with this registration number')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Search Contacts</CardTitle>
          <CardDescription>Enter a registration number to search for a contact.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch}>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="search">Registration Number</Label>
              <Input 
                id="search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter registration number"
              />
            </div>
            <Button className="w-full mt-4" type="submit">Search</Button>
          </form>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {searchResult && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Mobile Phone:</strong> {searchResult.mobilePhone}</p>
                <p><strong>Email:</strong> {searchResult.email}</p>
                <p><strong>Address:</strong> {searchResult.address}</p>
                <p><strong>Registration Number:</strong> {searchResult.registrationNumber}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
