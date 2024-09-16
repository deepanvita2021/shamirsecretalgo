"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayCircle, FileText, CheckCircle, MapPin } from "lucide-react";

// Mock data for course modules
const courseModules = [
  { id: 1, title: "Introduction to React", completed: true },
  { id: 2, title: "Components and Props", completed: true },
  { id: 3, title: "State and Lifecycle", completed: false },
  { id: 4, title: "Hooks", completed: false },
  { id: 5, title: "Routing", completed: false },
  { id: 6, title: "Advanced Concepts", completed: false },
];

export default function CourseModules() {
  const [selectedModule, setSelectedModule] = useState<any | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-8">
      <Card className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8">
            React Mastery Course
          </h1>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-full bg-pink-200 rounded-full"></div>
            </div>
            <div className="relative z-10 space-y-8">
              {courseModules.map((module) => (
                <Dialog key={module.id}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-64 h-24 rounded-full flex items-center justify-center text-lg font-semibold ${
                        module.completed
                          ? "bg-green-100 hover:bg-green-200"
                          : "bg-pink-100 hover:bg-pink-200"
                      }`}
                      onClick={() => setSelectedModule(module)}
                    >
                      <MapPin className="mr-2" />
                      {module.title}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{module.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 flex items-center">
                            <PlayCircle className="mr-2" /> Video Lectures
                          </h3>
                          <ScrollArea className="h-40">
                            <ul className="space-y-2">
                              <li>1. Introduction (15:00)</li>
                              <li>2. Core Concepts (20:00)</li>
                              <li>3. Practical Examples (25:00)</li>
                            </ul>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 flex items-center">
                            <FileText className="mr-2" /> Notes
                          </h3>
                          <ScrollArea className="h-40">
                            <ul className="space-y-2">
                              <li>1. Key Takeaways</li>
                              <li>2. Code Snippets</li>
                              <li>3. Additional Resources</li>
                            </ul>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 flex items-center">
                            <CheckCircle className="mr-2" /> Assessment
                          </h3>
                          <p>Quiz: 10 questions</p>
                          <p>Time: 20 minutes</p>
                          <p>Pass grade: 70%</p>
                          <Button className="mt-4 w-full">Start Quiz</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
