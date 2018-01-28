import nightmare from 'nightmare'

describe('When visiting the homepage', function () {


    let page;

    beforeEach(() => {
        page = nightmare().goto('http://localhost:3000').wait(1000);
    })

    it('displays header', async () => {
        let text = await page.evaluate(() => document.body.textContent)
            .end();
        expect(text).toContain('Contacts')
    })


    it('displays contact cards', async () => {
        let text = await page.evaluate(() => document.body.textContent)
            .end();
        expect(text).toContain('Thomas Ochman')
    })

})