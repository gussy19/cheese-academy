// jsを記述する際はここに記載していく

// slick
$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  accesibility: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  });

// inview
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});


//--------------------------------------------
//チーズThree.js
//--------------------------------------------
window.addEventListener('DOMContentLoaded', init);

function init() {

  // サイズを指定
  const width = 1200;
  // const height = 400;
  const height = 600;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);

  // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera, document.getElementById("mainbg"));
  // const controls = new THREE.OrbitControls(camera, document.getElementById('myCanvas'));

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight);

  // チーズ extrudeで作成
  var extrudeSettings = {
    amount: 10,
    steps: 10,
    bevelSegments: 10,
    bevelSize: 10,
    bevelThickness: 10
  };
  var triangleShape = new THREE.Shape();
  triangleShape.moveTo(  0, -50 );
  triangleShape.lineTo(  -50, 50 );
  triangleShape.lineTo( 50, 50 );
  triangleShape.lineTo(  0, -50 );
  var extrude = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), new THREE.MeshPhongMaterial({ color: 0xffd61a}));
    // extrude.rotation.y = Math.PI / 2;
    // extrude.position.x = -300;
    // extrude.position.y = 150;
    extrude.position.z = 600;
    extrude.castShadow = extrude.receiveShadow = true;
    scene.add(extrude);

  // パーティクル
  // 形状データを作成
  const SIZE = 3000;
  // 配置する個数
  const LENGTH = 1000;
  // 頂点情報を格納する配列
  const vertices = [];
  for (let i = 0; i < LENGTH; i++) {
    const x = SIZE * (Math.random() - 0.5);
    const y = SIZE * (Math.random() - 0.5);
    const z = SIZE * (Math.random() - 0.5);

    vertices.push(x, y, z);
  }

  // 形状データを作成
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  // マテリアルを作成
  const material = new THREE.PointsMaterial({
    // 一つ一つのサイズ
    size: 10,
    // 色
    color: 0xffffff,
  });

  // 物体を作成
  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh); // シーンは任意の THREE.Scene インスタンス

  // 箱を作成
  // const geometry = new THREE.BoxGeometry(400, 400, 400);
  // const material = new THREE.MeshToonMaterial({color: 0x6699FF});
  // const box = new THREE.Mesh(geometry, material);
  // scene.add(box);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    extrude.rotation.x += 0.01;
    extrude.rotation.y += 0.01;
    renderer.render(scene, camera); // レンダリング
    requestAnimationFrame(tick);
  }
  
}

//-------------
//iTyped
//-------------


window.onload = function() {
  // iTyped.js
  ityped.init(document.getElementById("hooktitle"), {
    strings: ["セカイを変えるチーズ🧀を作ろう"], //表示させたい文字の設定 区切りはカンマ
    startDelay: 0, //アニメーション開始までの遅延、大きいほど遅れる
    typeSpeed: 120, //表示させるスピード、大きいほどゆっくり
    loop: false, //ループ
    backSpeed: 80, //戻るスピード
    backDelay: 150, //戻る時間指定
    showCursor: true, //カーソル表示
    cursorChar: "|", //カーソルとして表示するテキスト
    onFinished: function(){
      document.querySelector(".ityped-cursor").style.display = "none";
    }
  });

  ityped.init(document.getElementById("hooksubtitle"), {
    strings: ["チーズ職人養成学校「チーズアカデミーTOKYO」"], //表示させたい文字の設定 区切りはカンマ
    startDelay: 2000, //アニメーション開始までの遅延、大きいほど遅れる
    typeSpeed: 100, //表示させるスピード、大きいほどゆっくり
    loop: false, //ループ
    backSpeed: 80, //戻るスピード
    backDelay: 150, //戻る時間指定
    showCursor: true, //カーソル表示
    cursorChar: "|", //カーソルとして表示するテキスト
    onFinished: function(){
      document.querySelector(".ityped-cursor").style.display = "none";
    }
  });
}

//-------------
//フォント変化
//-------------

window.setInterval("layOutChange()", 12000);

function layOutChange(){
  setTimeout(function layOutReset(){
    window.document.body.classList.remove("basefont");
  }, 1000);
  setTimeout(function layOutFont1(){
    window.document.body.classList.add("font1");
  }, 1250);
  setTimeout(function layOutFont1Reset(){
    window.document.body.classList.remove("font1");
  }, 1500);
  setTimeout(function layOutFont2(){
    window.document.body.classList.add("font2");
  }, 1750);
  setTimeout(function layOutFont2Reset(){
    window.document.body.classList.remove("font2");
  }, 5000);
  // setTimeout(function layOutFont3(){
  //   window.document.body.classList.add("font3");
  // }, 3250);
  // setTimeout(function layOutFont3Reset(){
  //   window.document.body.classList.remove("font3");
  // }, 3500);
  // setTimeout(function layOutFont4(){
  //   window.document.body.classList.add("font4");
  // }, 3750);
  // setTimeout(function layOutFont4Reset(){
  //   window.document.body.classList.remove("font4");
  // }, 4000);
  setTimeout(function layOutBaseFont(){
    window.document.body.classList.add("basefont");
  }, 5250);
}
