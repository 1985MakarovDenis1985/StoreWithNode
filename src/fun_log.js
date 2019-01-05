

export class FunctionLog {
    
     isSubmitDog(pass){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pass);
    }


//password
     isLowerWord(pass) {
        return /[a-z]/.test(pass)
    }
     isUpperWord(pass) {
        return /[A-Z]/.test(pass)
    }
     isNumber(pass) {
        return /[1-9]/.test(pass)
    }
}