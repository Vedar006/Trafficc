import {
  accordion
} from "./components/accordion";
accordion();
import {
  promotion
} from "./components/promotion";
const promBtn = document.querySelector('[data-promotion-block-btn="1"]');
const promBottom = document.querySelector('[data-promotion-block-bottom="1"]');
const promBtnTwo = document.querySelector('[data-promotion-block-btn="2"]');
const promBottomTwo = document.querySelector('[data-promotion-block-bottom="2"]');
const promBtnThree = document.querySelector('[data-promotion-block-btn="3"]');
const promBottomThree = document.querySelector('[data-promotion-block-bottom="3"]');
promotion(promBtn, promBottom);
promotion(promBtnTwo, promBottomTwo);
promotion(promBtnThree, promBottomThree);
