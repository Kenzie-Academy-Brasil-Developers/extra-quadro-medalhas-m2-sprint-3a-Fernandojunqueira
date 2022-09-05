import { Apirequest } from "./request.js";

class Render {

    static renderTableHeader(){
        
        const table = document.createElement('table')
        const tableRowHeader = document.createElement('tr')

        const tableHeader1 = document.createElement('th')
        const select = document.createElement('select')
        const option1 = document.createElement('option')
        const option2 = document.createElement('option')
        const option3 = document.createElement('option')
        const option4 = document.createElement('option')
        const option5 = document.createElement('option')

        const tableHeader2 = document.createElement('th')
        const pais = document.createElement('p')

        const tableHeader3 = document.createElement('th')
        const selectMedalhas1 = document.createElement('select')
        const optionOuro1 = document.createElement('option')
        const optionPrata1 = document.createElement('option')
        const optionBronze1 = document.createElement('option')

        const tableHeader4 = document.createElement('th')
        const selectMedalhas2 = document.createElement('select')
        const optionOuro2 = document.createElement('option')
        const optionPrata2 = document.createElement('option')
        const optionBronze2 = document.createElement('option')

        const tableHeader5 = document.createElement('th')
        const selectMedalhas3 = document.createElement('select')
        const optionOuro3 = document.createElement('option')
        const optionPrata3 = document.createElement('option')
        const optionBronze3 = document.createElement('option')

        const totalHeader = document.createElement('th')
        const total = document.createElement('p')

        const tableRowBody1 = document.createElement('tr')
        const tableRowBody2 = document.createElement('tr')
        const tableRowBody3 = document.createElement('tr')
        const tableRowBody4 = document.createElement('tr')

    }

    static renderTableBody(obj,index){

        const tableRowBody = document.createElement('tr')

        const tableData1 = document.createElement('td')

        const tableData2 = document.createElement('td')
        const tagDiv = document.createElement('div')
        const image = document.createElement('img')
        const nomePais = document.createElement('p')

        const tableData3 = document.createElement('td')
        const qtdMedalhasOuro = document.createElement('p')

        const tableData4 = document.createElement('td')
        const qtdMedalhasPrata = document.createElement('p')

        const tableData5 = document.createElement('td')
        const qtdMedalhasBronze = document.createElement('p')

        const tableData6 = document.createElement('td')
        const total = document.createElement('p')

        tableRowBody.className = 'table-body'

        tableData1.innerText = `${index + 1}°`

        image.src = obj.flag_url
        image.alt = `Imagem do ${obj.country}`
        nomePais.innerText = obj.country

        qtdMedalhasOuro.innerText = obj.medal_gold
        qtdMedalhasPrata.innerText = obj.medal_silver
        qtdMedalhasBronze.innerText = obj.medal_bronze
        total.innerText = obj.medal_gold + obj.medal_silver + obj.medal_bronze

        tableData2.appendChild(tagDiv)
        tagDiv.append(image,nomePais)

        tableData3.appendChild(qtdMedalhasOuro)
        tableData4.appendChild(qtdMedalhasPrata)
        tableData5.appendChild(qtdMedalhasBronze)
        tableData6.appendChild(total)

        tableRowBody.append(tableData1,tableData2,tableData3,tableData4,tableData5,tableData6)

        return tableRowBody
  
    }

    static  renderTable(array){

        array.forEach((element,index) => {

            let linha = Render.renderTableBody(element,index)

            const table = document.querySelector('tbody')
            table.appendChild(linha)

        })
    }

    static renderSearch(){

        const btn   = document.getElementById('btnSearch')
        const input = document.getElementById('Pesquisar')

        btn.addEventListener('click',async () => {

            let linhas = await Apirequest.callApi()
            let linhasFilter = linhas.filter( element => element.country == input.value )
            console.log(linhasFilter)
            // if()
            const tableBody = document.querySelector('tbody')
            console.log(tableBody)
            tableBody.innerHTML = ''
            Render.renderTable(linhasFilter)
        })
    }
}

let linhas = await Apirequest.callApi()
Render.renderTable(linhas)
Render.renderSearch()