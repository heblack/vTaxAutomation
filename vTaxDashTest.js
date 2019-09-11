const { Builder, By, Key, until } = require('selenium-webdriver');
require('geckodriver');
require('chromedriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const chalk = require('chalk');
const driver = new Builder()
    .forBrowser('firefox')
    .build();
const automationProcessStepOne = ()  =>  {
    driver.navigate().to('https://vatx-dev-sit-1697.paymentus.io/biller/stde/vatx?v2=true')
    .then(() => driver.findElement(By.id('inputEmail')).sendKeys('paymentus'))
    .then(() => driver.findElement(By.id('inputPassword')).sendKeys('charlotte28277', Key.RETURN))
    .then(() => driver.wait(until.titleIs('Agent Dashboard'), 5000))
    .then(() => driver.sleep(3000))
    .then(() => driver.findElement(By.xpath('//*[@id="sidebar-menu"]/li[8]')).click())
    .then(() => driver.findElement(By.xpath('//*[@id="sidebar-menu"]/li[8]/div/ul/li[3]')).click()) 
    .then(() => driver.sleep(4000))
    .then(() => driver.findElement(By.xpath('//*[@id="page-content"]/div/div/angular-filemanager/div/div[2]/div/div[1]/ul/li/ul/li[4]/a[1]')).click())
    .then(() => driver.findElements(By.className('item-list ng-scope selected'))
    .then(() => console.log('successfully ran')
    ));
};
automationProcessStepOne();