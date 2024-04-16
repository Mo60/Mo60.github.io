<script setup lang="js">
import axios from 'axios'

defineOptions({
  name: 'FlightsTracker',
})
// const { t } = useI18n()
const date = new Date()
const date_string = date.toString() // .replace(/T/, ':').replace(/\.\w*/, '')
const year = date.getFullYear().toString()
const month = `0${date.getMonth() + 1}`.slice(-2)
const day = `0${date.getDate().toString()}`.slice(-2)
const date_formated = `${year}-${month}-${day}`
// const respond_1 = {
//   result: {
//     request: {
//       callback: null,
//       device: 'web',
//       fetchBy: 'flight',
//       filterBy: null,
//       format: 'json',
//       limit: 100,
//       olderThenFlightId: null,
//       page: 1,
//       pk: null,
//       query: 'BR52',
//       timestamp: null,
//       token: null,
//     },
//     response: {
//       item: {
//         current: 16,
//         total: null,
//         limit: 100,
//       },
//       page: {
//         current: 1,
//         more: false,
//         total: null,
//       },
//       timestamp: 1713224418,
//       data: [
//         {
//           identification: {
//             id: null,
//             row: 5497043958,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713878400,
//               arrival: 1713928500,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1713142382,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5496604892,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713792000,
//               arrival: 1713842100,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1713054761,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5496316852,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713705600,
//               arrival: 1713755700,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1712968714,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5495879477,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713619200,
//               arrival: 1713669300,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1712890586,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5495479207,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713532800,
//               arrival: 1713582900,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1712803013,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5495052272,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713446400,
//               arrival: 1713496500,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1712709474,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5494638937,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: null,
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Scheduled',
//             icon: null,
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'scheduled',
//                 type: 'departure',
//                 color: 'gray',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: null,
//                 local: null,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: '77W',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713360000,
//               arrival: 1713410100,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1712623594,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: null,
//             row: 5494111391,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA52',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Estimated dep 21:30',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'estimated',
//                 type: 'departure',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1713274200,
//                 local: 1713303000,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B773',
//               text: null,
//             },
//             hex: null,
//             registration: null,
//             serialNo: null,
//             age: null,
//             restricted: null,
//             availability: {
//               serialNo: null,
//               age: null,
//             },
//           },
//           owner: null,
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713273600,
//               arrival: 1713323700,
//             },
//             real: {
//               departure: null,
//               arrival: null,
//             },
//             estimated: {
//               departure: 1713274200,
//               arrival: null,
//             },
//             other: {
//               eta: null,
//               updated: 1713198248,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34c89306',
//             row: 5493730613,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: true,
//             text: 'Estimated 22:29',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'estimated',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1713238144,
//                 local: 1713220144,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-36N(ER)',
//             },
//             registration: 'B-16720',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E2',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713187200,
//               arrival: 1713237300,
//             },
//             real: {
//               departure: 1713190174,
//               arrival: null,
//             },
//             estimated: {
//               departure: null,
//               arrival: 1713238144,
//             },
//             other: {
//               eta: 1713238144,
//               updated: 1713224088,
//               duration: null,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34c4f938',
//             row: 5493320780,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:33',
//             icon: 'yellow',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'yellow',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1713151987,
//                 local: 1713133987,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-35E(ER)',
//             },
//             registration: 'B-16718',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E0',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713100800,
//               arrival: 1713150900,
//             },
//             real: {
//               departure: 1713102340,
//               arrival: 1713151987,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1713151987,
//               updated: 1713151988,
//               duration: 49620,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34c185fe',
//             row: 5492947711,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:10',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1713064235,
//                 local: 1713046235,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-35E(ER)',
//             },
//             registration: 'B-16721',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E3',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1713014400,
//               arrival: 1713064500,
//             },
//             real: {
//               departure: 1713015785,
//               arrival: 1713064235,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1713064235,
//               updated: 1713064236,
//               duration: 48480,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34be034c',
//             row: 5492524434,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:53',
//             icon: 'yellow',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'yellow',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1712980392,
//                 local: 1712962392,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-36N(ER)',
//             },
//             registration: 'B-16732',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '899037',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1712928000,
//               arrival: 1712978100,
//             },
//             real: {
//               departure: 1712932150,
//               arrival: 1712980392,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1712980392,
//               updated: 1712980392,
//               duration: 48240,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34ba3e1a',
//             row: 5492126052,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:20',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1712892029,
//                 local: 1712874029,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-36N(ER)',
//             },
//             registration: 'B-16720',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E2',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1712841600,
//               arrival: 1712891700,
//             },
//             real: {
//               departure: 1712843692,
//               arrival: 1712892029,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1712892029,
//               updated: 1712892030,
//               duration: 48360,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34b6af53',
//             row: 5491854498,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:01',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1712804518,
//                 local: 1712786518,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-35E(ER)',
//             },
//             registration: 'B-16718',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E0',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1712755200,
//               arrival: 1712805300,
//             },
//             real: {
//               departure: 1712756990,
//               arrival: 1712804518,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1712804518,
//               updated: 1712804518,
//               duration: 47520,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34b318f5',
//             row: 5491347567,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:06',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1712718392,
//                 local: 1712700392,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-35E(ER)',
//             },
//             registration: 'B-16721',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '8990E3',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1712668800,
//               arrival: 1712718900,
//             },
//             real: {
//               departure: 1712670135,
//               arrival: 1712718392,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1712718392,
//               updated: 1712718393,
//               duration: 48240,
//             },
//           },
//         },
//         {
//           identification: {
//             id: '34af69dc',
//             row: 5491009098,
//             number: {
//               default: 'BR52',
//               alternative: null,
//             },
//             callsign: 'EVA052',
//             codeshare: null,
//           },
//           status: {
//             live: false,
//             text: 'Landed 22:24',
//             icon: 'green',
//             estimated: null,
//             ambiguous: false,
//             generic: {
//               status: {
//                 text: 'landed',
//                 type: 'arrival',
//                 color: 'green',
//                 diverted: null,
//               },
//               eventTime: {
//                 utc: 1712633069,
//                 local: 1712615069,
//               },
//             },
//           },
//           aircraft: {
//             model: {
//               code: 'B77W',
//               text: 'Boeing 777-36N(ER)',
//             },
//             registration: 'B-16728',
//             country: {
//               id: 218,
//               name: 'Taiwan',
//               alpha2: 'TW',
//               alpha3: 'TWN',
//             },
//             hex: '899031',
//             restricted: false,
//             serialNo: null,
//             age: {
//               availability: true,
//             },
//             availability: {
//               serialNo: true,
//               age: true,
//             },
//           },
//           owner: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//           },
//           airline: {
//             name: 'EVA Air',
//             code: {
//               iata: 'BR',
//               icao: 'EVA',
//             },
//             short: 'EVA Air',
//           },
//           airport: {
//             origin: {
//               name: 'Taipei Taoyuan International Airport',
//               code: {
//                 iata: 'TPE',
//                 icao: 'RCTP',
//               },
//               position: {
//                 latitude: 25.07773,
//                 longitude: 121.232803,
//                 country: {
//                   name: 'Taiwan',
//                   code: 'TW',
//                   id: 218,
//                 },
//                 region: {
//                   city: 'Taipei',
//                 },
//               },
//               timezone: {
//                 name: 'Asia/Taipei',
//                 offset: 28800,
//                 abbr: 'CST',
//                 abbrName: 'China Standard Time',
//                 isDst: false,
//               },
//               visible: true,
//             },
//             destination: {
//               name: 'Houston George Bush Intercontinental Airport',
//               code: {
//                 iata: 'IAH',
//                 icao: 'KIAH',
//               },
//               position: {
//                 latitude: 29.98443,
//                 longitude: -95.3414,
//                 country: {
//                   name: 'United States',
//                   code: 'US',
//                   id: 236,
//                 },
//                 region: {
//                   city: 'Houston',
//                 },
//               },
//               timezone: {
//                 name: 'America/Chicago',
//                 offset: -18000,
//                 abbr: 'CDT',
//                 abbrName: 'Central Daylight Time',
//                 isDst: true,
//               },
//               visible: true,
//             },
//             real: null,
//           },
//           time: {
//             scheduled: {
//               departure: 1712582400,
//               arrival: 1712632500,
//             },
//             real: {
//               departure: 1712583841,
//               arrival: 1712633069,
//             },
//             estimated: {
//               departure: null,
//               arrival: null,
//             },
//             other: {
//               eta: 1712633069,
//               updated: 1712633069,
//               duration: 49200,
//             },
//           },
//         },
//       ],
//       aircraftInfo: null,
//       aircraftImages: [
//         {
//           registration: 'B-16720',
//           images: {
//             thumbnails: [
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/595673_1708596423_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11257371',
//                 copyright: 'ZSHC WCX',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/960352_1703567787_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11169931',
//                 copyright: 'Quang_Minh_024',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/1336977_1703065242_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11183543',
//                 copyright: 'Thommy Chua',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/1367371_1695560497_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11098982',
//                 copyright: 'BiggyHsia',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/1065165_1695296558_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11096318',
//                 copyright: 'Jhang yao yun',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             medium: [
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/595673_1708596423.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11257371',
//                 copyright: 'ZSHC WCX',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/960352_1703567787.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11169931',
//                 copyright: 'Quang_Minh_024',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/1336977_1703065242.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11183543',
//                 copyright: 'Thommy Chua',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/1367371_1695560497.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11098982',
//                 copyright: 'BiggyHsia',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/1065165_1695296558.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11096318',
//                 copyright: 'Jhang yao yun',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             large: [
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/595673_1708596423.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11257371',
//                 copyright: 'ZSHC WCX',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/960352_1703567787.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11169931',
//                 copyright: 'Quang_Minh_024',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/1336977_1703065242.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11183543',
//                 copyright: 'Thommy Chua',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/1367371_1695560497.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11098982',
//                 copyright: 'BiggyHsia',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/1065165_1695296558.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11096318',
//                 copyright: 'Jhang yao yun',
//                 source: 'Jetphotos.com',
//               },
//             ],
//           },
//         },
//         {
//           registration: 'B-16718',
//           images: {
//             thumbnails: [
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/557068_1705241838_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11210151',
//                 copyright: 'Kemas M Adri Mahindra',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/1038453_1703857592_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191075',
//                 copyright: 'Oliver Richter',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/779303_1706733239_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11228567',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/958162_1708442984_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255401',
//                 copyright: 'VMMC_Andy_1928',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/1096638_1697345306_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11122007',
//                 copyright: 'ZUUU_wu',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             medium: [
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/557068_1705241838.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11210151',
//                 copyright: 'Kemas M Adri Mahindra',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/1038453_1703857592.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191075',
//                 copyright: 'Oliver Richter',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/779303_1706733239.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11228567',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/958162_1708442984.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255401',
//                 copyright: 'VMMC_Andy_1928',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/1096638_1697345306.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11122007',
//                 copyright: 'ZUUU_wu',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             large: [
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/557068_1705241838.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11210151',
//                 copyright: 'Kemas M Adri Mahindra',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/1038453_1703857592.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191075',
//                 copyright: 'Oliver Richter',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/779303_1706733239.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11228567',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/958162_1708442984.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255401',
//                 copyright: 'VMMC_Andy_1928',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/1096638_1697345306.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11122007',
//                 copyright: 'ZUUU_wu',
//                 source: 'Jetphotos.com',
//               },
//             ],
//           },
//         },
//         {
//           registration: 'B-16721',
//           images: {
//             thumbnails: [
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/910662_1709046692_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11263751',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/1435598_1704413744_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11197996',
//                 copyright: 'kaiplanes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/651916_1695445863_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11097724',
//                 copyright: 'TY-CHEN',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/745806_1693918165_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11081989',
//                 copyright: 'TYN-LU',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/602434_1691372416_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11053305',
//                 copyright: 'heiheifotoing',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             medium: [
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/910662_1709046692.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11263751',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/1435598_1704413744.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11197996',
//                 copyright: 'kaiplanes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/651916_1695445863.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11097724',
//                 copyright: 'TY-CHEN',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/745806_1693918165.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11081989',
//                 copyright: 'TYN-LU',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/602434_1691372416.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11053305',
//                 copyright: 'heiheifotoing',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             large: [
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/910662_1709046692.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11263751',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/1435598_1704413744.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11197996',
//                 copyright: 'kaiplanes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/651916_1695445863.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11097724',
//                 copyright: 'TY-CHEN',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/745806_1693918165.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11081989',
//                 copyright: 'TYN-LU',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/602434_1691372416.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11053305',
//                 copyright: 'heiheifotoing',
//                 source: 'Jetphotos.com',
//               },
//             ],
//           },
//         },
//         {
//           registration: 'B-16732',
//           images: {
//             thumbnails: [
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/443780_1711047348_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11289341',
//                 copyright: 'Olivier Landes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/1156784_1705507016_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11213372',
//                 copyright: 'Huy Do',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/605743_1704489310_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11198913',
//                 copyright: 'Amarase Pamarapa',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/439151_1703900419_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191641',
//                 copyright: 'MHJ PHOTOS',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/645359_1701185357_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11166258',
//                 copyright: 'Nemo.04',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             medium: [
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/443780_1711047348.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11289341',
//                 copyright: 'Olivier Landes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/1156784_1705507016.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11213372',
//                 copyright: 'Huy Do',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/605743_1704489310.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11198913',
//                 copyright: 'Amarase Pamarapa',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/439151_1703900419.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191641',
//                 copyright: 'MHJ PHOTOS',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/645359_1701185357.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11166258',
//                 copyright: 'Nemo.04',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             large: [
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/443780_1711047348.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11289341',
//                 copyright: 'Olivier Landes',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/1156784_1705507016.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11213372',
//                 copyright: 'Huy Do',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/605743_1704489310.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11198913',
//                 copyright: 'Amarase Pamarapa',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/439151_1703900419.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11191641',
//                 copyright: 'MHJ PHOTOS',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/645359_1701185357.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11166258',
//                 copyright: 'Nemo.04',
//                 source: 'Jetphotos.com',
//               },
//             ],
//           },
//         },
//         {
//           registration: 'B-16728',
//           images: {
//             thumbnails: [
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/884274_1708090061_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11247397',
//                 copyright: 'USA1549',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/1582999_1707087189_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11232813',
//                 copyright: 'CATCH01',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/6/649583_1704277830_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11196219',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/609994_1708463906_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255924',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/200/5/742827_1708463185_tb.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255908',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             medium: [
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/884274_1708090061.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11247397',
//                 copyright: 'USA1549',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/1582999_1707087189.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11232813',
//                 copyright: 'CATCH01',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/6/649583_1704277830.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11196219',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/609994_1708463906.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255924',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/400/5/742827_1708463185.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255908',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//             ],
//             large: [
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/884274_1708090061.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11247397',
//                 copyright: 'USA1549',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/1582999_1707087189.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11232813',
//                 copyright: 'CATCH01',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/6/649583_1704277830.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11196219',
//                 copyright: 'Chow Kin Hei - AHKGAP',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/609994_1708463906.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255924',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//               {
//                 src: 'https://cdn.jetphotos.com/640cb/5/742827_1708463185.jpg?v=0',
//                 link: 'https://www.jetphotos.com/photo/11255908',
//                 copyright: 'Maik Voigt',
//                 source: 'Jetphotos.com',
//               },
//             ],
//           },
//         },
//       ],
//     },
//   },
// }
const user = useUserStore()
user.savedKey = localStorage.getItem('access_key')
let filtered_flight = ''
if (localStorage.getItem('tracked_flights'))
  user.trackedFlights = user.trackedFlights.concat(localStorage.getItem('tracked_flights').split(',').filter(item => !user.trackedFlights.includes(item)))

