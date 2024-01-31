import {rerenderEntireTree} from "./render";
import store from "./Redux/store";

store.subscribe(rerenderEntireTree)