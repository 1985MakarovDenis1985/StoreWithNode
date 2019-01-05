
import {Config} from "./config";
import {Catalog} from "./catalog";


export class Search {
    constructor(props) {
        this.search_button = document.getElementById("search");
    }


this.search_button.addEventListener("click", (e) => {
// console.log("khjghj");
search_touch()
});

s.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        // console.log("jakjc");
        search_touch();
    }
    ;
});



 search_touch() {
    let products_filter;
    const reg = new RegExp(s.value);
    current = 0;
    s.value = "";

    if (numberGander == 1 || numberGander == 2) {
        console.log("men");
        products_filter = products_fil.filter((el) => reg.test(el.name) || reg.test(el.description));
        renderProducts(products_filter); // add
        countText.innerHTML = "your choose compose from:   " + products_filter.length + "  items";
    }else {
        products_filter = products.filter((el) => reg.test(el.name) || reg.test(el.description));
        current = 0;
        s.value = "";
        renderProducts(products_filter); // add
        countText.innerHTML = "your choose compose from:   " + products_filter.length + "  items";
    }


};

}