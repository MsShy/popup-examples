1.Place appPopUp.css in /your/css/folder/.

Add this just before your closing head tag:

<link rel="styesheet" href="/your/css/folder/appPopUp.css">
Then, place jquery.appPopUp.js in /your/js/folder/.

Add this just before your closing body tag, after you've included jQuery:

<script src="/your/js/folder/jquery.appPopUp.js.js"></script>

2.Set up in your html:
e.g 1:
<button class="popUp-1">Open Pop-up type 1</button>
<div class="modal-window__content"> your content</div>

e.g 2:
  <button class="popUp-2">Open Pop-up type 2</button>
  <div class="modal-window__content"> Pop-up type 2 doesn't close Esc button, without background but has animation<br>
     <input type="search" placeholder="Search">
     <button type="submit"> Submit</button>
  </div>

Content of your pop-up should has class="modal-window__content" .

3.Options you can change:
(this options by default)
      background: "true",
      title: "Header",
      animation: "middle",
      escButton: "true".
background - has "true" or "false",
title - title of your pop-up,
animation - "middle"(by default),"right" or "top",
escButton - set "true"(by default) or "false" (to close pop-up).

if you enter wrong options, the settings will be by default.

4. Call the plugin:
  $(document).ready(function () {
        $('.popUp-1').popUpAppPlugin();  // by default options
        $('.popUp-2').popUpAppPlugin({
            background: "false",
            title: "Header 2",
            animation: "right",
            escButton: 'false'
        });
    });