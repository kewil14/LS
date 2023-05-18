import { Customer } from "src/app/core/shared/models/customer.modal";
import { User } from "src/app/core/shared/models/modal-customer/user.modal";


export const users: User[] = [
    {
        userId: "1", 
        institutionId: "CTI01", 
        login: "Yann", 
        firstName:"lann", 
        lastName:"Yankam",
        countryOfBirth: "Cameroon",
        gender: "Male",
        cityOfBirth: "Buea",
        nationality: "Cameroonian",
        maritalSituation: "",
        langKey: "Fr",
        email: "landryankam@gmail.com",
        phoneNumber: "651811185",
        postalBox: "129",
        avatar: "None"
    },
    {
        userId: "2", 
        institutionId: "CTI02", 
        login: "lyankam@mail.connecttechnology.io", 
        firstName:"landry", 
        lastName:"Tchuindjang",
        countryOfBirth: "Cameroon",
        gender: "Male",
        cityOfBirth: "Yaounde",
        nationality: "Cameroonian",
        maritalSituation: "maried",
        langKey: "En/Fr",
        email: "lyankam@mail.connecttechnology.io",
        phoneNumber: "656682014",
        postalBox: "34",
        avatar: "None"
    }

]