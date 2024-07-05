function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Jinn',
                'Syaitan',
                'Malaikat',
                'Peri',
                'Naga',
                'Setan',
                'Hantu',
                'Jin',
                'Iblis',
                'Kuntilanak',
                'Belut Listrik',
                'Anjing',
                'Kucing',
                'Beruang',
                'Aliando',
                'Suster Ngesot',
                'Tuyul',
                 'Leak',
                'Babi',
                 'Babi Ngepet',
                'Babi Hutan',
                'Sapi Mokondo',
                'Jelangkung',
                'Sundel Bolong',
                'Gendurowo',
                'Wewe Gombel',
                'Komodo',
                'Orang Utan',
                'Monyet',
                'Pocong'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
