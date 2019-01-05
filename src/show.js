export class Show {

    constructor(){
        this.your_chose = document.getElementById("your_chose");
        this.searchBox = document.getElementById("searchBox");
        this.count = document.getElementById("count")
    }

    showButtonSearch(){
        this.your_chose.style.display = "block";
        this.searchBox.style.display = "block";
        this.count.style.display = "block";
    }
}

