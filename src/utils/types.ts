export type Item = {
    id: number;
    user_id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
};

export type User = {
    id: number;
    name: string;
    items: Item[];
    email: string;
    password: string;
    location: string;
};