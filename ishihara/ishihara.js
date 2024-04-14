'use strict';

var PIXEL_RATIO = window.devicePixelRatio || 1;

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var max_width  = window.innerWidth  * PIXEL_RATIO;
  var max_height = window.innerHeight * PIXEL_RATIO;

  ctx.canvas.style.width  = window.innerWidth  + 'px'
  ctx.canvas.style.height = window.innerHeight + 'px'

  ctx.canvas.width  = max_width;
  ctx.canvas.height = max_height;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var img_canvas = document.createElement('canvas');
  var img_ctx = img_canvas.getContext('2d');

  img_ctx.canvas.width  = max_width;
  img_ctx.canvas.height = max_height;

  img_ctx.fillStyle = "white";
  img_ctx.fillRect(0, 0, canvas.width, canvas.height);

  var svg_elements = [];
  var worker;

  var ishihara_input = {
    load_image: function() {
      var image_upload = document.getElementById('image_upload');
      image_upload.click();
    },
    circular: true,
    resize: true,
    edge_detection: true,
    invert_colors: false,
    background_color: 'rgba(0,0,0,0)',
    n_colors_on: 3,
    n_colors_off: 6,
    color_on0: '#D1D6AF',
    color_on1: '#D1D6AF',
    color_on2: '#D1D6AF',
    color_on3: '#D1D6AF',
    color_on4: '#D1D6AF',
    color_on5: '#D1D6AF',
    color_on6: '#D1D6AF',
    color_on7: '#D1D6AF',
    color_on8: '#D1D6AF',
    color_on9: '#D1D6AF',
    color_on10: '#D1D6AF',
    color_on11: '#D1D6AF',
    color_on12: '#D1D6AF',
    color_on13: '#D1D6AF',
    color_on14: '#D1D6AF',
    color_on15: '#D1D6AF',
    color_on16: '#D1D6AF',
    color_on17: '#D1D6AF',
    color_on18: '#D1D6AF',
    color_on19: '#D1D6AF',
    color_on20: '#D1D6AF',
    color_on21: '#D1D6AF',
    color_on22: '#D1D6AF',
    color_on23: '#D1D6AF',
    color_on24: '#D1D6AF',
    color_on25: '#D1D6AF',
    color_on26: '#D1D6AF',
    color_on27: '#D1D6AF',
    color_on28: '#D1D6AF',
    color_on29: '#D1D6AF',
    color_on30: '#D1D6AF',
    color_on31: '#D1D6AF',
    color_on32: '#D1D6AF',
    color_on33: '#D1D6AF',
    color_on34: '#D1D6AF',
    color_on35: '#D1D6AF',
    color_on36: '#D1D6AF',
    color_on37: '#D1D6AF',
    color_on38: '#D1D6AF',
    color_on39: '#D1D6AF',
    color_on40: '#D1D6AF',
    color_on41: '#D1D6AF',
    color_on42: '#D1D6AF',
    color_on43: '#D1D6AF',
    color_on44: '#D1D6AF',
    color_on45: '#D1D6AF',
    color_on46: '#D1D6AF',
    color_on47: '#D1D6AF',
    color_on48: '#D1D6AF',
    color_on49: '#D1D6AF',
    color_on50: '#D1D6AF',
    color_on51: '#D1D6AF',
    color_on52: '#D1D6AF',
    color_on53: '#D1D6AF',
    color_on54: '#D1D6AF',
    color_on55: '#D1D6AF',
    color_on56: '#D1D6AF',
    color_on57: '#D1D6AF',
    color_on58: '#D1D6AF',
    color_on59: '#D1D6AF',
    color_on60: '#D1D6AF',
    color_on61: '#D1D6AF',
    color_on62: '#D1D6AF',
    color_on63: '#D1D6AF',
    color_on64: '#D1D6AF',
    color_on65: '#D1D6AF',
    color_on66: '#D1D6AF',
    color_on67: '#D1D6AF',
    color_on68: '#D1D6AF',
    color_on69: '#D1D6AF',
    color_on70: '#D1D6AF',
    color_on71: '#D1D6AF',
    color_on72: '#D1D6AF',
    color_on73: '#D1D6AF',
    color_on74: '#D1D6AF',
    color_on75: '#D1D6AF',
    color_on76: '#D1D6AF',
    color_on77: '#D1D6AF',
    color_on78: '#D1D6AF',
    color_on79: '#D1D6AF',
    color_on80: '#D1D6AF',
    color_on81: '#D1D6AF',
    color_on82: '#D1D6AF',
    color_on83: '#D1D6AF',
    color_on84: '#D1D6AF',
    color_on85: '#D1D6AF',
    color_on86: '#D1D6AF',
    color_on87: '#D1D6AF',
    color_on88: '#D1D6AF',
    color_on89: '#D1D6AF',
    color_on90: '#D1D6AF',
    color_on91: '#D1D6AF',
    color_on92: '#D1D6AF',
    color_on93: '#D1D6AF',
    color_on94: '#D1D6AF',
    color_on95: '#D1D6AF',
    color_on96: '#D1D6AF',
    color_on97: '#D1D6AF',
    color_on98: '#D1D6AF',
    color_on99: '#D1D6AF',
    color_off0: '#D1D6AF',
    color_off1: '#D1D6AF',
    color_off2: '#D1D6AF',
    color_off3: '#D1D6AF',
    color_off4: '#D1D6AF',
    color_off5: '#D1D6AF',
    color_off6: '#D1D6AF',
    color_off7: '#D1D6AF',
    color_off8: '#D1D6AF',
    color_off9: '#D1D6AF',
    color_off10: '#D1D6AF',
    color_off11: '#D1D6AF',
    color_off12: '#D1D6AF',
    color_off13: '#D1D6AF',
    color_off14: '#D1D6AF',
    color_off15: '#D1D6AF',
    color_off16: '#D1D6AF',
    color_off17: '#D1D6AF',
    color_off18: '#D1D6AF',
    color_off19: '#D1D6AF',
    color_off20: '#D1D6AF',
    color_off21: '#D1D6AF',
    color_off22: '#D1D6AF',
    color_off23: '#D1D6AF',
    color_off24: '#D1D6AF',
    color_off25: '#D1D6AF',
    color_off26: '#D1D6AF',
    color_off27: '#D1D6AF',
    color_off28: '#D1D6AF',
    color_off29: '#D1D6AF',
    color_off30: '#D1D6AF',
    color_off31: '#D1D6AF',
    color_off32: '#D1D6AF',
    color_off33: '#D1D6AF',
    color_off34: '#D1D6AF',
    color_off35: '#D1D6AF',
    color_off36: '#D1D6AF',
    color_off37: '#D1D6AF',
    color_off38: '#D1D6AF',
    color_off39: '#D1D6AF',
    color_off40: '#D1D6AF',
    color_off41: '#D1D6AF',
    color_off42: '#D1D6AF',
    color_off43: '#D1D6AF',
    color_off44: '#D1D6AF',
    color_off45: '#D1D6AF',
    color_off46: '#D1D6AF',
    color_off47: '#D1D6AF',
    color_off48: '#D1D6AF',
    color_off49: '#D1D6AF',
    color_off50: '#D1D6AF',
    color_off51: '#D1D6AF',
    color_off52: '#D1D6AF',
    color_off53: '#D1D6AF',
    color_off54: '#D1D6AF',
    color_off55: '#D1D6AF',
    color_off56: '#D1D6AF',
    color_off57: '#D1D6AF',
    color_off58: '#D1D6AF',
    color_off59: '#D1D6AF',
    color_off60: '#D1D6AF',
    color_off61: '#D1D6AF',
    color_off62: '#D1D6AF',
    color_off63: '#D1D6AF',
    color_off64: '#D1D6AF',
    color_off65: '#D1D6AF',
    color_off66: '#D1D6AF',
    color_off67: '#D1D6AF',
    color_off68: '#D1D6AF',
    color_off69: '#D1D6AF',
    color_off70: '#D1D6AF',
    color_off71: '#D1D6AF',
    color_off72: '#D1D6AF',
    color_off73: '#D1D6AF',
    color_off74: '#D1D6AF',
    color_off75: '#D1D6AF',
    color_off76: '#D1D6AF',
    color_off77: '#D1D6AF',
    color_off78: '#D1D6AF',
    color_off79: '#D1D6AF',
    color_off80: '#D1D6AF',
    color_off81: '#D1D6AF',
    color_off82: '#D1D6AF',
    color_off83: '#D1D6AF',
    color_off84: '#D1D6AF',
    color_off85: '#D1D6AF',
    color_off86: '#D1D6AF',
    color_off87: '#D1D6AF',
    color_off88: '#D1D6AF',
    color_off89: '#D1D6AF',
    color_off90: '#D1D6AF',
    color_off91: '#D1D6AF',
    color_off92: '#D1D6AF',
    color_off93: '#D1D6AF',
    color_off94: '#D1D6AF',
    color_off95: '#D1D6AF',
    color_off96: '#D1D6AF',
    color_off97: '#D1D6AF',
    color_off98: '#D1D6AF',
    color_off99: '#D1D6AF',
    min_radius: (canvas.width + canvas.height) / 600,
    max_radius: (canvas.width + canvas.height) / 150,
    draw_ratio: 1,
    stop_after: 10000,
    shape_factory: 'Circle',
    sides: 4,
    pointiness: 0.75,
    generate: function() {
      hide_gui_element(gui, 'generate', true);
      hide_gui_element(gui, 'clear', true);
      hide_gui_element(gui, 'stop', false);

      generating = true;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var img_data = img_ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = ishihara_input.background_color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      var shape_factory = {
        'Circle': CircleFactory,
        'Regular polygon': RegularPolygonFactory,
        'Cross': CrossFactory,
        'Star': StarFactory
      }[ishihara_input.shape_factory];
      shape_factory = new shape_factory(JSON.parse(JSON.stringify(ishihara_input)));

      svg_elements = [];

      var options = {};
      for (var k in ishihara_input) {
        if (typeof ishihara_input[k] !== "function") {
          options[k] = ishihara_input[k];
        }
      }

      options.img_data = img_data;
      options.width = canvas.width;
      options.height = canvas.height;

      worker = new Worker('worker.js');
      worker.postMessage(options);

      worker.addEventListener('message', function(e) {
        if (e.data.action === 'shape') {
          ctx.fillStyle = e.data.style;
          shape_factory.draw(ctx, e.data.shape);
          svg_elements.push(shape_factory.svg(e.data.shape, e.data.style));
        } else if (e.data.action === 'stop') {
          ishihara_input.stop();
        }
      })
    },
    clear: function() {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      img_ctx.fillStyle = "white";
      img_ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    stop: function() {
      if (worker) {
        worker.terminate();
      }
      generating = false;

      hide_gui_element(gui, 'generate', false);
      hide_gui_element(gui, 'clear', false);
      hide_gui_element(gui, 'stop', true);
    },
    download_png: function() {
      download('ishihara.png', canvas.toDataURL('image/png'))
    },
    download_svg: function() {
      var data = [
        '<?xml version="1.0" encoding="UTF-8" ?>',
        '<svg width="' + canvas.width + '" height="' + canvas.height + '" ' +
        'viewBox="0 0 ' + canvas.width + ' ' + canvas.height + '" ' +
        'xmlns="http://www.w3.org/2000/svg" version="1.1">'
      ].concat(svg_elements, '</svg>').join('\n');
      download('ishihara.svg', 'data:image/svg+xml,' + encodeURIComponent(data));
    }
  };

  function set_colors_folders() {
    for (var i = 0; i < 100; i++) { 
      hide_gui_element(colors_on_folder, 'color_on' + i, i >= ishihara_input.n_colors_on);
      hide_gui_element(colors_off_folder, 'color_off' + i, i >= ishihara_input.n_colors_off);
    }
  }

  var gui = new dat.GUI({
    load: {
      remembered: {
        "General 1": [{
          n_colors_on: 3,
          n_colors_off: 6,
          color_on0: '#F9BB82',
          color_on1: '#EBA170',
          color_on2: '#FCCD84',
          color_off0: '#9CA594',
          color_off1: '#ACB4A5',
          color_off2: '#BBB964',
          color_off3: '#D7DAAA',
          color_off4: '#E5D57D',
          color_off5: '#D1D6AF'
        }],
        'General 2': [{
          n_colors_on: 5,
          n_colors_off: 4,
          color_on0: '#89B270',
          color_on1: '#7AA45E',
          color_on2: '#B6C674',
          color_on3: '#7AA45E',
          color_on4: '#B6C674',
          color_off0: '#F49427',
          color_off1: '#C9785D',
          color_off2: '#E88C6A',
          color_off3: '#F1B081'
        }],
        'General 3': [{
          n_colors_on: 6,
          n_colors_off: 5,
          color_on0: '#89B270',
          color_on1: '#7AA45E',
          color_on2: '#B6C674',
          color_on3: '#7AA45E',
          color_on4: '#B6C674',
          color_on5: '#FECB05',
          color_off0: '#F49427',
          color_off1: '#C9785D',
          color_off2: '#E88C6A',
          color_off3: '#F1B081',
          color_off4: '#FFCE00'
        }],
        'Protanopia': [{
          n_colors_on: 2,
          n_colors_off: 3,
          color_on0: '#E96B6C',
          color_on1: '#F7989C',
          color_off0: '#635A4A',
          color_off1: '#817865',
          color_off2: '#9C9C84'
        }],
        'Protanomaly': [{
          n_colors_on: 2,
          n_colors_off: 3,
          color_on0: '#AD5277',
          color_on1: '#F7989C',
          color_off0: '#635A4A',
          color_off1: '#817865',
          color_off2: '#9C9C84'
        }],
        'Viewable by all': [{
          n_colors_on: 1,
          n_colors_off: 1,
          color_on0: '#FF934F',
          color_off1: '#9C9C9C'
        }],
        'Colorblind only': [{
          n_colors_on: 2,
          n_colors_off: 5,
          color_on0: '#A8AA00',
          color_on1: '#83BE28',
          color_off0: '#828200',
          color_off1: '#669A1B',
          color_off2: '#828200',
          color_off3: '#669A1B',
          color_off4: '#ED6311'
        }]
      }
    }
  });

  gui.remember(ishihara_input);

  gui.add(ishihara_input, 'load_image').name("Load image");
  gui.add(ishihara_input, 'circular').name("Circular");
  gui.add(ishihara_input, 'resize').name("Resize");
  gui.add(ishihara_input, 'edge_detection').name("Edge detection");
  gui.add(ishihara_input, 'invert_colors').name("Invert colors");
  gui.addColor(ishihara_input, 'background_color').name("Background color");
  gui.add(ishihara_input, 'shape_factory', ['Circle', 'Regular polygon', 'Cross', 'Star']).onChange(function(value) {
    hide_gui_element(gui, 'sides', value !== 'Regular polygon' && value !== 'Star');
    hide_gui_element(gui, 'pointiness', value !== 'Cross' && value !== 'Star');
  }).name("Shape");
  gui.add(ishihara_input, 'sides', 3, 12, 1).name("Sides");
  gui.add(ishihara_input, 'pointiness', 0.01, 0.99).name("Pointiness");
  gui.add(ishihara_input, 'n_colors_on', 1, 100, 1).name("Colors on").onChange(function() { 
    set_colors_folders();
  });
  gui.add(ishihara_input, 'n_colors_off', 1, 100, 1).name("Colors off").onChange(function() { 
    set_colors_folders();
  });

  var colors_on_folder = gui.addFolder('Colors on');
  var colors_off_folder = gui.addFolder('Colors off');
  for (var i = 0; i < 100; i++) { 
    colors_on_folder.addColor(ishihara_input, 'color_on' + i).name(i + 1);
    colors_off_folder.addColor(ishihara_input, 'color_off' + i).name(i + 1);
  }

  gui.add(ishihara_input, 'min_radius', 2, 50).name("Min radius").onChange(function() {
    ishihara_input.max_radius = Math.max(ishihara_input.min_radius, ishihara_input.max_radius);
    update_gui(gui);
  });
  gui.add(ishihara_input, 'max_radius', 2, 50).name("Max radius").onChange(function() {
    ishihara_input.min_radius = Math.min(ishihara_input.min_radius, ishihara_input.max_radius);
    update_gui(gui);
  });
  gui.add(ishihara_input, 'draw_ratio', 0, 1, 0.01).name("Draw ratio");
  gui.add(ishihara_input, 'stop_after', 1000, 100000, 1).name("Stop after");
  gui.add(ishihara_input, 'generate').name("Generate");
  gui.add(ishihara_input, 'clear').name("Clear");
  gui.add(ishihara_input, 'stop').name("Stop");
  gui.add(ishihara_input, 'download_png').name("Download PNG");
  gui.add(ishihara_input, 'download_svg').name("Download SVG");

  hide_gui_element(gui, 'sides', true);
  hide_gui_element(gui, 'pointiness', true);
  hide_gui_element(gui, 'stop', true);
  set_colors_folders();

  var painting = false;
  var generating = false;
  var x, y;

  var hand_draw = function(ctx, style, x1, y1, x2, y2) {
    if (x2 && y2) {
      ctx.beginPath();
      ctx.strokeStyle = style;
      ctx.moveTo(x1, y1);
      ctx.lineWidth = 15;
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.fillStyle = style;
    ctx.arc(x1, y1, 7.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  };

  var mousedown = function(mx, my, style) {
    painting = true;

    x = mx;
    y = my;

    if (generating) return;

    hand_draw(ctx, style, x, y);
    hand_draw(img_ctx, style, x, y);
  };
  canvas.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
      mousedown(e.offsetX * PIXEL_RATIO, e.offsetY * PIXEL_RATIO, e.ctrlKey ? '#FFF' : '#000');
    }
  });
  canvas.addEventListener('touchstart', function(e) {
    var rect = canvas.getBoundingClientRect();
    mousedown(
      (e.touches[0].clientX - rect.left) * PIXEL_RATIO,
      (e.touches[0].clientY - rect.top)  * PIXEL_RATIO,
      '#000'
    );
  });

  var mouseup = function(mx, my, style) {
    painting = false;

    x = mx;
    y = my;

    if (generating) return;

    hand_draw(ctx, style, x, y);
    hand_draw(img_ctx, style, x, y);
  };
  canvas.addEventListener('mouseup', function(e) {
    if (e.button === 0) {
      mouseup(e.offsetX * PIXEL_RATIO, e.offsetY * PIXEL_RATIO, e.ctrlKey ? '#FFF' : '#000');
    }
  });
  canvas.addEventListener('touchend', function(e) {
    var rect = canvas.getBoundingClientRect();
    mouseup(
      (e.touches[0].clientX - rect.left) * PIXEL_RATIO,
      (e.touches[0].clientY - rect.top)  * PIXEL_RATIO,
      '#000'
    );
  });

  var mousemove = function(curr_x, curr_y, style) {
    if (!painting || generating) return;

    hand_draw(ctx, style, curr_x, curr_y, x, y);
    hand_draw(img_ctx, style, curr_x, curr_y, x, y);

    x = curr_x;
    y = curr_y;
  };
  canvas.addEventListener('mousemove', function(e) {
    mousemove(e.offsetX * PIXEL_RATIO, e.offsetY * PIXEL_RATIO, e.ctrlKey ? '#FFF' : '#000');
  });
  canvas.addEventListener('touchmove', function(e) {
    var rect = canvas.getBoundingClientRect();
    mousemove(
      (e.touches[0].clientX - rect.left) * PIXEL_RATIO,
      (e.touches[0].clientY - rect.top)  * PIXEL_RATIO,
      '#000'
    );
  });

  image_upload.addEventListener('change', function(e) {
    ishihara_input.stop();

    var reader = new FileReader();
    reader.onload = function(event) {
      var img = new Image();
      img.src = event.target.result;
      img.onload = function() {
        if (ishihara_input.resize) {
          var ratio = Math.min(max_width / img.width, max_height / img.height);
          canvas.width  = img.width  * ratio;
          canvas.height = img.height * ratio;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        canvas.style.width  = canvas.width  / PIXEL_RATIO + 'px'
        canvas.style.height = canvas.height / PIXEL_RATIO + 'px'

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        img_canvas.width = canvas.width;
        img_canvas.height = canvas.height;
        img_ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  }, false);
});
