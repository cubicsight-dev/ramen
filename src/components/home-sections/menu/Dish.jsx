import React from 'react'

const Dish = ({data: {
    dish_name = '',
    price = '',
    description = '',
    cmsPath = '',
    dish_img = {}
} = {}}) => {
    let dishImg = dish_img?.data?.attributes?.url ?? ''
    dishImg = `${cmsPath}${dishImg}`
    return (
        <li className="menu-item group w-10/12 sm:w-2/5 md:w-1/4">
            <div className="relative overflow-hidden">
                <img src={`${dishImg}`} alt={dish_name} />
                {description && 
                    <div className="menu-item-desc translate-y-full group-hover:translate-y-0">
                    <p className="text-sm">{description}</p>
                    </div>
                }
            </div>
            <h3 className="mt-2 max-w-max text-lg group-hover:text-red-700">
                {dish_name}
            </h3>
            <span>{price}AED</span>
        </li>
    )
}

export default Dish