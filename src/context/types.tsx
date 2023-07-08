import React from "react";

export interface ITags {
    id: number;
    name: string;
}

export interface IRecipeSnippit {
    name: string;
    image?: string;
    description: string;
    rating?: number;
    tags: ITags[];
}