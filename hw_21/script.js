const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney = new Promise((resolve, reject) => {
    const userQuastion = confirm('Подивитися баланс карті?');
    userQuastion === true ? resolve() : reject();
  });

getMoney
    .then(
        function () {
            let currency; 
            let userCurrency = Object.keys(userData);

            do {
                currency = prompt(`Choose currency: ${userCurrency}`);
            
                if(currency) currency = currency.trim().toUpperCase();
            
            } while  (!userCurrency.includes(currency));

            console.log(`Баланс становить: ${userData[currency]} ${currency}`);
            
        },

        function () {
            let userCurrency = Object.keys(userData);
            let bankCurrency = Object.keys(bankData).filter(currency => bankData[currency].max > 0);
            let availableCurrency =  bankCurrency.filter(currency => userCurrency.includes(currency))
           

            let userCurrencyQuastion;

            do {
                userCurrencyQuastion = prompt(`Яку валюту бажаєте зняти: ${availableCurrency}?`);

                if(userCurrencyQuastion) userCurrencyQuastion = userCurrencyQuastion.trim().toUpperCase();

            } while (!availableCurrency.includes(userCurrencyQuastion))

            
            let minSum = bankData[userCurrencyQuastion].min;
            let maxSum = userData[userCurrencyQuastion];
          
            let userSumQuastion;

            do{
                userSumQuastion = prompt(`Яку сумму бажаєте зняти?`);

            } while (!userSumQuastion)
           
            if(userSumQuastion > maxSum) {
                console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxSum} ${userCurrencyQuastion}`);
            } else if (userSumQuastion < minSum) {
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minSum} ${userCurrencyQuastion}`);
            } else {
                console.log(`От Ваші гроші ${userSumQuastion} ${userCurrencyQuastion} ${bankData[userCurrencyQuastion].img}.`)
            }
        }
    )
    .finally(
        () => console.log('Дякую, гарного дня 😊')
    ) 
