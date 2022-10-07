import { chromium } from 'playwright';
import params from './params.json' assert { type: "json" };

const main = async () => {
    const { nie, fullName, phone, email } = params;

    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const page = await browser.newPage();
    page.on('dialog', dialog => dialog.accept());

    await page.goto('https://icp.administracionelectronica.gob.es/icpplustieb/index.html');

    await page.selectOption('#divProvincias #form', '/icpplustieb/citar?p=8&locale=es');
    await page.click('#btnAceptar');

    await page.selectOption('#divSedes #sede', '14');
    await page.selectOption('#divGrupoTramites select', '4036');
    await page.click('#btnAceptar');

    await page.click('#btnEntrar');

    await page.locator('#txtIdCitado').fill(nie);
    await page.locator('#txtDesCitado').fill(fullName);

    await page.click('#btnEnviar');
    await page.click('#btnEnviar');

    await page.locator('#txtTelefonoCitado').fill(phone);
    await page.locator('#emailUNO').fill(email);
    await page.locator('#emailDOS').fill(email);

    await page.click('#btnSiguiente');
}

main();