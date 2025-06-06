const Footer = () => {
    return (
        <footer className=" text-gray-300 mt-8 px-4 md:px-8 lg:px-16 py-8">
            <div className=" mx-auto">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:mb-8  ">
                    <div className="">
                        <h1 className='font-header mb-4 text-2xl md:text-2xl lg:text-3xl font-semibold text-secondary-color max-w-prose'>
                            TWÓJ SMAK
                        </h1>
                        <p className="max-w-md text-sm">
                            Doświadcz doskonałego połączenia
                            <br />
                            tradycji i innowacji w każdym
                            <br />
                            serwowanym przez nas daniu.
                        </p>
                    </div>
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-white font-medium mb-4">Kontakt</h3>
                            <ul className="space-y-2 text-sm">
                                <li>ul. Restauracyjna 123</li>
                                <li>00-001 Warszawa</li>
                                <li><a href="tel:+48123456789" className="hover:text-amber-500 cursor-pointer transition-colors">+48 123 456 789</a></li>
                                <li>
                                    <a href="mailto:kontakt@twojsmak.pl" className="hover:text-amber-500 transition-colors">
                                        kontakt@twojsmak.pl
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Opening Hours */}
                        <div>
                            <h3 className="text-white font-medium mb-4">Godziny otwarcia</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Poniedziałek: Zamknięte</li>
                                <li>Wt-Pt: 12:00 - 22:00</li>
                                <li>Sb-Nd: 11:00 - 23:00</li>
                            </ul>
                        </div>
                        {/* Social Media */}
                        <div>
                            <h3 className="text-white font-medium mb-4">Obserwuj nas</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="hover:text-secondary-color transition-colors" aria-label="Facebook">
                                    <span className="mr-2">Facebook</span>
                                </a>
                                <a href="https://instagram.com" className="hover:text-secondary-color transition-colors" aria-label="Instagram">
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© 2024 TWÓJ SMAK. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;