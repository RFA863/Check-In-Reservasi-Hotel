import Image from "next/image";
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
  return (
    <div className="bg-[#F6F1F1] pb-12">
      <div className="flex justify-center  items-end gap-3 pb-12" >
        <div>
          <p>Kota Destinasi :</p>
          <button className="border border-gray-600 rounded px-5 py-2">
            Kota Destinasi
          </button>
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
          <button className="border border-gray-600 rounded px-5 py-2">
            Jumlah Kamar
          </button>
        </div>
        <button className="border border-gray-600 rounded px-5 py-2">
          Cari
        </button>
      </div>

      <div className="flex justify-evenly flex-wrap" >

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel1}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">The Bandung Hotel</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">4.0 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.3 - Bagus (170 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.1.500.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel2}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">The Hotel of Bandung City</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">7.3 Km dari pusat kota</p>
              <p  className="font-semibold text-md">9.0 - Sangat bagus (1.270 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.4.897.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel3}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">The Highland Bogor Hotel</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">2.8 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.6 - Bagus (1.320 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.2.500.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel4}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">The Bogor Haritage</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">5.3 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.9 - Sangat bagus (1.533 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.4.997.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel5}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">The Alana Yogyakarta Hotel & Convention Center</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">3.8 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.5 - Bagus (1.127 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.2.789.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel6}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">Adhisthana Hotel Yogyakarta</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">1.3 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.7 -  bagus (1.213 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.2.997.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel7}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">Montigo Resorts Seminyak Bali</p>
              <p className="text-sm">Resorts</p>
              <p className="font-semibold text-md mt-5">3.8 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.9 - Samgat Bagus (2.720 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.5.590.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel8}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">Radisson Blu Bali Uluwatu</p>
              <p className="text-sm">Hotel</p>
              <p className="font-semibold text-md mt-5">1.3 Km dari pusat kota</p>
              <p  className="font-semibold text-md">9.0 - Sangat bagus (2.733 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.6.997.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel9}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">Jivana Resort Lombok</p>
              <p className="text-sm">Resort</p>
              <p className="font-semibold text-md mt-5">1.8 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.5 - Bagus (1.197 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.4.789.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5  bg-white">
          <div className="shadow-lg rounded-lg flex">
            <div>
              <Image
                src={Hotel10}
                className="object-scale-down h-40 w-auto rounded-l-md "
              />
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl w-64">Selong Selo Resort Lombok</p>
              <p className="text-sm">Resort</p>
              <p className="font-semibold text-md mt-5">3.3 Km dari pusat kota</p>
              <p  className="font-semibold text-md">8.7 -  bagus (1.713 Ulasan)</p>
            </div>
            <div className="pt-3 px-3">
              <p className="font-bold text-xl" >Rp.4.997.000</p>
              <p className="text-sm">per malam</p>
              <button className=" mt-7 rounded-xl bg-green-500 py-1 px-7 text-white font-bold ">Order </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
