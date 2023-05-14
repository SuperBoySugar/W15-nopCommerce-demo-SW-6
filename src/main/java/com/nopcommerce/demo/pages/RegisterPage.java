package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerText;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstName;
    @CacheLookup

    @FindBy(id = "LastName")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(id = "register-button")
    WebElement register;

    @CacheLookup
    @FindBy(xpath = "//div[@class='result']")
    WebElement registerMessage;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueBtn;

    public void verifyTextRegister(String expectedText) {
        verifyElements(registerText, expectedText, "Text is not Displayed");
        log.info("Verify Register text " + expectedText.toString());
    }

    public void inputFirstNameField(String name) {
        sendTextToElement(firstName, name);
        log.info("Input First Name: " + name .toString());
    }

    public void inputLastNameField(String lName) {
        sendTextToElement(lastName, lName);
        log.info("Input Last Name: " + lName.toString() );
    }

    public void emailField() {
        sendTextToElement(email, getRandomEmail());
        log.info("Input Email: "  .toString() );
    }

    public void passwordField(String password1) {
        sendTextToElement(password, password1);
        log.info("Input Password: " + password1.toString() );
    }

    public void confirmPasswordField(String confirmPass) {
        sendTextToElement(confirmPassword, confirmPass);
        log.info("Input confirm password: " + confirmPass.toString());
    }

    public void clickOnRegister() {
        clickOnElement(register);
        log.info("Click on Register button " .toString() );
    }

    public void verifyRegisterTextMessage(String expectedMessage) {
        verifyElements(registerMessage, expectedMessage, "Message is not displayed");
        log.info("Verify Register Text Message " + expectedMessage.toString() );
    }

    public void clickOnContinueBtn() {
        clickOnElement(continueBtn);
        log.info("Click on Continue button " .toString() );
    }


}
