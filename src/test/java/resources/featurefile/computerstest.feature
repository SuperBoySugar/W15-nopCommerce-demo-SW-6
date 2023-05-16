Feature: Computers Test

  As a user I should able to arrange products in Alphabetical order in Computer page
  and can add product to shopping cart successfully

  Background: I am on homepage

    @sanity
  Scenario: Verify products are arranged in Alphabetical order on Computers page
    Given   I click on "Computers"
    When    I click on Desktop
    And     I select "Name: Z to A" from Sort By dropdown
    Then    I verify Products are displayed in Descending order


      @regression
  Scenario Outline: Verify product added to shopping cart successfully
    Given   I click on "Computers"
    When    I click on Desktop
    And     I select "Name: A to Z" from Sort By dropdown
    And     I Click on add to cart button
    And     I verify "Build your own computer" title
    And     I select processor "<Processor>"
    And     I select RAM "<RAM>"
    And     I select HDD "<HDD>"
    And     I select OS "<OS>"
    And     I select Software "<Software>"
#    And     I verify the price "$1,475.00"
    And     I Click on add to cart button on Build your own computer
    And     I verify add to cart message "The product has been added to your shopping cart"
    And     I click on cross button
    And     I mouse hover on shopping cart
    And     I click on go to cart
    And     I verify shopping cart title "Shopping cart"
    And     I change in quantity and click on update cart "2"
    And     I verify the total "$2,950.00"
    And     I click on terms of service checkbox
    And     I click on checkout button
    And     I verify the welcome text "Welcome, Please Sign In!"
    And     I click on checkout as guest button
    And     I input first name field "Henry"
    And     I input last name field "smith"
    And     I input email
    And     I select country "Australia"
    And     I input city "London"
    And     I input address "10,Downing Street"
    And     I input zipcode "rs3 8de"
    And     I input telephone "0435672346"
    And     I click on continue button
    And     I click on next day air radio button
    And     I click on continue on shipping
    And     I click on credit card button
    And     I click on payment continue
    And     I select credit card "Master card"
    And     I input card holder name "Rishi Sunak"
    And     I input card number "5356654814185420"
    And     I select expire month "09"
    And     I select expire year "2026"
    And     I input card code "123"
    And     I click on continue card payment
    And     I verify payment method "Credit Card"
    And     I verify shipping method "Next Day Air"
    And     I verify  total "$2,950.00"
    And     I click on confirm
    And     I verify thank you message "Thank you"
    And     I verify order confirmation "Your order has been successfully processed!"
    And     I click on continue
    And     I verify the text welcome to our store "Welcome to our store"




    Examples:
      | Processor                             | RAM           | HDD               | OS                      | Software                 |
      | 2.2 GHz Intel Pentium Dual-Core E2200 | 8GB [+$60.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Total Commander [+$5.00] |





