import FullSectionHeader from "./FullSectionHeader";
import { Star } from "lucide-react"
import { motion } from "framer-motion";
const reviews = [
    {
        id: 1,
        name: "Zuzanne Tulej",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        content:
            "Bardzo przyjemna restauracja. Karta bardzo różnorodna - bałam się, że przez to dania będą gorszej jakości, a naprawdę wszystko było bardzo smaczne. Próbowałam risott z buratem i nie zawiodłam się. Mój chłopak również był bardzo zadowolony ze swojego dania. Przyszliśmy zamówić burgera ja próbowałam frytki, były bardzo smaczne.",
        additionalContent:
            "Mega duży plus za spory wybór bezalkoholowych drinków w karcie. Virgin Pornstar Martini smakowało praktycznie identycznie jak alkoholowa wersja, pyszne!",
        recommendation: "Bardzo polecam to miejsce ❤️",
    },
    {
        id: 2,
        name: "James Jamson",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        content:
            "👍Ogólnie acz subiektywnie. Klimat OK👌Jedzenie OK choć nad mięskiem w hamburgerach trzeba popracować(bo różne są stronie wymieszane jak różne są gustu smakoszy)👌Obsługa OK👌Warto zajrzeć👍",
    },
    {
        id: 3,
        name: "Magda Lena",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        content:
            "Bardzo fajne, ciekawe miejsce. Smaczne jedzenie, duży wybór alkoholi, klimatycznie. Szkoda że lokal w środku jest tak mały.",
        recommendation: "Serdecznie polecam.",
    },
]


const Testimonials = () => {
    return (
        <section className="mt-8 flex flex-col items-center gap-4 justify-center  px-4 md:px-8 lg:px-16 py-4">
            <div className="flex flex-col items-center gap-4 text-center">
                <FullSectionHeader top="RECENZJE" center="CO MÓWIĄ O NAS GOŚCIE" bottom="Poznaj autentyczne opinie naszych gości, którzy doświadczyli wyjątkowych smaków i atmosfery w naszej restauracji." />
            </div>
            <div className="flex flex-col gap-8 mt-8">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-zinc-900 rounded-lg p-4 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-700">
                                <img
                                    src={review.avatar || "/placeholder.svg"}
                                    alt={`${review.name}'s avatar`}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        // If image fails to load, show the first letter of the name
                                        e.currentTarget.style.display = "none"
                                        e.currentTarget.nextSibling.style.display = "flex"
                                    }}
                                />
                                <div
                                    className="absolute inset-0 hidden items-center justify-center bg-zinc-800 text-white"
                                    style={{ display: "none" }}
                                >
                                    {review.name.charAt(0)}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-sm ">{review.name}</h3>
                                <div className="flex">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-zinc-300 mb-2">{review.content}</p>

                        {review.additionalContent && <p className="text-sm text-zinc-300 mb-2">{review.additionalContent}</p>}

                        {review.recommendation && <p className="text-sm text-zinc-300">{review.recommendation}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Testimonials;