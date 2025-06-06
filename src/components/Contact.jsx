import FullSectionHeader from "./FullSectionHeader";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
    return (
        <section id='kontakt' className="mt-8 flex flex-col items-center gap-4 justify-center  px-4 md:px-8 lg:px-16 py-4 ">
            <div className="flex flex-col items-center gap-4 text-center">
                <FullSectionHeader top="KONTAKT" center="ZNAJDŹ NAS" bottom="W razie jakichkolwiek pytań zadzwoń! Jesteśmy dostępni by ci pomóc." />
            </div>
            <div className="flex flex-col-reverse lg:flex-row w-full gap-8 justify-between mt-8 ">
                <div className="flex-1 flex items-center justify-center " >
                    <iframe className="self-center h-full w-full min-h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6644703155616!2d19.44424341196386!3d51.75745877175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a35258c05c7b9%3A0x7fb8308b87e647c0!2zYWxlamEgQWRhbWEgTWlja2lld2ljemEsIDkwLTAwMSDFgcOzZMW6!5e0!3m2!1spl!2spl!4v1745075900368!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex-1  flex   items-center lg:justify-center w-full">
                    <div className="flex flex-col  gap-8 p-4  ">
                        <h3 className="text-2xl text-secondary-color ">INORMACJE KONTAKTOWE</h3>
                        <div className="flex flex-col ">
                            <div className="flex flex-row gap-2 items-center">
                                <MapPin size={18} className="text-secondary-color" />
                                <p className="text-xl font-medium leading-relaxed text-secondary-color">Adres</p>
                            </div>
                            <p className="text-base leading-relaxed text-white">Aleja Adama Mickiewicza 128 Pabianice</p>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-row gap-2 items-center">
                                <Clock size={18} className="text-secondary-color" />
                                <p className="text-xl font-medium leading-relaxed text-secondary-color">Godziny Otwarcia</p>

                            </div>
                            <p className="text-base leading-relaxed text-white">Poniedziałek: Nieczynne</p>
                            <p className="text-base leading-relaxed text-white">Wtorek-Sobota: 14:00 - 1:00</p>
                            <p className="text-base leading-relaxed text-white">Niedziela: 14:00 - 21:00</p>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-row gap-2 items-center">
                                <Phone size={18} className="text-secondary-color" />
                                <p className="text-xl font-medium leading-relaxed text-secondary-color">Kontakt Telefoniczny</p>

                            </div>
                            <p className="text-base leading-relaxed text-white">+48 123 456 789</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-base leading-relaxed text-white">Obserwuj Nas</p>
                            <div className="flex flex-row gap-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="text-secondary-color" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="text-secondary-color" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;