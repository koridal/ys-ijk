import React from "react";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import {
	SignInButton,
	// SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

export default function Navigation() {
	return (
		<nav className="sticky top-0 z-50 bg-background/80 shadow-md backdrop-blur-md border-b border-border/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<h1 className="text-lg font-serif font-bold text-foreground">
							Inko Jaya Konstruksi
						</h1>
					</div>
					{/* Desktop navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.title}
								href={item.href}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{item.title}
							</Link>
						))}
						<ModeToggle />
						<div className="flex justify-end items-center p-4 gap-4 h-16">
							<SignedOut>
								<SignInButton>
									<button className="bg-gray-400 text-black rounded-md px-4 py-1 font-medium text-sm hover:text-gray-700 transition-colors duration-200 cursor-pointer">
										Sign In
									</button>
								</SignInButton>

								{/* <SignUpButton>
									<button className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
										Sign Up
									</button>
								</SignUpButton> */}

							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
