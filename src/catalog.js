
import {Builder} from "./builder";
import {current} from "./index";
import {Search} from "./search";
// import {Pagination} from "./pagination";


// let pag = new Pagination()


export class Catalog {

    constructor(per_page) {
        this.element = document.getElementById("catalog");
        this.per_page = per_page;
        this.current =0;
    }

    createCard(product) {
        var link = Builder.createNewElement("a", "Add to cart", "btn btn-primary add_card", [{"name": "href", "value": "#"}]);
        link.setAttribute("name", product.data);

        var p = Builder.createNewElement("p", product.description, "card-text");
        var title = Builder.createNewElement("h5", product.name, "card-title");
        var coast = Builder.createNewElement("h3", "$ " + product.price, "");

        var cardBody = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card-body"), [title, p, coast]);

        cardBody.appendChild(link)

        var image = Builder.createNewElement("img", null, "card-img-top", [{
            "name": "src",
            "value": "images/" + product.image
        }, {"name": "alt", "value": product.name}]);

        var card = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card"), [image, cardBody]);
        var catalogItem = Builder.attachChilderToParent(Builder.createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);
        return catalogItem;
    };

    firstI() {
        return this.current * this.per_page;
    };

    secondI(i, array_products) {
        return i < this.current * this.per_page + this.per_page && i < array_products.length;
    };


//RENDER PRODUCTS


    renderProducts(array_products, current) {
        // let current = current;

        this.element.innerHTML = "";
        for (var i = this.firstI(); this.secondI(i, array_products); i++) {
            catalog.appendChild(this.createCard(array_products[i]));
        };


        //PAGINATION
        this.createPag(array_products, this.per_page);

        //POU-PAP
        // CreatePouPap()
    };

    createPag(array_products, per_page) {
        let link, li, ul;
        let activeEl;
        this.per_page = per_page;

        pagination.innerHTML = ""; // add

        ul = Builder.createNewElement("ul", null, "pagination");
        for (let i = 0; i < Math.ceil(array_products.length / this.per_page); i++) {
            link = Builder.createNewElement("a", i + 1, "page-link", [{"name": "id", "value": i}]);

            activeEl = (i == this.current) ? "page-item active" : "page-item";
            li = Builder.attachChilderToParent(Builder.createNewElement("li", null, activeEl), [link]);
            ul.appendChild(li);
        };

        // pagination.innerHTML = "";
        pagination.appendChild(ul);

        // let pagination = document.getElementById("pagination");
        let pag_buttons = document.getElementsByClassName("page-link");

        console.log(pag_buttons);
        Array.from(document.getElementsByClassName("page-link")).map((el) => {
            el.addEventListener("click", (e) => {
                console.log(el);
                this.current = el.id;
                console.log(this.current);
                // this.element.innerHTML = "";
                this.renderProducts(array_products)
            });
        });
    };
}