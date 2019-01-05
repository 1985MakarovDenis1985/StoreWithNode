import {Builder} from "./builder";
import {FunctionLog} from "./fun_log";

const fun_log = new FunctionLog();



export class IsLogin {
    constructor() {
        this.log_form = document.getElementById("login_form");
        document.getElementById("log_out").style.display = "none"
    }

    createHtmlElement() {

        const labelEmail = Builder.createNewElement("label", "Email address", null, [{
            "name": "for",
            "value": "exampleInputEmail1"
        }]);
        const emailInput = Builder.createNewElement("input", null, "form-control", [
            {"name": "id", "value": "exampleInputEmail1"},
            {"name": "placeholder", "value": "Enter email"}
        ]);
        const small = Builder.createNewElement("small", "We'll never share your email with anyone else.", "form-text text-muted", [{
            "name": "id",
            "value": "emailHelp"
        }]);


        // <div class="invalid-feedback" id="error_text_email"></div>
        const errorEmail = Builder.createNewElement("div", "kjjkhhjhh", "invalid-feedback ", [{
            "name": "id",
            "value": "error_text_email"
        }]);

        let divEmail = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelEmail, emailInput, small, errorEmail]);


        const labelPass = Builder.createNewElement("label", "Password", null, [{
            "name": "for",
            "value": "exampleInputPassword1"
        }]);
        const passInput = Builder.createNewElement("input", null, "form-control", [
            {"name": "id", "value": "exampleInputPassword1"},
            {"name": "placeholder", "value": "Password"},
            {"name": "type", "value": "password"},
        ]);
        const errorPass = Builder.createNewElement("div", "", "invalid-feedback", [{
            "name": "id",
            "value": "error_text_password"
        }]);

        let divPass = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelPass, passInput, errorPass]);

        const button = Builder.createNewElement("button", "Login", "btn btn-primary", [{
            "name": "type",
            "value": "submit"
        }]);

        let form = Builder.attachChilderToParent(Builder.createNewElement("form", null, null, [{
            "name": "id",
            "value": "login_form"
        }]), [divEmail, divPass, button]);

        this.log_form.appendChild(form);

        this.log_form.addEventListener("submit", this.submit, false);
    }

    submit(e) {

        e.preventDefault();
        // const password = document.getElementById("exampleInputPassword1").value;
        //
        // let errorList = ["Please"];/////
        //
        // const submitEmail = document.getElementById("exampleInputEmail1").value;
        //
        // let errorEmail = ["Please"];
        //
        // if (! fun_log.isLowerWord(password)){
        //     errorList.push(" enter a-z ");
        // }
        // if (! fun_log.isUpperWord(password)){
        //     errorList.push(" enter A-Z ")
        // }
        // if (! fun_log.isNumber(password)){
        //     errorList.push(" enter 0-9 ");
        // }
        //
        // if (errorList.length > 1){
        //     const redText = document.getElementById("error_text_password");
        //     redText.innerHTML = errorList.join(" ");
        //     document.getElementById("exampleInputPassword1").classList.add("is-invalid")
        // }else{
        //     document.getElementById("exampleInputPassword1").classList.remove("is-invalid")
        // }
        //
        //
        //
        //
        // if (! fun_log.isSubmitDog(submitEmail)){
        //     errorEmail.push(" Your email was wrong");
        // }
        //
        // if (errorEmail.length > 1 ){
        //     const redEmail = document.getElementById("error_text_email");
        //     document.getElementById("emailHelp").style.display = "none";
        //     redEmail.innerHTML = errorEmail.join(" ");
        //     document.getElementById("exampleInputEmail1").classList.add("is-invalid")
        // }else{
        //     document.getElementById("exampleInputEmail1").classList.remove("is-invalid")
        // }


        // if(errorList.length == 1 && errorEmail.length == 1){
        //
        //     localStorage.setItem("isLogin", true);
        //     location = location.origin;
        // }
        
        console.log("submit");
        
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        // console.log(document.getElementById("exampleInputPassword1").value);

        const header = new Headers({
            "Content-Type": "application/json",
        })

        fetch('http://localhost:9000/login', {
            headers: header,
            method: "POST",
            body: JSON.stringify({
                email: e.target[0].value,
                password: document.getElementById("exampleInputPassword1").value
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.status == "isLogin") {
                    localStorage.setItem("isLogin", true);
                    location = location.origin;
                }
            })
    }
}

