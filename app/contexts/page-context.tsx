// the provider has to be a client component, but this doesn't affect any of its children
"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { getCookie, setCookie } from 'cookies-next'

interface TPageContext {
	user: string;
	// setCount: Dispatch<SetStateAction<string>>;
}

export const PageContext = createContext<TPageContext | null>(null);

export default function PageContextProvider({ children }: { children: ReactNode }) {
	// const [count, setCount] = useState(0);
	// const n = getCookie('userName')?.toString()
	// const [user, setUser] = useState(getCookie('userName') ?? null)


	return (
		<PageContext.Provider>
			{children}
		</PageContext.Provider>
	);
}