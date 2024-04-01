'use client'

import { usePathname } from "next/navigation"
import Navbar from "../Navbar";

export const CommonLayout = ({ children }) => {
    const pathName = usePathname();
    return (
        <>
            {
                pathName !== "/admin" ? <Navbar /> : null
            }
            {children}
        </>
    )
}
