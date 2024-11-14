import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import MainLayout from "@/interfaces/layouts/main_layout";
import ProviderAntd from "@/modules/providers/antd_provider";
import { ProviderReduxToolkit } from "@/modules/providers/redux_provider";
import ProviderTheme from "@/modules/providers/theme_provider";
import { Color } from "@/styles/color";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ProviderTheme>
					<AntdRegistry>
						<ProviderAntd>
							<ProviderReduxToolkit>
								<MainLayout>
									<NextTopLoader height={2} color={Color.Main.Base} />
									<main className="bg-white dark:bg-neutral-900">
										{children}
									</main>
								</MainLayout>
							</ProviderReduxToolkit>
						</ProviderAntd>
					</AntdRegistry>
				</ProviderTheme>
			</body>
		</html>
	);
}
