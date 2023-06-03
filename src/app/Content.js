"use client";

import Image from "next/image";
import { useState } from "react";
import Select from 'react-select';

import Hotel1 from "../../public/img/Hotel1.png";
import Hotel2 from "../../public/img/Hotel2.png";
import Hotel3 from "../../public/img/Hotel3.png";
import Hotel4 from "../../public/img/Hotel4.png";
import Hotel5 from "../../public/img/Hotel5.png";
import Hotel6 from "../../public/img/Hotel6.png";
import Hotel7 from "../../public/img/Hotel7.png";
import Hotel8 from "../../public/img/Hotel8.png";
import Hotel9 from "../../public/img/Hotel9.png";
import Hotel10 from "../../public/img/Hotel10.png";

export default function Content() {
  const [city, setCity] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption.value);
  };

  const options = [
    { value: "", label: 'Pilih Kota' },
    { value: 'bandung', label: 'Bandung' },
    { value: 'bogor', label: 'Bogor' },
    { value: 'jogja', label: 'Jogja' },
    { value: 'bali', label: 'Bali' },
    { value: 'lombok', label: 'Lombok' }
  ]

  const kamar = [
    { value: "", label: 'Pilih kamar' },
    { value: '1', label: '1 Kamar' },
    { value: '2', label: '2 Kamar' },
    { value: '3', label: '3 Kamar' }
  ]

  const handleSearch = () => {
    // Logika pencarian hotel berdasarkan kota destinasi
    console.log("Searching hotels in", city);
    // Perform your search logic here

    if (city === "bandung" || city === "bogor" || city === "jogja" || city === "bali" || city === "lombok") {
      const selectedHotels = hotels[city] || [];
      setFilteredHotels(selectedHotels);
    } else {
      setFilteredHotels([]);
     console.log("salah bro");
    }
  };

  const hotels = {
    
    bandung: [
      {
        name: "The Bandung Hotel",
        type: "Hotel",
        distance: "4.0 Km dari pusat kota",
        rating: "8.3 - Bagus (170 Ulasan)",
        price: "Rp.1.500.000",
        image: Hotel1,
      },
      {
        name: "The Hotel of Bandung City",
        type: "Hotel",
        distance: "7.3 Km dari pusat kota",
        rating: "9.0 - Sangat bagus (1.270 Ulasan)",
        price: "Rp.4.897.000",
        image: Hotel2,
      },
    ],
   
    bogor: [
      {
        name: "The Highland Bogor Hotel",
        type: "Hotel",
        distance: "2.8 Km dari pusat kota",
        rating: "8.6 - Bagus (1.320 Ulasan)",
        price: "Rp.2.500.000",
        image: Hotel3,
      },
      {
        name: "The Bogor Haritage",
        type: "Hotel",
        distance: "5.3 Km dari pusat kota",
        rating: "8.9 - Sangat bagus (1.533 Ulasan)",
        price: "Rp.4.997.000",
        image: Hotel4,
      },
    ],
   
   
    jogja: [
      {
        name: "The Alana Yogyakarta Hotel",
        type: "Hotel",
        distance: "3.8 Km dari pusat kota",
        rating: "8.5 - Bagus (1.127 Ulasan)",
        price: "Rp.2.789.000",
        image: Hotel5,
      },
      {
        name: "Adhisthana Hotel Yogyakarta",
        type: "Hotel",
        distance: "1.3 Km dari pusat kota",
        rating: "8.5 - Bagus (1.533 Ulasan)",
        price: "Rp.3.500.000",
        image: Hotel6,
      },
    ],


    bali: [
      {
        name: "Radisson Blu Bali Uluwatu",
        type: "Resort",
        distance: "3.1 Km dari pusat kota",
        rating: "9.2 - Sangat bagus (2.098 Ulasan)",
        price: "Rp.5.497.000",
        image: Hotel7,
      },
      {
        name: "The Bali Resort",
        type: "Resort",
        distance: "5.1 Km dari pusat kota",
        rating: "9.2 - Sangat bagus (2.098 Ulasan)",
        price: "Rp.5.897.000",
        image: Hotel8,
      },
    ],
    lombok: [
      {
        name: "The Lombok Resort",
        type: "Resort",
        distance: "3.2 Km dari pusat kota",
        rating: "8.9 - Bagus (1.450 Ulasan)",
        price: "Rp.2.300.000",
        image: Hotel9,
      },
      {
        name: "The Resort of Lombok",
        type: "Resort",
        distance: "6.5 Km dari pusat kota",
        rating: "9.5 - Sangat bagus (2.678 Ulasan)",
        price: "Rp.6.897.000",
        image: Hotel10,
      },
    ],
  };

  return (
    <div className="bg-[#F6F1F1] pb-12">

<div className="flex justify-center  items-end gap-3 pb-12">
        <div>
          <p>Kota Destinasi :</p>
          <Select options={options}  onChange={handleCityChange} placeholder="Kota destinasi" className="w-60  border border-gray-600 rounded  py-px"/>
        
        </div>

        <div>
          <p>Tanggal Check-in :</p>
          <input
            type="date"
            className="border border-gray-600 rounded px-5 py-2"
          />
        </div>

        <div>
          <p>Tanggal Check-out :</p>
          <input
            type="date"
            className="border border-gray-600 rounded px-5 py-2"
          />
        </div>
        <div>
          <p>Jumlah Kamar :</p>
          <Select options={kamar} className="border border-gray-600 rounded w-52 py-px" 
          placeholder="Jumlah kamar"/>
        
        
        </div>
        <button
          className="border border-gray-600 rounded px-5 py-2"
          onClick={handleSearch}
        >
          Cari
        </button>
      </div>

     

      <div>
        {filteredHotels.length > 0 ? (
          <div  className="flex flex-wrap justify-evenly">
            {filteredHotels.map((hotel, index) => (
              <div key={index}>
                <div className="flex justify-evenly flex-wrap">
                  <div className="flex justify-center my-5  bg-white">
                    <div className="shadow-lg rounded-lg flex">
                      <div>
                        <Image
                          src={hotel.image}
                          className="object-scale-down h-40 w-auto rounded-l-md "
                        />
                      </div>
                      <div className="pt-3 px-3">
                        <p className="font-bold text-xl w-64">{hotel.name}</p>
                        <p className="text-sm">{hotel.type}</p>
                        <p className="font-semibold text-md mt-5">
                          {hotel.distance}
                        </p>
                        <p className="font-semibold text-md">{hotel.rating}</p>
                      </div>
                      <div className="pt-3 px-3">
                        <p className="font-bold text-xl">{hotel.price}</p>
                        <p className="text-sm">per malam</p>
                        <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">
                          Order{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-evenly">
          
            {Object.keys(hotels).map((city) => (
              <div key={city}>
               
                {hotels[city].map((hotel, index) => (
                  <div key={index} >
                    
                   
                      <div className="my-5  bg-white w-fit rounded-lg shadow-lg ">
                        <div className=" flex ">
                          <div>
                            <Image
                              src={hotel.image}
                              className="object-scale-down h-44 w-auto rounded-l-md "
                            />
                          </div>
                          <div className="pt-3 px-3">
                            <p className="font-bold text-2xl w-72">
                              {hotel.name}
                            </p>
                            <p className="text-sm">{hotel.type}</p>
                            <p className="font-semibold text-lg mt-5">
                              {hotel.distance}
                            </p>
                            <p className="font-semibold text-lg">
                              {hotel.rating}
                            </p>
                          </div>
                          <div className="pt-3 px-3">
                            <p className="font-bold text-xl">{hotel.price}</p>
                            <p className="text-sm">per malam</p>
                            <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">
                              Order
                            </button>
                          </div>
                        </div>
                      </div>
                      </div>
                   
                
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
