import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { montserrat, outfit, roboto } from "@/lib/font";
import HorizontalNavbar from "@/Components/Header/HorizontalNavbar";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(outfit, roboto, montserrat, "antialiased")}>
				<HorizontalNavbar />
				{children}
			</body>
		</html>
	);
}
