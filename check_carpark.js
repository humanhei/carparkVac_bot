  'use strict'
  const axios = require('axios')
  /**
   * Small description of your action
   * @title Check CarPark
   * @category Custom
   * @author Eric Sham
   * @param {string} district - An example string variable
   */
  const myAction = async (district) => {

    const{ data } = await axios.get('https://api.data.gov.hk/v1/carpark-info-vacancy?data=info&vehicleTypes=privateCar&lang=en_US')
    console.log(district)
    var response = JSON.parse(JSON.stringify(data))
    var response_vacancy = ''
    if(true){
        const { data }  = await axios.get('https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy&vehicleTypes=privateCar&lang=en_US')
        response_vacancy = JSON.parse(JSON.stringify(data))
    }
    //var subDistrict = response.results[0].address.subDistrict
    //console.log(subDistrict)
    var id = response.results[0].park_Id
    var x = 0
    temp.carpark = ""
    while (x < response.results.length) {
        var rdistrict = response.results[x].district
        //var subDistrict = response.results[x].address.subDistrict
        var vacancy = ''
        //subDistrict = response.results[x].address.subDistrict
        if(rdistrict == district){
            var name = response.results[x].name;
            var id = response.results[x].park_Id
            console.log(name)
            //console.log(subDistrict)
            var i = 0
            while (i < response_vacancy.results.length){
                if (id == response_vacancy.results[i].park_Id ){
                    vacancy = response_vacancy.results[i].privateCar[0].vacancy
                    console.log(vacancy)
                }
            i++
            }
            temp.carpark += name
            temp.carpark += '\n Vacancy is '
            if (vacancy < 0){
                temp.carpark += 'unavailable \n'
            }
            else{
                temp.carpark += vacancy
                temp.carpark += '\n'
            }

        }
        x++
    }
  }

  return myAction(args.district)