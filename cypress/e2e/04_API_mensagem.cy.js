describe('04 API Adopet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZjMxMjAxNC1mOTAxLTQ4ODAtOWRmYy0yMWU5Y2NiNGRmNDciLCJhZG9wdGVyTmFtZSI6ImZvcmphbGFuw6dhIiwiaWF0IjoxNzQxMzcyODI4LCJleHAiOjE3NDE2MzIwMjh9.HTTkQ0kXmDvesgih7CA2S174DYqb6BgqBEPe22cK2KU`

    it ('Mensagem da API', () =>{
        cy.request ({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/ef312014-f901-4880-9dfc-21e9ccb4df47',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})
    
