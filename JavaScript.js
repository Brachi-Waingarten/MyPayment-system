class Payment {
    constructor( sum, description, transactionStatus, formOfPayment,user,paymentDate) {
        this.paymentDate = paymentDate
        this.sum=sum
        this.description=description
        this.transactionStatus=transactionStatus
        this.formOfPayment=formOfPayment
        this.user=user
    }
}
class User {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
    }
}
class Credit extends Payment{
    constructor(cvc,paymentDate,sum,description,transactionStatus,formOfPayment,user){
        super(paymentDate,sum,description,transactionStatus,formOfPayment,user)
        this.cvc=cvc
    }
}
class ClearingCompany extends Credit{
    constructor(paymentId,cvc,paymentDate,sum,description,transactionStatus,formOfPayment,user){
        super(cvc,paymentDate,sum,description,transactionStatus,formOfPayment,user)
        this.paymentId=paymentId
    }
}
function deal(){
    let creditCard=new Credit();
    let payment=new Payment();
    let checkedOption=document.getElementById("typeOfPayment").value
    switch(checkedOption){
        case "credit card":creditCard.pay()
        case "cash":payment.pay()
        case "cheque":payment.pay()
    }
}