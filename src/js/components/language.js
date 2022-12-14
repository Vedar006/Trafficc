export function language() {
  if (document.querySelector('.mobile__lang_page_one')) {
    const lang = document.querySelector('.header__langswitch-input');
    const itemOne = document.querySelector('.header__item--one');
    const itemTwo = document.querySelector('.header__item--two');
    const itemThree = document.querySelector('.header__item--three');
    const itemFour = document.querySelector('.header__item--four');
    const langMobile = document.querySelector('[data-lang="mobile"]');
    const langMobileSub = document.querySelector('[data-lang="mobile__sub"]');

    const mobileItemOne = document.querySelector('[data-lang="mobile__item-one"]');

    const mobileItemTwo = document.querySelector('[data-lang="mobile__item-two"]');
    const mobileItemThree = document.querySelector('[data-lang="mobile__item-three"]');
    const mobileItemFour = document.querySelector('[data-lang="mobile__item-four"]');
    const mobileItemFive = document.querySelector('[data-lang="mobile__item-five"]');
    const mobileItemSix = document.querySelector('[data-lang="mobile__item-six"]');
    const mobileItemSeven = document.querySelector('[data-lang="mobile__item-seven"]');
    const mobileItemEight = document.querySelector('[data-lang="mobile__item-eight"]');
    // work
    const workTitle = document.querySelector('[data-work-lang="title"]');
    const workItemOne = document.querySelector('[data-work-lang="itemOne"]');
    const workItemTwo = document.querySelector('[data-work-lang="itemTwo"]');
    const workItemThree = document.querySelector('[data-work-lang="itemThree"]');
    const workItemFour = document.querySelector('[data-work-lang="itemFour"]');
    const workItemFive = document.querySelector('[data-work-lang="itemFive"]');
    const workItemSix = document.querySelector('[data-work-lang="itemSix"]');

    const workBtn = document.querySelector('[data-work-lang="btn"]');

    // Top
    const topTitle = document.querySelector('[data-top="title"]');
    const topSubTitle = document.querySelector('[data-top="subtitle"]');
    const topItemTitleOne = document.querySelector('[ data-top="item_title_one"]');
    const topItemDescrOne = document.querySelector('[data-top="item_descr_one"]');

    const topItemTitleTwo = document.querySelector('[ data-top="item_title_two"]');
    const topItemDescrTwo = document.querySelector('[data-top="item_descr_two"]');
    const topItemDescrThree = document.querySelector('[data-top="item_descr_three"]');



    if (lang) {
      lang.onclick = function () {

        if (lang.checked) {
          // i = 1;
          itemOne.textContent = 'webmasters';
          itemTwo.textContent = 'advertisers';
          itemThree.textContent = 'sign up';
          itemFour.textContent = 'sign in';
          langMobile.textContent = 'Mobile Partner Network';
          langMobileSub.textContent = 'Only working offers from direct advertisers';
          mobileItemOne.textContent = 'offers worldwide';
          mobileItemTwo.textContent = 'active advertisers';
          mobileItemThree.textContent = 'years in affiliate marketing';
          mobileItemFour.textContent = 'conversions per day';
          mobileItemFive.textContent =
            'I am a social media user, blogger, website owner or arbitrageur and I want to cooperate with top globalbrands.';
          mobileItemSix.textContent = 'webmasters';

          mobileItemSeven.textContent =
            'I am a company owner or marketer and I want to attract new customers and increase sales through online advertising.';
          mobileItemEight.textContent = 'advertiser';
          // work
          workTitle.textContent = 'Working with us is';
          workItemOne.textContent = 'Confidence and stability! We have been on the market since 2015.';
          workItemTwo.textContent = 'A large selection of mobile apps and addons';
          workItemThree.textContent = 'Friendly and qualified support';
          workItemFour.textContent = 'Effective monetization of Pop-under, Push, In-App, FB, Google and other traffic sources';
          workItemFive.textContent = 'Exclusive offers thanks to our own strong buying';
          workItemSix.textContent = 'Stable payments 1 once a week from $100 after quality control';
          workBtn.textContent = 'Sign up';

          // top
          topTitle.textContent = 'we are always in the top!';
          topSubTitle.textContent = 'We are a direct advertiser with our own offers, which are included in the top charts of the AppStore and  Google Play.';
          topItemTitleOne.textContent = 'Top';
          topItemDescrOne.textContent = 'Our offers are included in the tops in the AppStore and Google Play';
          topItemTitleTwo.textContent = 'offers';
          topItemDescrTwo.textContent = 'We make our own white mobile offers, which you will not find in any other affiliate program';
          topItemDescrThree.textContent = 'We pay up to $2.5 per install and accept traffic from all over the world';

        } else {


          itemOne.textContent = 'вебмастерам';
          itemTwo.textContent = 'рекламодателям';
          itemThree.textContent = 'регистрация';
          itemFour.textContent = 'вход';
          langMobile.textContent = 'Мобильная партнерская сеть';
          langMobileSub.textContent = 'Только рабочие офферы от прямых рекламодателей';
          mobileItemOne.textContent = 'офферов по всему миру';
          mobileItemTwo.textContent = 'активных рекламодателей';
          mobileItemThree.textContent = 'лет в аффилейт маркетинге';
          mobileItemFour.textContent = 'конверсий в день';
          mobileItemFive.textContent =
            ' Я пользователь соцсетей, блогер, владелец сайта или арбитражник и хочу сотрудничать с топовыми мировыми брендами.';
          mobileItemSix.textContent = ' веб-мастерам';
          mobileItemSeven.textContent =
            'Я владелец компании или маркетолог и хочу привлечь новых клиентов и увеличить продажи с помощью онлайн - рекламы.';
          mobileItemEight.textContent = 'рекламодателю';
          // work

          workTitle.textContent = 'Работать с нами это';
          workItemOne.textContent = 'Уверенность и стабильность! Мы на рынке с 2015г.';
          workItemTwo.textContent = 'Большой выбор мобильных приложений и аддонов';
          workItemThree.textContent = 'Дружелюбная и квалифицированная поддержка';
          workItemFour.textContent = 'Эффективная монетизация Pop-under, Push, In-App, FB, Google и других источников трафика';
          workItemFive.textContent = 'Эксклюзивные предложения благодаря собственному сильному баингу';
          workItemSix.textContent = 'Стабильные выплаты 1 раз в неделю от $100 после проверки качества';
          workBtn.textContent = 'Регистрация';

          // top

          topTitle.textContent = 'мы всегда в топе!';
          topSubTitle.textContent = 'Мы прямой рекламодатель с собственными офферами, которые входят в топ-чарты AppStore и Google Play.';
          topItemTitleOne.textContent = 'Топ';
          topItemDescrOne.textContent = 'Наши офферы входят в ТОПы в AppStore и Google Play';
          topItemTitleTwo.textContent = 'офферы';
          topItemDescrTwo.textContent = '  Мы делаем собственные белые мобильные офферы, которые вы не найдете ни в одной другой  партнерке';
          topItemDescrThree.textContent = ' Мы платим до $2.5 за инсталл и принимаем трафик со всего мира';

        }
      };

    }

  } else {


    const lang = document.querySelector('.header__langswitch-input');
    const itemOne = document.querySelector('.header__item--one');
    const itemTwo = document.querySelector('.header__item--two');
    const itemThree = document.querySelector('.header__item--three');
    const itemFour = document.querySelector('.header__item--four');
    if (lang) {
      lang.onclick = function () {

        if (lang.checked) {
          itemOne.textContent = 'webmasters';
          itemTwo.textContent = 'advertisers';
          itemThree.textContent = 'sign up';
          itemFour.textContent = 'sign in';

        } else {
          itemOne.textContent = 'вебмастерам';
          itemTwo.textContent = 'рекламодателям';
          itemThree.textContent = 'регистрация';
          itemFour.textContent = 'вход';
        }
      };
    }
  }

};
