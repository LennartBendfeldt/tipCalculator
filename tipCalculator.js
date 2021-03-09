// Calculate the level of service

function serviceCalculator(service){

        if(service < 33){
            return 'Poor';
        } else if (service >= 33 && service < 66){
            return 'Satisfactory';
        } else {
            return 'Great service!';
        }
};

//Return value to formula for calculating tip

function serviceTipCalculator(service){
    if(service < 33){
        return 0.10;
    } else if (service >= 33 && service < 66){
        return 0.15;
    } else {
        return 0.20;
    }
}

//Factor in amount of guests

function guestTipCalculator(guests){
    if(guests < 5){
        return 0.02;
    } else if (guests >= 4 && guests < 9){
        return 0.05;
    } else {
        return 0.10;
    }
}

document.querySelector('#tip-form').onchange = function(){

    //Take in number inputs for the bill amount and the amount of guests
    let billAmount = Number(document.getElementById('billAmount').value);
    let guests = Number(document.getElementById('guestAmount').value);

    //Calculate the satisfaction level and store the value
    document.getElementById('serviceOutput').innerHTML = serviceCalculator(document.getElementById('serviceInput').value);
    let satisfaction = document.getElementById('serviceInput').value;

    //Call elements
    let tipAmount = document.getElementById('tipAmount');
    let totalBillWithTip = document.getElementById('totalBillWithTip');
    
    //Calculate tip amounts and output final bill with tip
    tipAmount.value = (billAmount * serviceTipCalculator(satisfaction) + (billAmount * guestTipCalculator(guests))).toFixed(2);
    totalBillWithTip.value = (billAmount + Number(tipAmount.value)).toFixed(2);

   //Show Results
    document.getElementById('results').style.display='block';
  };