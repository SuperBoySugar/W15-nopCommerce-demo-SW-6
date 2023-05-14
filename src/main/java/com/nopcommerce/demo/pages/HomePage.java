package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement welcomeText;


    public void selectMenu(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//ul[@class='top-menu notmobile']//li//a"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
        log.info("Click on Top Menu option " + menu.toString() + "<br>");
    }

//    public String getErrorMessage() {
//        return getTextFromElement(errorMessage);
//    }

    public void verifyPageTitle(String title) {
        verifyElements(errorMessage, title, "Page title not displayed as expected");
        log.info("Verify page title ".toString());
    }

    public void verifyTheTextWelcomeToOurStore(String expectedMessage) {
        verifyElements(welcomeText, expectedMessage, "Message is not displayed");
        log.info("Verify page title "  .toString());
    }




    //**************** Electronics Test****************************

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Electronics']")
    WebElement electronics;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Cell phones']")
    WebElement cellPhones;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logout;

    public void mouseHoverOnElectronics() {
        mouseHoverToElement(electronics);
        log.info("Clicking on Login Link " .toString());
    }

    public void mouseHoverAndClickOnCellPhones() {
        mouseHoverToElementAndClick(cellPhones);
        log.info("Mouse hover and click on Cell Phones " .toString() );
    }

    public void clickOnLogoutLink() {
        clickOnElement(logout);
        log.info("Click on Logout Link " .toString() );
    }

    public void getURL() {
        String url = driver.getCurrentUrl();
        Assert.assertEquals("The URL is incorrect", url, "https://demo.nopcommerce.com/");
        log.info("Verify page URL " .toString() );
    }
}