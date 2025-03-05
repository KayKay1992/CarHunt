'use client'
import { useState } from "react";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import useRegisterDialog from "@/hooks/use-register.dialog";
import useLoginDialog from "@/hooks/use-login-dialog";

function Navbar() {
  const {onOpen: onRegisterOpen} = useRegisterDialog()
  const {onOpen:onLoginOpen} = useLoginDialog()
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <header
      className="w-full px-3 md:px-0 bg-primary sticky top-0 align-top  z-10 h-14 "
      style={{
        boxShadow: "1px 1px 4px #507227d66",
      }}
    >
      <nav className="flex items-center h-full max-w-7xl mx-auto">
        <Logo />
        <ul className="hidden lg:flex flex-1 items-center justify-center mx-9 text-white/80 lg:skew-x-6 ">
          <li className="flex-[0.6] hidden md:flex">
            <div className="w-full max-w-[320px] h-10 bg-white rounded-lg relative">
              <form>
                <div className="flex items-center justify-between">
                  <Input
                    type="search"
                    name="keyword"
                    autoComplete="off"
                    className="flex-1 !shadow-none h-10 text-black !ring-0 !border-0"
                    placeholder="What are you looking for?"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <Search className="w-5 h-5 text-gray-600"/>
                </div>
              </form>
            </div>
          </li>
          <li className="flex-[0.6] md:flex hover:text-[#fea03c]">
            <Link href="/" className="py-3 px-6 text-sm font-medium ">
              Home
            </Link>
          </li>
          <li className="flex-[0.6] md:flex hover:text-[#fea03c] ">
            <Link href="/" className="py-3 px-6 text-sm font-medium ">
              Services and Repairs
            </Link>
          </li>
          <li className="flex-[0.6] md:flex hover:text-[#fea03c]">
            <Link href="/" className="py-3 px-6 text-sm font-medium ">
              Pricing
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-end space-x-4 ml-auto">
          <div className="flex items-center space-x-2">
            <button className="text-sm font-extralight text-white" onClick={onLoginOpen}>
                 Sign In
            </button>
            <Separator orientation="vertical" className="h-3 text-white"/>
            <button className="text-sm font-extralight text-white" onClick={onRegisterOpen}>
                 Sign Up
            </button>
          </div>
          <Button size='default' className="bg-[#fea03c] px-5 h-10">
          <Plus/>
          Sell Car
        </Button>
        </div>
       
      </nav>
    </header>
  );
}

export default Navbar;
