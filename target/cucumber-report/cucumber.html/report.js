$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerstest.feature");
formatter.feature({
  "line": 1,
  "name": "Computers Test",
  "description": "\r\nAs a user I should able to arrange products in Alphabetical order in Computer page\r\nand can add product to shopping cart successfully",
  "id": "computers-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "computers-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on \"Computers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"Name: A to Z\" from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify \"Build your own computer\" title",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    And     I verify the price \"$1,475.00\""
    }
  ],
  "line": 29,
  "name": "I Click on add to cart button on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify add to cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I change in quantity and click on update cart \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on checkout as guest button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input first name field \"Henry\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I input last name field \"smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I input email",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select country \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I input city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I input address \"10,Downing Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I input zipcode \"rs3 8de\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I input telephone \"0435672346\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on continue on shipping",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on credit card button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on payment continue",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select credit card \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I input card holder name \"Rishi Sunak\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I input card number \"5356654814185420\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select expire month \"09\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select expire year \"2026\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I input card code \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on continue card payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify payment method \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify shipping method \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I verify  total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify thank you message \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify order confirmation \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I verify the text welcome to our store \"Welcome to our store\"",
  "keyword": "And "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "computers-test;verify-product-added-to-shopping-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 74,
      "id": "computers-test;verify-product-added-to-shopping-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "8GB [+$60.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 75,
      "id": "computers-test;verify-product-added-to-shopping-cart-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4896534100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 75,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "computers-test;verify-product-added-to-shopping-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on \"Computers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"Name: A to Z\" from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify \"Build your own computer\" title",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    And     I verify the price \"$1,475.00\""
    }
  ],
  "line": 29,
  "name": "I Click on add to cart button on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify add to cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I change in quantity and click on update cart \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify the total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the welcome text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on checkout as guest button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input first name field \"Henry\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I input last name field \"smith\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I input email",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select country \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I input city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I input address \"10,Downing Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I input zipcode \"rs3 8de\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I input telephone \"0435672346\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on continue on shipping",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on credit card button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on payment continue",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select credit card \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I input card holder name \"Rishi Sunak\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I input card number \"5356654814185420\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select expire month \"09\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select expire year \"2026\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I input card code \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on continue card payment",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify payment method \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify shipping method \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I verify  total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify thank you message \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify order confirmation \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I verify the text welcome to our store \"Welcome to our store\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputersTest.iClickOn(String)"
});
formatter.result({
  "duration": 1104038000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnDesktop()"
});
formatter.result({
  "duration": 481182600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 10
    }
  ],
  "location": "ComputersTest.iSelectFromSortByDropdown(String)"
});
formatter.result({
  "duration": 103133800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1090025600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 10
    }
  ],
  "location": "ComputersTest.iVerifyTitle(String)"
});
formatter.result({
  "duration": 1007353700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputersTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 138919800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputersTest.iSelectRAM(String)"
});
formatter.result({
  "duration": 164677500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputersTest.iSelectHDD(String)"
});
formatter.result({
  "duration": 76398900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputersTest.iSelectOS(String)"
});
formatter.result({
  "duration": 64525700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputersTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 87855700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnAddToCartButtonOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 92686800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 30
    }
  ],
  "location": "ComputersTest.iVerifyAddToCartMessage(String)"
});
formatter.result({
  "duration": 692087100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnCrossButton()"
});
formatter.result({
  "duration": 114417600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "duration": 205891300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnGoToCart()"
});
formatter.result({
  "duration": 1330422900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 30
    }
  ],
  "location": "ComputersTest.iVerifyShoppingCartTitle(String)"
});
formatter.result({
  "duration": 53162900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 47
    }
  ],
  "location": "ComputersTest.iChangeInQuantityAndClickOnUpdateCart(String)"
});
formatter.result({
  "duration": 561044700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 20
    }
  ],
  "location": "ComputersTest.iVerifyTheTotal(String)"
});
formatter.result({
  "duration": 112270800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnTermsOfServiceCheckbox()"
});
formatter.result({
  "duration": 115473100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 662445600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 27
    }
  ],
  "location": "ComputersTest.iVerifyTheWelcomeText(String)"
});
formatter.result({
  "duration": 46234200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnCheckoutAsGuestButton()"
});
formatter.result({
  "duration": 818846600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 26
    }
  ],
  "location": "ComputersTest.iInputFirstNameField(String)"
});
formatter.result({
  "duration": 138561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 25
    }
  ],
  "location": "ComputersTest.iInputLastNameField(String)"
});
formatter.result({
  "duration": 140928900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iInputEmail()"
});
formatter.result({
  "duration": 119739800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 18
    }
  ],
  "location": "ComputersTest.iSelectCountry(String)"
});
formatter.result({
  "duration": 176825900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 14
    }
  ],
  "location": "ComputersTest.iInputCity(String)"
});
formatter.result({
  "duration": 152468900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,Downing Street",
      "offset": 17
    }
  ],
  "location": "ComputersTest.iInputAddress(String)"
});
formatter.result({
  "duration": 168652500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rs3 8de",
      "offset": 17
    }
  ],
  "location": "ComputersTest.iInputZipcode(String)"
});
formatter.result({
  "duration": 160889000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0435672346",
      "offset": 19
    }
  ],
  "location": "ComputersTest.iInputTelephone(String)"
});
formatter.result({
  "duration": 127097400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnContinueButton()"
});
formatter.result({
  "duration": 109417700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnNextDayAirRadioButton()"
});
formatter.result({
  "duration": 393910000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnContinueOnShipping()"
});
formatter.result({
  "duration": 95808600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnCreditCardButton()"
});
formatter.result({
  "duration": 314808300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnPaymentContinue()"
});
formatter.result({
  "duration": 99048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 22
    }
  ],
  "location": "ComputersTest.iSelectCreditCard(String)"
});
formatter.result({
  "duration": 2178623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rishi Sunak",
      "offset": 26
    }
  ],
  "location": "ComputersTest.iInputCardHolderName(String)"
});
formatter.result({
  "duration": 115519700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5356654814185420",
      "offset": 21
    }
  ],
  "location": "ComputersTest.iInputCardNumber(String)"
});
formatter.result({
  "duration": 104615600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09",
      "offset": 23
    }
  ],
  "location": "ComputersTest.iSelectExpireMonth(String)"
});
formatter.result({
  "duration": 148538700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2026",
      "offset": 22
    }
  ],
  "location": "ComputersTest.iSelectExpireYear(String)"
});
formatter.result({
  "duration": 136764100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 19
    }
  ],
  "location": "ComputersTest.iInputCardCode(String)"
});
formatter.result({
  "duration": 91090900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnContinueCardPayment()"
});
formatter.result({
  "duration": 73972400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 25
    }
  ],
  "location": "ComputersTest.iVerifyPaymentMethod(String)"
});
formatter.result({
  "duration": 252722800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 26
    }
  ],
  "location": "ComputersTest.iVerifyShippingMethod(String)"
});
formatter.result({
  "duration": 38633800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 17
    }
  ],
  "location": "ComputersTest.iVerifyTotal(String)"
});
formatter.result({
  "duration": 38721100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnConfirm()"
});
formatter.result({
  "duration": 78831800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 28
    }
  ],
  "location": "ComputersTest.iVerifyThankYouMessage(String)"
});
formatter.result({
  "duration": 881498300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 29
    }
  ],
  "location": "ComputersTest.iVerifyOrderConfirmation(String)"
});
formatter.result({
  "duration": 52744000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnContinue()"
});
formatter.result({
  "duration": 490057000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 40
    }
  ],
  "location": "ComputersTest.iVerifyTheTextWelcomeToOurStore(String)"
});
formatter.result({
  "duration": 46590600,
  "status": "passed"
});
formatter.after({
  "duration": 329200,
  "status": "passed"
});
formatter.uri("topmenutest.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As a user I want to navigate to all top menu pages",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"\u003cTop Menu Option\u003e\" from Top Menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"\u003cTitle\u003e\" of the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;",
  "rows": [
    {
      "cells": [
        "Top Menu Option",
        "Title"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;4"
    },
    {
      "cells": [
        "Digital Downloads",
        "Digital downloads"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 18,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 19,
      "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1524629000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Computers\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Computers\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 894673900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 34854400,
  "status": "passed"
});
formatter.after({
  "duration": 75100,
  "status": "passed"
});
formatter.before({
  "duration": 2156606600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Electronics\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Electronics\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 480878200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 39721000,
  "status": "passed"
});
formatter.after({
  "duration": 40500,
  "status": "passed"
});
formatter.before({
  "duration": 2054778000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Apparel\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Apparel\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 54900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1084067400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 34352200,
  "status": "passed"
});
formatter.after({
  "duration": 20500,
  "status": "passed"
});
formatter.before({
  "duration": 2496075600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Digital Downloads\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Digital downloads\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital Downloads",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 600865400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 32808300,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 1896841500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Books\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Books\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 766143400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 34145200,
  "status": "passed"
});
formatter.after({
  "duration": 47100,
  "status": "passed"
});
formatter.before({
  "duration": 1498549200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Jewelry\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Jewelry\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 665632300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 36391400,
  "status": "passed"
});
formatter.after({
  "duration": 42500,
  "status": "passed"
});
formatter.before({
  "duration": 1790909500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should navigate to all top menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-all-top-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Gift Cards\" from Top Menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to relevant page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Gift Cards\" of the page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "TopMenuTestSteps.iClickOnFromTopMenu(String)"
});
formatter.result({
  "duration": 1106022400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iNavigateToRelevantPageSuccessfully()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 10
    }
  ],
  "location": "TopMenuTestSteps.iVerifyOfThePage(String)"
});
formatter.result({
  "duration": 31865900,
  "status": "passed"
});
formatter.after({
  "duration": 40200,
  "status": "passed"
});
});