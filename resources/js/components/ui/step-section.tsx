import { cn } from "@/lib/utils"

interface StepSectionProps {
  stepNumber: number
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  variant: "teal-bg" | "white-bg" // Two variants for styling
  className?: string
}

export function StepSection({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt = "Step illustration",
  variant,
  className,
}: StepSectionProps) {
  const isTealBg = variant === "teal-bg"
  const sectionBgClass = isTealBg ? "bg-primary" : "bg-white"
  const cardBgClass = isTealBg ? "bg-white" : "bg-primary"
  const cardTextColorClass = isTealBg ? "text-primary" : "text-white"
  const descriptionTextColorClass = isTealBg ? "text-muted-foreground" : "text-white/90"
  const numberBgClass = isTealBg ? "bg-secondary" : "bg-secondary"
  const numberTextColorClass = isTealBg ? "text-white" : "text-white"
  const imageOrderClass = isTealBg ? "md:order-last" : "md:order-first"

  return (
    <section className={cn("py-16 lg:py-24 relative overflow-hidden", sectionBgClass, className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Card */}
          <div className={cn("w-full flex justify-center", { "md:order-first": isTealBg, "md:order-last": !isTealBg })}>
            <div className={cn("rounded-xl shadow-lg p-8 relative max-w-lg w-full", cardBgClass)}>
              {/* Step Number */}
              <div
                className={cn(
                  "absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold shadow-md",
                  numberBgClass,
                  numberTextColorClass,
                )}
              >
                {stepNumber}
              </div>
              <h3 className={cn("text-2xl font-bold mt-4", cardTextColorClass)}>{title}</h3>
              <p className={cn("mt-4 text-base leading-relaxed", descriptionTextColorClass)}>{description}</p>
            </div>
          </div>

          {/* Column 2: Empty space to maintain two-column layout and show background */}
          <div className={cn("w-full h-full", imageOrderClass)}>
            {/* This column is intentionally left empty to match the image, showing only the background color */}
          </div>
        </div>
      </div>
    </section>
  )
}
