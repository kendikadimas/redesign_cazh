import { cn } from "@/lib/utils" // Ensure cn utility is imported

interface SectionHeaderProps {
  title: string
  description: string
  variant?: "default" | "white" // Add variant prop
}

export function SectionHeader({ title, description, variant = "default" }: SectionHeaderProps) {
  const titleColorClass = variant === "white" ? "text-white text-center" : "text-primary text-center"
  const descriptionColorClass = variant === "white" ? "text-white/90 text-center mb-5" : "text-muted-foreground text-center" // Use white/90 for description on white variant

  return (
    <div className="space-y-4">
      <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", titleColorClass)}>{title}</h2>
      <p
        className={cn(
          "mx-auto max-w-full mb-5 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
          descriptionColorClass,
        )}
      >
        {description}
      </p>
    </div>
  )
}
