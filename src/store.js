import { writable, derived } from "svelte/store";

export const products = writable([]);

export const cart = writable({});
