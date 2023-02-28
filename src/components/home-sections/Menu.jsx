import { motion } from "framer-motion";
const ramenList = [
    {
        name: 'Chicken Ramen',
        ingr: 'Ingredients: chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles.',
        price: '99.00',
        img: './home/menu/ramen/chicken.jpg'
    },
    {
        name: 'Spicy Chicken Ramen',
        ingr: 'Ingredients: chicken broth: chicken chashu, spinach, spicy bean sprouts and green onion » served with thin noodles (Choose your spice level, MILD, SPICY or HOT).',
        price: '99.00',
        img: './home/menu/ramen/spicy-chicken.jpg'
    },
    {
        name: 'Gluten Free Ramen',
        ingr: 'Choose one broth from tonkotsu, chicken or vegan. Choose one protein from tofu, chicken chashu or plant-based meat. Choose two toppings from kikurage, spinach, corn, mushroom, broccoli or bok choy.',
        price: '99.00',
        img: './home/menu/ramen/gluten-free.png'
    },
    {
        name: 'Tonkotsu Black',
        ingr: 'Ingredients: pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce » served with thin noodles.',
        price: '99.00',
        img: './home/menu/ramen/tonkuotsu-black.jpg'
    },
    {
        name: 'Tonkotsu Spicy',
        ingr: 'Ingredients: pork broth: pork chashu, spicy bean sprouts, kikurage, green onion and spicy sauce » served with thick noodles (choose your spice level, MILD, SPICY or HOT)',
        price: '99.00',
        img: './home/menu/ramen/tonkotsu-spicy.jpg'
    },
    {
        name: 'Yuzu Shio Delight',
        ingr: 'Ingredients: Chicken & pork clear broth: pork chashu, green onion, spinach, seasoned egg*, nori seaweed with yuzu flavor. Served with thin noodles.',
        price: '99.00',
        img: './home/menu/ramen/yuzo-shio.jpg'
    },
    {
        name: 'Shrimp Wonton Ramen',
        ingr: 'Ingredients: pork and shrimp broth: shrimp & chicken wonton, green onion and kikurage » served with thick noodles.',
        price: '99.00',
        img: './home/menu/ramen/shrimp-wonton.png'
    }
]

const sideDishList = [
    {
        name: 'Pork Gyoza',
        ingr: '',
        price: '99.00',
        img: './home/menu/sides/gyoza.png'
    },
    {
        name: 'Bun',
        ingr: 'Ingredients: steamed bun stuffed with slow-braised pork chashu, cucumber and baby mixed greens served with  original bun sauce and Kewpie mayonnaise.',
        price: '99.00',
        img: './home/menu/sides/bun.png'
    },
    {
        name: 'Caramelized Cauliflower',
        ingr: 'Ingredients: caramelized cauliflower with toasted pine nuts, crispy mint leaves, and lime sauce.',
        price: '99.00',
        img: './home/menu/sides/caramelizedcauliflower.jpg'
    },
    {
        name: 'Crispy Chicken',
        ingr: 'juicy fried chicken thigh served with mixed baby greens and  original ponzu sauce',
        price: '99.00',
        img: './home/menu/sides/crispychicken.jpg'
    },
    {
        name: 'KOBE Hamburger Steak',
        ingr: 'Japanese style hamburger steak with KOBE beef and Arabiki pork. stewed with tomato sauce. garnish melted stretchy colby cheese.',
        price: '99.00',
        img: './home/menu/sides/kobesteak.png'
    },
    {
        name: 'Spicy Creamy Shrimp Tempura',
        ingr: 'crispy shrimp tempura tossed in  original spicy mayonnaise done in the classic “ebi-mayo” style',
        price: '99.00',
        img: './home/menu/sides/spicycreamyshrimptempura.jpg'
    },
]
export const Menu = () => {
  return (
    <section id="menu" className="menu scroll-mt-10">
      <div className="custom-container py-10 overflow-hidden">
        <h2
            className="mb-8 text-center text-xl font-semibold uppercase">
          Our Menu
        </h2>
        <div className="menu-group py-5">
          <motion.h1 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            exit={{opacity: 0}}
            viewport={{ once: true }}
            transition={{delay: .3}}
          className="mb-4 text-3xl font-bold text-red-700">Ramen</motion.h1>
          <ul className="menu-list flex flex-wrap justify-center gap-5">
           {ramenList.map(({ name = '', ingr = '', price = '', img = ''}, key) => (
                <motion.li 
                    initial={{opacity: 0, translateX: -50, translateY: -50}}
                    whileInView={{opacity: 1, translateX: 0, translateY: 0}}
                    transition={{delay: key*0.2, duration: 0.3}}
                    viewport={{ once: true }}
                    key={key} 
                    className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
                    <div className="relative overflow-hidden">
                        <img src={img} alt={name} />
                        <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                            <p className="text-sm">{ingr}</p>
                        </div>
                    </div>
                    <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">{name}</h3>
                    <span>{price}AED</span>
                </motion.li>
           ))}
          </ul>
        </div>
        <div className="menu-group py-5">
          <motion.h1 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            exit={{opacity: 0}}
            viewport={{ once: true }}
            transition={{delay: .3}}
            className="mb-4 text-3xl font-bold text-red-700">Side Dish</motion.h1>
          <ul className="menu-list flex flex-wrap justify-center gap-5">
            {sideDishList.map(({ name = '', ingr = '', price = '', img = ''}, key) => (
                <motion.li 
                    initial={{opacity: 0, translateX: -50, translateY: -50}}
                    whileInView={{opacity: 1, translateX: 0, translateY: 0}}
                    transition={{delay: key*0.2, duration: 0.3}}
                    viewport={{ once: true }}
                    key={key} 
                    className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
                    <div className="relative overflow-hidden">
                        <img src={img} alt={name} />
                        {ingr &&
                        <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                            <p className="text-sm">{ingr}</p>
                        </div>}
                    </div>
                    <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">{name}</h3>
                    <span>{price}AED</span>
                </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
