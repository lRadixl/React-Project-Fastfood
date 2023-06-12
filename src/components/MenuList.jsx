import React, { useState } from "react";
import Container from "./Container";
import FormInput from "./FormInput";
import ItemMenuList from "./ItemMenuList";

const MenuList = () => {
    const [items, setItems] = useState([{
        leftSection: [
            { id: 1, title: 'Dairy Queen', describe: 'Dairy Queen є одним з найбільших швидкого харчування.', price: '₴40', discPrice:'₴38', bgImg: 'img/dairy_queen.svg'},
            { id: 2, title: 'Burger King', describe: "Разом з McDonald's і Burger King.", price: '₴70', discPrice:'₴60', bgImg: 'img/bk.svg'},

        ],
        rightSection: [
            { id: 3, title: 'Pizza Hut', describe: 'Хоча ціни в меню Pizza Hut.', price: '₴90', discPrice:'₴77', bgImg: 'img/pizza_hut.svg'},
            { id: 4, title: 'Papa John’s', describe: 'Papa John’s is one of the most popular fast-food.', price: '₴68', discPrice:'₴56', bgImg: 'img/papa.svg'},
        ],
    }]);

    
    
    const createItem = (nItem) => {
        items[0].leftSection.push(nItem)
        setItems([...items])
        console.log(items)
    }
    const createItemRight = (nItem) => {
        items[0].rightSection.push(nItem)
        setItems([...items])
        console.log(items)
    }
    return(
        <Container>
            <div className="menu__list">
                <div className="menu__list-left">
                    {items[0].leftSection.map((item) => 
                        <ItemMenuList item={item} key={item.id}/>
                    )}
                </div>
                <div className="menu__list-left">
                    {items[0].rightSection.map((item) =>
                        <ItemMenuList style={{paddingLeft: '50px'}} item={item} key={item.id}/>
                    )}
                </div>
            </div>
            <FormInput createRight={createItemRight} create={createItem}/>
        </Container>
    );
}

export default MenuList;