import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle2, AlertCircle, Loader2, User, CreditCard, GraduationCap, Phone, AtSign, Briefcase, Link as LinkIcon, FileText, MessageCircle, PlaneTakeoff, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    asal_komsat: '',
    whatsapp: '',
    instagram: '',
    division: '',
    motivation: '',
    portfolio_url: '',
  });
  const [file, setFile] = useState<File | null>(null);
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Batas waktu pendaftaran: 6 Agustus 2026 jam 23:59:59 WIB (GMT+7)
    const deadline = new Date('2026-08-06T23:59:59+07:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference <= 0) {
        setIsClosed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsClosed(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 2 * 1024 * 1024) {
        setErrorMessage('Ukuran file maksimal 2MB');
        setFile(null);
        return;
      }
      if (selectedFile.type !== 'application/pdf') {
        setErrorMessage('Format file harus PDF');
        setFile(null);
        return;
      }
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Form Validations
      if (!/^[0-9]+$/.test(formData.nim)) {
        throw new Error('NIM / NPM tidak valid. Hanya boleh berisi angka.');
      }
      
      if (!/^[0-9]{9,15}$/.test(formData.whatsapp)) {
        throw new Error('No. WhatsApp tidak valid. Harus berupa angka (9-15 digit).');
      }
      
      if (formData.portfolio_url) {
        try {
          new URL(formData.portfolio_url);
        } catch (_) {
          throw new Error('URL Portofolio tidak valid. Pastikan memakai format yang benar (misal: https://...)');
        }
      }

      if (!file) {
        throw new Error('Mohon upload file CV/Portofolio Anda.');
      }

      // 1. Upload File to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${formData.name.replace(/\s+/g, '_')}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('applicant_files')
        .upload(filePath, file);

      if (uploadError) {
        throw new Error(`Gagal upload file: ${uploadError.message}`);
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('applicant_files')
        .getPublicUrl(filePath);

      // 2. Insert Data to Supabase Database
      const { error: insertError } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name,
            nim: formData.nim,
            asal_komsat: formData.asal_komsat,
            whatsapp: formData.whatsapp,
            instagram: formData.instagram,
            division: formData.division,
            motivation: formData.motivation,
            portfolio_url: formData.portfolio_url,
            cv_url: publicUrl,
          }
        ]);

      if (insertError) {
        throw new Error(`Gagal menyimpan data: ${insertError.message}`);
      }

      setStatus('success');
      setFormData({ 
        name: '', nim: '', asal_komsat: '', whatsapp: '', instagram: '', 
        division: '', motivation: '', portfolio_url: '' 
      });
      setFile(null);
      
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Terjadi kesalahan yang tidak terduga. Pastikan URL dan Key Supabase sudah benar.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center border border-slate-100 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-yellow-200 to-gold"></div>
        
        {/* Animated Background Confetti Dots */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-gold rounded-full animate-ping opacity-30" style={{animationDuration: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-sky rounded-full animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-40" style={{animationDuration: '1.5s'}}></div>

        <div className="relative z-10 transition-all duration-500 ease-out transform translate-y-0 opacity-100">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border-4 border-emerald-100 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <PlaneTakeoff size={48} className="text-emerald-500 transform -rotate-12 animate-bounce" />
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-display font-black text-navy mb-6 tracking-tight">Selamat! Pendaftaran <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">Berhasil</span></h3>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Yeay! Data dan berkas Anda telah aman mendarat di database kami. 
            Langkah selanjutnya, wajib bergabung ke grup WhatsApp calon staff untuk info seleksi lebih lanjut.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://chat.whatsapp.com/EqYUmYFKlshI9BC0Usa37C"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-emerald-400 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
            >
              <MessageCircle size={24} />
              Gabung Grup WhatsApp
            </a>
            
            <button 
              onClick={() => setStatus('idle')}
              className="w-full sm:w-auto text-slate-500 hover:text-navy transition-colors px-6 py-4 rounded-2xl font-medium border border-transparent hover:border-slate-200"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-12 border border-slate-100 shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-3xl">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold via-yellow-200 to-gold"></div>
      
      {/* Subtle grid pattern background for light theme */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #0B2447 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative z-10 mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 text-gold mb-6 border border-gold/20 shadow-inner hover:scale-110 transition-transform duration-500 cursor-default">
          <FileText size={32} />
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-black text-navy mb-3">Isi Data Keberangkatan</h3>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Pastikan semua data terisi dengan benar. Siapkan tiket (CV) dan paspor (Portofolio) terbaik Anda.</p>
        
        {timeLeft && !isClosed && (
          <div className="flex justify-center gap-2 md:gap-4 mt-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[90px] shadow-sm">
              <div className="text-2xl md:text-4xl font-black text-navy font-display">{timeLeft.days}</div>
              <div className="text-xs md:text-sm font-bold text-sky uppercase tracking-wider mt-1">Hari</div>
            </div>
            <div className="text-2xl md:text-4xl font-black text-slate-300 self-center">:</div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[90px] shadow-sm">
              <div className="text-2xl md:text-4xl font-black text-navy font-display">{timeLeft.hours}</div>
              <div className="text-xs md:text-sm font-bold text-sky uppercase tracking-wider mt-1">Jam</div>
            </div>
            <div className="text-2xl md:text-4xl font-black text-slate-300 self-center">:</div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[90px] shadow-sm">
              <div className="text-2xl md:text-4xl font-black text-navy font-display">{timeLeft.minutes}</div>
              <div className="text-xs md:text-sm font-bold text-sky uppercase tracking-wider mt-1">Menit</div>
            </div>
            <div className="text-2xl md:text-4xl font-black text-slate-300 self-center">:</div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3 md:p-4 text-center min-w-[70px] md:min-w-[90px] shadow-sm">
              <div className="text-2xl md:text-4xl font-black text-navy font-display">{timeLeft.seconds}</div>
              <div className="text-xs md:text-sm font-bold text-sky uppercase tracking-wider mt-1">Detik</div>
            </div>
          </div>
        )}
      </div>

      {isClosed ? (
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 text-center shadow-inner relative z-10 mt-8">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Clock size={40} className="text-red-500 animate-pulse" />
          </div>
          <h4 className="text-3xl font-display font-black text-navy mb-4">Pendaftaran Telah Ditutup</h4>
          <p className="text-slate-600 text-lg max-w-lg mx-auto">
            Mohon maaf, batas waktu pendaftaran Kru KJSM telah berakhir. Nantikan kesempatan berikutnya!
          </p>
        </div>
      ) : (
        <>
          {status === 'error' && (
            <div className="mb-8 bg-red-50 border border-red-200 p-4 rounded-2xl flex items-start gap-3 relative z-10 animate-pulse">
              <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={24} />
              <div>
                <h5 className="text-red-700 font-bold mb-1">Gagal Mengirim Data</h5>
                <p className="text-red-600/80 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        
        {/* SECTION 1: DATA DIRI */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group/section">
          <h4 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="bg-gold/20 text-gold p-2 rounded-lg group-hover/section:scale-110 transition-transform duration-300"><User size={20} /></span>
            Identitas Diri
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 group-hover:text-gold transition-colors">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors"><User size={18} /></div>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Nama lengkap sesuai KTP/KTM" className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:border-gold/50" />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="nim" className="block text-sm font-medium text-slate-700 group-hover:text-gold transition-colors">NIM / NPM</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors"><CreditCard size={18} /></div>
                <input type="text" id="nim" name="nim" required pattern="[0-9]+" value={formData.nim} onChange={handleChange} placeholder="Contoh: 0901234567" className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:border-gold/50" />
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label htmlFor="asal_komsat" className="block text-sm font-medium text-slate-700 group-hover:text-gold transition-colors">Asal Komsat (Kampus)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors"><GraduationCap size={18} /></div>
                <input type="text" id="asal_komsat" name="asal_komsat" required value={formData.asal_komsat} onChange={handleChange} placeholder="Contoh: UNSRI, UIN, dll." className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:border-gold/50" />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 group-hover:text-gold transition-colors">No. WhatsApp</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors"><Phone size={18} /></div>
                <input type="tel" id="whatsapp" name="whatsapp" required pattern="[0-9]{9,15}" title="Masukkan nomor handphone yang valid (hanya angka)" value={formData.whatsapp} onChange={handleChange} placeholder="Contoh: 08123456789" className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:border-gold/50" />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2 group">
              <label htmlFor="instagram" className="block text-sm font-medium text-slate-700 group-hover:text-gold transition-colors">Username Instagram</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors"><AtSign size={18} /></div>
                <input type="text" id="instagram" name="instagram" required value={formData.instagram} onChange={handleChange} placeholder="Contoh: @genbisumsel" className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:border-gold/50" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ASAL DIVISI & MOTIVASI */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group/section">
          <h4 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="bg-sky/10 text-sky p-2 rounded-lg group-hover/section:scale-110 transition-transform duration-300"><Briefcase size={20} /></span>
            Asal Divisi & Motivasi
          </h4>

          <div className="space-y-6">
            <div className="space-y-2 group">
              <label htmlFor="division" className="block text-sm font-medium text-slate-700 group-hover:text-sky transition-colors">Pilihan Divisi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-sky transition-colors"><Briefcase size={18} /></div>
                <select id="division" name="division" required value={formData.division} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-10 py-3.5 text-slate-800 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all appearance-none shadow-sm hover:border-sky/50" style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%2364748b\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                  <option value="" disabled>-- Pilih Asal Divisi --</option>
                  <option value="Pengabdian Masyarakat">Pengabdian Masyarakat</option>
                  <option value="Pendidikan">Pendidikan</option>
                  <option value="Kewirausahaan">Kewirausahaan</option>
                  <option value="Lingkungan Hidup">Lingkungan Hidup</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="motivation" className="block text-sm font-medium text-slate-700 group-hover:text-sky transition-colors">Motivasi Masuk KJSM</label>
              <textarea id="motivation" name="motivation" required rows={4} value={formData.motivation} onChange={handleChange} placeholder="Ceritakan motivasi utama Anda untuk bergabung ke dalam KJSM..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all resize-none shadow-sm hover:border-sky/50"></textarea>
            </div>
          </div>
        </div>

        {/* SECTION 3: BERKAS PENDUKUNG */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group/section">
          <h4 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg group-hover/section:scale-110 transition-transform duration-300"><FileText size={20} /></span>
            Berkas Pendukung
          </h4>

          <div className="space-y-6">
            <div className="space-y-2 group">
              <label htmlFor="portfolio_url" className="block text-sm font-medium text-slate-700 group-hover:text-emerald-500 transition-colors">URL Portofolio <span className="text-slate-400 font-normal">(Opsional)</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors"><LinkIcon size={18} /></div>
                <input type="url" id="portfolio_url" name="portfolio_url" value={formData.portfolio_url} onChange={handleChange} placeholder="https://link-portofolio.com" className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm hover:border-emerald-500/50" />
              </div>
              <p className="text-xs text-slate-500 mt-1">Mengumpulkan portofolio akan memberikan <span className="font-bold text-emerald-600">nilai tambah</span>.</p>
            </div>

            <div className="space-y-3 pt-2">
              <label className="block text-sm font-medium text-slate-700">Upload CV <span className="text-red-500">*</span></label>
              <div className="relative group/upload">
                <input type="file" id="file" accept=".pdf" required onChange={handleFileChange} className="hidden" />
                <label htmlFor="file" className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${file ? 'border-emerald-400 bg-emerald-50' : 'border-slate-300 bg-white group-hover/upload:border-gold group-hover/upload:bg-gold/5'}`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                    {file ? (
                      <div className="scale-100 transition-transform">
                        <div className="bg-emerald-100 p-3 rounded-full mb-3 mx-auto flex w-fit">
                          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <p className="text-sm font-bold text-slate-800 mb-1">{file.name}</p>
                        <p className="text-xs text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-slate-50 p-3 rounded-full mb-3 group-hover/upload:bg-gold/10 group-hover/upload:scale-110 transition-all duration-300">
                          <Upload className="w-8 h-8 text-slate-400 group-hover/upload:text-gold transition-colors" />
                        </div>
                        <p className="text-sm text-slate-600 mb-1"><span className="font-bold text-gold group-hover/upload:text-yellow-500 transition-colors">Klik untuk upload</span> atau drag and drop</p>
                        <p className="text-xs text-slate-400">Format PDF (Maks. 2MB)</p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" disabled={status === 'submitting'} className="w-full bg-gradient-to-r from-gold to-yellow-400 text-navy font-black text-xl py-5 rounded-2xl hover:brightness-110 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] shadow-xl shadow-gold/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden relative group/btn">
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin relative z-10" size={28} />
                <span className="relative z-10">Mempersiapkan Keberangkatan...</span>
              </>
            ) : (
              <span className="relative z-10 flex items-center gap-2">Submit Pendaftaran Sekarang</span>
            )}
          </button>
          
        </div>
      </form>
        </>
      )}
    </div>
  );
}
