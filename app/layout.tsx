import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GSoC Github Finder",
	description:
		"Track GSoC (Google Summer of Code) organizations, explore their repositories, and find beginner-friendly issues with ease.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} w-full m-h-screen`}>{children}</body>
		</html>
	);
}
