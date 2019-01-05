// import {Builder} from "./builder";
//
//
// export class Pagination {
//
//
//     createPag(array_products, per_page) {
//         let link, li, ul;
//         let activeEl;
//         this.per_page = per_page;
//
//         pagination.innerHTML = ""; // add
//
//         ul = Builder.createNewElement("ul", null, "pagination");
//         for (let i = 0; i < Math.ceil(array_products.length / this.per_page); i++) {
//             link = Builder.createNewElement("a", i + 1, "page-link", [{"name": "id", "value": i}]);
//
//             activeEl = (i == this.current) ? "page-item active" : "page-item";
//             li = Builder.attachChilderToParent(Builder.createNewElement("li", null, activeEl), [link]);
//             ul.appendChild(li);
//         }
//         ;
//
//         // pagination.innerHTML = "";
//         pagination.appendChild(ul);
//
//         // let pagination = document.getElementById("pagination");
//         let pag_buttons = document.getElementsByClassName("page-link");
//
//         console.log(pag_buttons);
//         Array.from(document.getElementsByClassName("page-link")).map((el) => {
//             el.addEventListener("click", (e) => {
//                 console.log(el);
//                 this.current = el.id;
//                 console.log(this.current);
//                 // this.element.innerHTML = "";
//                 this.renderProducts(array_products)
//             });
//         });
//     };
// }