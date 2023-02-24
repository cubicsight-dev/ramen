import React from 'react'

export const Menu = () => {
    return (
        <section id="menu" className="menu scroll-mt-10">
            <div className="py-10 custom-container">
                <h2 className="text-center text-xl font-semibold uppercase mb-8">Our Menu</h2>
                <div className="py-5 menu-group">
                    <h1 className="text-3xl text-red-700 font-bold mb-4">Ramen</h1>
                    <ul className="menu-list flex gap-5 flex-wrap justify-center">
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/ramen/chicken.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles.</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Chicken Ramen</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img  src="./home/menu/ramen/spicy-chicken.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> chicken broth: chicken chashu, spinach, spicy bean sprouts and green onion » served with thin noodles (Choose your spice level, MILD, SPICY or HOT).</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Spicy Chicken Ramen</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img  src="./home/menu/ramen/gluten-free.png" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm">Choose one broth from tonkotsu, chicken or vegan. Choose one protein from tofu, chicken chashu or plant-based meat. Choose two toppings from kikurage, spinach, corn, mushroom, broccoli or bok choy.</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Gluten Free Ramen</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img  src="./home/menu/ramen/tonkuotsu-black.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce » served with thin noodles.</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Tonkotsu Black</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img  src="./home/menu/ramen/tonkotsu-spicy.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> pork broth: pork chashu, spicy bean sprouts, kikurage, green onion and spicy sauce » served with thick noodles (choose your spice level, MILD, SPICY or HOT)</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Tonkotsu Spicy</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/ramen/yuzo-shio.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> Chicken & pork clear broth: pork chashu, green onion, spinach, seasoned egg*, nori seaweed with yuzu flavor. Served with thin noodles.</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Yuzu Shio Delight</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/ramen/shrimp-wonton.png" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> pork and shrimp broth: shrimp & chicken wonton, green onion and kikurage » served with thick noodles.</p>
                                </div>
                            </div>
                            <h3 className="mb-2 max-w-max text-lg group-hover:text-red-700">Shrimp Wonton Ramen</h3>
                            <span>99.00AED</span>
                        </li>
                    </ul>
                </div>
                <div className="py-5 menu-group">
                    <h1 className="text-3xl text-red-700 font-bold mb-4">Side Dish</h1>
                    <ul className="menu-list flex gap-5 flex-wrap justify-center">
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/gyoza.png" alt="" />
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Pork Gyoza</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/bun.png" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> steamed bun stuffed with slow-braised pork chashu, cucumber and baby mixed greens served with JINYA’s original bun sauce and Kewpie mayonnaise.</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Bun</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/caramelizedcauliflower.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm"><span className="underline font-semibold">Ingredients:</span> caramelized cauliflower with toasted pine nuts, crispy mint leaves, and lime sauce.</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Caramelized Cauliflower</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/crispychicken.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm">juicy fried chicken thigh served with mixed baby greens and JINYA’s original ponzu sauce</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Crispy Chicken</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/kobesteak.png" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm">Japanese style hamburger steak with KOBE beef and Arabiki pork. stewed with tomato sauce. garnish melted stretchy colby cheese.</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">KOBE Hamburger Steak</h3>
                            <span>99.00AED</span>
                        </li>
                        <li className="menu-item w-10/12 md:w-1/4 sm:w-2/5 group">
                            <div className="overflow-hidden relative">
                                <img src="./home/menu/sides/spicycreamyshrimptempura.jpg" alt="" />
                                <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                                    <p className="text-sm">crispy shrimp tempura tossed in JINYA’s original spicy mayonnaise done in the classic “ebi-mayo” style</p>
                                </div>
                            </div>
                            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">Spicy Creamy Shrimp Tempura</h3>
                            <span>99.00AED</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
