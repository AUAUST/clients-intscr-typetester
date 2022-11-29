<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APADEMIDE'S TYPETESTER</title>
    <style>
      <?php foreach ($fonts as $font): ?>
      @font-face {
        font-family: <?= $font['id'] ?>;
        src: url(<?= $font['url'] ?>);
      }
      <?php endforeach ?>
      :root {
        font-size: 15px;
      }
      div, p {
        margin: 0;
        padding: 0;
      }
      header {
        border-bottom: 1px solid black;
        position: sticky;
        top: 7px;
      }
      @media (orientation: portrait) {
        header {
          height: 20vh;
          overflow-y: scroll;
        }
      }
      .button {
        display: inline-block;
        background-color: lightgray;
        border-radius: 20px;
        padding: 1px 20px;
        margin-bottom: 7px;
        cursor: pointer;
      }
      .button.disabled {
        opacity: .5;
        color: white;
        pointer-events: none;
      }
      .button.active {
        background-color: lime;
        pointer-events: inherit;
        opacity: inherit;
        color: inherit;
      }
      .controls-container {
        font-family: 'Times New Roman', Times, serif;
      }
      .text-container {
        padding: 7px 0;
        border-bottom: 1px black solid;
      }
      .overflow-scroll {
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        padding-bottom: .1em;
      }
      .overflow-scroll * {
        display: inline-block;
      }
    </style>
    <script>
      document.addEventListener('DOMContentLoaded', () => {

        const nodesBtns = document.querySelectorAll('.button');
        const fontsData = JSON.parse(document.getElementById('data-fonts').textContent);

        // Path after domain
        var urlPath = window.location.pathname;
        // Path after first slash
        var urlData = urlPath.substring(urlPath.indexOf('/') + 1);
        // Font in url (before slash if any)
        var urlFont = urlData.indexOf('/') >= 0 ?
          urlData.substring(0, urlData.indexOf('/')) :
          urlData;
        // Stylesets in url (after slash)
        var urlStylesets = urlData.indexOf('/') === -1 ? '' : urlData.substring(urlData.indexOf('/') + 1);
        // Split string into array
        var stylesets = urlStylesets.length >= 1 ? urlStylesets.split('/') : [];
        // If the font exists, use it
        if ( fontsData[urlFont] ) {
          var font = urlFont;
          document.body.style.fontFamily = font;
        }
        // Otherwise default to first one
        else {
          var font = Object.keys(fontsData)[0];
        }
        Array.from(nodesBtns).forEach(e => {
          var type = e.dataset.type;
          e.addEventListener('click', () => {
            switch (type) {
              case 'styleset':
                var styleset = e.dataset.styleset;
                var index = stylesets.indexOf(styleset);
                if (index > -1) { stylesets.splice(index, 1); }
                else { stylesets.push(styleset); };
                
                e.classList.toggle('active');
                updateUrl();
                updateBodyStyle();
                break;
              case 'font':
                font = e.dataset.id
                
                updateUrl();
                updateBodyStyle();
                updateMenu({
                  font: font,
                  stylesets: stylesets,
                  data: fontsData
                });
                break;
              }

          })
        });

        // Trigger updateMenu function once to init
        updateUrl();
        updateBodyStyle();
        updateMenu({
          font: font,
          stylesets: stylesets,
          data: fontsData
        });
        function updateUrl() {
          var base = window.location.hostname === 'localhost' ? '/' : '/typetester/';
          window.history.pushState({}, "", base);
          window.history.pushState({},"", base+font+'/'+stylesets.join('/'));
        }
        function updateBodyStyle() {
          var stringifiedStylesets = stylesets.length === 0 ? 'unset' : '"' + stylesets.join('", "') + '"';
          document.body.style.fontFeatureSettings = stringifiedStylesets;
          document.body.style.fontFamily = font;
        }

        function updateMenu({font, stylesets, data}) {
          var availableStylesets = fontsData[font].stylesets;

          Array.from(nodesBtns).forEach(e => {
            var type = e.dataset.type;
            e.classList.add('active')
            // console.log('ffo')
            
            switch (type) {
              case 'styleset':
                var styleset = e.dataset.styleset;
                availableStylesets.includes(styleset) ? e.classList.remove('disabled') : e.classList.add('disabled');
                stylesets.includes(styleset) ? e.classList.add('active') : e.classList.remove('active')
                break;
              case 'font': 
                font === e.dataset.id ? e.classList.add('active') : e.classList.remove('active');
                break;
            }
          });
        }

      
      });
      
    </script>
  </head>
  <body style="font-family:<?= $fonts[array_key_first($fonts)]['id'] ?>;">
    <script type="application/json" id="data-fonts"><?php echo json_encode($fonts) ?></script>