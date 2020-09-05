import { USERNAME_REQUIERD, PASSWORD_REQUIRED,
FIRSTNAME_REQUIRED,LASTNAME_REQUIRED,ADDRESS_REQUIRED,NUMER_REQUIRED,CITY_REQUIRED,ZIPCODE_REQUIRED,TITLE_REQUIRED,DESCRIPTION_REQUIRED,
VENUE_REQUIRED,SUMMARY_REQUIRED } from "./Messages"

export let usernameValidation = () => {
    return {
        required:{
            required: true,
            errorMessage: USERNAME_REQUIERD
        }
    }
}

export let passwordValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: PASSWORD_REQUIRED
        }
    }
}
export let firstNameValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: FIRSTNAME_REQUIRED
        }
    }
}
export let lastNameValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: LASTNAME_REQUIRED
        }
    }
}
export let addressValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: ADDRESS_REQUIRED
        }
    }
}
export let numberValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: NUMER_REQUIRED
        }
    }
}
export let cityValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: CITY_REQUIRED
        }
    }
}
export let zipCodeValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: ZIPCODE_REQUIRED
        }
    }
}
export let titleValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: TITLE_REQUIRED
        }
    }
}
export let descriptionValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: DESCRIPTION_REQUIRED
        }
    }
}

export let venueValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: VENUE_REQUIRED
        }
    }
}

export let summaryValidation = () => {
    return {
        required: {
            required: true,
            errorMessage: SUMMARY_REQUIRED
        }
    }
}

