"use client";

import DynamicParse from "@/app/DynamicParse";
import dynamic from "next/dynamic";

// Dynamically import Comp instead of GraphCanvas
const Comp = dynamic(() => import("./Comp"), {ssr: false});

const Another = () => {
    return (
        <div suppressHydrationWarning={true}>
            <Comp manifestUrl={"https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd"}
                 />
            <DynamicParse />
        </div>
    );
};

export default Another;
