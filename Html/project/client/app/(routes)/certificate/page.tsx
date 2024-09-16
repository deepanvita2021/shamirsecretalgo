'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Award, Download } from 'lucide-react'

export default function CertificatePage() {
  const [userId, setUserId] = useState('')
  const [courseName, setCourseName] = useState('React Mastery Course')

  const handleDownload = () => {
    // In a real application, this would generate and download the certificate
    alert('Certificate download started!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-white shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <Award className="w-16 h-16 mx-auto text-blue-600" />
            <h1 className="text-3xl font-bold mt-4 text-blue-800">Certificate of Completion</h1>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl">This certifies that</p>
            <Input 
              type="text" 
              placeholder="Enter your name" 
              className="text-2xl font-bold text-center mt-2 border-none shadow-none"
            />
            <p className="text-xl mt-4">with User ID</p>
            <Input 
              type="text" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID" 
              className="text-xl font-semibold text-center mt-2"
            />
            <p className="text-xl mt-4">has successfully completed the</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-2">{courseName}</h2>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4 mb-8">
            <p className="text-center text-gray-600">
              Demonstrating proficiency in React fundamentals, component development, 
              state management, and modern web application architecture.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold">Date of Completion</p>
            <p className="text-xl mt-1">{new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button onClick={handleDownload} className="flex items-center">
              <Download className="mr-2" />
              Download Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}