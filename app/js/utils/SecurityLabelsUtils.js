import validator from 'validator'
import { undefinedOrNull } from './Validation'

export function getSecurityLabelConfig (field) {

    let config = {
        type: 'default',
        validate: validator.isAlpha,
        errorMessage: "Only alphanumeric values are allowed",
        max: 50,
        min: 1
    }

    if(undefinedOrNull(field)){
        return config;
    }

    let identifier = field.dbidentifier.toLowerCase();
        
    switch(identifier){

        case "mobile": 
        case "primarycontact":
            return {
                ...config,
                type: 'numeric',
                validate: validator.isMobilePhone,
                errorMessage: "Provided number is not valid",
                min: 10,
                max: 10
            }
        
        case "email":
        case "email_address":    
            return {
                ...config,
                type: 'email-address',
                validate: validator.isEmail,
                errorMessage: "Invalid email address",
                min: null,
                max: null
            }

        case "registration_code":
            return {
                ...config,
                type: 'default',
                validate: validator.isAlphanumeric,
                errorMessage: "Only alphanumeric values are allowed",
                min: null,
                max: null
            }
         
        case "branch_id":
        case "state_id":
        case "religion":
        case "academic_year_id": 
        case "district_id": 
        case "caste_id": 
        case "standard_id":
        case "division_id":
        case "taluka_id":
        
            return {
                ...config,
                type: 'select',
                validate: null, // At least one selection is needed here
                min: null,
                max: null
            }

        case "dob":
            return {
                ...config,
                type: 'datepicker',
                errorMessage: "Select the date of birth"
            }

        case 'radiobutton':
            return {
                ...config,
                type: 'radio',
                validate: null,
                min: null,
                max: null
            }    
        
        default:
            return config
    }
}