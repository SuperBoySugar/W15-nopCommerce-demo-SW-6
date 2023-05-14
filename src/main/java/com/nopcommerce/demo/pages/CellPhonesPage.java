package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CellPhonesPage extends Utility {

    private static final Logger log = LogManager.getLogger(CellPhonesPage.class.getName());

    public CellPhonesPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Cell phones']")
    WebElement cellphones;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement listView;

    @CacheLookup
    @FindBy(css = "div:nth-of-type(3) > .product-item h2 > a")
    WebElement productNokiaLumia1020;

    public void verifyTextCellPhone(String expText) {
        verifyElements(cellphones, expText, "Error text not displayed");
        log.info("Verify Cell phone text: " + expText.toString());

    }

    public void clickOnListTab() {
        clickOnElement(listView);
        log.info("Click on List View tab ".toString());

    }

    public void clickOnNokiaLumia1020() {
        clickOnElement(productNokiaLumia1020);
        log.info("Click on Nokia Lumia 1020 ".toString());

    }
}
