import { SectionHeader } from "@/components/ui/section-header" // Corrected import path
import { ArticleCard, type ArticleProps } from "@/components/ui/article-card"
import { Button } from "@/components/ui/button" // For pagination buttons
import { cn } from "@/lib/utils" // For conditional class names

// Data artikel, bisa diambil dari API atau didefinisikan di sini
const articles: ArticleProps[] = [
  {
    imageSrc: "/images/news.png",
    title: "Pentingnya Digitalisasi Bagi Pesantren",
    description:
      "Pentingnya digitalisasi bagi Pesantren di era digital 4.0 menjadi salah satu PR dan upaya yang harus dilakukan oleh semua pesantren.",
    link: "/blog/digitalisasi-pesantren-1",
  },
  {
    imageSrc: "/images/news.png",
    title: "Pentingnya Digitalisasi Bagi Pesantren",
    description:
      "Pentingnya digitalisasi bagi Pesantren di era digital 4.0 menjadi salah satu PR dan upaya yang harus dilakukan oleh semua pesantren.",
    link: "/blog/digitalisasi-pesantren-2",
  },
  {
    imageSrc: "/images/news.png",
    title: "Pentingnya Digitalisasi Bagi Pesantren",
    description:
      "Pentingnya digitalisasi bagi Pesantren di era digital 4.0 menjadi salah satu PR dan upaya yang harus dilakukan oleh semua pesantren.",
    link: "/blog/digitalisasi-pesantren-3",
  },
]

export function ArticleSection() {
  // Dummy pagination state
  const currentPage = 1
  const totalPages = 68 // Example total pages

  const renderPaginationNumbers = () => {
    const pages = []
    const maxVisiblePages = 5 // e.g., 1, 2, 3, ..., 67, 68

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 2 && totalPages > 3) pages.push("...") // Show ellipsis if not near start
      if (currentPage > 1 && currentPage < totalPages) {
        if (currentPage !== 1 && currentPage !== totalPages) {
          pages.push(currentPage)
        }
      }
      if (currentPage < totalPages - 1 && totalPages > 3) pages.push("...") // Show ellipsis if not near end
      if (totalPages > 1) pages.push(totalPages) // Always show last page if more than 1
    }

    // Filter out duplicate ellipses or page numbers if they end up adjacent
    const uniquePages = []
    for (let i = 0; i < pages.length; i++) {
      if (pages[i] === "..." && uniquePages[uniquePages.length - 1] === "...") {
        continue // Skip duplicate ellipses
      }
      if (
        typeof pages[i] === "number" &&
        typeof uniquePages[uniquePages.length - 1] === "number" &&
        pages[i] === uniquePages[uniquePages.length - 1]
      ) {
        continue // Skip duplicate numbers
      }
      uniquePages.push(pages[i])
    }

    return uniquePages.map((page, index) => (
      <Button
        key={index}
        variant="outline"
        className={cn(
          "h-10 w-10 rounded-full text-gray-700 border-gray-300 hover:bg-gray-100", // Default style for non-active
          page === currentPage && "bg-primary text-white border-primary hover:bg-primary", // Active style
          page === "..." && "pointer-events-none border-none bg-transparent text-gray-700 hover:bg-transparent", // Ellipsis style
        )}
        disabled={page === "..."}
      >
        {page}
      </Button>
    ))
  }

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl" />

      <div className="container mx-auto px-4">
        <SectionHeader
          title="Artikel Populer"
          description="" // Description is empty as per image
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-16">{renderPaginationNumbers()}</div>
      </div>
    </section>
  )
}
