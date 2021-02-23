window.addEventListener('DOMContentLoaded', () => {
    let listElements = document.getElementsByClassName("list-group-item")

    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('list-group-item')) {
                enableOnlyOneListElementToBeActive(event.target.parentElement, listElements)
            } else if (event.target.parentElement.classList.contains('d-flex')) {
                enableOnlyOneListElementToBeActive(event.target.parentElement.parentElement, listElements)
            } else if (event.target.parentElement.classList.contains('list-group')) {
                enableOnlyOneListElementToBeActive(event.target, listElements)
            }
        })
    }

    

    function enableOnlyOneListElementToBeActive(clickedElement, listElements) {
        for (let j = 0; j < listElements.length; j++) {
            if (listElements[j].classList.contains('active')) {
                listElements[j].classList.remove('active')
            }
        }
        clickedElement.classList.add('active')

        loadAndDisplayProperPricing(clickedElement)

        var element = document.getElementById("scrollAim")
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    function loadAndDisplayProperPricing(clickedElement) {
        let isMobile = false
        if (window.innerWidth < 500) {
            isMobile = true
        }

        let pricingElement = document.getElementById('pricing')
        pricingElement.innerHTML = ''

        if (clickedElement.classList.contains('fb') && 
            clickedElement.classList.contains('social')) {
            if (isMobile) {
                pricingElement.innerHTML += fbPricingMobile
            } else {
                pricingElement.innerHTML += fbPricingDesktop
            }
            
        } else {
            console.log(`Sorry, we are out of.`)
        }
    }

    let fbPricingDesktop = `
            <div id="social-fb">
                <div class="pricing-desktop">
                <div class="text-center" style="padding-bottom: 1rem;">
                    <h2>Prowadzenie mediów społecznościowych na Facebook</h2>
                </div>
                <table class="table">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">
                        <div class="text-center">
                            Plan
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x2
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x4
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x6
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x8
                        </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Opłata miesięczna [netto] </br>
                            </strong>
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            399zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            699zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            1099zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            1399zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Projekty grafik i kampanii - dodatkowa początkowa opłata </br>
                            </strong>
                            przygotowanie szablonów graficznych postów, projekt covera, stworzenie treści i grafik reklam, wdrożenie kampanii reklamowych 
                        </div>
                        </th>
                        <td colspan="4" class="text-center">1 x miesięczny abonament </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Liczba postów w tygodniu </br>
                            </strong>
                            każdy ok. 500 zzs., wpisy o produktach, poradach, ciekawostkach
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            1
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            2
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            4
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            6
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Relacje/Stories w miesiącu
                            </strong>
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            2
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            4
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            6
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            8
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Sugerowany dodatkowy budżet reklamowy </br>
                            </strong>
                            kwota przeznaczana na promowanie postów, zwiększanie zasięgów
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            199 - 599zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            349 - 1049zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            499 - 1649zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            699 - 2099zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Kampanie reklamowe w pakiecie </br>
                            </strong>
                            Rodzaje kampanii uruchamianych w ramach budżetu reklamowego 
                        </div>
                        </th>
                        <td colspan="4">
                        <div class="text-center">
                            Polubienia profilu, promowanie publikowanych postów. </br>
                            Targetowanie - osoby, które weszły w interakcję z fanpage i użytkownicy do nich podobni oraz osoby, 
                            które weszły na stronę internetową i użytkownicy do nich podobni. 
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Stworzenie strategii komunikacji </br>
                            </strong>
                            analiza marki, określenie grupy docelowej, sposobu oceny efektów  
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Dostęp do zdjęć z banku zdjęć</br>
                            </strong>
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Organizacja konkursów </br>
                            </strong>
                            przygotowanie dedykowanego posta, stworzenie regulaminu i zasad 
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            -
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            co 2 miesiące
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            1 raz w miesiącu 
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            1 raz w miesiącu 
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Integracja piksela konwersji, remarketing
                            </strong>
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Interakcja z fanami </br>
                            </strong>
                            odpowiadanie na komentarze i zapytania: 9-17 w dni robocze [h/mies.] 
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            0,5 
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            1
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            2
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            3
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Dedykowany opiekun klienta </br>
                            </strong>
                            osoba koordynująca działania i kontakt
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Miesięczny raport </br>
                            </strong>
                            comiesięczne podsumowanie prac, statystyk profilu i kampanii 
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            &check;
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div class="pricing-additional-desktop">
                <table class="table">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">
                        <div class="text-center">
                            <strong>
                            Usługi dodatkowe
                            </strong>
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x2
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x4
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x6
                        </div>
                        </th>
                        <th scope="col">
                        <div class="text-center">
                            x8
                        </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            <strong>
                            Opłata miesięczna [netto] </br>
                            </strong>
                            Publikowanie tych samych postów na profilu Instagramowym 
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            99zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            199zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            299zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            399zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Publikacja tych samych stories na Instagramie
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            99zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            199zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            299zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            399zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Organizacja dodatkowego konkursu
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            120zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            120zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            120zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            120zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Dodatkowa godzina interakcji z fanami
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            50zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            50zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            50zł
                        </div>
                        </td>
                        <td>
                        <div class="text-center">
                            50zł
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Animacja grafiki posta
                        </div>
                        </th>
                        <td colspan="4">
                        <div class="text-center">
                            130zł / sztuka
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `

    let fbPricingMobile = `
        <div id="social-fb-mobile">
            <div class="text-center" style="padding-bottom: 1rem;">
                <h2>Prowadzenie mediów społecznościowych na Facebook</h2>
            </div>
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        Plan
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x2
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        399zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Projekty grafik i kampanii - dodatkowa początkowa opłata </br>
                        </strong>
                        przygotowanie szablonów graficznych postów, projekt covera, stworzenie treści i grafik reklam, wdrożenie kampanii reklamowych 
                    </div>
                    </th>
                    <td scope="col">
                    <div class="text-center">
                        1 x miesięczny abonament
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Liczba postów w tygodniu </br>
                        </strong>
                        każdy ok. 500 zzs., wpisy o produktach, poradach, ciekawostkach
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Relacje/Stories w miesiącu
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        2
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Sugerowany dodatkowy budżet reklamowy </br>
                        </strong>
                        kwota przeznaczana na promowanie postów, zwiększanie zasięgów
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        199 - 599zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Kampanie reklamowe w pakiecie </br>
                        </strong>
                        Rodzaje kampanii uruchamianych w ramach budżetu reklamowego 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        Polubienia profilu, promowanie publikowanych postów. </br>
                        Targetowanie - osoby, które weszły w interakcję z fanpage i użytkownicy do nich podobni oraz osoby, 
                        które weszły na stronę internetową i użytkownicy do nich podobni. 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Stworzenie strategii komunikacji </br>
                        </strong>
                        analiza marki, określenie grupy docelowej, sposobu oceny efektów  
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dostęp do zdjęć z banku zdjęć</br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Organizacja konkursów </br>
                        </strong>
                        przygotowanie dedykowanego posta, stworzenie regulaminu i zasad 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        brak
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Integracja piksela konwersji, remarketing
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Interakcja z fanami </br>
                        </strong>
                        odpowiadanie na komentarze i zapytania: 9-17 w dni robocze [h/mies.] 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        0,5 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dedykowany opiekun klienta </br>
                        </strong>
                        osoba koordynująca działania i kontakt
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Miesięczny raport </br>
                        </strong>
                        comiesięczne podsumowanie prac, statystyk profilu i kampanii 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-additional-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        <strong>
                        Usługi dodatkowe
                        </strong>
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x2
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                        Publikowanie tych samych postów na profilu Instagramowym 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        99zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Publikacja tych samych stories na Instagramie
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        99zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Organizacja dodatkowego konkursu
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        120zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Dodatkowa godzina interakcji z fanami
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        50zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Animacja grafiki posta
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        130zł / sztuka
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        Plan
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x4
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        699zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Projekty grafik i kampanii - dodatkowa początkowa opłata </br>
                        </strong>
                        przygotowanie szablonów graficznych postów, projekt covera, stworzenie treści i grafik reklam, wdrożenie kampanii reklamowych 
                    </div>
                    </th>
                    <td scope="col">
                    <div class="text-center">
                        1 x miesięczny abonament
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Liczba postów w tygodniu </br>
                        </strong>
                        każdy ok. 500 zzs., wpisy o produktach, poradach, ciekawostkach
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        2
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Relacje/Stories w miesiącu
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        4
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Sugerowany dodatkowy budżet reklamowy </br>
                        </strong>
                        kwota przeznaczana na promowanie postów, zwiększanie zasięgów
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        349 - 1049zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Kampanie reklamowe w pakiecie </br>
                        </strong>
                        Rodzaje kampanii uruchamianych w ramach budżetu reklamowego 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        Polubienia profilu, promowanie publikowanych postów. </br>
                        Targetowanie - osoby, które weszły w interakcję z fanpage i użytkownicy do nich podobni oraz osoby, 
                        które weszły na stronę internetową i użytkownicy do nich podobni. 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Stworzenie strategii komunikacji </br>
                        </strong>
                        analiza marki, określenie grupy docelowej, sposobu oceny efektów  
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dostęp do zdjęć z banku zdjęć</br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Organizacja konkursów </br>
                        </strong>
                        przygotowanie dedykowanego posta, stworzenie regulaminu i zasad 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        co 2 miesiące 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Integracja piksela konwersji, remarketing
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Interakcja z fanami </br>
                        </strong>
                        odpowiadanie na komentarze i zapytania: 9-17 w dni robocze [h/mies.] 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dedykowany opiekun klienta </br>
                        </strong>
                        osoba koordynująca działania i kontakt
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Miesięczny raport </br>
                        </strong>
                        comiesięczne podsumowanie prac, statystyk profilu i kampanii 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-additional-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        <strong>
                        Usługi dodatkowe
                        </strong>
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x4
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                        Publikowanie tych samych postów na profilu Instagramowym 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        199zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Publikacja tych samych stories na Instagramie
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        199zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Organizacja dodatkowego konkursu
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        120zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Dodatkowa godzina interakcji z fanami
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        50zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Animacja grafiki posta
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        130zł / sztuka
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        Plan
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x6
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1099zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Projekty grafik i kampanii - dodatkowa początkowa opłata </br>
                        </strong>
                        przygotowanie szablonów graficznych postów, projekt covera, stworzenie treści i grafik reklam, wdrożenie kampanii reklamowych 
                    </div>
                    </th>
                    <td scope="col">
                    <div class="text-center">
                        1 x miesięczny abonament
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Liczba postów w tygodniu </br>
                        </strong>
                        każdy ok. 500 zzs., wpisy o produktach, poradach, ciekawostkach
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        4
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Relacje/Stories w miesiącu
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        6
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Sugerowany dodatkowy budżet reklamowy </br>
                        </strong>
                        kwota przeznaczana na promowanie postów, zwiększanie zasięgów
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        499 - 1649zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Kampanie reklamowe w pakiecie </br>
                        </strong>
                        Rodzaje kampanii uruchamianych w ramach budżetu reklamowego 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        Polubienia profilu, promowanie publikowanych postów. </br>
                        Targetowanie - osoby, które weszły w interakcję z fanpage i użytkownicy do nich podobni oraz osoby, 
                        które weszły na stronę internetową i użytkownicy do nich podobni. 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Stworzenie strategii komunikacji </br>
                        </strong>
                        analiza marki, określenie grupy docelowej, sposobu oceny efektów  
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dostęp do zdjęć z banku zdjęć</br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Organizacja konkursów </br>
                        </strong>
                        przygotowanie dedykowanego posta, stworzenie regulaminu i zasad 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1 raz w miesiącu 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Integracja piksela konwersji, remarketing
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Interakcja z fanami </br>
                        </strong>
                        odpowiadanie na komentarze i zapytania: 9-17 w dni robocze [h/mies.] 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        2
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dedykowany opiekun klienta </br>
                        </strong>
                        osoba koordynująca działania i kontakt
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Miesięczny raport </br>
                        </strong>
                        comiesięczne podsumowanie prac, statystyk profilu i kampanii 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-additional-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        <strong>
                        Usługi dodatkowe
                        </strong>
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x6
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                        Publikowanie tych samych postów na profilu Instagramowym 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        299zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Publikacja tych samych stories na Instagramie
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        299zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Organizacja dodatkowego konkursu
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        120zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Dodatkowa godzina interakcji z fanami
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        50zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Animacja grafiki posta
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        130zł / sztuka
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        Plan
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x8
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1399zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Projekty grafik i kampanii - dodatkowa początkowa opłata </br>
                        </strong>
                        przygotowanie szablonów graficznych postów, projekt covera, stworzenie treści i grafik reklam, wdrożenie kampanii reklamowych 
                    </div>
                    </th>
                    <td scope="col">
                    <div class="text-center">
                        1 x miesięczny abonament
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Liczba postów w tygodniu </br>
                        </strong>
                        każdy ok. 500 zzs., wpisy o produktach, poradach, ciekawostkach
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        6 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Relacje/Stories w miesiącu
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        8
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Sugerowany dodatkowy budżet reklamowy </br>
                        </strong>
                        kwota przeznaczana na promowanie postów, zwiększanie zasięgów
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        699 - 2099zł 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Kampanie reklamowe w pakiecie </br>
                        </strong>
                        Rodzaje kampanii uruchamianych w ramach budżetu reklamowego 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        Polubienia profilu, promowanie publikowanych postów. </br>
                        Targetowanie - osoby, które weszły w interakcję z fanpage i użytkownicy do nich podobni oraz osoby, 
                        które weszły na stronę internetową i użytkownicy do nich podobni. 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Stworzenie strategii komunikacji </br>
                        </strong>
                        analiza marki, określenie grupy docelowej, sposobu oceny efektów  
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dostęp do zdjęć z banku zdjęć</br>
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Organizacja konkursów </br>
                        </strong>
                        przygotowanie dedykowanego posta, stworzenie regulaminu i zasad 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        1 raz w miesiącu 
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Integracja piksela konwersji, remarketing
                        </strong>
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Interakcja z fanami </br>
                        </strong>
                        odpowiadanie na komentarze i zapytania: 9-17 w dni robocze [h/mies.] 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        3
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Dedykowany opiekun klienta </br>
                        </strong>
                        osoba koordynująca działania i kontakt
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Miesięczny raport </br>
                        </strong>
                        comiesięczne podsumowanie prac, statystyk profilu i kampanii 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        &check;
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="pricing-additional-mobile">
            <table class="table">
                <thead class="thead-light">
                <tr>
                    <th scope="col">
                    <div class="text-center">
                        <strong>
                        Usługi dodatkowe
                        </strong>
                    </div>
                    </th>
                    <th scope="col">
                    <div class="text-center">
                        x8
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        <strong>
                        Opłata miesięczna [netto] </br>
                        </strong>
                        Publikowanie tych samych postów na profilu Instagramowym 
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        399zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Publikacja tych samych stories na Instagramie
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        399zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Organizacja dodatkowego konkursu
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        120zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Dodatkowa godzina interakcji z fanami
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        50zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Animacja grafiki posta
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        130zł / sztuka
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    `
})