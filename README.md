# hadosolution.github.io

Developer website của HaDoSolution, host bằng GitHub Pages tại https://hadosolution.github.io/

Site tĩnh thuần HTML/CSS/JS, không cần build.

| File | Nội dung |
| --- | --- |
| `index.html` | Trang chủ: giới thiệu, danh sách app, liên hệ |
| `privacy-policy.html` | Privacy Policy (dùng cho Google Play / App Store) |
| `terms.html` | Terms of Use |
| `404.html` | Trang lỗi 404 |
| `app-ads.txt` | Danh sách ad sellers (AdMob, Start.io, ...) |
| `assets/` | CSS, JS, favicon, icon app |

## Thêm / sửa app

Trong `index.html`, copy một khối `<article class="app-card">` trong phần `#apps`, rồi thay icon (`assets/img/apps/`),
tên, mô tả, tags và link Google Play / App Store.

## Chạy thử local

```sh
python3 -m http.server 8000
# mở http://localhost:8000
```
