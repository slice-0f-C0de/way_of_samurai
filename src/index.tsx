import store from "./Redux/store";
import {rerenderEntireTree} from "./render";

store.subscribe(rerenderEntireTree)