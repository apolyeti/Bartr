"use client";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ItemRemoveButton({ itemId }: { itemId: number }) {

    // get session
    // get user id from session
    // get user id from item
    // if they are the same, show button

    const { data: session } = useSession();

    let userId;
    let itemUserId;

    useEffect(() => {
        const setUserId = async () => {
            const res = await fetch('/api/userid?id=' + itemId);
            const data = await res.json();
            userId = data.userId;
        }
        setUserId();
    }
    , [session]);

    useEffect(() => {
        const setItemUserId = async () => {
            const res = await fetch('/api/itemuserid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId
                })
            });
            const data = await res.json();
            itemUserId = data.userId;
        }
        setItemUserId();
    }
    , [itemId]);

    if (userId === itemUserId) {
        return (
            <Button variant="contained" color="primary" onClick={ 
                () => {
                    fetch("/api/removeItem", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({id: itemId}),
                    }).then(() => {
                        window.location.href = "/";
                    }).catch((error) => {
                        console.log(error);
                    });
                }
        }>
                Remove Listing
            </Button>
        )
    } else {
        return null;
    }
}