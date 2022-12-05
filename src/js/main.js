import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// исправить ошибку в консоле validate-forms.js:9 Нет такого селектора!
import {
  validateForms
} from './functions/validate-forms';
const rules1 = [{
    ruleSelector: '.questions__form-name',
    rules: [{
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.questions__form-phone',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.questions__form-offer',
    tel: true,
    telError: 'Введите ваше сообщение',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните предложение!'
    }]
  }
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.questions__form', rules1, afterForm);
