# fix for error
https://github.com/vercel/next.js/issues/70366


Route (app)                              Size     First Load JS
┌ ○ /                                    4.23 kB         119 kB
├ ○ /_not-found                          979 B           106 kB
├ ○ /(.)booking                          1.51 kB         108 kB
├ ○ /(.)newsletter                       1.51 kB         108 kB
├ ○ /booking                             145 B           106 kB
└ ○ /newsletter                          145 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-e92d6e4d8289d973.js  52.9 kB
  ├ chunks/517-dc9fa0e1b1d49f1d.js       50.5 kB
  └ other shared chunks (total)          1.98 kB

○  (Static)  prerendered as static content

Route (app)                              Size     First Load JS
┌ ƒ /                                    2.18 kB         119 kB
├ ƒ /_not-found                          979 B           106 kB
├ ○ /(.)booking                          1.51 kB         108 kB
├ ○ /(.)newsletter                       1.51 kB         108 kB
├ ƒ /booking                             145 B           106 kB
└ ƒ /newsletter                          145 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-e92d6e4d8289d973.js  52.9 kB
  ├ chunks/517-dc9fa0e1b1d49f1d.js       50.5 kB
  └ other shared chunks (total)          1.98 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand