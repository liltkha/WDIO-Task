const { expect } = require("@wdio/globals");


describe("Google Cloud Platform Pricing Calculator tests", () => {
  it.only("find pricing calculator and test'", async () => {
    await browser.url("https://cloud.google.com/?hl=en");
    const searchIcon = await browser.$(
      "#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div"
    );
    await searchIcon.click();
    const searchInput = await browser.$("#i4");
    await searchInput.setValue("Google Cloud Platform Pricing Calculator");
    const searchButton = await browser.$(
      "#kO001e > div.WPN7R > div.TDbJKc > div > div.a7K4Uc > div.ND91id.LLv0lb > div.p1o4Hf > div > div > div.mb2a7b > form > div > div.qdOxv-fmcmS-yrriRe-OWXEXe-H9tDt.ZJR0Ie > label > i.google-material-icons.PETVs.PETVs-OWXEXe-UbuQg"
    );

    await searchButton.click();
    const calculatorButton = await browser.$(
      "#yDmH0d > c-wiz.SSPGKf > div > div > div > div > div > div:nth-child(3) > c-wiz > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > a"
    );
    await calculatorButton.click();
    await browser.pause(1000);

    const parentFrame = await browser.$(
      "#cloud-site > devsite-iframe > iframe"
    );
    await browser.switchToFrame(parentFrame);

    const childFrame = await browser.$("#myFrame");
    await browser.switchToFrame(childFrame);

    const inputField = await browser.$("#input_100");
    await inputField.setValue("4");

    const dropdown = await browser.$(
      "#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(8) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container"
    );
    await dropdown.click();

    const result = await browser.$('//*[@id="select_option_224"]');
    await result.scrollIntoView();
    await result.click();

    await browser.pause(1000);
    // const dropdown2 = await browser.$(
    //   "#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(9) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container"
    // );
    // await dropdown2.click();
    // const result2 = await browser.$('#select_option_708 > div.md-text.ng-binding');
    // await result2.scrollIntoView()
    // await result2.click();

    // const box = await browser.$('#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(15) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container > md-checkbox > div.md-label')
    // await box.click();
   

    await browser.pause(3000);
  });
});
