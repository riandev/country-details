fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const countryDetails = data[i];
            const countryName = countryDetails.name;
            const countryList = document.createElement('button');
            countryList.className = 'country-name-lists';
            countryList.innerText = countryName;

            const countryTitle = document.getElementById('country-name');
            countryTitle.appendChild(countryList);
            //Event Listener
            countryList.addEventListener('click', function() {
                document.getElementById('country-names').style.display = 'none';
                //Show Country Details
                const showCountryDetails = document.getElementById('countries-details');
                showCountryDetails.style.display = 'block';
                showCountryDetails.style.margin = '10%';
                showCountryDetails.style.backgroundColor = 'lightgray';
                showCountryDetails.style.textAlign = 'center';
                //Capital
                const capitalApi = countryDetails.capital;
                document.getElementById('capital').innerText = 'Capital Name is : ' + capitalApi;
                //Population
                const populationApi = countryDetails.population;
                document.getElementById('population').innerText = 'Population is : ' + populationApi;
                //Region
                const regionApi = countryDetails.region;
                document.getElementById('region').innerText = 'Region : ' + regionApi;
                //Sub-Region
                const subregionApi = countryDetails.subregion;
                document.getElementById('subregion').innerText = 'Sub-Region : ' + subregionApi;
                //TimeZone
                const timezoneApi = countryDetails.timezones[0];
                document.getElementById('timezone').innerText = 'Timezone : ' + timezoneApi;
                //Currencies
                const currenciesApi = countryDetails.currencies[0];
                const currenciesName = currenciesApi.name;
                document.getElementById('currencies').innerText = 'Currencies Name : ' + currenciesName;
                //Flag
                const flagApi = countryDetails.flag;
                document.getElementById('flag').src = flagApi;
            });
        };
    });