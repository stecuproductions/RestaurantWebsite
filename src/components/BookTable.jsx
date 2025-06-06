import { useState } from "react";
import FullSectionHeader from "./FullSectionHeader";
import StandardFormInput from "../Ui/StandardFormInput";
import GuestNumberInput from "../Ui/GuestNumberInput";
import { motion } from "framer-motion";
import Button from "../Ui/Button";

export default function BookTable() {
  const [guestCount, setGuestCount] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const decreaseGuests = () => {
    if (guestCount > 1) setGuestCount(guestCount - 1);
  };

  const increaseGuests = () => {
    if (guestCount < 20) setGuestCount(guestCount + 1);
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-8 px-4 md:px-8 lg:px-16 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="zarezerwuj"
    >
      <motion.div
        className="flex flex-col gap-4 py-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <FullSectionHeader
          top="Rezerwacja"
          center="Zarezerwuj Stolik"
          bottom="Wybierz dogodny termin i pozwól nam przygotować dla Ciebie wyjątkowe kulinarne doświadczenie."
        />
      </motion.div>

      <motion.form
        className="w-full max-w-[900px] bg-[#1A1A1A] border-2 border-secondary-color rounded-sm p-8 gap-4 flex flex-col grid-cols-1 md:grid md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {[        
          <StandardFormInput key="date" label="Data" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />,
          <StandardFormInput key="time" label="Godzina" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />,
          <GuestNumberInput key="guests" label="Liczba gości" value={guestCount} onDecrease={decreaseGuests} onIncrease={increaseGuests} min={1} max={12} />,
          <StandardFormInput key="name" label="Imię i nazwisko" type="text" placeholder="Wpisz swoje imię i nazwisko" required onChange={(e) => setName(e.target.value)} value={name} />,
          <StandardFormInput key="email" label="E-mail (opcjonalnie)" type="email" placeholder="Wpisz swój e-mail" required={false} onChange={(e) => setEmail(e.target.value)} value={email} />,
          <StandardFormInput key="phone" label="Numer telefonu" type="tel" placeholder="Wpisz swój numer telefonu" required onChange={(e) => setPhone(e.target.value)} value={phone} />,
        ].map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {element}
          </motion.div>
        ))}

        <motion.div
          className="flex flex-col gap-2 col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <label className="text-[#CCCCCC] text-sm">Specjalne Wymagania</label>
          <textarea
            rows="4"
            placeholder="Wpisz swoje specjalne wymagania"
            className="w-full text-white bg-[#333333] rounded-sm px-2 py-2 outline-none resize-none"
            required={false}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            value={specialRequirements}
          ></textarea>
        </motion.div>

        <motion.div
          className="w-full col-span-2 mt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Button variant="primary" type="submit" className="w-full">Zarezerwuj</Button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
}
