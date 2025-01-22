import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Network response was bad");
      }

      const data = await response.json();

      const courses = data.map((item: any) => ({
        title:
          item.title.length > 15
            ? `${item.title.substring(0, 15)}...`
            : item.title,
        videoUrl:
          "https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba",
      }));

      res.status(200).json(courses);
    } catch (error) {
      console.log("Failed to fetch courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


export const WATCH_EPISODE_VIDEOS = [
  {
    "title": "Under 40 CEOs - Tosin Oshinowo",
    "url": "https://www.youtube.com/embed/r9zOrUytIe4"
  },
  {
    "title": "Under 40 CEOs - Tayo Oyedeji",
    "url": "https://www.youtube.com/embed/dcFfrMq7Oj4"
  },
  {
    "title": "Under 40 CEOs - Adaora Mbelu",
    "url": "https://www.youtube.com/embed/6kHdBLxy680"
  },
  {
    "title": "Under 40 CEOs - Ran Neuner",
    "url": "https://www.youtube.com/embed/8ub0_bVFcyY"
  },
  {
    "title": "Under 40 CEOs - Aisha Pandor",
    "url": "https://www.youtube.com/embed/Tils7703suE"
  },
  {
    "title": "Under 40 CEOs - Farida Bedwei",
    "url": "https://www.youtube.com/embed/y22V81dWPP8"
  },
  {
    "title": "Under 40 CEOs - Derrydean Dadzie",
    "url": "https://www.youtube.com/embed/dwTbnmJ0-Cs"
  },
  {
    "title": "Under 40 CEOs - Bola Ray. Part 1.",
    "url": "https://www.youtube.com/embed/8zUzUHOUfms"
  },
  {
    "title": "Under 40 CEOs - Adebola Williams",
    "url": "https://www.youtube.com/embed/Iz8N46fI1Z8"
  },
  {
    "title": "Under 40 CEOs - Audu Maikori",
    "url": "https://www.youtube.com/embed/5zNOxsJJ8Cg"
  },
  {
    "title": "Under 40 CEOs - Idris Olorunnimbe",
    "url": "https://www.youtube.com/embed/vSgBfwLb87g"
  },
  {
    "title": "Under 40 CEOs - Bernard Avle",
    "url": "https://www.youtube.com/embed/k5ghudoIwOI"
  },
  {
    "title": "Under 40 CEOs - Eyo Bassey",
    "url": "https://www.youtube.com/embed/8IlMgDJV0F8"
  },
  {
    "title": "Under 40 CEOs- - Alex Adjei Bram",
    "url": "https://www.youtube.com/embed/oW9SDcpJths"
  },
  {
    "title": "Under 40 CEOs - Bilikiss Adebiyi-Abiola",
    "url": "https://www.youtube.com/embed/QErHCmz_b8Y"
  },
  {
    "title": "Under 40 CEOs - Wole Faroun",
    "url": "https://www.youtube.com/embed/46rXMx8PE3U"
  },
  {
    "title": "Under 40 CEOs - Femi Obagun",
    "url": "https://www.youtube.com/embed/OJYP_R7_8Qs"
  },
  {
    "title": "Under 40 CEOs - Ruth Obih-Obuah",
    "url": "https://www.youtube.com/embed/HKWWhTCYEyg"
  },
  {
    "title": "Under 40 CEOs - Noble Igwe",
    "url": "https://www.youtube.com/embed/FstHLWGQAyU"
  },
  {
    "title": "Under 40 CEOs - Ayesha Bedwei",
    "url": "https://www.youtube.com/embed/K1tnlu-T8JM"
  },
  {
    "title": "Under 40 CEOs - Bola Ray. Part 2",
    "url": "https://www.youtube.com/embed/ONgqnDUg6wM"
  },
  {
    "title": "Under 40 CEOs - Deborah Ahenkorah",
    "url": "https://www.youtube.com/embed/oGRDNSyXWAI"
  },
  {
    "title": "Under 40 CEOs - Ehi Binitie",
    "url": "https://www.youtube.com/embed/CxS_uvmGu1A"
  },
  {
    "title": "Under 40 CEOs - Shade Ladipo",
    "url": "https://www.youtube.com/embed/lbnx2su4bYI"
  },
  {
    "title": "Under 40 CEOs - Senyo Hosi",
    "url": "https://www.youtube.com/embed/BF1JpZQNPZM"
  },
  {
    "title": "Under 40 CEOs - Bukky Karibi-Whyte",
    "url": "https://www.youtube.com/embed/Lfp_JCPerlk"
  },
  {
    "title": "Under 40 CEOs - Raindolf Owusu",
    "url": "https://www.youtube.com/embed/loDsHmhNC-g"
  },
  {
    "title": "Under 40 CEOs - Ukinebo Dare",
    "url": "https://www.youtube.com/embed/0b7pC1K4tFM"
  },
  {
    "title": "Under 40 CEOs - Oluyomi Ojo",
    "url": "https://www.youtube.com/embed/D5VTxBpGSDQ"
  },
  {
    "title": "Under 40 CEOs - Yawa Hansen-Quao",
    "url": "https://www.youtube.com/embed/izA5NVg7Gcg"
  },
  {
    "title": "Under 40 CEOs - Michael Ugwu",
    "url": "https://www.youtube.com/embed/zLHyqmeakyY"
  },
  {
    "title": "Under 40 CEOs - Olatorera Oniru",
    "url": "https://www.youtube.com/embed/8TnMTmf8k5Y"
  },
  {
    "title": "Under 40 CEOs - Bheki Kunene",
    "url": "https://www.youtube.com/embed/Nr3vZEx3OE0"
  },
  {
    "title": "Under 40 CEOs - Thatoyaona Marumo",
    "url": "https://www.youtube.com/embed/uBHac7gzP_M"
  },
  {
    "title": "Under 40 CEOs _ Tope Olagbegi",
    "url": "https://www.youtube.com/embed/dpM63o2_z0c"
  },
  {
    "title": "Under 40 CEOs - Shola Ladoja",
    "url": "https://www.youtube.com/embed/QJHMwb-nezw"
  },
  {
    "title": "Under 40 CEOs - Abiola Adekoya",
    "url": "https://www.youtube.com/embed/iE8ittkHVPo"
  },
  {
    "title": "Under 40 CEOs - Niyi Oyelade",
    "url": "https://www.youtube.com/embed/V2dN1_uEkMc"
  },
  {
    "title": "Under 40 CEOs - Jobberman Co-Founders",
    "url": "https://www.youtube.com/embed/tI6PCvYMoGU"
  },
  {
    "title": "Under 40 CEOs - Adekanla Adegoke",
    "url": "https://www.youtube.com/embed/m9xG0zcMC0U"
  },
  {
    "title": "Under 40 CEOs - Oluwaleke Ilo",
    "url": "https://www.youtube.com/embed/5eWVYh6VUwQ"
  },
  {
    "title": "Under 40 CEOs - Neo Lekgabo",
    "url": "https://www.youtube.com/embed/a6_enlhTqmc"
  },
  {
    "title": "Under 40 CEOs - Lanre Akinlagun",
    "url": "https://www.youtube.com/embed/lVsAiIn0xuU"
  },
  {
    "title": "Under 40 CEOs - Tony Usidamen",
    "url": "https://www.youtube.com/embed/ucS4HMZlPCI"
  },
  {
    "title": "Under 40 CEOs - Aderemi Oguntoye",
    "url": "https://www.youtube.com/embed/Y5cigeb6KOs"
  },
  {
    "title": "Under 40 CEOs - Akintunde Oyebode",
    "url": "https://www.youtube.com/embed/PV1Ohd5dYgk"
  },
  {
    "title": "Under 40 CEOs - Abiodun Oshodi",
    "url": "https://www.youtube.com/embed/IuQWPd2lTww"
  },
  {
    "title": "Under 40 CEOs - Ameyaw Debrah",
    "url": "https://www.youtube.com/embed/XpwJGpL4Lc8"
  },
  {
    "title": "Under 40 CEOs - Afrika Mkhangala",
    "url": "https://www.youtube.com/embed/4DrOx61LrO0"
  },
  {
    "title": "Under 40 CEOs - Feyi Olubodun",
    "url": "https://www.youtube.com/embed/dxJOlCN2wCc"
  },
  {
    "title": "Under 40 CEOs - Abasiama Idaresit",
    "url": "https://www.youtube.com/embed/HFLjMYGj14Y"
  },
  {
    "title": "Under 40 CEOs - Season 2 Trailer",
    "url": "https://www.youtube.com/embed/DQZeTmifh84"
  },
  {
    "title": "Under 40 CEOs - Emile Kinuma",
    "url": "https://www.youtube.com/embed/QimlW3Sa8Jo"
  },
  {
    "title": "Under 40 CEOs - Rorisang Setlogelo",
    "url": "https://www.youtube.com/embed/DfOHsMtRbs0"
  },
  {
    "title": "Under 40 CEOs - Tosin Amushan",
    "url": "https://www.youtube.com/embed/Cw8dG5iV4M0"
  },
  {
    "title": "Under 40 CEOs - Oye Akideinde",
    "url": "https://www.youtube.com/embed/oiFU8-VORNQ"
  },
  {
    "title": "Under 40 CEOs - Jude Abaga (Part 1)",
    "url": "https://www.youtube.com/embed/mO-rnTk6Ajs"
  },
  {
    "title": "Under 40 CEOs - Gbemi Olateru-Olagbegi (Part 1)",
    "url": "https://www.youtube.com/embed/fFZC0y_5OTA"
  },
  {
    "title": "Under 40 CEOs - Gbemi Olateru-Olagbegi (Part 2)",
    "url": "https://www.youtube.com/embed/SSm7_-gx-nc"
  },
  {
    "title": "Under 40 CEOs - Folawe Omikunle (Part 2)",
    "url": "https://www.youtube.com/embed/Mb3e65GHFaw"
  },
  {
    "title": "Under 40 CEOs - Chima Anyaso",
    "url": "https://www.youtube.com/embed/Qy51aTnw2Fs"
  },
  {
    "title": "Under 40 CEOs - Banky Wellington. Part 2.",
    "url": "https://www.youtube.com/embed/3hxEl2fsn28"
  },
  {
    "title": "Under 40 CEOs - Jude Abaga (Part 2)",
    "url": "https://www.youtube.com/embed/uDIzfw0oJN8"
  },
  {
    "title": "Under 40 CEOs - Kene Rapu",
    "url": "https://www.youtube.com/embed/5WUA4mRcWv8"
  },
  {
    "title": "Under 40 CEOs - Folawe Omikunle (Part 1)",
    "url": "https://www.youtube.com/embed/vi_jFNWaEf0"
  },
  {
    "title": "Under 40 CEOs - Banky Wellington. Part 1.",
    "url": "https://www.youtube.com/embed/MWlx4XFyaNc"
  },
  {
    "title": "Under 40 CEOs - Deji Williams",
    "url": "https://www.youtube.com/embed/NgQ0BjyxcUo"
  },
  {
    "title": "Under 40 CEOs - Dozie Okafor (Part 2)",
    "url": "https://www.youtube.com/embed/8Hg22vh7GeQ"
  },
  {
    "title": "Under 40 CEOs - Dozie Okafor (Part 1)",
    "url": "https://www.youtube.com/embed/VNa_9-UMyHU"
  },
  {
    "title": "Under 40 CEOs - Adetola Juyitan",
    "url": "https://www.youtube.com/embed/WjIogbFES24"
  },
  {
    "title": "Under 40 CEOs - Wunmi Williams",
    "url": "https://www.youtube.com/embed/5H7DooMpfno"
  },
  {
    "title": "Under 40 CEOs - Tumi Phake",
    "url": "https://www.youtube.com/embed/tmCTWsrAFyI"
  },
  {
    "title": "Under 40 CEOs - Toyin Lawani",
    "url": "https://www.youtube.com/embed/vhD8KUT_mLc"
  },
  {
    "title": "Under 40 CEOs - Tokini Peterside",
    "url": "https://www.youtube.com/embed/tlm7pgvV7bM"
  },
  {
    "title": "Under 40 CEOs - Sylvester Chauke",
    "url": "https://www.youtube.com/embed/wRhUaRssXug"
  },
  {
    "title": "Under 40 CEOs - Siyanda Dlamini",
    "url": "https://www.youtube.com/embed/Fm2n8ybfUcg"
  },
  {
    "title": "Under 40 CEOs - Patrick Nsenga Buchana",
    "url": "https://www.youtube.com/embed/cm_ozZOqrXU"
  },
  {
    "title": "Under 40 CEOs - Olaotan Towry-Coker",
    "url": "https://www.youtube.com/embed/vfebh56Hmx0"
  },
  {
    "title": "Under 40 CEOs - Ola Brown",
    "url": "https://www.youtube.com/embed/LSzC3uIVaSY"
  },
  {
    "title": "Under 40 CEOs - Nadia Uwamahoro",
    "url": "https://www.youtube.com/embed/2Q8OUyZq9YA"
  },
  {
    "title": "Under 40 CEOs - Mohammed Yussuf",
    "url": "https://www.youtube.com/embed/mc-WUjrKb2o"
  },
  {
    "title": "Under 40 CEOs - Mathew Rugamba",
    "url": "https://www.youtube.com/embed/zZzOnrxnbSE"
  },
  {
    "title": "Under 40 CEOs - Maite Makgoba",
    "url": "https://www.youtube.com/embed/wiDLbLPCaaQ"
  },
  {
    "title": "Under 40 CEOs - Lilian Odim",
    "url": "https://www.youtube.com/embed/0rkN6VZsdIc"
  },
  {
    "title": "Under 40 CEOs - Ferdy Turasenga",
    "url": "https://www.youtube.com/embed/pq8QwhcAZWs"
  },
  {
    "title": "Under 40 CEOs - Ernest Kayinamura",
    "url": "https://www.youtube.com/embed/pFjJwtTurlQ"
  },
  {
    "title": "Under 40 CEOs - Banke Meshida-Lawal",
    "url": "https://www.youtube.com/embed/iaEciV5B2Cs"
  },
  {
    "title": "Under 40 CEOs - Omotola Jalade-Ekeinde",
    "url": "https://www.youtube.com/embed/AVwhYL-QJOc"
  },
  {
    "title": "Under 40 CEOs - Victor Ndukauba Part 2",
    "url": "https://www.youtube.com/embed/5Hh3v7TnoNc"
  },
  {
    "title": "Under 40 CEOs - Victor Ndukauba Part 1",
    "url": "https://www.youtube.com/embed/GySw6kF7ayY"
  },
  {
    "title": "Under 40 CEOs - Ighiwiyisi Jacobs",
    "url": "https://www.youtube.com/embed/pUzuAj3Nf4I"
  },
  {
    "title": "Under 40 CEOs - Fadé Ogunro (Part 2)",
    "url": "https://www.youtube.com/embed/_V770zjI4Tk"
  },
  {
    "title": "Under 40 CEOs - Fadé Ogunro (Part 1)",
    "url": "https://www.youtube.com/embed/pJIvInfdulw"
  },
  {
    "title": "Under 40 CEOs - Orondaam Otto (Part 2)",
    "url": "https://www.youtube.com/embed/LWmN_L7gEd4"
  },
  {
    "title": "Under 40 CEOs - Orondaam Otto (Part 1)",
    "url": "https://www.youtube.com/embed/kEzgbORAYu8"
  },
  {
    "title": "Under 40 CEOs - Shukri Toefy",
    "url": "https://www.youtube.com/embed/Vb9Ts2Qfz6s"
  },
  {
    "title": "Under 40 CEOs - Richard Mantho",
    "url": "https://www.youtube.com/embed/Q8iVwXGp4AI"
  },
  {
    "title": "Under 40 CEOs - Fatima Ouanssaidi (Part 2)",
    "url": "https://www.youtube.com/embed/QUcNOQjoqVY"
  },
  {
    "title": "Under 40 CEOs - Bada Akintunde-Johnson (Part 2)",
    "url": "https://www.youtube.com/embed/mUpRC2KfNTo"
  },
  {
    "title": "Under 40 CEOs - Bada Akintunde-Johnson (Part 1)",
    "url": "https://www.youtube.com/embed/Dj51NI0KUTs"
  },
  {
    "title": "Under 40 CEOs - Kamil Olufowobi (Part 2)",
    "url": "https://www.youtube.com/embed/GbpH6jqhpkY"
  },
  {
    "title": "Under 40 CEOs - Kamil Olufowobi (Part 1)",
    "url": "https://www.youtube.com/embed/Gxo_zjCbQvs"
  },
  {
    "title": "Under 40 CEOs - Olaide Agboola (Part 2)",
    "url": "https://www.youtube.com/embed/Q90oL6_7CNY"
  },
  {
    "title": "Under 40 CEOs - Olaide Agboola (Part 1)",
    "url": "https://www.youtube.com/embed/VcskHri9shM"
  },
  {
    "title": "Under 40 CEOs - Chukwuka Monye (Part 2)",
    "url": "https://www.youtube.com/embed/oEBJDeh73P8"
  },
  {
    "title": "Under 40 CEOs - Chukwuka Monye (Part 1)",
    "url": "https://www.youtube.com/embed/WFM4iooSMRw"
  },
  {
    "title": "Under 40 CEOs - Abiola Seriki-Ayeni (Part 1)",
    "url": "https://www.youtube.com/embed/ChvJDA_Sd1Q"
  },
  {
    "title": "Under 40 CEOs - Abiola Seriki-Ayeni (Part 2)",
    "url": "https://www.youtube.com/embed/raFYuk1LNmY"
  },
  {
    "title": "Under 40 CEOs - Tolulola Olumide (Part 2)",
    "url": "https://www.youtube.com/embed/EYSfiNEh0l0"
  },
  {
    "title": "Under 40 CEOs - Tolulola Olumide (Part 1)",
    "url": "https://www.youtube.com/embed/9goMD3LcVe4"
  }
]

export const EVENT_VIDEOS = [
  {
    "title": "Under 40 CEOs Live - Tonye Cole",
    "url": "https://www.youtube.com/embed/NW1LUEULeeo"
  },
  {
    "title": "Under 40 CEOs Forum - Not Business As Usual",
    "url": "https://www.youtube.com/embed/OPRc_uR2gXo"
  },
  {
    "title": "Mr Fab drives Angel George - Drive Your Ambition",
    "url": "https://www.youtube.com/embed/lg78bews-CY"
  },
  {
    "title": "Under 40 CEOs -Tolu Adeusi",
    "url": "https://www.youtube.com/embed/9g0UBJF8jOg"
  },
  {
    "title": "They Said I Couldn't - Ukinebo Dare - Brought To You By Sunlight",
    "url": "https://www.youtube.com/embed/XgyqAseOGB0"
  },
  {
    "title": "Under 40 CEOs Forum 2020 - Vusi Thembekwayo Keynote Address",
    "url": "https://www.youtube.com/embed/2LJdhAqaZCY"
  },
  {
    "title": "Under 40 CEOs Forum Nigeria - Akintunde Oyebode",
    "url": "https://www.youtube.com/embed/siViPoil1Ls"
  },
]



