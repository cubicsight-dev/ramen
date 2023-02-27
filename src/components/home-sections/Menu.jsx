import { motion } from "framer-motion";

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
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            exit={{ x: -100, opacity: 0}}
            transition={{delay: .7}}
          className="mb-4 text-3xl font-bold text-red-700">Ramen</motion.h1>
          <ul className="menu-list flex flex-wrap justify-center gap-5">
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/chicken.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    chicken broth: chicken chashu, spinach, green onion and
                    fried onion » served with thin noodles.
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Chicken Ramen
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/spicy-chicken.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    chicken broth: chicken chashu, spinach, spicy bean sprouts
                    and green onion » served with thin noodles (Choose your
                    spice level, MILD, SPICY or HOT).
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Spicy Chicken Ramen
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/gluten-free.png" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    Choose one broth from tonkotsu, chicken or vegan. Choose one
                    protein from tofu, chicken chashu or plant-based meat.
                    Choose two toppings from kikurage, spinach, corn, mushroom,
                    broccoli or bok choy.
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Gluten Free Ramen
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/tonkuotsu-black.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    pork broth: pork chashu, kikurage, green onion, nori dried
                    seaweed, seasoned egg*, garlic chips, garlic oil, fried
                    onion and spicy sauce » served with thin noodles.
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Tonkotsu Black
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/tonkotsu-spicy.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    pork broth: pork chashu, spicy bean sprouts, kikurage, green
                    onion and spicy sauce » served with thick noodles (choose
                    your spice level, MILD, SPICY or HOT)
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Tonkotsu Spicy
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/yuzo-shio.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    Chicken & pork clear broth: pork chashu, green onion,
                    spinach, seasoned egg*, nori seaweed with yuzu flavor.
                    Served with thin noodles.
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Yuzu Shio Delight
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/ramen/shrimp-wonton.png" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    pork and shrimp broth: shrimp & chicken wonton, green onion
                    and kikurage » served with thick noodles.
                  </p>
                </div>
              </div>
              <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">
                Shrimp Wonton Ramen
              </h3>
              <span>99.00AED</span>
            </li>
          </ul>
        </div>
        <div className="menu-group py-5">
          <h1 className="mb-4 text-3xl font-bold text-red-700">Side Dish</h1>
          <ul className="menu-list flex flex-wrap justify-center gap-5">
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/sides/gyoza.png" alt="" />
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Pork Gyoza
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/sides/bun.png" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    steamed bun stuffed with slow-braised pork chashu, cucumber
                    and baby mixed greens served with JINYA’s original bun sauce
                    and Kewpie mayonnaise.
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Bun
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img
                  src="./home/menu/sides/caramelizedcauliflower.jpg"
                  alt=""
                />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    <span className="font-semibold underline">
                      Ingredients:
                    </span>{" "}
                    caramelized cauliflower with toasted pine nuts, crispy mint
                    leaves, and lime sauce.
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Caramelized Cauliflower
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/sides/crispychicken.jpg" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    juicy fried chicken thigh served with mixed baby greens and
                    JINYA’s original ponzu sauce
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Crispy Chicken
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img src="./home/menu/sides/kobesteak.png" alt="" />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    Japanese style hamburger steak with KOBE beef and Arabiki
                    pork. stewed with tomato sauce. garnish melted stretchy
                    colby cheese.
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                KOBE Hamburger Steak
              </h3>
              <span>99.00AED</span>
            </li>
            <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
              <div className="relative overflow-hidden">
                <img
                  src="./home/menu/sides/spicycreamyshrimptempura.jpg"
                  alt=""
                />
                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                  <p className="text-sm">
                    crispy shrimp tempura tossed in JINYA’s original spicy
                    mayonnaise done in the classic “ebi-mayo” style
                  </p>
                </div>
              </div>
              <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                Spicy Creamy Shrimp Tempura
              </h3>
              <span>99.00AED</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
