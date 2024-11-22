import { createContext, useState } from "react";

export const SalesContext = createContext({
    sales: [],
    setSales: () => {},
});

export function SalesContextProvider({ initialData, children }) {
    const [sales, setSales] = useState(initialData);

    return(
        <SalesContext.Provider value={{ sales, setSales }}>
            {children}
        </SalesContext.Provider>
    );
}