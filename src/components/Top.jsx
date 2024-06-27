import { useState, useEffect } from "react";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { get_dates } from "../helper.js";

export default function Top({ records, set_records }) {
  const [origins, set_origins] = useState(["None", "Paris"]);
  const [sortby, set_sortby] = useState(SORTBYS[0]);
  const [catergory, set_catergory] = useState(CATEGORIES[0]);

  const change_record = (i, origin) => {
    if (origin === "None") set_records({ ...records, [i]: null });
    else
      axios
        .get(`${process.env.REACT_APP_BE_URL}/origin/${origin}`)
        .then((data) => {
          const today = new Date();
          const updated =
            data.data.a.length ===
            get_dates(new Date(today.getFullYear(), 0, 1), today).length;

          set_records({ ...records, [i]: data.data });
        })
        .catch((err) => {
          console.log(err);
          set_records({ ...records, [i]: null });
        });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/origins/${catergory}/${sortby}`)
      .then((data) => set_origins(["None", ...data.data]))
      .catch((err) => console.log(err));
    change_record(0, "Paris");
  }, [sortby, catergory]);

  return (
    <Paper elevation={12} sx={container}>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2}>
          <Select
            sx={top}
            defaultValue="Paris"
            onChange={(e) => change_record(0, e.target.value)}
          >
            {origins.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>

          <Select
            sx={top}
            defaultValue="None"
            onChange={(e) => change_record(1, e.target.value)}
          >
            {origins.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Select
            sx={bottom}
            defaultValue="All"
            onChange={(e) => set_sortby(e.target.value)}
            defaultValue={catergory}
          >
            {CATEGORIES.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>

          <Select
            sx={bottom}
            defaultValue="All"
            onChange={(e) => set_sortby(e.target.value)}
            defaultValue={sortby}
          >
            {SORTBYS.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
    </Paper>
  );
}

const container = {
  width: "calc(100% - 20px)",
  p: "10px",
  backgroundColor: "#ede8d0",
};

const top = {
  height: 40,
  width: 1,
  fontSize: 30,
};

const bottom = {
  height: 20,
  width: 200,
};
const btn = {};

const SORTBYS = [
  "high to low volatility",
  "low to high volatility",
  "A-z",
  "relevance",
];

const CATEGORIES = [
  "all",
  "Africa",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];

const ORIGINS = [
  "Abidjan",
  "Abu Dhabi",
  "Abuja",
  "Accra",
  "Adana",
  "Addis Ababa",
  "Algiers",
  "Almaty",
  "Amman",
  "Amsterdam",
  "Ankara",
  "Antananarivo",
  "Apia",
  "Ashgabat",
  "Asmara",
  "Astana",
  "Asuncion",
  "Athens",
  "Auckland",
  "Baghdad",
  "Baku",
  "Bamako",
  "Bandar Seri Begawan",
  "Bangkok",
  "Bangui",
  "Banjul",
  "Barcelona",
  "Beijing",
  "Beirut",
  "Belfast",
  "Belgrade",
  "Belmopan",
  "Berlin",
  "Bern",
  "Bishkek",
  "Bogota",
  "Brasilia",
  "Bratislava",
  "Brazzaville",
  "Bridgetown",
  "Brussels",
  "Bucharest",
  "Budapest",
  "Buenos Aires",
  "Bujumbura",
  "Cairo",
  "Calgary",
  "Canberra",
  "Cape Town",
  "Caracas",
  "Casablanca",
  "Chengdu",
  "Chennai ( Madras)",
  "Chiang Mai",
  "Chisinau",
  "Ciudad Juarez",
  "Colombo",
  "Conakry",
  "Copenhagen",
  "Cotonou",
  "Curacao",
  "Dakar",
  "Damascus",
  "Dar Es Salaam",
  "Dhahran",
  "Dhaka",
  "Dili",
  "Djibouti",
  "Doha",
  "Dubai",
  "Dublin",
  "Durban",
  "Dushanbe",
  "Erbil",
  "Florence",
  "Frankfurt",
  "Freetown",
  "Fukuoka",
  "Gaborone",
  "Georgetown",
  "Guadalajara",
  "Guangzhou",
  "Guatemala City",
  "Guayaquil",
  "Halifax",
  "Hamilton",
  "Hanoi",
  "Harare",
  "Havana",
  "Helsinki",
  "Hermosillo",
  "Ho Chi Minh City",
  "Hong Kong",
  "Hyderabad",
  "Islamabad",
  "Istanbul",
  "Jakarta",
  "Jeddah",
  "Jerusalem",
  "Johannesburg",
  "Juba",
  "Kabul",
  "Kampala",
  "Kaohsiung",
  "Karachi",
  "Kathmandu",
  "Khartoum",
  "Kigali",
  "Kingston",
  "Kinshasa",
  "Kolkata",
  "Kolonia",
  "Koror",
  "Krakow",
  "Kuala Lumpur",
  "Kuwait",
  "Kyiv",
  "La Paz",
  "Lagos",
  "Lahore",
  "Libreville",
  "Lilongwe",
  "Lima",
  "Lisbon",
  "Ljubljana",
  "Lome",
  "London",
  "Luanda",
  "Lusaka",
  "Luxembourg",
  "Madrid",
  "Majuro",
  "Malabo",
  "Managua",
  "Manama",
  "Manila",
  "Maputo",
  "Marseille",
  "Maseru",
  "Matamoros",
  "Mbabane",
  "Melbourne",
  "Merida",
  "Mexicali Tpf",
  "Mexico City",
  "Milan",
  "Minsk",
  "Monrovia",
  "Monterrey",
  "Montevideo",
  "Montreal",
  "Moscow",
  "Mumbai (Bombay)",
  "Munich",
  "Muscat",
  "N`Djamena",
  "Naha",
  "Nairobi",
  "Naples",
  "Nassau",
  "New Delhi",
  "Niamey",
  "Nicosia",
  "Nogales",
  "Nouakchott",
  "Nuevo Laredo",
  "Osaka/Kobe",
  "Oslo",
  "Ottawa",
  "Ouagadougou",
  "Panama City",
  "Paramaribo",
  "Paris",
  "Perth",
  "Phnom Penh",
  "Podgorica",
  "Ponta Delgada",
  "Port Au Prince",
  "Port Louis",
  "Port Moresby",
  "Port Of Spain",
  "Porto Alegre",
  "Prague",
  "Praia",
  "Pretoria",
  "Pristina",
  "Quebec",
  "Quito",
  "Rangoon",
  "Recife",
  "Reykjavik",
  "Riga",
  "Rio De Janeiro",
  "Riyadh",
  "Rome",
  "San Jose",
  "San Salvador",
  "Sanaa",
  "Santiago",
  "Santo Domingo",
  "Sao Paulo",
  "Sapporo",
  "Sarajevo",
  "Seoul",
  "Shanghai",
  "Shenyang",
  "Singapore",
  "Skopje",
  "Sofia",
  "St Georges",
  "St Petersburg",
  "Stockholm",
  "Surabaya",
  "Suva",
  "Sydney",
  "Taipei",
  "Tallinn",
  "Tashkent",
  "Tbilisi",
  "Tegucigalpa",
  "Tel Aviv",
  "Tijuana",
  "Tijuana Tpf",
  "Tirana",
  "Tokyo",
  "Toronto",
  "Tripoli",
  "Tunis",
  "Ulaanbaatar",
  "Usun-New York",
  "Valletta",
  "Vancouver",
  "Vienna",
  "Vientiane",
  "Vilnius",
  "Vladivostok",
  "Warsaw",
  "Washington Refugee Processing Center",
  "Windhoek",
  "Wuhan",
  "Yaounde",
  "Yekaterinburg",
  "Yerevan",
  "Zagreb",
];
