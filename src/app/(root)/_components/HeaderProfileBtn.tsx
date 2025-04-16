"use client";
import { SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";

function HeaderProfileBtn() {
    return (
        <>
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link
                        label="Profile"
                        labelIcon={<User className="size-4" />}
                        href="/profile"
                    />
                </UserButton.MenuItems>
            </UserButton>

            <SignedOut>
                <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 rounded">
                    <SignInButton />
                </button>
            </SignedOut>
        </>
    );
}
export default HeaderProfileBtn;