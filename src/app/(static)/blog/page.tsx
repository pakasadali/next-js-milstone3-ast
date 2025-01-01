"use client"

import Card from "@/app/components/Card";
import Tabs from "@/app/components/tabs";
import { useState } from "react";


export default function Blog() {

    const [selectedCat, setSelectedCat] = useState("Technology")
    return (
        <div>
            <Tabs selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
            <div className="flex flex-wrap">
                <Card category={selectedCat} />
            </div>
        </div>
    )
}
