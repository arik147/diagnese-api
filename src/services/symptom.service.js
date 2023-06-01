// import { v4 as uuidv4 } from 'uuid';
// import { Galleries } from "../models/galleries.model.js";

import * as tf from '@tensorflow/tfjs';

async function predictSymptom(request){
    
    try {
      
      const inputData = request.body

      const model = await tf.loadLayersModel('https://storage.googleapis.com/diagnese-capstone/model.json');

      const result = model.predict(inputData);

      console.log(result);

      // Return the newly created gallery in the response
      return {
        status: "success",
        code: 201,
        message: 'Predicting Symptom successfully!',
        data: result
      }
    
  } catch (err) {
    console.error(err);
    return {
      status: "Failed", 
      code : 400,
      message : 'Error Predicting Symptom!'
    }
  }
}

function changeValue (inputData) {
  // Sample object with multiple attributes

  const mySymptom = 
  {
    gatal,
    ruam_kulit,
    benjolan_pada_kulit,
    bersin_bersin,
    menggigil,
    merinding,
    nyeri_sendi,
    sakit_perut,
    asam_lambung,
    sariawan,
    otot_mengecil,
    muntah,
    panas_saat_buang_air_kecil,
    keluar_darah_buang_air_kecil,
    kelelahan,
    kenaikan_berat_badan,
    anxiety,
    tangan_dan_kaki_dingin,
    perubahan_suasana_hati,
    penurunan_berat_badan,
    restlessness_gelisah,
    tidak_berenergi_lethargy,
    bercak_di_tenggorokan,
    kadar_gula_tidak_teratur,
    batuk,
    demam_tinggi,
    mata_cekung,
    sesak_napas,
    berkeringat,
    dehidrasi,
    gangguan_pencernaan,
    sakit_kepala,
    kulit_kekuningan,
    urine_berwarna_gelap,
    mual,
    nafsu_makan_hilang,
    nyeri_dibelakang_mata,
    sakit_punggung,
    sembelit,
    nyeri_perut,
    diare,
    demam_ringan,
    urine_menguning,
    menguningnya_mata,
    gagal_hati_akut,
    kelebihan_cairan,
    pembengkakan_perut,
    kelenjar_getah_bening_membengkak,
    tidak_enak_badan,
    penglihatan_kabur_dan_terdistorsi,
    dahak,
    iritasi_tenggorokan,
    mata_merah,
    tekanan_sinus,
    hidung_berair,
    hidung_tersumbat,
    nyeri_dada,
    anggota_tubuh_melemah,
    jantung_berdetak_cepat,
    nyeri_saat_buang_air_besar,
    nyeri_di_daerah_anus,
    tinja_berdarah,
    iritasi_di_anus,
    nyeri_leher,
    pusing,
    kram,
    memar,
    obesity,
    kaki_bengkak,
    pembuluh_darah_bengkak,
    wajah_dan_mata_bengkak,
    pembesaran_tiroid,
    kuku_rapuh,
    bengkak_ekstremitas,
    rasa_lapar_berlebihan,
    berhubungan_diluar_nikah,
    bibir_kering_dan_kesemutan,
    ucapan_tidak_jelas,
    nyeri_lutut,
    nyeri_sendi_panggul,
    otot_melemah,
    leher_kaku,
    pembengkakan_sendi,
    kaku_saat_ingin_bergerak,
    sensasi_berputar,
    kehilangan_keseimbangan,
    goyah,
    satu_sisi_tubuh_melemah,
    kehilangan_penciuman,
    ketidaknyamanan_kandung_kemih,
    bau_busuk_dari_urine,
    ingin_buang_air_kecil_terus,
    mengeluarkan_gas,
    gatal_internal,
    demam_tifoid_,
    depresi,
    mudah_tersinggung,
    nyeri_otot,
    perubahan_sensorium,
    bintik_bintik_merah_di_seluruh_tubuh,
    sakit_perut,
    menstruasi_yang_tidak_normal,
    perubahan_warna_kulit_di_area_tertentu,
    air_mata_berlebih,
    peningkatan_nafsu_makan,
    air_kencing_berlebih,
    penyakit_keturunan,
    dahak_mukoid,
    dahak_sputum,
    kurangnya_konsentrasi,
    gangguan_penglihatan,
    menerima_transfusi_darah,
    menerima_suntikan_yang_tidak_steril,
    koma,
    pendarahan_perut,
    perut_kembung,
    riwayat_konsumsi_alkohol,
    dahak_berdarah,
    varises,
    jantung_berdebar,
    nyeri_saat_berjalan,
    jerawat_bernanah,
    komedo,
    menggaruk,
    pengelupasan_kulit,
    kulit_bersisik,
    celah_kecil_pada_kuku,
    peradangan_kuku,
    kulit_melepuh,
    luka_merah_di_sekitar_hidung,
    bekas_luka_berair
  }

  // Changing the values of multiple attributes by inputData
  

  // Alternatively, you can use a loop to change values dynamically
  for (const key in mySymptom) {
    if (mySymptom.hasOwnProperty(key)) {
      mySymptom[key] = false; // Set all attributes to false
    }
  }

}

export default {
    predictSymptom
}