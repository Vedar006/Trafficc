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
const rules2 = [{
    ruleSelector: '.authorization__form-email',
    rules: [{
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите E-mail!'
      }
    ]
  },
  {
    ruleSelector: '.authorization__form-pass',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите пароль'
    }]
  }

];
const rules3 = [{
  ruleSelector: '.register__form-input--email',
  rules: [{
      rule: 'minLength',
      value: 3
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните E-mail!'
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный E-mail!'
    }
  ]
},
{
  ruleSelector: '.register__form-input--pass',
  rules: [{
    rule: 'required',
    value: true,
    errorMessage: 'Введите пароль'
  }]
},
{
  ruleSelector: '.register__form-input--repass',
  rules: [{
    rule: 'required',
    value: true,
    errorMessage: 'Повторите пароль'
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

const formI = document.querySelector('.questions__form');
const formF = document.querySelector('.authorization__form');
const formR = document.querySelector('.register__form');
if (formI) {
  validateForms('.questions__form', rules1, afterForm);
}


if (formF) {
  validateForms('.authorization__form', rules2, afterForm);
}
if (formR) {
  validateForms('.register__form', rules3, afterForm);
}



// Checkbox
const checkbox = document.querySelector("#rules_inp");

if (checkbox) {
  checkbox.onclick = function () {
    if (checkbox.checked) {
      console.log("Запомнить меня");
    } else {
      console.log("Не запоминать");
    }
  };
}
// language
const lang = document.querySelector('.header__langswitch-input');


if (lang) {
  lang.onclick = function () {
    if (lang.checked) {
      console.log("EN");
    } else {
      console.log("RU");
    }
  };

}
