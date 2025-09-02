import {Header} from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet} from "react-router";

export function AppLayout() {
    return (
        <>
            <Header/>
            <main >
               <Outlet/>
            </main>
            <CartOverview/>
        </>
    );
}