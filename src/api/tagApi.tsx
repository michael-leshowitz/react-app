import React from "react";
import axios from "axios";
import { ITags } from "../context/types";

const DOMAIN_ENDPOINT = import.meta.env.VITE_DOMAIN_SERVICE_END_POINT;

export const getTopTags = async (userId: number): Promise<ITags[]> => {
 return [];
};