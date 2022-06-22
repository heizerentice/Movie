// function Validator(formSelector)
// {
//     var formRules = {};
//     var validatorRules =
//     {
//         required: function(value)
//         {
//             return value?undefined:'Vui lòng nhập Username';
//         },
//         email: function(value)
//         {
//             var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             return  regex.test(value)?undefined:'Vui lòng nhập Email';
//         },
//         min: function(min)
//         {
//             return function(value)
//             {
//                 return value.length >= min? undefined: 'Vui lòng nhập ít nhất ${min} kí tự';
//             }
//         },
//         max: function(max)
//         {
//             var VNphone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
//             return function(value)
//             {
//                 return VNphone.test(value).length <= max ? undefined: 'Vui lòng nhập tối đa ${max} kí tự';
//             }
//         },
//     };

//     var ruleName= 'required';

//     //Lấy ra form element trong DOM the formSelector
//     var formElement = document.querySelector(formSelector); 
    
//     //Chỉ xử lý khi có element trong DOM
//     if(formElement)
//     {
//         var inputs = formElement.querySelectorAll('[name][rules]');
//         for(var input of inputs)
//         {
//             var rules = input.getAttribute('rules').split('|'); //split để tách value
//             for(var rule of rules)
//             {
//                 if(rule.includes(':'))
//                 {
//                     var ruleInfo = rule.split(':');
//                     rule = ruleInfo[0];
//                 }

//                 var ruleFunc= validatorRules[rule];

//                 if(Array.isArray(formRules[input.name]))
//                 {
//                     formRules[input.name].push(validatorRules[rule]);
//                 }
//                 else
//                 {
//                     formRules[input.name]=[validatorRules[rule]];
//                 }
//             }
           

//         }
//         console.log(formRules);    
//     }
// }

function formRegister()
{
    var username = document.forms['RegForm']['Username'];
    var password = document.forms['RegForm']['Password'];
    var email = document.forms['RegForm']['Email'];
    var phone = document.forms['RegForm']['Phone'];
    var region = document.forms['RegForm']['Region'];
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var VNphone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
    
    if(username.value =="")
    {
        alert("Please enter your username."); 
        username.focus(); 
        return false; 
    }

    if (password.value == "") { 
        alert("Please enter your password."); 
        password.focus(); 
        return false; 
    }

    if (email.value == "") { 
        alert("Please enter your email."); 
        email.focus(); 
        return false; 
    }

    if (phone.value == "") { 
        alert("Please enter your phone number."); 
        phone.focus(); 
        return false; 
    }

    if (region.selectedIndex < 1) { 
        alert("Please select your favorite cinema."); 
        region.focus(); 
        return false; 
    }

    if(email !== regex)
    {
        alert("Invalid email");
    }

    if(phone !== VNphone)
    {
        alert("Invalid phone number");
    }

}