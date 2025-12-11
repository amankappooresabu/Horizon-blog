// components/HomeClient.tsx (Client Component - can use useState)
"use client"
import { useState } from 'react'
import Navbar from "./Navbar";
import Section1Slider from "./Section1Slider";
import Section2Blog from "./Section2Blog";

export default function Home({ blogs }: any) {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="p-2">

            <Navbar onSearch={setSearchQuery} />
            <Section1Slider />
            <Section2Blog blogs={blogs} searchQuery={searchQuery} />
        </div>
    )
}