# Modern iOS Bootcamp Website

![modern-ios-hero](/src/app/opengraph-image.png)

## 🚀 Modern iOS Bootcamp

SwiftUI ve Apple'ın en güncel teknolojileri ile iOS uygulama geliştirme dünyasına adım atın. 40 saatlik bu ücretsiz iOS Bootcamp ile, iOS uygulama geliştirmede en güncel ve güçlü araçları öğrenme fırsatını kaçırma!

## 📚 İçerik

- iOS dünyasındaki en güncel içeriklere, tamamen ücretsiz ve Türkçe kaynaklarla ulaş!
- 🎥 Canlı Yayın + Kayıtlarla daha iyi öğren! Tüm oturumlar canlı yayınlanacak ve sonrasında izlenebilir olacak. Böylece hem gerçek zamanlı öğrenme, hem de kendi hızında tekrar etme imkanı!
- ✨ Alanında uzman isimlerle tanış, sektöre yön veren yazılımcı ve eğitmenleri dinle. Kendini geliştirirken network kur, farklı bakış açılarıyla ilham al!
- 📜 Gelişimini somutlaştır, başarılarını sertifikalandır! Katılım gösterip bitirme şartlarını yerine getiren herkese özel başarım sertifikası verilecektir.

## 🎫 Katılım Bilgileri

- Oturumlar ücretsiz ve kayıt gerektirmeksizin takip edilebilir
- Sertifika ve katılımcılara özel avantajlar için kayıt gereklidir
- Katılım Kontenjanı:
  - 🎟️ 500+ Katılımcı
  - 🎫 20+ Uzman Konuk
  - 👨‍💼 5 Etkinlik Danışmanı

## 🔧 Google Sheets Entegrasyonu

Bu proje Google Sheets'ten dinamik veri çekme özelliğine sahiptir. Kullanmak için:

### 1. Environment Variables
`.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```bash
# Google Sheets API Configuration (Server-side only)
GOOGLE_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
NEXT_PUBLIC_GOOGLE_IOS_ID=your_google_sheets_id_here
```

### 2. Google Service Account Setup
1. [Google Cloud Console](https://console.cloud.google.com/)'a gidin
2. Yeni bir proje oluşturun veya mevcut projeyi seçin
3. Google Sheets API'yi etkinleştirin
4. IAM & Admin > Service Accounts > Create Service Account
5. Service account'a "Editor" rolü verin
6. JSON key dosyasını indirin
7. JSON'dan `client_email` ve `private_key` değerlerini alın

### 3. Google Sheets Formatı
Sheets'iniz aşağıdaki sütun yapısına sahip olmalıdır:

| Hafta | Tarih | Gün | Saat Aralığı | Ders Türü | Ünite | Konu Başlığı | Eğitmen/Konuşmacı | Şirket |
|-------|-------|-----|--------------|-----------|-------|---------------|-------------------|--------|
| 1 | 11 Ağustos | Pazartesi | 20.00 | Keynot | | iOS Geliştirme Yolculuğuna Başla | Serkan Alc | MultiGroup |

### 4. Sheets Paylaşımı
Google Sheets'inizi service account email'i ile paylaşın:
- Sheets'i açın
- Sağ üstte "Share" butonuna tıklayın
- Service account email'ini ekleyin ve "Editor" yetkisi verin

### 5. API Route Kullanımı
Sistem otomatik olarak `/api/sessions?sheetId=YOUR_SHEET_ID` endpoint'ini kullanır. Bu sayede:
- ✅ **Güvenlik** - Service account credentials client-side'da expose edilmez
- ✅ **Performance** - Server-side caching ve optimization
- ✅ **Error handling** - Merkezi hata yönetimi
- ✅ **Type safety** - TypeScript ile tam tip güvenliği
- ✅ **Caching** - 1 saat cache ile performans optimizasyonu

## 🎯 Özellikler

- **Modern UI/UX** - iOS tasarım diline uygun modern arayüz
- **Dark Theme** - Göz yormayan koyu tema
- **Glassmorphism** - Modern cam efekti tasarım öğeleri
- **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- **Dynamic Content** - Google Sheets'ten dinamik veri çekme
- **Type Safety** - Tam TypeScript desteği
- **Performance** - Optimized loading ve caching
- **Accessibility** - Erişilebilirlik standartlarına uygun

## 🛠️ Teknolojiler

- **Framework** - Next.js 14 (App Router)
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **Animations** - Framer Motion
- **Icons** - Lucide React
- **Deployment** - Vercel
- **Database** - Google Sheets API

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz:

- 🐛 [Hata bildirimi oluştur](https://github.com/Developer-MultiGroup/modern-ios-bootcamp/issues/new?template=bug_report.md)
- 💡 [Yeni özellik önerisi yap](https://github.com/Developer-MultiGroup/modern-ios-bootcamp/issues/new?template=feature_request.md)
- 📚 [Kaynak önerisi yap](https://github.com/Developer-MultiGroup/modern-ios-bootcamp/issues/new?template=resource_suggestion.md)
- 🔄 [Pull Request gönder](https://github.com/Developer-MultiGroup/modern-ios-bootcamp/compare)

## 🔗 Bağlantılar

- [Katılım için tıklayın](https://kommunity.com/devmultigroup/events/modern-ios-bootcamp)
- [Website](https://modern-ios-bootcamp.vercel.app)
- [MultiGroup](https://multigroup.com.tr)

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.