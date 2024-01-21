"use client"
import { SessionProvider } from "next-auth/react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

export default function Providers (props: ProviderProps) {
    const { children } = props;
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
