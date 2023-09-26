import { Handy } from "../dist/hu.min.js";

const url = new URL("https://www.google.com/search?q=handyscript");
console.log(Handy.searchParamsSerializer(url)); // {q: "handyscript"}