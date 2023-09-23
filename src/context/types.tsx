import React from "react";

export interface ITags {
    id: number;
    name: string;
}

export interface IRecipeSnippet {
    name: string;
    image?: string;
    description: string;
    rating: number;
    tags: ITags[];
}

export interface IRecipeSearchResult {
    name: string;
    description: string;
    rating: number;
    tags: ITags[];
}