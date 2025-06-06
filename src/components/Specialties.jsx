import { motion } from "framer-motion";
import SpecialtyCard from "./SpecialtyCard";
import Button from "../Ui/Button";
import FullSectionHeader from "./FullSectionHeader";
import { getFileMenu } from "../utils/MenuProvider"; "../utils/MenuProvider";
// const specialtiesList = [
//     {
//       title: "Beef Carpaccio",
//       description: "Cienko krojona surowa wołowina z rukolą, oliwą truflową i płatkami parmezanu.",
//       price: "32",
//       img: "/carpaccio.png",
//     },
//     {
//       title: "Krewetki w Maśle Czosnkowym",
//       description: "Thinnly sliced raw beef with arugula and parmesan",
//       price: "51",
//       img: "/krewetki.png",
//     },
//     {
//       title: "Tuna Tataki",
//       description: "Lekko obsmażony tuńczyk w sezamie, z pikantnym majonezem i sosem sojowym.",
//       price: "38",
//       img: "/tataki.png",
//     },
//     {
//       title: "Bruschetta Tricolore",
//       description: "Thinnly sliced raw beef with arugula and parmesan",
//       price: "42 ",
//       img: "/bruschetta.png",
//     },
//     {
//       title: "Burrata Classica",
//       description: "Kremowa burrata z pomidorkami cherry, świeżą bazylią i oliwą z oliwek.",
//       price: "41 ",
//       img: "/burrata.png",
//     },
//     {
//       title: "Tatar z Łososia",
//       description: "Świeży łosoś w cytrusowej marynacie z awokado i ogórkami, podawany z grzankami.",
//       price: "81 ",
//       img: "/tatar.png",
//     }
//   ];


 const  Specialties = () => {
    let specialtiesList =  getFileMenu();
    let i = [];
    for (let index = 0; index < specialtiesList.length; index++) {
      for(let j = 0; j < specialtiesList[index].items.length; j++) {
        if(specialtiesList[index].items[j].special === true) {
          i.push({
            name: specialtiesList[index].items[j].name,
            description: specialtiesList[index].items[j].description,
            price: specialtiesList[index].items[j].price,
            imgageUrl: specialtiesList[index].items[j].imageUrl || '/food.png'
          });
        }
      }
    }
    specialtiesList = i;
    
    return (
        <section className="flex flex-col gap-16  w-full    px-4 md:px-8 lg:px-16  pt-16">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full items-center py-8"
            >
                <FullSectionHeader top="WYRÓŻNIONE" center="NASZE SPECJAŁY" bottom="Odkryj smak dań tworzonych z pasją i dbałością o każdy detal. Nasz szef kuchni łączy najwyższej jakości składniki, by stworzyć kompozycje, które zachwycają nie tylko smakiem, ale i sercem włożonym w ich przygotowanie."/>
            </motion.div>
            <div className="flex flex-col gap-16 lg:grid xl:gap-32 lg:grid-cols-2    ">
                {specialtiesList.map((item, index) => (
                    <SpecialtyCard
                        key={index}
                        index={index}
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        img={item.imgageUrl}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-2 items-center text-center justify-center w-fit self-center">
                <p className="text-base text-white leading-relaxed ">
                    Czekamy na <span className="text-secondary-color">CIEBIE</span>
                </p>
                <p className="text-base text-white leading-relaxed ">
                    Wtorek-Sobota <span className="text-secondary-color">14.00-1:00</span>
                </p>
                <p className="text-base text-white leading-relaxed ">
                    Niedziela <span className="text-secondary-color">14.00-21:00</span>
                </p>
                <Button variant='secondary' className="w-full"><a href="/menu">Zobacz Całe Menu</a></Button>
            </div>
        </section>
    );
}
export default Specialties;