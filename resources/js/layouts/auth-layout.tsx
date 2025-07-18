import type React from "react"
import { Head } from "@inertiajs/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export default function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark-teal to-blue-500 p-4 relative overflow-hidden">
      {/* Background circles/blobs for visual interest */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-orange rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <Head title={title} />
      <Card className="w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-blue-200/50 backdrop-blur-sm">
        <CardHeader className="text-center p-8 bg-white/80 border-b border-gray-100">
          <div className="flex justify-center mb-4">
            <img src="/images/Cards.png" alt="Cards Logo" width={150} height={50} />
          </div>
          <CardTitle className="text-3xl font-extrabold text-primary-dark-teal">{title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2 text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-8 bg-white/95">{children}</CardContent>
      </Card>
    </div>
  )
}
