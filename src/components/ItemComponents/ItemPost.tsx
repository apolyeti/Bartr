// this will be the simple card component that displays a picture of an item, 
// the name of the item, and the location of the user who posted it
import type { Item } from "@utils/types";
import Image from "next/image";

interface ItemPostProps {
    item: Item;
}

let location = "location"; 
// location will be determined by user id, which is a property of the item

export default function ItemPost({ item }: ItemPostProps) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{location}</p>
            <Image src={item.image} alt="item" />
        </div>
    );
}