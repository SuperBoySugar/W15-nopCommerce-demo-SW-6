package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ElectronicsTestSteps {
    @Given("^I mouse hover on \"([^\"]*)\"$")
    public void iMouseHoverOn(String electronics) {
        new HomePage().mouseHoverOnElectronics();

    }

    @When("^I mouse hover on \"([^\"]*)\" and click$")
    public void iMouseHoverOnAndClick(String cellPhone) {
        new HomePage().mouseHoverAndClickOnCellPhones();

    }

    @Then("^I verify the text \"([^\"]*)\"$")
    public void iVerifyTheText(String text) {
        new CellPhonesPage().verifyTextCellPhone(text);

    }

    @And("^I click on list tab$")
    public void iClickOnListTab() {
        new CellPhonesPage().clickOnListTab();
    }
//
//    @And("^I click on nokia lumia(\\d+)$")
//    public void iClickOnNokiaLumia() {
//        new CellPhonesPage().clickOnNokiaLumia1020();
//    }

    @And("^I click on Nokia Lumia$")
    public void iClickOnNokiaLumia() throws InterruptedException {
        Thread.sleep(1000);
        new CellPhonesPage().clickOnNokiaLumia1020();
    }

    @And("^I verify text nokia lumia \"([^\"]*)\"$")
    public void iVerifyTextNokiaLumia(String expText) {
        new NokiaLumiaPage().verifyTextNokiaLumia1020(expText);

    }

    @And("^I verify  price \"([^\"]*)\"$")
    public void iVerifyPrice(String expectedPrice) {
        new NokiaLumiaPage().verifyThePrice(expectedPrice);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) {
        new NokiaLumiaPage().changeQuantity(qty);
    }

    @And("^I click on add to cart tab$")
    public void iClickOnAddToCartTab() {
        new NokiaLumiaPage().clickOnCartBtn();
    }

    @And("^I verify shopping cart message \"([^\"]*)\"$")
    public void iVerifyShoppingCartMessage(String expectedMessage) {
        new NokiaLumiaPage().verifyShoppingCartMessage(expectedMessage);
    }

    @And("^I click on green button$")
    public void iClickOnGreenButton() {
        new NokiaLumiaPage().clickOnGreenBtn();
    }

    @And("^I verify the quantity$")
    public void iVerifyTheQuantity() {
        new ShoppingCartPage().verifyTheQuantity();
    }

    @And("^I verify text \"([^\"]*)\"$")
    public void iVerifyText(String expectedText) {
        new RegisterPage().verifyTextRegister(expectedText);
    }

    //
//    @And("^I input password field \"([^\"]*)\"$")
//    public void iInputPasswordField(String password)  {
//        new RegisterPage().passwordField(password);
//
//    }


    @And("^I input confirm password field \"([^\"]*)\"$")
    public void iInputConfirmPasswordField(String password1) {
        new RegisterPage().confirmPasswordField(password1);
    }

    @And("^I click on register$")
    public void iClickOnRegister() {
        new RegisterPage().clickOnRegister();
    }

    @And("^I verify register text message \"([^\"]*)\"$")
    public void iVerifyRegisterTextMessage(String expectedMessage) {
        new RegisterPage().verifyRegisterTextMessage(expectedMessage);

    }

    @And("^I click on radio button \"([^\"]*)\"$")
    public void iClickOnRadioButton() {
        new CheckoutPage().clickOnRadioBtn2ndDayAir();

    }

    @And("^I verify nokia cart total \"([^\"]*)\"$")
    public void iVerifyNokiaCartTotal(String expectedTotal) {
        new CheckoutPage().verifyNokiaCartTotal(expectedTotal);

    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogoutLink();
    }

    @And("^I get url$")
    public void iGetUrl() {
        new HomePage().getURL();
    }


    @And("^I input Password Field \"([^\"]*)\"$")
    public void iInputPasswordField(String password) {
        new RegisterPage().passwordField(password);

    }


    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new SignInPage().clickOnRegisterBtn();
    }

    @And("^I input first name \"([^\"]*)\"$")
    public void iInputFirstName(String name) {
        new RegisterPage().inputFirstNameField(name);
    }

    @And("^I input last name \"([^\"]*)\"$")
    public void iInputLastName(String lName) {
        new RegisterPage().inputLastNameField(lName);
    }

    @And("^I input email address$")
    public void iInputEmailAddress() {
        new RegisterPage().emailField();
    }

    @And("^I input Password \"([^\"]*)\"$")
    public void iInputPassword(String password) {
        new RegisterPage().passwordField(password);
    }

    @And("^I input confirm password \"([^\"]*)\"$")
    public void iInputConfirmPassword(String confPass) {
        new RegisterPage().confirmPasswordField(confPass);
    }

    @And("^I click on Continue button$")
    public void iClickOnContinueButton() {
        new RegisterPage().clickOnContinueBtn();
    }

    @And("^I verify Shopping Cart title \"([^\"]*)\"$")
    public void iVerifyShoppingCartTitle(String title)  {
        new ShoppingCartPage().verifyShoppingCartTitle(title);

    }
}
