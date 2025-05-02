"use client";

import Title from "@/components/Title";
import React, { useState } from "react";
import LocationSelector from "./LocationSelector";
import { ParsedLocationPage } from "@/types/locationPage";
import LocationSection from "./LocationSection";

const SelectCom = ({ stores }: { stores: ParsedLocationPage }) => {
    const [curr, setCurr] = useState(0);
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
                <Title title="our stores" />
                <LocationSelector
                    stores={stores!.stores}
                    curr={curr}
                    setCurr={setCurr}
                />
            </div>

            <LocationSection LocationPage={stores!.stores[curr]} />
        </div>
    );
};

export default SelectCom;