const router = useRouter()
function arr_time() {
  if (filtered_flight[0].time.other.eta)
    return new Date(filtered_flight[0].time.other.eta * 1000).toLocaleString()
  else return 'Scheduled'
}
async function go() {
  user.trackedFlights.forEach(async (item) => {
    const options = {
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/get-more-info',
      params: {
        query: item,
        fetchBy: 'flight',
        page: '1',
        limit: '100',
      },
      headers: {
        'X-RapidAPI-Key': user.savedKey,
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
      },
    }

    try {
      // console.log(item)
      const response = await axios.request(options)
      filtered_flight = await response.data.result.response.data.filter(item => (`0${new Date((item.time.scheduled.arrival) * 1000).getDate().toString()}`).slice(-2) === day)
      // console.log(filtered_flight)
      if (filtered_flight[0]) {
        await user.listedFlights.push({
          flight: filtered_flight[0].identification.number.default,
          arr_time: arr_time(),
          // arr_time: filtered_flight[0].time.other.eta,
          status: filtered_flight[0].status.text,
        })
      }
    }
    catch (error) {
      console.error(error)
    }
    // send api call
    // get filtered flight
    // push filtered flight info into user.litedFlights
  })

  // const flight = {}
  // user.trackedFlights.forEach((element) => {
  //   // send  requst to api to get respond respond_1 and  2 are examples
  // })
  // return this.respond_1.data.find(
  //   'flight_date', '2024-04-14')
}
function del(index) {
  user.trackedFlights.splice(index, 1)
  localStorage.setItem('tracked_flights', user.trackedFlights)
}
function save() {
  user.savedKey = user.inputKey
  localStorage.setItem('access_key', user.inputKey)
  user.inputKey = ''
}
function addFlight() {
  user.trackedFlights.push(user.inputFlight)
  localStorage.setItem('tracked_flights', user.trackedFlights)
  user.inputFlight = ''
}

