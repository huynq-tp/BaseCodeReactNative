# BaseCodeReactNative

BaseCode xây dựng cho mọi app build bằng react native hệ điều hành linux , môi trường chạy máy android, công cụ code vscode .

## Basic

### Android

`yarn react-native run-android`

`mkdir android/app/src/main/assets`

`mkdir react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

`yarn react-native start` =>> bắt đầu code ( hot reloading )

## Rule

Cơ bản sẽ có một số quy luật khi code một project react native như sau :

* Để  tránh bị tình trạng sử các gói quản lý package khác nhau thì nên dùng **yarn** làm công cụ quản package chính
* Nên dùng gói eslint để kiêm tra code tránh import thừa và code trở nên đẹp hơn

## Command

Một số câu lệnh chạy chủ yếu đã thế vào *package.json* cho dễ dùng :

* Để build file tĩnh cho máy chạy android : `npm run android`
* Để build file động cho máy ( cả 2 nền tảng android và ios ) : `npm run start`
* Để  link file assets : `yarn react-native link`

## Công cụ cho code đẹp

### Eslint

Install ESlint extensions for VS Code

Install EditorConfig for VS Code config extenions

For more information, see <https://medium.com/fantageek/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6>

Setup phím tắt cho eslint ở vscode

  >File -> Preferences-> Keymaps -> search "eslint Fix auto" -> Ctrl + R Ctrl + E

Chạy câu lệnh eslint để kiểm tra lỗi eslint `npm run eslint`

## Module Resolve ( Alias Path Cho đến 1 File )

Đã set up và quy định tham khảo trong file **babel.config.js**

Ví dụ: khi import 1 file "../../../component/index.js" =>> import "componet/index.js"

## Font chữ cho project được lưu trong thư mục assets/fonts

Cho File Font vào assets/fonts sau đó chạy câu lệnh sau

`yarn react-native link`

## Công cụ Test
