$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("electonicstest.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "\r\nAs a user I should able to navigate to Cell Phone page successfully\r\nand can verify that product added successfully and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;verify-product-added-successfully-and-place-order-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 46,
      "value": "#    And     I click on terms of service checkbox"
    },
    {
      "line": 47,
      "value": "#    And     I click on checkout button"
    },
    {
      "line": 48,
      "value": "#    And     I select country \"India\""
    },
    {
      "line": 49,
      "value": "#    And     I input city \"London\""
    },
    {
      "line": 50,
      "value": "#    And     I input address \"123 London Road\""
    },
    {
      "line": 51,
      "value": "#    And     I input zipcode \"Sw1 1AA\""
    },
    {
      "line": 52,
      "value": "#    And     I input telephone \"05768432563\""
    },
    {
      "line": 53,
      "value": "#    And     I click on continue"
    },
    {
      "line": 54,
      "value": "#    And     I click on radio button \"2nd Day Air ($0.00)\""
    },
    {
      "line": 55,
      "value": "#    And     I click on continue on shipping"
    },
    {
      "line": 56,
      "value": "#    And     I select credit card \"Visa\""
    },
    {
      "line": 57,
      "value": "#    And     I click on payment continue"
    },
    {
      "line": 58,
      "value": "#    And     I input card holder name \"Rishi Patel\""
    },
    {
      "line": 59,
      "value": "#    And     I input card number \"4700 1234 5678 7840\""
    },
    {
      "line": 60,
      "value": "#    And     I select expire month \"11\""
    },
    {
      "line": 61,
      "value": "#    And     I select expire year \"2025\""
    },
    {
      "line": 62,
      "value": "#    And     I input card code \"123\""
    },
    {
      "line": 63,
      "value": "#    And     I click on continue card payment"
    },
    {
      "line": 64,
      "value": "#    And     I verify shipping method \"Next Day Air\""
    },
    {
      "line": 65,
      "value": "#    And     I verify nokia cart total \"$698.00\""
    },
    {
      "line": 66,
      "value": "#    And     I click on confirm"
    },
    {
      "line": 67,
      "value": "#    And     I verify thank you message \"Thank you\""
    },
    {
      "line": 68,
      "value": "#    And     I verify order confirmation \"Your order has been successfully processed!\""
    },
    {
      "line": 69,
      "value": "#    And     I click on continue"
    },
    {
      "line": 70,
      "value": "#    And     I verify the text welcome to our store \"Welcome to our store\""
    },
    {
      "line": 71,
      "value": "#    And     I click on logout link"
    },
    {
      "line": 72,
      "value": "#    And     I get url"
    }
  ],
  "line": 73,
  "name": "",
  "description": "",
  "id": "electronics-test;verify-product-added-successfully-and-place-order-successfully;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Password",
        "Confirm Password"
      ],
      "line": 74,
      "id": "electronics-test;verify-product-added-successfully-and-place-order-successfully;;1"
    },
    {
      "cells": [
        "Henry",
        "smith",
        "password123",
        "password123"
      ],
      "line": 75,
      "id": "electronics-test;verify-product-added-successfully-and-place-order-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2605636900,
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
  "name": "Verify product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;verify-product-added-successfully-and-place-order-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \"Electronics\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \"Cell phone\" and click",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on list tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Nokia Lumia",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify text nokia lumia \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify  price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I change quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify shopping cart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on green button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify shopping cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify text \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input first name \"Henry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I input last name \"smith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input email address",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input Password \"password123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input confirm password \"password123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify Shopping Cart title \"Shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 18
    }
  ],
  "location": "ElectronicsTestSteps.iMouseHoverOn(String)"
});
formatter.result({
  "duration": 236231900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phone",
      "offset": 18
    }
  ],
  "location": "ElectronicsTestSteps.iMouseHoverOnAndClick(String)"
});
formatter.result({
  "duration": 969062999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 19
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 24258499,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnListTab()"
});
formatter.result({
  "duration": 38034800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnNokiaLumia()"
});
formatter.result({
  "duration": 2116805699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 27
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTextNokiaLumia(String)"
});
formatter.result({
  "duration": 16124701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 17
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyPrice(String)"
});
formatter.result({
  "duration": 14728101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "ElectronicsTestSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 45671899,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnAddToCartTab()"
});
formatter.result({
  "duration": 37144401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 32
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyShoppingCartMessage(String)"
});
formatter.result({
  "duration": 632466900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnGreenButton()"
});
formatter.result({
  "duration": 31496700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "duration": 161250201,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnGoToCart()"
});
formatter.result({
  "duration": 2369781800,
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
  "duration": 18614300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iVerifyTheQuantity()"
});
formatter.result({
  "duration": 30705901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 20
    }
  ],
  "location": "ComputersTest.iVerifyTheTotal(String)"
});
formatter.result({
  "duration": 17105400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnTermsOfServiceCheckbox()"
});
formatter.result({
  "duration": 39082501,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTest.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 475264299,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 281404100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 15
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 17682700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Henry",
      "offset": 20
    }
  ],
  "location": "ElectronicsTestSteps.iInputFirstName(String)"
});
formatter.result({
  "duration": 38497099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smith",
      "offset": 19
    }
  ],
  "location": "ElectronicsTestSteps.iInputLastName(String)"
});
formatter.result({
  "duration": 41938500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iInputEmailAddress()"
});
formatter.result({
  "duration": 41502399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "ElectronicsTestSteps.iInputPassword(String)"
});
formatter.result({
  "duration": 40439500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "ElectronicsTestSteps.iInputConfirmPassword(String)"
});
formatter.result({
  "duration": 39892601,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegister()"
});
formatter.result({
  "duration": 545849700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 32
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyRegisterTextMessage(String)"
});
formatter.result({
  "duration": 17380301,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 251794400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 30
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyShoppingCartTitle(String)"
});
formatter.result({
  "duration": 14288201,
  "status": "passed"
});
formatter.after({
  "duration": 119900,
  "status": "passed"
});
});