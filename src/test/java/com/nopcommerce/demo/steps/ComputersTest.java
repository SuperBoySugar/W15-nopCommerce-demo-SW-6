package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ComputersTest {

    @Given("^I click on \"([^\"]*)\"$")
    public void iClickOn(String menu) {
        new HomePage().selectMenu(menu);
    }

    @When("^I click on Desktop$")
    public void iClickOnDesktop() {
        new ComputersPage().clickOnDesktop();
    }

    @And("^I select \"([^\"]*)\" from Sort By dropdown$")
    public void iSelectFromSortByDropdown(String filters) {
        new DesktopsPage().selectZToAFromSortByDropdown(filters);
    }


    @Then("^I verify Products are displayed in Descending order$")
    public void iVerifyProductsAreDisplayedInDescendingOrder() {
        new DesktopsPage().verifyProductAreInDescendingOrder();
    }


    @And("^I Click on add to cart button$")
    public void iClickOnAddToCartButton() throws InterruptedException {
        new DesktopsPage().clickOnAddToCart();
    }

    @And("^I verify \"([^\"]*)\" title$")
    public void iVerifyTitle(String expectedTitle) {
     new BuildYourOwnComputerPage().verifyBuildYourOwnComputerText(expectedTitle);
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram)  {
        new BuildYourOwnComputerPage().selectRAM(ram);

    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().selectHDD(hdd);

    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
        new BuildYourOwnComputerPage().selectOS(os);

    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftware(software);


    }

    @And("^I verify the price \"([^\"]*)\"$")
    public void iVerifyThePrice(String price) {
        new BuildYourOwnComputerPage().verifyPrice(price);

    }


    @And("^I Click on add to cart button on Build your own computer$")
    public void iClickOnAddToCartButtonOnBuildYourOwnComputer() {
        new BuildYourOwnComputerPage().clickOnAddToCart();
    }

    @And("^I verify add to cart message \"([^\"]*)\"$")
    public void iVerifyAddToCartMessage(String expectedMessage)  {
        new BuildYourOwnComputerPage().verifyAddToCartMessage(expectedMessage);

    }

    @And("^I click on cross button$")
    public void iClickOnCrossButton() {
        new BuildYourOwnComputerPage().clickOnCrossButton();
    }

    @And("^I mouse hover on shopping cart$")
    public void iMouseHoverOnShoppingCart() {
        new BuildYourOwnComputerPage().mouseHoverOnShoppingCart();
    }

    @And("^I click on go to cart$")
    public void iClickOnGoToCart() {
        new BuildYourOwnComputerPage().clickOnGoToCart();
    }

    @And("^I verify shopping cart title \"([^\"]*)\"$")
    public void iVerifyShoppingCartTitle(String title)  {
        new ShoppingCartPage().verifyShoppingCartTitle(title);

    }

    @And("^I change in quantity and click on update cart \"([^\"]*)\"$")
    public void iChangeInQuantityAndClickOnUpdateCart(String qty)  {
        new ShoppingCartPage().changeQuantityAndUpdateCart(qty);


    }

    @And("^I verify the total \"([^\"]*)\"$")
    public void iVerifyTheTotal(String total)  {
        new ShoppingCartPage().verifyTotal(total);

    }

    @And("^I click on terms of service checkbox$")
    public void iClickOnTermsOfServiceCheckbox() {
        new ShoppingCartPage().clickOnTermsOfServiceCheckbox();
    }

    @And("^I click on checkout button$")
    public void iClickOnCheckoutButton() {
        new ShoppingCartPage().clickOnCheckOutBtn();
    }

    @And("^I verify the welcome text \"([^\"]*)\"$")
    public void iVerifyTheWelcomeText(String text)  {
        new SignInPage().verifyWelcomeText(text);

    }

    @And("^I click on checkout as guest button$")
    public void iClickOnCheckoutAsGuestButton() {
        new SignInPage().clickOnCheckoutAsGuestBtn();
    }


    @And("^I input first name field \"([^\"]*)\"$")
    public void iInputFirstNameField(String fname)  {
        new CheckoutPage().inputFirstName(fname);

    }

    @And("^I input last name field \"([^\"]*)\"$")
    public void iInputLastNameField(String lname)  {
        new CheckoutPage().inputLastName(lname);

    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country)  {
        new CheckoutPage().selectCountry(country);

    }

    @And("^I input city \"([^\"]*)\"$")
    public void iInputCity(String city)  {
        new CheckoutPage().inputCity(city);

    }

    @And("^I input address \"([^\"]*)\"$")
    public void iInputAddress(String address)  {
        new CheckoutPage().inputAddress(address);

    }

    @And("^I input zipcode \"([^\"]*)\"$")
    public void iInputZipcode(String zipcode)  {
        new CheckoutPage().inputZipCode(zipcode);


    }

    @And("^I input telephone \"([^\"]*)\"$")
    public void iInputTelephone(String telephone)  {
        new CheckoutPage().inputTelephoneNumber(telephone);

    }

    @And("^I click on continue button$")
    public void iClickOnContinueButton() {
        new CheckoutPage().clickOnContinue();
    }

    @And("^I input email$")
    public void iInputEmail() {
        new CheckoutPage().inputEmail();
    }

    @And("^I click on next day air radio button$")
    public void iClickOnNextDayAirRadioButton() {
        new CheckoutPage().clickOnNextDayAirRadioBtn();
    }

    @And("^I click on continue on shipping$")
    public void iClickOnContinueOnShipping() {
        new CheckoutPage().clickOnContinueOnShipping();
    }
    @And("^I click on credit card button$")
    public void iClickOnCreditCardButton() {
        new CheckoutPage().clickOnCreditCard();
    }
    @And("^I click on payment continue$")
    public void iClickOnPaymentContinue() {
        new CheckoutPage().clickOnPaymentContinue();
    }

    @And("^I select credit card \"([^\"]*)\"$")
    public void iSelectCreditCard(String creditCard) throws InterruptedException {
        new CheckoutPage().selectCreditCard(creditCard);

    }

    @And("^I input card holder name \"([^\"]*)\"$")
    public void iInputCardHolderName(String cardHolderName)  {
        new CheckoutPage().inputCardHolderName(cardHolderName);

    }


    @And("^I input card number \"([^\"]*)\"$")
    public void iInputCardNumber(String cardNumber)  {
        new CheckoutPage().inputCardNumber(cardNumber);

    }

    @And("^I select expire month \"([^\"]*)\"$")
    public void iSelectExpireMonth(String month)  {
        new CheckoutPage().selectExpireMonth(month);

    }

    @And("^I select expire year \"([^\"]*)\"$")
    public void iSelectExpireYear(String year) {
        new CheckoutPage().selectExpireYear(year);

    }

    @And("^I input card code \"([^\"]*)\"$")
    public void iInputCardCode(String cardCode)  {
        new CheckoutPage().inputCardCode(cardCode);

    }

    @And("^I click on continue card payment$")
    public void iClickOnContinueCardPayment() {
        new CheckoutPage().clickOnContinuCardPayment();
    }



    @And("^I verify payment method \"([^\"]*)\"$")
    public void iVerifyPaymentMethod(String paymentMethod)  {
        new CheckoutPage().verifyPaymentMethod(paymentMethod);

    }

    @And("^I verify shipping method \"([^\"]*)\"$")
    public void iVerifyShippingMethod(String shippingMethod)  {
        new CheckoutPage().verifyShippingMethod(shippingMethod);

    }

    @And("^I verify  total \"([^\"]*)\"$")
    public void iVerifyTotal(String total)  {
        new CheckoutPage().verifyTotal(total);

    }

    @And("^I click on confirm$")
    public void iClickOnConfirm() {
        new CheckoutPage().clickOnConfirm();
    }

    @And("^I verify thank you message \"([^\"]*)\"$")
    public void iVerifyThankYouMessage(String expectedMessage)  {
        new CheckoutPage().verifyThankYou(expectedMessage);

    }


    @And("^I verify order confirmation \"([^\"]*)\"$")
    public void iVerifyOrderConfirmation(String expectedMessage)  {
        new CheckoutPage().verifyOrderConfirmation(expectedMessage);

    }

    @And("^I click on continue$")
    public void iClickOnContinue() {
        new CheckoutPage().clickOnContinue();
    }


    @And("^I verify the text welcome to our store \"([^\"]*)\"$")
    public void iVerifyTheTextWelcomeToOurStore(String expectedMessage)  {
        new HomePage().verifyTheTextWelcomeToOurStore(expectedMessage);

    }
}
