import React from 'react';
import { Button } from '../node_modules/@mui/material/index';
import axios from '../node_modules/axios/index';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3002",
})

export const TestApiButton = (): JSX.Element => {
    const handledClick = async() => {
        console.log("Printed");
        const result = axiosInstance.get(`recipe/query-by?searchText=test`);
        console.log(result);
    }
    return (
        <Button
        onClick={handledClick}>
            Press me!
        </Button>
    )
}