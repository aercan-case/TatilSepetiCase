# React Native Otel Listeleme Uygulaması

Bu proje, JSON verilerini kullanarak bir otel listeleme sayfası geliştirmek için oluşturulmuştur.

Tasarım TatilSepeti mobil uygulamasındaki filtresiz bir otel listeleme alanı olarak belirlenmiştir. React Native ve Axios kütüphanesi kullanılarak geliştirilmiştir.

### Klasör Yapısı

```bash
src/
├── components/
│   ├── HotelCard/
│   │   ├── HotelImage.tsx
│   │   ├── HotelInfo.tsx
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── BaseContainer.tsx
│   └── SkeletonLoader.tsx
├── context/
│   └── GlobalContext.tsx
└── utils/
    ├── axiosConfig.ts
    └── index.ts
```

### Ana Bileşenler ve Fonksiyonlar

- **GlobalContext:** Uygulamanın genelinde kullanılacak otel verilerini ve bu verileri güncelleyecek fonksiyonları içeren bir context.
- **useGlobal:** API'dan otel verilerini çekmek ve bu verileri GlobalContext içerisinde saklamak için kullanılan özel bir React hook.
- **GlobalProvider:** GlobalContext'i sağlayıcı bileşen. Bu sayede uygulamanın diğer bölümlerinde verilere erişim sağlanabilir.

### Özellikler

- **HotelCard**: Her otelin görsel ve bilgilerini içeren kartlar. Bu kartlar, HotelImage ve HotelInfo alt komponentlerini kullanarak oluşturulmuştur.
- **BaseContainer**: Uygulamanın temel konteyneri.
- **SkeletonLoader**: Veri yüklenirken gösterilen yükleme animasyonu.

### Veri Kaynağı

Uygulama, [bu linkte](https://gist.github.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277) verilen JSON verisini kullanmaktadır. Bu veri, Axios kullanılarak çekilip, uygulamada kullanılmaktadır.

## Demo Video

Projemizin çalışma şeklini gösteren videosunu izlemek için aşağıdaki bağlantıya tıklayın:

[Screen Demo Video](./screen.mp4)

## Kurulum ve Başlatma

Bu React Native uygulamasını kurmak ve çalıştırmak için Yarn ve CocoaPods kullanılacaktır:

1. Projeyi klonladıktan veya indirdikten sonra, projenin ana dizinine gidin.

2. Terminal üzerinden aşağıdaki komutu çalıştırarak gerekli bağımlılıkları yükleyin:

   ```bash
   yarn install
   ```

3. iOS için, CocoaPods bağımlılıklarını yüklemek gerekiyor. Bunun için aşağıdaki komutları çalıştırın:

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Uygulamayı iOS veya Android simülatöründe/aygıtında çalıştırmak için aşağıdaki komutları kullanın:
   iOS için:
   ```bash
   yarn ios
   ```
   Android için:
   ```bash
   yarn android
   ```

Bu adımlar, uygulamanın local geliştirme ortamınızda başarıyla çalıştırılmasını sağlar.
