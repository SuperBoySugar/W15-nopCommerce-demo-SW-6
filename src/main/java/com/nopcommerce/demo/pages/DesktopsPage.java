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

import java.util.ArrayList;
import java.util.List;

public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement sortByDropdown;

    @CacheLookup
    @FindBy(css = "div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)")
    WebElement addToCart;

    public void selectZToAFromSortByDropdown(String filter) {
        selectByVisibleTextFromDropDown(sortByDropdown, filter);
        log.info("Select Z To A filter : " + filter.toString());
    }

    public void clickOnAddToCart() throws InterruptedException {
        Thread.sleep(1000);
        clickOnElement(addToCart);
        log.info("Click on Add To Cart " .toString());
    }

    //************************* Sort Products by Name Z To A ***************************//
    By productList = By.cssSelector(".product-thumb h4 a");

    public void verifyProductAreInDescendingOrder() {
//        Thread.sleep(2000);
        List<WebElement> originalList = driver.findElements(productList);
        List<String> originalProductNameList = new ArrayList<>();
        for (WebElement product : originalList) {
            originalProductNameList.add(product.getText());
        }

        originalProductNameList.sort(String.CASE_INSENSITIVE_ORDER.reversed());
        System.out.println(originalProductNameList);

        List<WebElement> afterSortingList = driver.findElements(productList);
        List<String> afterSortingProductName = new ArrayList<>();
        for (WebElement product1 : afterSortingList) {
            afterSortingProductName.add(product1.getText());
        }
        System.out.println(afterSortingProductName);
        Assert.assertEquals(originalProductNameList, afterSortingProductName, "Product not sorted");
        log.info("Verify Product Are In Descending Order " .toString());
    }

}

