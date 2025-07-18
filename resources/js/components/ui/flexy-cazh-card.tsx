"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowLeft, ArrowRight } from "lucide-react" // Import icons
import { Button } from "@/components/ui/button" // Import Button for navigation arrows

interface FlexyCazhCardProps {
  icon: React.ElementType // Lucide icon component
  title: string
  features: string[]
  currentCardIndex: number
  totalCards: number
  onNavigateCard: (direction: "prev" | "next") => void
}

export function FlexyCazhCard({
  icon: Icon,
  title,
  features,
  currentCardIndex,
  totalCards,
  onNavigateCard,
}: FlexyCazhCardProps) {
  const isFirstCard = currentCardIndex === 0
  const isLastCard = currentCardIndex === totalCards - 1

  return (
    <Card className="relative bg-primary text-white rounded-xl shadow-lg overflow-hidden border border-blue-300/50 h-full flex flex-col">
      {/* Icon Circle */}
      <div className="absolute -top-6 left-6 p-3 bg-accent-orange rounded-full shadow-md border-4 border-white">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <CardHeader className="pt-10 px-6 pb-4">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-base">
              <Check className="h-5 w-5 text-green-300 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Navigation Arrows inside the card */}
      {totalCards > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white text-white hover:bg-white hover:text-primary-dark-teal transition-colors bg-transparent"
            onClick={() => onNavigateCard("prev")}
            disabled={isFirstCard}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white text-white hover:bg-white hover:text-primary-dark-teal transition-colors bg-transparent"
            onClick={() => onNavigateCard("next")}
            disabled={isLastCard}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </Card>
  )
}
