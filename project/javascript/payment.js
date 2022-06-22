// const btn = document.querySelector('.payment-btn')
// const payment = document.querySelector('.payment-type')
// btn.addEventListener('click',() =>
//     if(payment.querySelector())
// )

    
function paySubmit()
{
    var checkbooking = document.getElementById('agree');
    if(checkbooking.checked == false)
    {
        alert('Please choose Terms Of Use and buy tickets!');
    }

    var AllFormElements = window.document.getElementById("formpayment").elements;
    for (i = 0; i < AllFormElements.length; i++) 
    {
        if (AllFormElements[i].type == 'radio') 
        {
            var ThisRadio = AllFormElements[i].name;
            var ThisChecked = 'No';
            var AllRadioOptions = document.getElementsByName(ThisRadio);
            for (x = 0; x < AllRadioOptions.length; x++)
            {
                 if (AllRadioOptions[x].checked && ThisChecked == 'No')
                 {
                     ThisChecked = 'Yes';
                     break;
                 } 
            }   
            var AlreadySearched = ShowAlert.indexOf(ThisRadio);
            if (ThisChecked == 'No' && AlreadySearched == -1)
            {
                alert('Please choose a method payment');
            }     
        }
    }
    if (ShowAlert != '')
    {
        alert(ShowAlert);
        return false;
    }
    else
    {
        return true;
    }
}