// const flight_object = {
//   identification: {
//     id: '34c89306',
//     row: 5493730613,
//     number: {
//       default: 'BR52',
//       alternative: null,
//     },
//     callsign: 'EVA052',
//     codeshare: null,
//   },
//   status: {
//     live: true,
//     text: 'Estimated 22:29',
//     icon: 'green',
//     estimated: null,
//     ambiguous: false,
//     generic: {
//       status: {
//         text: 'estimated',
//         type: 'arrival',
//         color: 'green',
//         diverted: null,
//       },
//       eventTime: {
//         utc: 1713238144,
//         local: 1713220144,
//       },
//     },
//   },
//   aircraft: {
//     model: {
//       code: 'B77W',
//       text: 'Boeing 777-36N(ER)',
//     },
//     registration: 'B-16720',
//     country: {
//       id: 218,
//       name: 'Taiwan',
//       alpha2: 'TW',
//       alpha3: 'TWN',
//     },
//     hex: '8990E2',
//     restricted: false,
//     serialNo: null,
//     age: {
//       availability: true,
//     },
//     availability: {
//       serialNo: true,
//       age: true,
//     },
//   },
//   owner: {
//     name: 'EVA Air',
//     code: {
//       iata: 'BR',
//       icao: 'EVA',
//     },
//   },
//   airline: {
//     name: 'EVA Air',
//     code: {
//       iata: 'BR',
//       icao: 'EVA',
//     },
//     short: 'EVA Air',
//   },
//   airport: {
//     origin: {
//       name: 'Taipei Taoyuan International Airport',
//       code: {
//         iata: 'TPE',
//         icao: 'RCTP',
//       },
//       position: {
//         latitude: 25.07773,
//         longitude: 121.232803,
//         country: {
//           name: 'Taiwan',
//           code: 'TW',
//           id: 218,
//         },
//         region: {
//           city: 'Taipei',
//         },
//       },
//       timezone: {
//         name: 'Asia/Taipei',
//         offset: 28800,
//         abbr: 'CST',
//         abbrName: 'China Standard Time',
//         isDst: false,
//       },
//       visible: true,
//     },
//     destination: {
//       name: 'Houston George Bush Intercontinental Airport',
//       code: {
//         iata: 'IAH',
//         icao: 'KIAH',
//       },
//       position: {
//         latitude: 29.98443,
//         longitude: -95.3414,
//         country: {
//           name: 'United States',
//           code: 'US',
//           id: 236,
//         },
//         region: {
//           city: 'Houston',
//         },
//       },
//       timezone: {
//         name: 'America/Chicago',
//         offset: -18000,
//         abbr: 'CDT',
//         abbrName: 'Central Daylight Time',
//         isDst: true,
//       },
//       visible: true,
//     },
//     real: null,
//   },
//   time: {
//     scheduled: {
//       departure: 1713187200,
//       arrival: 1713237300,
//     },
//     real: {
//       departure: 1713190174,
//       arrival: null,
//     },
//     estimated: {
//       departure: null,
//       arrival: 1713238144,
//     },
//     other: {
//       eta: 1713238144,
//       updated: 1713224088,
//       duration: null,
//     },
//   },
// }
user.listedFlights = []

