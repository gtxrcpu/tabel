// app/page.js

const students = [
  {
    no: 1,
    nim: "123456",
    nama: "John Doe",
    gender: "Laki-laki",
    prodi: "TI",
    kelas: "A",
    semester: 2,
    alamat: "Jakarta",
    hobby: "Basket",
    citacita: "Insinyur",
  },
  {
    no: 2,
    nim: "123457",
    nama: "Jane Smith",
    gender: "Perempuan",
    prodi: "SI",
    kelas: "B",
    semester: 3,
    alamat: "Bandung",
    hobby: "Membaca",
    citacita: "Dokter",
  },
  {
    no: 3,
    nim: "123458",
    nama: "Michael Brown",
    gender: "Laki-laki",
    prodi: "TI",
    kelas: "A",
    semester: 4,
    alamat: "Surabaya",
    hobby: "Berenang",
    citacita: "Pilot",
  },
  {
    no: 4,
    nim: "123459",
    nama: "Emily Davis",
    gender: "Perempuan",
    prodi: "SI",
    kelas: "B",
    semester: 5,
    alamat: "Medan",
    hobby: "Melukis",
    citacita: "Arsitek",
  },
  {
    no: 5,
    nim: "123460",
    nama: "Sarah Johnson",
    gender: "Perempuan",
    prodi: "TI",
    kelas: "A",
    semester: 6,
    alamat: "Semarang",
    hobby: "Menari",
    citacita: "Dokter",
  },
  {
    no: 6,
    nim: "123461",
    nama: "David Wilson",
    gender: "Laki-laki",
    prodi: "SI",
    kelas: "A",
    semester: 2,
    alamat: "Jakarta",
    hobby: "Bermain Musik",
    citacita: "Desainer",
  },
  {
    no: 7,
    nim: "123462",
    nama: "Laura Martinez",
    gender: "Perempuan",
    prodi: "TI",
    kelas: "B",
    semester: 3,
    alamat: "Bandung",
    hobby: "Fotografi",
    citacita: "Pengusaha",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Daftar Mahasiswa</h1>

      {/* Tabel untuk Desktop (layar ≥ 1024px) */}
      <div className="hidden lg:block">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-sm">No</th>
              <th className="border border-gray-300 p-2 text-sm">NIM</th>
              <th className="border border-gray-300 p-2 text-sm">Nama</th>
              <th className="border border-gray-300 p-2 text-sm">Gender</th>
              <th className="border border-gray-300 p-2 text-sm">Prodi</th>
              <th className="border border-gray-300 p-2 text-sm">Kelas</th>
              <th className="border border-gray-300 p-2 text-sm">Semester</th>
              <th className="border border-gray-300 p-2 text-sm">Alamat</th>
              <th className="border border-gray-300 p-2 text-sm">Hobby</th>
              <th className="border border-gray-300 p-2 text-sm">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.no} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.no}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.nim}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.nama}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.gender}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.prodi}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.kelas}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.semester}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.alamat}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.hobby}
                </td>
                <td className="border border-gray-300 p-2 text-sm text-center">
                  {student.citacita}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grid System untuk Mobile (layar < 1024px) */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {students.map((student) => (
          <div
            key={student.no}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">No:</span>
                <span>{student.no}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">NIM:</span>
                <span>{student.nim}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Nama:</span>
                <span>{student.nama}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Gender:</span>
                <span>{student.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prodi:</span>
                <span>{student.prodi}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Kelas:</span>
                <span>{student.kelas}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Semester:</span>
                <span>{student.semester}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Alamat:</span>
                <span>{student.alamat}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Hobby:</span>
                <span>{student.hobby}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Cita-cita:</span>
                <span>{student.citacita}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
