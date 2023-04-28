const locators = {

    LOGIN: {
        USER: '#email',
        PASSWORD: '#password-input',
        BTN_LOGIN: ':nth-child(4) > .btn'
    },

    FINANCIAL: {
        TAB: ':nth-child(5) > .is-parent > span',
        BANK_ACCOUNTS: ':nth-child(5) > .collapse > .nav > :nth-child(1) > .nav-link',
        BTN_MESSAGE: '.swal2-confirm',
    },

    ACCOUNT: {
        BTN_ADD: '.btn-outline-primary',
        SELECT_ACCOUNTS: '#s_47245 > th > .form-check > .form-check-input',
        BTN_DELETE: '.btn-outline-danger',
        BTN_CONFIRM_DELETE: '.swal2-confirm',
        EDIT_ACCOUNT: '#s_47248 > :nth-child(2) > .cursor-pointer',
        NAME: '#bankName',
        ACCOUNT_TYPE: '#type',
        AGENCY: '#agency',
        ACCOUNT: '#account',
        BALANCE: '#initialBalance',
        BTN_SAVE: '.hstack > .btn-primary',
        BTN_REMOVER: '.btn-light',
    },

    SUPPLIER: {
        SUPPLIERS: ':nth-child(5) > .collapse > .nav > :nth-child(2) > .nav-link',
        ADD_SUPPLIER: '.btn-outline-primary',
        SUPPLIER_NAME: '#name',
        CPFCNPJ: '#cpfCnpj',
        PHONE: '#phone',
        MOBILE: '#mobile',
        EMAIL: '#email',
        STREET: '#street',
        NUMBER: '#number',
        COMPLEMENT: '#complement',
        NEIGHBORHOOD: '#neighborhood',
        ZIPCODE: '#zipcode',
        CITY: '#city',
        STATE: '#state',
        COUNTRY: '#country',
        BTN_SAVE: '.hstack > .btn-primary'
    }
}

export default locators;