function go_home() {
  router.push('/')
}
// `0${date.getDate().toString()}`.slice(-2)
// const filtered_flight = new Date(respond_1.result.response.data[1].time.scheduled.arrival * 1000).getDate()
// const filtered_flight = respond_1.result.response.data[1].time.scheduled.arrival
// const filtered_flight = '' respond_1.result.response.data.filter(item => (`0${new Date(item.time.scheduled.arrival * 1000).getDate().toString()}`).slice(-2) === day)
// const filtered_flight = respond_1.result.response.data.filter(item => console.log(Date(item.time.scheduled.arrival * 1000)))
// const test = respond_1.data.find(({ flight_date }) => flight_date === date_formated)
// arr_time: new Date(filtered_flight[0].time.estimated.arrival * 1000).toLocaleString()
// arr_time: `${new Date(filtered_flight[0].time.estimated.arrival * 1000).getHours()}:${new Date(filtered_flight[0].time.estimated.arrival * 1000).getMinutes()}`,
</script>

<template>
  <div>
    <div text-4xl>
      <div i-skill-icons:devto-dark inline-block />
    </div>
    <p /><h1> {{ date_string }} </h1>
    {{ date_formated }}
    <p> flight tracking page</p>
    <p>
      Page's under construction
      <!-- <em text-sm opacity-75>{{ t('intro.desc') }}</em> -->
    </p>
    <!-- <div py-4 /> -->
    {{ typeof day }}
    <div>
      <table class="m-auto max-w-5xl rounded shadow-md">
        <thead>
          <tr>
            <th class="w-1/3 border border-r-0 border-gray-300 bg-gray-100 p-4 font-normal sm:w-1/4">
              Flight
            </th>
            <th class="w-1/3 border border-r-0 border-gray-300 bg-gray-100 p-4 font-normal sm:w-1/4">
              ETA
            </th>
            <th class="w-1/3 border border-r-0 border-gray-300 bg-gray-100 p-4 font-normal sm:w-1/4">
              Status
            </th>
          </tr>
        </thead>
        <!-- use the filtered list -->
        <tbody v-for="flight in user.listedFlights" :key="flight._id">
          <tr>
            <td class="w-1/3 border border-r-0 border-gray-300 bg-white p-4 font-normal sm:w-1/4">
              {{ flight.flight }}
            </td>
            <td class="w-1/3 border border-r-0 border-gray-300 bg-white p-4 font-normal sm:w-1/4">
              {{ flight.arr_time }}
            </td>
            <td class="w-1/3 border border-r-0 border-gray-300 bg-white p-4 font-normal sm:w-1/4">
              {{ flight.status }}
            </td>
          </tr>
        </tbody>
      </table>
      <!-- {{ filtered_flight }} -->
      <button
        m-3 text-sm btn
        @click="go"
      >
        Go
      </button>
    </div>
    <div py-4 />
    <TheInput
      id="input"
      v-model="user.inputKey"
      placeholder="enter aviationStack access key "
      autocomplete="true"
      @keydown.enter="save"
    />
    <button
      m-3 text-sm btn
      @click="save"
    >
      Save
    </button>
    <p>
      <TheInput
        id="input2"
        v-model="user.inputFlight"
        placeholder=" example EK211 "
        autocomplete="true"
        @keydown.enter="addFlight"
      />
      <button
        m-3 text-sm btn
        @click="addFlight"
      >
        Add
      </button>
    </p>
    <!-- <div py-4 /> -->
    <p id="message">
      user.savedKey :  {{ user.savedKey }}
    </p>
    <p id="message">
      user.trackedFlights :
    </p>
    <button
      v-for="flight in user.trackedFlights" :key="flight._id" m-1 bg-red
      @click="del(user.trackedFlights.indexOf(flight))"
    >
      {{ flight }}
    </button>
    <div>
      <button
        m-3 text-sm btn
        @click="go_home"
      >
        Home
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
