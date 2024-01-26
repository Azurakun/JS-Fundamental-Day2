const dataUsers = [
    {
        name : 'Achmad Arditio',
        kelas : 12,
        alamat : "Indramayu"
    },
    {
        name : 'Pak Maman',
        kelas : 5,
        alamat : "Bandung"
    },
    {
        name : 'Bu Maman',
        kelas : 9,
        alamat : "bandung"
    }
]
for (let index = 0; index <= dataUsers.length ; index++) {
    // This is Index on data user
    console.log('this section is name :', dataUsers[index].name);
    console.log('this section is adress :', dataUsers[index].alamat);
    console.log('this section room :', dataUsers[index].kelas);

}