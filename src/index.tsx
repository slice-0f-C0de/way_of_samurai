import store from "./Redux/state";
import {rerenderEntireTree} from "./render";

store.subscribe(rerenderEntireTree)