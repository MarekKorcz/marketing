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

        if (clickedElement.classList.contains('social')) {
            if (clickedElement.classList.contains('fb')) {
                if (isMobile) {
                    pricingElement.innerHTML += fbSocialPricingMobile
                } else {
                    pricingElement.innerHTML += fbSocialPricingDesktop
                }
            } else if (clickedElement.classList.contains('insta')) {
                if (isMobile) {
                    pricingElement.innerHTML += instaSocialPricingMobile
                } else {
                    pricingElement.innerHTML += instaSocialPricingDesktop
                } 
            }
        } else if (clickedElement.classList.contains('ads')) {
            if (clickedElement.classList.contains('fb')) {
                if (isMobile) {
                    pricingElement.innerHTML += fbAdsPricingMobile
                } else {
                    pricingElement.innerHTML += fbAdsPricingDesktop
                }
            } else if (clickedElement.classList.contains('insta')) {
                if (isMobile) {
                    pricingElement.innerHTML += instaAdsPricingMobile
                } else {
                    pricingElement.innerHTML += instaAdsPricingDesktop
                } 
            }
        }
    }

    let fbSocialPricingDesktop = `
            <div id="social-fb">
                <div class="pricing-desktop">
                <div class="text-center" style="padding-bottom: 1rem;">
                    <h2>Prowadzenie mediów społecznościowych na Facebook'u</h2>
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
                            Publikowanie tych samych postów na profilu Instagram'owym </br>
                            (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                            Animacja grafiki postu
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

    let fbSocialPricingMobile = `
        <div id="social-fb-mobile">
            <div class="text-center" style="padding-bottom: 1rem;">
                <h2>Prowadzenie mediów społecznościowych na Facebook'u</h2>
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
                        Publikowanie tych samych postów na profilu Instagram'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Instagram'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Instagram'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Instagram'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Animacja grafiki postu
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

    let instaSocialPricingDesktop = `
            <div id="social-insta">
                <div class="pricing-desktop">
                <div class="text-center" style="padding-bottom: 1rem;">
                    <h2>Prowadzenie mediów społecznościowych na Instagramie</h2>
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
                            Publikowanie tych samych postów na profilu Facebook'owym </br>
                            (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                            Publikacja tych samych stories na Facebook'u
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
                            Animacja grafiki postu
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

    let instaSocialPricingMobile = `
        <div id="social-insta-mobile">
            <div class="text-center" style="padding-bottom: 1rem;">
                <h2>Prowadzenie mediów społecznościowych na Instagramie</h2>
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
                        Publikowanie tych samych postów na profilu Facebook'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Publikacja tych samych stories na Facebook'u
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Facebook'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Publikacja tych samych stories na Facebook'u
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Facebook'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Publikacja tych samych stories na Facebook'u
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
                        Animacja grafiki postu
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
                        Publikowanie tych samych postów na profilu Facebook'owym </br>
                        (Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego).
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
                        Publikacja tych samych stories na Facebook'u
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
                        Animacja grafiki postu
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

    let fbAdsPricingDesktop = `
        <div id="fb-ads-desktop">
        <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Facebook'u</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    299zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    599zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    899zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1199zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Facebook'u.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    449 - 899zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    749 - 1799zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1349 - 2699zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1799 - 3599zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    9h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    12h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    16h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    2 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    4 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    6 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    8 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
        <div class="pricing-ads-additional-desktop">
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
                        Umieszczanie tych samych reklam na Instagramie [netto miesięcznie] </br>
                        </strong>
                        Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                    </div>
                    </th>
                    <td>
                    <div class="text-center">
                        149zł
                    </div>
                    </td>
                    <td>
                    <div class="text-center">
                        299zł
                    </div>
                    </td>
                    <td>
                    <div class="text-center">
                        449zł
                    </div>
                    </td>
                    <td>
                    <div class="text-center">
                        599zł
                    </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                    <div class="text-center">
                        Stworzenie dedykowanego landing page
                    </div>
                    </th>
                    <td colspan="4">
                    <div class="text-center">
                        1099zł
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    `

    let fbAdsPricingMobile = `
            <div id="fb-ads-mobile">
            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Facebook'u</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
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
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Facebook'u.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    449 - 899zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    2 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Instagramie [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            149zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Facebook'u</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    599zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Facebook'u.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    749 - 1799zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    9h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    4 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Instagramie [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            299zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Facebook'u</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    899zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Facebook'u.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1349 - 2699zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    12h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Instagramie [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            449zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Facebook'u</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1199zł  
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Facebook'u.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1799 - 3599zł  
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    16h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    8 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Instagramie [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            599zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `

    let instaAdsPricingDesktop = `
        <div id="insta-ads-desktop">
            <div class="text-center" style="padding-bottom: 1rem;">
                <h2>Prowadzenie kampanii reklamowych na Instagramie</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    299zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    599zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    899zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1199zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Instagramie.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    449 - 899zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    749 - 1799zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1349 - 2699zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    1799 - 3599zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    9h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    12h prac, 4 razy w miesiącu 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    16h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    2 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    4 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    6 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    8 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
        <div class="pricing-ads-additional-desktop">
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
                        Umieszczanie tych samych reklam na Facebook'u [netto miesięcznie] </br>
                    </strong>
                    Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    149zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    299zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    449zł
                    </div>
                </td>
                <td>
                    <div class="text-center">
                    599zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    Stworzenie dedykowanego landing page
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1099zł
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    `

    let instaAdsPricingMobile = `
            <div id="insta-ads-mobile">
            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Instagramie</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
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
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Instagramie.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    449 - 899zł
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    2 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Facebook'u [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            149zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Instagramie</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    599zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Instagramie.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    749 - 1799zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    9h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    4 kampanie, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Facebook'u [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            299zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Instagramie</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    899zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Instagramie.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1349 - 2699zł 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    12h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    6 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Facebook'u [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            449zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="text-center" style="padding-bottom: 1rem;">
            <h2>Prowadzenie kampanii reklamowych na Instagramie</h2>
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
                        Opłata miesięczna [netto]
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1199zł  
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Zaprojektowanie kampanii - dodatkowa początkowa opłata </br>
                    </strong>
                    analiza konkurencji, przygotowanie treści oraz grafik reklam, przesłanie projektu, wdrożenie po zatwierdzeniu. 
                    </div>
                </th>
                <td colspan="4">
                    <div class="text-center">
                    1 x miesięczny abonament 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Sugerowany budżet reklamowy </br>
                    </strong>
                    dodatkowa kwota przeznaczana na wykupywanie miejsca reklamowego na Instagramie.
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    1799 - 3599zł  
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Przygotowanie strategii i projektu kampanii </br>
                    </strong>
                    zrozumienie profilu osobowości potencjalnego klienta, analiza rynku, wybranie targetowania. 
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
                        Stała optymalizacja i monitoring
                    </strong>
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    16h prac, 4 razy w miesiącu 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Remarketing </br>
                    </strong>
                    wyświetlanie reklamy osobom które np odwiedziły stronę czy wykonały jakąś akcję (pixel). 
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
                        Konwersja </br>
                    </strong>
                    wykaz tego jaki procent osób wykonał pożądaną akcję po kliknięciu w reklamę. 
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
                        Liczba kampanii </br>
                    </strong>
                    do wyboru: obraz, karuzela, relacje, film. 
                    </div>
                </th>
                <td>
                    <div class="text-center">
                    8 kampanii, każda po 2 reklamy 
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">
                    <div class="text-center">
                    <strong>
                        Miesięczny raport </br>
                    </strong>
                    podsumowanie najważniejszych parametrów i wyników kampanii 
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
            <div class="pricing-ads-additional-desktop">
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
                            Umieszczanie tych samych reklam na Facebook'u [netto miesięcznie] </br>
                            </strong>
                            Dodatkowo: wymagane będzie proporcjonalne zwiększenie budżetu reklamowego.
                        </div>
                        </th>
                        <td>
                        <div class="text-center">
                            599zł
                        </div>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <th scope="row">
                        <div class="text-center">
                            Stworzenie dedykowanego landing page
                        </div>
                        </th>
                        <td colspan="4">
                        1099zł
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
})